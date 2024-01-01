import axios, { CancelTokenSource } from "axios";

import config from "../../config";
import {
  TAddCommentRequest,
  TAddCommentSuccessPayload,
} from "../../models/posts/types";

class PostsService {
  private static getAddCommentUrl() {
    return `${config.api.default}add/comment`;
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

  public cancelProducts() {
    if (this.cancelTokenProducts) {
      this.cancelTokenProducts.cancel();
      this.cancelTokenProducts = undefined;
    }
  }
}
export default new PostsService();
