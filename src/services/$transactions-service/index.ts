import axios, { CancelTokenSource } from "axios";
import config from "./../../config";
class TransactionService {
  private static getTransactionsUrl(partner_id: number) {
    return `${config.api.default}/${partner_id}`;
  }
  private static getSingleTransactionUrl(uuid: string) {
    return `${config.api.default}/api/transactions/single/${uuid}`;
  }
  private cancelTokenTransaction?: CancelTokenSource;

  public getTransactions(partner_id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.cancelTokenTransaction = axios.CancelToken.source();
      axios
        .get(TransactionService.getTransactionsUrl(partner_id), {
          cancelToken: this.cancelTokenTransaction.token,
          params: {},
        })
        .then((data) => resolve(data.data.data))
        .catch((error) => reject(error));
    });
  }

  public cancelTransactions() {
    if (this.cancelTokenTransaction) {
      this.cancelTokenTransaction.cancel();
      this.cancelTokenTransaction = undefined;
    }
  }
}
export default new TransactionService();
