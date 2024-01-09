import time

from app.auth.model.model import Auth
from app.auth.auth_handler import decodeJWT, signJWT
from app.sql.mysqlConnector import mysqlConnector


def getSingUpCommit(data: Auth.CommitCode) -> Auth.CommitSingUpModel:
    decode_token = decodeJWT(data.token)

    if not decode_token or decode_token.account_created:
        return {
            "status": 500,
            "token": "",
            "detail": "Token is invalid!",
            "valid": False,
        }

    user_id = decode_token.user_id
    sql = f"SELECT `activeCode`,`expires` FROM `users` WHERE `email`='{user_id}'"
    response = mysqlConnector(sql)

    if response.status == 500:
        return {
            "status": 500,
            "token": "",
            "detail": "Database error!",
            "valid": False,
        }

    detail = response.detail[0]
    if float(detail[1]) > time.time() and detail[0] == data.code.upper():
        sql = f"UPDATE `users` SET `activeCode`= null,`expires`= null, `valid`=1 WHERE `email`='{user_id}'"
        response = mysqlConnector(sql, commit=True)

        if response.status == 500:
            return {
                "status": 500,
                "token": "",
                "detail": "Database error!",
                "valid": False,
            }

        token = signJWT(user_id, True)
        return {
            "status": 200,
            "token": token.access_token,
            "detail": "Account created.",
            "valid": True,
        }

    else:
        return {
            "status": 500,
            "token": "",
            "detail": "Code is invalid or extinct!",
            "valid": False,
        }
