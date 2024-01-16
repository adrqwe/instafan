from pydantic import BaseModel, constr


class User:
    class AddComment(BaseModel):
        postId: int
        comment: constr(strip_whitespace=True, min_length=1)
        token: str

    class AddCommentModel(BaseModel):
        status: int
        detail: str
        added: bool

    class LikeThePost(BaseModel):
        postId: int
        token: str
        like: bool

    class LikeThePostModel(BaseModel):
        status: int
        detail: str
        added: bool

    class CreatePostModel(BaseModel):
        status: int
        detail: str
        added: bool
