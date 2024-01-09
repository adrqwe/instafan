import re
import time

from app.auth.model.model import Auth
from app.auth.auth_handler import decodeJWT
from app.auth.decrypt import decrypt
from app.auth.signUp.singUp import hashPassword
from app.sql.mysqlConnector import mysqlConnector
from app.auth.signUp.accountChecker import PASSWORD_REGEX


def getPasswordChange(data: Auth.ChangePassword) -> Auth.ChangePasswordModel:
    decode_token = decodeJWT(data.token)

    if not decode_token or not decode_token.account_created:
        return {"status": 500, "detail": "Token is invalid!"}

    user_id = decode_token.user_id
    sql = f"SELECT `expires`, `activeCode` FROM `users` WHERE `email`='{user_id}'"
    response = mysqlConnector(sql)

    if response.status == 500:
        return {"status": 500, "detail": "Database error!"}

    detail = response.detail[0]

    if not detail[1] == data.code.upper() or float(detail[0]) < time.time():
        return {"status": 500, "detail": "Code is invalid or extinct!"}

    decrypted = decrypt(data.password)
    decrypted = decrypted.decode("utf-8", "ignore")

    if not re.fullmatch(PASSWORD_REGEX, decrypted):
        return {
            "status": 500,
            "detail": "Incorrect password! The password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and a special character.",  # noqa: E501
        }

    hashedPassword = hashPassword(data.password)

    sql = f"UPDATE `users` SET `activeCode`= null,`expires`= null, password = '{hashedPassword}' WHERE `email`='{user_id}'"
    response = mysqlConnector(sql, commit=True)

    return response
