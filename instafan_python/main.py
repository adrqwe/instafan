import uvicorn

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from app.homePageData.model.model import HomePageData
from app.auth.model.model import Auth
from app.user.model.model import User
from app.auth.logIn.checkExistToken import getCheckExistToken
from app.auth.logIn.confirmEmail import getConfirmEmail
from app.auth.logIn.passwordChange import getPasswordChange
from app.auth.signUp.accountChecker import accountChecker
from app.auth.signUp.commitSingUp import getSingUpCommit
from app.auth.logIn.logIn import getLogIn
from app.auth.signUp.singUp import getSignUp
from app.homePageData.homePageData import getHomePageData
from app.homePageData.singleHomePageData import getSingleHomePageDate
from app.auth.resendCode import getResendCode
from app.user.addComment import getAddComment
from app.user.likeThePost import getLikeThePost

app = FastAPI()

origins = ["http://localhost", "http://localhost:8080", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["homePageData"])
def homePageDataApp():
    return getHomePageData()


@app.post("/single/homepage/data", tags=["homePageData"])
def singleHomePageDate(data: HomePageData.GetSingleHomePageData):
    return getSingleHomePageDate(data)


@app.post("/signUp/check", tags=["signUp"])
def singUpCheck(data: Auth.SignUpCheckData):
    return accountChecker(data)


@app.post("/signUp", tags=["signUp"])
def signUp(data: Auth.SignUpCheckDataWithBirthday):
    return getSignUp(data)


@app.post("/signUp/commit", tags=["signUp"])
def singUpCommit(data: Auth.CommitCode):
    return getSingUpCommit(data)


@app.post("/signUp/resend", tags=["signUp"])
def singUpResendCode(data: Auth.ResendCode):
    return getResendCode(data)


@app.post("/logIn", tags=["logIn"])
def logIn(data: Auth.LogIn):
    return getLogIn(data)


@app.post("/check/exist/token", tags=["logIn"])
def checkExistToken(data: Auth.CheckExistToken):
    return getCheckExistToken(data)


@app.post("/confirm/email", tags=["logIn"])
def confirmEmail(data: Auth.ConfirmEmail):
    return getConfirmEmail(data)


@app.post("/password/reset/resend/code", tags=["logIn"])
def passwordResetResendCode(data: Auth.ResendCode):
    return getResendCode(data, "Restart hasła na Instafan", True)


@app.post("/password/change", tags=["logIn"])
def passwordChange(data: Auth.ChangePassword):
    return getPasswordChange(data)


@app.post("/add/comment", tags=["user"])
def addComment(data: User.AddComment):
    return getAddComment(data)


@app.post("/like/the/post", tags=["user"])
def likeThePost(data: User.LikeThePost):
    return getLikeThePost(data)


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
