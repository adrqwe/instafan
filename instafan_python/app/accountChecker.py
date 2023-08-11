import re
from app.decrypt import decrypt

from app.model import SignUpSchema
from app.mysqlConnector import mysqlConnector

emailRegex = re.compile(
    r"([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+"
)
usernameRegex = re.compile(r"^[A-Za-z0-9]{4,}$")
passwordRegex = re.compile(
    r"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*(){};:',.<>?+=`~|/_]).{8,}$"
)


def accountChecker(data: SignUpSchema):
    sql = f'SELECT COUNT(`users`.id),`email`,`username` FROM `users` WHERE `email`="{data.email}" OR `username`="{data.username}";'
    responseSQL = mysqlConnector(sql)

    reponseDetails = {"status": 200, "detail": {}, "valid": True}
    if responseSQL["status"] == 200:
        if responseSQL["detail"][0][1] == data.email:
            reponseDetails["detail"]["email"] = {
                "message": "This email address is already in use!",
                "status": "bad",
            }
            reponseDetails["valid"] = False
        elif not re.fullmatch(emailRegex, data.email):
            reponseDetails["detail"]["email"] = {
                "message": "Incorret email!",
                "status": "bad",
            }
            reponseDetails["valid"] = False
        else:
            reponseDetails["detail"]["email"] = {
                "message": "Correct.",
                "status": "ok",
            }

        if responseSQL["detail"][0][2] == data.username:
            reponseDetails["detail"]["username"] = {
                "message": "This username is already in use!",
                "status": "bad",
            }
            reponseDetails["valid"] = False
        elif not re.fullmatch(usernameRegex, data.username):
            reponseDetails["detail"]["uername"] = {
                "message": "Incorret username!",
                "status": "bad",
            }
            reponseDetails["valid"] = False
        else:
            reponseDetails["detail"]["uername"] = {
                "message": "Correct.",
                "status": "ok",
            }

        if not data.fullName:
            reponseDetails["detail"]["fullname"] = {
                "message": "Invalid fullname!",
                "status": "bad",
            }
            reponseDetails["valid"] = False
        else:
            reponseDetails["detail"]["fullname"] = {
                "message": "Correct.",
                "status": "ok",
            }

        decrypted = decrypt(data.password)
        decrypted = decrypted.decode("utf-8", "ignore")

        if not re.fullmatch(passwordRegex, decrypted):
            reponseDetails["detail"]["password"] = {
                "message": "Incorret password! The password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and a special character.",
                "status": "bad",
            }
            reponseDetails["valid"] = False
        else:
            reponseDetails["detail"]["password"] = {
                "message": "Correct.",
                "status": "ok",
            }

    else:
        reponseDetails = {"status": 500, "detail": "Database error!", "valid": False}

    return reponseDetails
