import bcrypt


def passwordChecker(password, passwordFromMysql):
    passwd = bytes(password, encoding="utf-8")
    hashedPassword = bytes(passwordFromMysql, encoding="utf-8")

    return bcrypt.checkpw(passwd, hashedPassword)
