import time
import string
import random

from app.mail import sendEmail
from app.model import (
    ResendCode,
)
from app.auth.auth_handler import decodeJWT
from app.mysqlConnector import mysqlConnector


def setConfirmCode(user: str, expires: int):
    code = "".join(random.choices(string.ascii_uppercase + string.digits, k=6))
    expiresDate = time.time() + expires

    sql = f"UPDATE `users` SET `activeCode`= '{code}',`expires`= '{expiresDate}' WHERE `email`='{user}'"
    response = mysqlConnector(sql, commit=True)

    if response["status"] == 200:
        return code
    return False


def resendCode(
    data: ResendCode, title="Kod potwierdzający adres e-mail", accountCreated=False
):
    decode_token = decodeJWT(data.token)
    if decode_token and decode_token["account_created"] == accountCreated:
        user_id = decode_token["user_id"]
        sql = f"SELECT `expires`, `fullName` FROM `users` WHERE `email`='{user_id}'"
        response = mysqlConnector(sql)
        if response["status"] == 200:
            detail = response["detail"][0]
            if float(detail[0]) - 480 < time.time():
                response = setConfirmCode(user_id, 600)
                if response:
                    emailSended = sendEmail(
                        user_id,
                        title,
                        detail[1],
                        response,
                    )
                    if emailSended["status"] == 500:
                        return {"status": 500, "detail": "Account cannot be created!"}
                    return {
                        "status": 200,
                        "detail": "The code has been sent.",
                    }
                else:
                    return {
                        "status": 500,
                        "detail": "Database error!",
                    }
            else:
                return {
                    "status": 500,
                    "detail": "Please wait a few moments before sending again.",
                }
        else:
            return {
                "status": 500,
                "detail": "Database error!",
            }
    else:
        return {"status": 500, "detail": "Token is invalid!"}
