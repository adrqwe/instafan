from pydantic import BaseModel


class HomePageData:
    class HomePageDataModel(BaseModel):
        status: int
        detail: list

    class GetSingleHomePageData(BaseModel):
        id: int
        token: str

    class SingleHomePageDataModel(BaseModel):
        postId: int
        image: str
        description: str
        authorId: int
        authorName: str
        liked: int
        comments: list
