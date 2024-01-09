import re
import time

from types import SimpleNamespace
from typing import Literal

from app.auth.model.model import Auth
from app.auth.decrypt import decrypt
from app.sql.mysqlConnector import mysqlConnector

EMAIL_REGEX = re.compile(
    r"([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+"
)
USERNAME_REGEX = re.compile(r"^[A-Za-z0-9]{4,}$")
PASSWORD_REGEX = re.compile(
    r"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*(){};:',.<>?+=`~|/_]).{8,}$"
)

RESPONSE_DETAILS: Auth.AccountChecker = {
    "status": 200,
    "detail": {"email": {}, "username": {}, "fullname": {}, "password": {}},
    "valid": True,
}


def checkEmailOrUsername(
    sqlData: str,
    toFind: str,
    inUse: str,
    incorrect: str,
    regex: re.Pattern[str],
    destiny: Literal["email"] | Literal["username"],
):
    global RESPONSE_DETAILS

    if sqlData == toFind.lower():
        message = inUse
        status = "bad"
        RESPONSE_DETAILS["valid"] = False

    elif not re.fullmatch(regex, toFind):
        message = incorrect
        status = "bad"
        RESPONSE_DETAILS["valid"] = False

    else:
        message = "Correct."
        status = "ok"

    RESPONSE_DETAILS["detail"][destiny]["message"] = message
    RESPONSE_DETAILS["detail"][destiny]["status"] = status


def checkFullName(name: str):
    if not name:
        message = "Invalid fullname!"
        status = "bad"
        RESPONSE_DETAILS["valid"] = False

    else:
        message = "Correct."
        status = "ok"

    RESPONSE_DETAILS["detail"]["fullname"]["message"] = message
    RESPONSE_DETAILS["detail"]["fullname"]["status"] = status


def checkPassword(password: str):
    decrypted = decrypt(password)
    decrypted = decrypted.decode("utf-8", "ignore")

    if not re.fullmatch(PASSWORD_REGEX, decrypted):
        message = "Incorrect password! The password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and a special character."
        status = "bad"
        RESPONSE_DETAILS["valid"] = False

    else:
        message = "Correct."
        status = "ok"

    RESPONSE_DETAILS["detail"]["password"]["message"] = message
    RESPONSE_DETAILS["detail"]["password"]["status"] = status


def accountChecker(data: Auth.SignUpCheckData) -> Auth.AccountChecker:
    global RESPONSE_DETAILS
    RESPONSE_DETAILS["valid"] = True

    sql = f'SELECT COUNT(`users`.id),`email`,`username`,`expires`, `valid` FROM `users` WHERE `email`="{data.email}" OR `username`="{data.username}";'
    responseSQL = mysqlConnector(sql)

    if responseSQL.status == 500:
        return {
            "status": 500,
            "detail": "Database error!",
            "valid": False,
        }

    if responseSQL.detail[0][4] == 0 and float(responseSQL.detail[0][3]) < time.time():
        deleteSql = f'DELETE FROM users WHERE `users`.`email` = "{data.email}" OR `users`.`username`="{data.username}"'
        deleteUserSql = mysqlConnector(deleteSql, commit=True)
        responseSQL = mysqlConnector(sql)

        if deleteUserSql.status == 500:
            return {
                "status": 500,
                "detail": "Database error!",
                "valid": False,
            }

    if responseSQL.status == 500:
        return {"status": 500, "detail": "Database error!", "valid": False}

    checkEmailOrUsername(
        responseSQL.detail[0][1],
        data.email,
        "This email address is already in use!",
        "Incorrect email!",
        EMAIL_REGEX,
        "email",
    )
    checkEmailOrUsername(
        responseSQL.detail[0][2],
        data.username,
        "This username is already in use!",
        "Incorrect username!",
        USERNAME_REGEX,
        "username",
    )
    checkFullName(data.fullName)
    checkPassword(data.password)

    return SimpleNamespace(**RESPONSE_DETAILS)
