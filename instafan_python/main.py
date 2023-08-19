import mysql.connector
import uvicorn
import bcrypt
import time
import string
import random
import datetime

from decouple import config
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI, Body, Depends

from app.accountChecker import accountChecker
from app.mail import sendEmail
from app.model import (
    CommitCode,
    PostSchema,
    ResendCode,
    SignUpSchemaWithBirthday,
    UserSchema,
    UserLoginSchema,
    SignUpSchema,
)
from app.auth.auth_bearer import JWTBearer
from app.auth.auth_handler import decodeJWT, signJWT
from app.decrypt import decrypt
from app.mysqlConnector import mysqlConnector

app = FastAPI()


origins = ["http://localhost", "http://localhost:8080", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##########################################


def dateTest(date):
    date_format = "%d-%m-%Y"
    today = datetime.date.today()
    year = today.year
    month = today.month
    day = today.day
    min_date = f"{day}-{month}-{year-6}"

    try:
        birthday = datetime.datetime.strptime(date, date_format)
        min_date = datetime.datetime.strptime(min_date, date_format)
        return birthday <= min_date
    except:
        return None


def setConfirmCode(user: str, expires: int):
    code = "".join(random.choices(string.ascii_uppercase + string.digits, k=6))
    expiresDate = time.time() + expires

    sql = f"UPDATE `users` SET `activeCode`= '{code}',`expires`= '{expiresDate}' WHERE `email`='{user}'"
    response = mysqlConnector(sql, commit=True)

    if response["status"] == 200:
        return code
    return False


posts = []

users = []


def check_user(data: UserLoginSchema):
    for user in users:
        print(user.password)
        if user.email == data.email and user.password == data.password:
            return True
    return False


@app.post("/signUp/check", tags=["user"])
def singUpCheck(data: SignUpSchema):
    return accountChecker(data)


@app.post("/signUp", tags=["user"])
def signUp(data: SignUpSchemaWithBirthday):
    validAccount = accountChecker(data)

    if validAccount["valid"] and dateTest(data.birthday):
        salt = bytes(config("SALT"), encoding="utf-8")
        passwd = bytes(data.password, encoding="utf-8")
        hashed = bcrypt.hashpw(passwd, salt)

        code = "".join(random.choices(string.ascii_uppercase + string.digits, k=6))

        sql = f"INSERT INTO `users` (`id`, `email`, `username`, `fullName`, `password`, `activeCode`, `expires`, `birthday`, `valid`) VALUES (NULL, '{data.email}', '{data.username}', '{data.fullName}', '{hashed.decode('utf-8')}', '{code}', '{time.time() + 600}', '{data.birthday}', 0)"  # noqa: E501

        response = mysqlConnector(sql, commit=True)

        emailSended = sendEmail(
            data.email, "Kod potwierdzający adres e-mail", data.fullName, code
        )
        if emailSended["status"] == 500:
            return {"status": 500, "detail": "Account cannot be created!", "token": ""}

        if response["status"] == 200:
            token = signJWT(data.email, False)
            return {
                "status": 200,
                "detail": "Confirm account",
                "token": token["access_token"],
            }
        else:
            return response
    else:
        return {"status": 500, "detail": "Account cannot be created!", "token": ""}


@app.post("/signUp/commit", tags=["user"])
def singUpCommit(data: CommitCode):
    decode_token = decodeJWT(data.token)
    if decode_token and not decode_token["account_created"]:
        user_id = decode_token["user_id"]
        sql = f"SELECT `activeCode`,`expires` FROM `users` WHERE `email`='{user_id}'"
        response = mysqlConnector(sql)

        if response["status"] == 200:
            detail = response["detail"][0]
            if float(detail[1]) > time.time() and detail[0] == data.code.upper():
                sql = f"UPDATE `users` SET `activeCode`= null,`expires`= null, `valid`=1 WHERE `email`='{user_id}'"  # noqa: E501
                response = mysqlConnector(sql, commit=True)
                if response["status"] == 200:
                    token = signJWT(user_id, False)
                    return {
                        "status": 200,
                        "token": token["access_token"],
                        "detail": "Account created.",
                        "valid": True,
                    }
                else:
                    return {
                        "status": 500,
                        "token": "",
                        "detail": "Database error!",
                        "valid": False,
                    }
            else:
                return {
                    "status": 500,
                    "token": "",
                    "detail": "Code is invalid or extinct!",
                    "valid": False,
                }
        else:
            return {
                "status": 500,
                "token": "",
                "detail": "Database error!",
                "valid": False,
            }
    else:
        return {
            "status": 500,
            "token": "",
            "detail": "Token is invalid!",
            "valid": False,
        }


@app.post("/signUp/resend", tags=["user"])
def singUpResendCode(data: ResendCode):
    decode_token = decodeJWT(data.token)
    if decode_token and not decode_token["account_created"]:
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
                        "Kod potwierdzający adres e-mail",
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


@app.post("/user/login", tags=["user"])
def user_login(user: UserLoginSchema = Body(...)):
    if check_user(user):
        return signJWT(user.email)
    return {"error": "Wrong login details!"}


@app.post("/posts", dependencies=[Depends(JWTBearer())], tags=["posts"])
def add_post(post: PostSchema):
    post.id = len(posts) + 1
    posts.append(post.dict())
    return {"data": "post added."}


########################################


@app.get("/")
def home():
    try:
        mydb = mysql.connector.connect(
            host="127.0.0.1", user="root", password="", port=3306, database="instafan"
        )

        sql = 'SELECT DISTINCT posts.id, posts.count_of_likes, posts.image, (SELECT COUNT(comments.post_id) FROM comments WHERE posts.id=comments.post_id) AS "count_of_comments" FROM `posts`,comments WHERE posts.id=comments.post_id ORDER BY posts.id;'  # noqa: E501

        mycursor = mydb.cursor()
        mycursor.execute(sql)
        myresult = mycursor.fetchall()
        data = []

        for x in myresult:
            data.append(
                {
                    "id": x[0],
                    "count_of_likes": x[1],
                    "image": x[2],
                    "count_of_comments": x[3],
                }
            )
        return {"data": data, "status": 200}
    except mysql.connector.Error as err:
        return {"data": [], "status": 500}
    finally:
        pass
        # mydb.close()


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
