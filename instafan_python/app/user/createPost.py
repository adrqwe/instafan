import time
import io

from fastapi import UploadFile
from decouple import config

from app.user.model.model import User
from app.auth.auth_handler import decodeJWT
from app.auth.signUp.singUp import randomCode
from app.sql.mysqlConnector import mysqlConnector
from app.user.sendFileToCloud import sendFileToCloud

UPLOAD_DIR = config("UPLOAD_DIR")
STORAGE_URL = config("STORAGE_URL")


async def getCreatePost(
    form: UploadFile, token: str, description: str
) -> User.CreatePostModel:
    if form.content_type not in ["image/jpeg", "image/png", "image/gif"]:
        return {"status": 500, "detail": "File is not a photo", "added": False}

    if form.size > 3000000:
        return {"status": 500, "detail": "File is too large", "added": False}

    decode_token = decodeJWT(token)
    if not decode_token or not decode_token.account_created:
        return {"status": 500, "detail": "Token is invalid!", "added": False}

    fileName = f"{time.time()}{randomCode()}.{form.filename.split('.')[-1]}"

    try:
        image = await form.read()
        savePath = STORAGE_URL + UPLOAD_DIR + "/" + fileName

        with io.BytesIO() as file:
            file.write(image)
            file.seek(0)
            gcs = sendFileToCloud(file, fileName)

    except OSError:
        return {"status": 500, "detail": "Upload error! Try again.", "added": False}

    if gcs.status == 500:
        return {"status": 500, "detail": "Upload error! Try again.", "added": False}

    sql = f"INSERT INTO `posts` (`id`, `user_id`, `count_of_likes`, `image`, `description`) VALUES (NULL, (SELECT `id` FROM `users` WHERE `email`='{decode_token.user_id}'), '0', '{savePath}', '{description}')"
    response = mysqlConnector(sql, commit=True)

    if response.status == 500:
        return {"status": 500, "detail": "Database error!", "added": False}

    return {"status": 200, "detail": "Everything is correct!", "added": True}
