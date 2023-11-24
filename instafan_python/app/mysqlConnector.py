import mysql.connector


def mysqlConnector(sql, commit=False):
    mydb = connectToDataBase()
    if mydb:
        if commit:
            myresult = mysqlQuestionCommit(sql, mydb)
        else:
            myresult = mysqlQuestion(sql, mydb)

        if myresult:
            return {"status": 200, "detail": myresult}
        else:
            return {"status": 500, "detail": "Bad request. Try again later!"}
    else:
        return {"status": 500, "detail": "Connect error. Try again later!"}


def connectToDataBase():
    try:
        mydb = mysql.connector.connect(
            host="127.0.0.1", user="root", password="", port=3306, database="instafan"
        )
        return mydb
    except:
        return None


def mysqlQuestion(sql: str, mydb):
    try:
        mycursor = mydb.cursor()
        mycursor.execute(sql)
        myresult = mycursor.fetchall()
        return myresult
    except:
        return None
    finally:
        mydb.close()


def mysqlQuestionCommit(sql: str, mydb):
    try:
        mycursor = mydb.cursor()
        mycursor.execute(sql)
        mydb.commit()
        return "Success"
    except:
        return None
    finally:
        mydb.close()
