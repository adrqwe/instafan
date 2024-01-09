from pydantic import BaseModel, EmailStr


class AccountCheckerDetailObject(BaseModel):
    message: str
    status: str


class AccountCheckerDetail(BaseModel):
    email: AccountCheckerDetailObject
    username: AccountCheckerDetailObject
    fullname: AccountCheckerDetailObject
    password: AccountCheckerDetailObject


class Auth:
    class TokenResponse(BaseModel):
        access_token: str

    class DecodeJWT(BaseModel):
        user_id: str
        account_created: bool
        expires: float
        savaLogInDetails: bool

    class AccountChecker(BaseModel):
        status: int
        detail: AccountCheckerDetail | str
        valid: bool

    class SignUpCheckData(BaseModel):
        email: EmailStr
        fullName: str
        username: str
        password: str

    class SignUpCheckDataWithBirthday(BaseModel):
        email: EmailStr
        fullName: str
        username: str
        password: str
        birthday: str

    class SingUpModel(BaseModel):
        status: int
        detail: str
        token: str

    class CommitCode(BaseModel):
        code: str
        token: str

    class CommitSingUpModel(BaseModel):
        status: int
        token: str
        detail: str
        valid: bool

    class ResendCodeModel(BaseModel):
        status: int
        detail: str

    class ResendCode(BaseModel):
        token: str

    class LogIn(BaseModel):
        email: str
        password: str
        savaLogInDetails: bool

    class LogInModel(BaseModel):
        status: int
        token: str
        detail: str

    class CheckExistToken(BaseModel):
        token: str | None

    class CheckExistTokenModel(BaseModel):
        status: int
        detail: None | str
        valid: bool

    class ConfirmEmail(BaseModel):
        email: EmailStr

    class ConfirmEmailModel(BaseModel):
        status: int
        detail: str
        token: str

    class ChangePassword(BaseModel):
        code: str
        token: str
        password: str

    class ChangePasswordModel(BaseModel):
        status: int
        detail: str
