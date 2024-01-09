import time

from typing import Literal

from app.auth.signUp.singUp import randomCode
from app.sql.mysqlConnector import mysqlConnector


def setConfirmCode(user: str, expires: int) -> str | Literal[False]:
    code = randomCode()
    expiresDate = time.time() + expires

    sql = f"UPDATE `users` SET `activeCode`= '{code}',`expires`= '{expiresDate}' WHERE `email`='{user}'"
    response = mysqlConnector(sql, commit=True)

    if response.status == 200:
        return code
    return False
