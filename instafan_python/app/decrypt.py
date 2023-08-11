import base64
import os

from decouple import config
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad


key = config("KEY")
iv = config("IV").encode("utf-8")


def decrypt(enc):
    enc = base64.b64decode(enc)
    cipher = AES.new(key.encode("utf-8"), AES.MODE_CBC, iv)
    return unpad(cipher.decrypt(enc), 16)
