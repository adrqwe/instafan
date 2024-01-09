import mysql.connector

from types import SimpleNamespace
from decouple import config

from app.sql.model.model import MysqlConnector

HOST = config("MYSQL_HOST")
USER = config("MYSQL_LOGIN")
PASSWORD = config("MYSQL_PASSWORD")
PORT = config("MYSQL_PORT")
DATABASE = config("MYSQL_DATABASE")


def connectToDataBase():
    try:
        mydb = mysql.connector.connect(
            host=HOST, user=USER, password=PASSWORD, port=PORT, database=DATABASE
        )
        return mydb

    except mysql.connector.Error:
        return None


def mysqlConnector(sql: str, commit=False) -> MysqlConnector.MysqlConnectorModel:
    mydb = connectToDataBase()
    if not mydb:
        return SimpleNamespace(
            **{"status": 500, "detail": "Connect error. Try again later!"}
        )

    if commit:
        myresult = mysqlQuestionCommit(sql, mydb)
    else:
        myresult = mysqlQuestion(sql, mydb)

    if not myresult:
        return SimpleNamespace(
            **{"status": 500, "detail": "Bad request. Try again later!"}
        )

    return SimpleNamespace(**{"status": 200, "detail": myresult})


def mysqlQuestion(
    sql: str,
    mydb: MysqlConnector.MyDatabaseModel,
):
    try:
        mycursor = mydb.cursor()
        mycursor.execute(sql)
        myresult = mycursor.fetchall()
        return myresult

    except mysql.connector.Error:
        return None

    finally:
        mydb.close()


def mysqlQuestionCommit(
    sql: str,
    mydb: MysqlConnector.MyDatabaseModel,
):
    try:
        mycursor = mydb.cursor()
        mycursor.execute(sql)
        mydb.commit()
        return "Success"

    except mysql.connector.Error:
        return None

    finally:
        mydb.close()
