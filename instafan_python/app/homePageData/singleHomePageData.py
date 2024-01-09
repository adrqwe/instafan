from app.homePageData.model.model import HomePageData
from app.auth.auth_handler import decodeJWT
from app.sql.mysqlConnector import mysqlConnector


def getSingleHomePageDate(
    data: HomePageData.GetSingleHomePageData,
) -> HomePageData.SingleHomePageDataModel:
    decode_token = decodeJWT(data.token)
    if decode_token and decode_token.account_created:
        user_id = decode_token.user_id
        sql = f"SELECT `posts`.id, posts.image, posts.description, posts.user_id, users.username, (SELECT `liked` FROM `postlikes` WHERE `user_id`=(SELECT `id` FROM `users` WHERE `email`='{user_id}') AND `post_id`='{data.id}') AS 'like'  FROM `posts`, users WHERE posts.user_id=users.id AND posts.id='{data.id}';"
    else:
        sql = f"SELECT `posts`.id, posts.image, posts.description, posts.user_id, users.username FROM `posts`, users WHERE posts.user_id=users.id AND posts.id={data.id};"

    response = mysqlConnector(sql)
    if response.status == 500:
        return {
            "status": 500,
            "data": "dupa",
        }

    x = response.detail[0]
    singlePost = {
        "postId": x[0],
        "image": x[1],
        "description": x[2],
        "authorId": x[3],
        "authorName": x[4],
        "liked": 1 if len(x) == 6 and x[5] else 0,
    }

    sql = f"SELECT users.username, comments.id, comments.comment, users.id FROM `comments`, users WHERE users.id=comments.user_id AND comments.post_id = {data.id}"
    response = mysqlConnector(sql)

    if response.status == 500:
        return {
            "status": 500,
            "data": [],
        }

    array = []
    for x in response.detail:
        array.append(
            {
                "commentedBy": x[0],
                "commentId": x[1],
                "comment": x[2],
                "userId": x[3],
            }
        )

    singlePost["comments"] = array
    return {
        "status": 200,
        "data": singlePost,
    }
