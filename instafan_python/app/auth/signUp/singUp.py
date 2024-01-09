import datetime
import bcrypt
import string
import random
import time

from decouple import config

from app.sql.model.model import MysqlConnector
from app.auth.model.model import Auth
from app.auth.signUp.accountChecker import accountChecker
from app.auth.auth_handler import signJWT
from app.mail.mail import sendEmail
from app.sql.mysqlConnector import mysqlConnector

SALT = config("SALT")


def dateTest(date):
    try:
        date_format = "%d-%m-%Y"
        today = datetime.date.today()
        year = today.year
        month = today.month
        day = today.day
        min_date = f"{day}-{month}-{year-6}"

        birthday = datetime.datetime.strptime(date, date_format)
        min_date = datetime.datetime.strptime(min_date, date_format)
        return birthday <= min_date

    except ValueError:
        return None


def hashPassword(password: str):
    salt = bytes(SALT, encoding="utf-8")
    passwd = bytes(password, encoding="utf-8")
    hashed = bcrypt.hashpw(passwd, salt)

    return hashed.decode("utf-8")


def randomCode():
    return "".join(random.choices(string.ascii_uppercase + string.digits, k=6))


def getSignUp(
    data: Auth.SignUpCheckDataWithBirthday,
) -> Auth.SingUpModel | MysqlConnector.MysqlConnectorModel:
    validAccount = accountChecker(data)

    if not validAccount.valid or not dateTest(data.birthday):
        return {"status": 500, "detail": "Account cannot be created!", "token": ""}

    hashedPassword = hashPassword(data.password)
    code = randomCode()

    sql = f"INSERT INTO `users` (`id`, `email`, `username`, `fullName`, `password`, `activeCode`, `expires`, `birthday`, `valid`) VALUES (NULL, '{data.email}', '{data.username}', '{data.fullName}', '{hashedPassword}', '{code}', '{time.time() + 600}', '{data.birthday}', 0)"  # noqa: E501
    response = mysqlConnector(sql, commit=True)

    if response.status == 500:
        return response

    emailSended = sendEmail(
        data.email, "Kod potwierdzający adres e-mail", data.fullName, code
    )
    if emailSended.status == 500:
        return {"status": 500, "detail": "Account cannot be created!", "token": ""}

    token = signJWT(data.email, False)
    return {
        "status": 200,
        "detail": "Confirm account",
        "token": token.access_token,
    }
