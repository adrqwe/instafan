import axios, { CancelTokenSource } from "axios";

import config from "../../config";
import {
  ICreatePostSuccessPayload,
  TAddCommentRequest,
  TAddCommentSuccessPayload,
  TCreatePostRequest,
  TLikeThePostRequest,
} from "../../models/posts/types";

class PostsService {
  private static getAddCommentUrl() {
    return `${config.api.default}add/comment`;
  }
  private static getLikeThePostUrl() {
    return `${config.api.default}like/the/post`;
  }
  private static getCreatePostUrl() {
    return `${config.api.default}create/post`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getAddCommentResponse(
    comment: TAddCommentRequest
  ): Promise<TAddCommentSuccessPayload> {
    return new Promise<TAddCommentSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          PostsService.getAddCommentUrl(),
          {
            postId: comment.postId,
            comment: comment.comment,
            token: comment.token,
          },
          {
            cancelToken: this.cancelTokenProducts.token,
          }
        )
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public getLikeThePostResponse(
    likeThePostData: TLikeThePostRequest
  ): Promise<TAddCommentSuccessPayload> {
    return new Promise<TAddCommentSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          PostsService.getLikeThePostUrl(),
          {
            postId: likeThePostData.postId,
            token: likeThePostData.token,
            like: likeThePostData.like,
          },
          {
            cancelToken: this.cancelTokenProducts.token,
          }
        )
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public getCreatePostResponse(
    createPost: TCreatePostRequest
  ): Promise<ICreatePostSuccessPayload> {
    return new Promise<ICreatePostSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .post(
          PostsService.getCreatePostUrl(),
          {
            form: createPost.form.get("image"),
            token: createPost.form.get("token"),
            description: `$${createPost.form.get("description")}`,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            cancelToken: this.cancelTokenProducts.token,
          }
        )
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public cancelProducts() {
    if (this.cancelTokenProducts) {
      this.cancelTokenProducts.cancel();
      this.cancelTokenProducts = undefined;
    }
  }
}
export default new PostsService();
