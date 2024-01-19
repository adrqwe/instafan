import time

from app.auth.model.model import Auth
from app.auth.setConfirmCode import setConfirmCode
from app.mail.mail import sendEmail
from app.auth.auth_handler import decodeJWT
from app.sql.mysqlConnector import mysqlConnector


def getResendCode(
    data: Auth.ResendCode, title="Kod potwierdzający adres e-mail", accountCreated=False
) -> Auth.ResendCodeModel:
    decode_token = decodeJWT(data.token)

    if decode_token and decode_token.account_created == accountCreated:
        user_id = decode_token.user_id

        sql = f"SELECT `expires`, `fullName` FROM `users` WHERE `email`='{user_id}'"
        response = mysqlConnector(sql)

        if response.status == 500:
            return {
                "status": 500,
                "detail": "Database error!",
            }

        detail = response.detail[0]
        if float(detail[0]) - 540 < time.time():
            response = setConfirmCode(user_id, 600)

            if not response:
                return {
                    "status": 500,
                    "detail": "Database error!",
                }

            if response:
                emailSended = sendEmail(
                    user_id,
                    title,
                    detail[1],
                    response,
                )
                if emailSended.status == 500:
                    return {"status": 500, "detail": "Account cannot be created!"}
                return {
                    "status": 200,
                    "detail": "The code has been sent.",
                }

        else:
            return {
                "status": 500,
                "detail": "Please wait a few moments before sending again.",
            }

    else:
        return {"status": 500, "detail": "Token is invalid!"}
