from app.user.model.model import User
from app.auth.auth_handler import decodeJWT
from app.sql.mysqlConnector import mysqlConnector


def getAddComment(data: User.AddComment) -> User.AddCommentModel:
    decode_token = decodeJWT(data.token)

    if decode_token and decode_token.account_created:
        user_id = decode_token.user_id

        sql = f"INSERT INTO `comments` (`id`, `user_id`, `post_id`, `comment`) VALUES (NULL, (SELECT `id` FROM `users` WHERE `email`='{user_id}'), '{data.postId}', '{data.comment}')"
        response = mysqlConnector(sql, commit=True)

        if response.status == 500:
            return {"status": 500, "detail": "Database error!", "added": False}

        return {"status": 200, "detail": "Comment Added!", "added": True}

    else:
        return {"status": 500, "detail": "Token is invalid!", "added": False}
