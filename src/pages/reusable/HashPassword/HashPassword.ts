import CryptoJS from "crypto-js";

import config from "../../../config";

const hashPassword = (password: string) => {
  const key = CryptoJS.enc.Utf8.parse(config.secret as string);
  const iv = CryptoJS.enc.Utf8.parse(config.ivKey as string);
  const encrypted: any = CryptoJS.AES.encrypt(password, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
  });

  return encrypted.toString() as string;
};

export default hashPassword;
