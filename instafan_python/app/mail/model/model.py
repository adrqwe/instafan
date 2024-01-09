from pydantic import BaseModel


class Mail:
    class SendMail(BaseModel):
        status: int
