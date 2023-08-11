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
from app.model import (
    PostSchema,
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


posts = []

users = []


def check_user(data: UserLoginSchema):
    for user in users:
        print(user.password)
        if user.email == data.email and user.password == data.password:
            return True
    return False


@app.post("/signUp/check")
def singUpCheck(data: SignUpSchema):
    return accountChecker(data)


@app.post("/signUp")
def signUp(data: SignUpSchemaWithBirthday):
    validAccount = accountChecker(data)

    if validAccount["valid"] and dateTest(data.birthday):
        salt = bytes(config("SALT"), encoding="utf-8")
        passwd = bytes(data.password, encoding="utf-8")
        hashed = bcrypt.hashpw(passwd, salt)

        sql = f"INSERT INTO `users` (`id`, `email`, `username`, `fullName`, `password`, `activeCode`, `expires`, `birthday`) VALUES (NULL, '{data.email}', '{data.username}', '{data.fullName}', '{hashed.decode('utf-8')}', '{''.join(random.choices(string.ascii_uppercase + string.digits, k = 6))}', '{time.time() + 600}', '{data.birthday}')"  # noqa: E501

        response = mysqlConnector(sql, commit=True)

        if response["status"] == 200:
            token = signJWT(data.email)
            return {
                "status": 200,
                "detail": "Confirm account",
                "token": token["access_token"],
            }
        else:
            return response
    else:
        return {"status": 500, "detail": "Account cannot be created", "token": ""}


@app.post("/user/signup", tags=["user"])
def create_user(user: UserSchema = Body(...)):
    users.append(user)  # replace with db call, making sure to hash the password first
    print(user.email)
    return signJWT(user.email)


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

        sql = 'SELECT DISTINCT posts.id, posts.count_of_likes, posts.image, (SELECT COUNT(comments.post_id) FROM comments WHERE posts.id=comments.post_id) AS "count_of_comments" FROM `posts`,comments WHERE posts.id=comments.post_id ORDER BY posts.id;'

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
