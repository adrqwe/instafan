from app.homePageData.model.model import HomePageData
from app.sql.mysqlConnector import mysqlConnector


def getHomePageData() -> HomePageData.HomePageDataModel:
    sql = 'SELECT posts.id, posts.count_of_likes, posts.image, (SELECT COUNT(comments.post_id) FROM comments WHERE posts.id=comments.post_id) AS "count_of_comments", posts.description FROM `posts` ORDER BY posts.id;'  # noqa: E501
    response = mysqlConnector(sql)

    if response.status == 500:
        return {
            "status": 500,
            "data": [],
        }

    data = []
    for x in response.detail:
        data.append(
            {
                "id": x[0],
                "count_of_likes": x[1],
                "image": x[2],
                "count_of_comments": x[3],
                "description": x[4],
            }
        )

    return {"status": 200, "data": data}
