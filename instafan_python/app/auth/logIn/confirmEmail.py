from app.auth.model.model import Auth
from app.auth.auth_handler import signJWT
from app.auth.setConfirmCode import setConfirmCode
from app.mail.mail import sendEmail
from app.sql.mysqlConnector import mysqlConnector


def getConfirmEmail(data: Auth.ConfirmEmail) -> Auth.ConfirmEmailModel:
    sql = f"SELECT `valid`, `fullName` FROM `users` WHERE `email`='{data.email}'"
    response = mysqlConnector(sql)

    if response.status == 500:
        return {
            "status": 500,
            "detail": "Bad request or email is not recognized in database!",
            "token": "",
        }

    details = response.detail[0]

    if not details[0]:
        return {"status": 500, "detail": "The account is not activated!", "token": ""}

    response = setConfirmCode(data.email, 600)

    if not response:
        return {"status": 500, "detail": "Database error!", "token": ""}

    emailSended = sendEmail(
        data.email,
        "Restart hasła na Instafan",
        details[1],
        response,
    )

    if emailSended.status == 500:
        return {"status": 500, "detail": "The email could not be sent!", "token": ""}

    token = signJWT(data.email, True)
    return {
        "status": 200,
        "detail": "The code has been sent.",
        "token": token.access_token,
    }
