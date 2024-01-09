from app.user.model.model import User
from app.auth.auth_handler import decodeJWT
from app.sql.mysqlConnector import mysqlConnector


def getLikeThePost(data: User.LikeThePost):
    decode_token = decodeJWT(data.token)
    if decode_token and decode_token.account_created:
        user_id = decode_token.user_id

        sql = f"SELECT `id`,`liked` FROM `postlikes` WHERE `user_id`= (SELECT `id` FROM `users` WHERE `email`='{user_id}') AND `post_id`='{data.postId}'"
        response = mysqlConnector(sql)

        if not isinstance(response.detail, str):
            if bool(response.detail[0][1]) != data.like:
                sql = f"UPDATE `postlikes` SET `liked` = '{1 if data.like else 0}' WHERE `postlikes`.`id` = '{response.detail[0][0]}';"
                response = mysqlConnector(sql, commit=True)

        else:
            sql = f"INSERT INTO `postlikes` (`id`, `user_id`, `post_id`, `liked`) VALUES (NULL, (SELECT `id` FROM `users` WHERE `email`='{user_id}'), '{data.postId}', '{1 if data.like else 0}')"
            response = mysqlConnector(sql, commit=True)

        if response.status == 500:
            return {"status": 500, "detail": "Database error!", "added": False}

        return {"status": 200, "detail": "Everything is correct!", "added": True}
    else:
        return {"status": 500, "detail": "Token is invalid!", "added": False}
