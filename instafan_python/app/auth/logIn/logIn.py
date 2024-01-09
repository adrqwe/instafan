from app.auth.model.model import Auth
from app.auth.auth_handler import signJWT
from app.auth.passwordChecker import passwordChecker
from app.sql.mysqlConnector import mysqlConnector


def getLogIn(data: Auth.LogIn) -> Auth.LogInModel:
    sql = f"SELECT `password`, `valid`, `email` FROM `users` WHERE `email`='{data.email}' or `username` = '{data.email}'"
    response = mysqlConnector(sql)

    if response.status == 500:
        return {
            "status": 500,
            "token": "",
            "detail": "Login error!",
        }

    detail = response.detail[0]
    if not detail[1]:
        return {
            "status": 500,
            "token": "",
            "detail": "The account is not active!",
        }
    if not passwordChecker(data.password, detail[0]):
        return {
            "status": 500,
            "token": "",
            "detail": "Password is incorrect!",
        }

    token = signJWT(detail[2], True, 3600, data.savaLogInDetails)

    return {
        "status": 200,
        "token": token.access_token,
        "detail": "All good!",
    }
