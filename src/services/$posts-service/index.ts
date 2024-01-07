import axios, { CancelTokenSource } from "axios";

import config from "../../config";
import {
  TAddCommentRequest,
  TAddCommentSuccessPayload,
  TLikeThePostRequest,
} from "../../models/posts/types";

class PostsService {
  private static getAddCommentUrl() {
    return `${config.api.default}add/comment`;
  }
  private static getLikeThePostUrl() {
    return `${config.api.default}like/the/post`;
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

  public cancelProducts() {
    if (this.cancelTokenProducts) {
      this.cancelTokenProducts.cancel();
      this.cancelTokenProducts = undefined;
    }
  }
}
export default new PostsService();
