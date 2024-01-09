import time
import jwt

from types import SimpleNamespace
from decouple import config

from app.auth.model.model import Auth


JWT_SECRET = config("secret")
JWT_ALGORITHM = config("algorithm")


def token_response(token: str) -> Auth.TokenResponse:
    return SimpleNamespace(**{"access_token": token})


def signJWT(
    user_id: str, account_created: bool, expiresTime=600, savaLogInDetails=False
):
    payload = {
        "user_id": user_id,
        "account_created": account_created,
        "expires": time.time() + expiresTime,
        "savaLogInDetails": savaLogInDetails,
    }

    token = jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

    return token_response(token)


def decodeJWT(token: str) -> Auth.DecodeJWT | None:
    try:
        decoded_token = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return (
            SimpleNamespace(**decoded_token)
            if decoded_token["expires"] >= time.time()
            else None
        )

    except jwt.exceptions.InvalidAlgorithmError:
        return None

    except jwt.exceptions.DecodeError:
        return None
