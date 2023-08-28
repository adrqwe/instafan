from pydantic import BaseModel, Field, EmailStr


class PostSchema(BaseModel):
    id: int = Field(default=None)
    title: str = Field(...)
    content: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "title": "Securing FastAPI applications with JWT.",
                "content": "In this tutorial, you'll learn how to secure your application by enabling authentication using JWT. We'll be using PyJWT to sign, encode and decode JWT tokens....",
            }
        }


class UserSchema(BaseModel):
    fullname: str = Field(...)
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "fullname": "Joe Doe",
                "email": "joe@xyz.com",
                "password": "any",
            }
        }


class UserLoginSchema(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {"example": {"email": "joe@xyz.com", "password": "any"}}


class SignUpSchema(BaseModel):
    email: EmailStr
    fullName: str
    username: str
    password: str


class SignUpSchemaWithBirthday(BaseModel):
    email: EmailStr
    fullName: str
    username: str
    password: str
    birthday: str


class CommitCode(BaseModel):
    code: str
    token: str


class ResendCode(BaseModel):
    token: str


class LogIn(BaseModel):
    email: str
    password: str
    savaLogInDetails: bool


class ConfirmEmail(BaseModel):
    email: EmailStr


class ChangePassword(BaseModel):
    code: str
    token: str
    password: str
