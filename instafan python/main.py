import mysql.connector
import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.model import UserSchema

app = FastAPI()

origins = ["http://localhost", "http://localhost:8080", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
        mydb.close()


if __name__ == "__main__":
    uvicorn.run("main:app")
