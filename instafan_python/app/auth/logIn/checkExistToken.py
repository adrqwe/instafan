from app.auth.model.model import Auth
from app.auth.auth_handler import decodeJWT


def getCheckExistToken(data: Auth.CheckExistToken) -> Auth.CheckExistTokenModel:
    decode_token = decodeJWT(data.token)
    if not decode_token:
        return {"status": 500, "detail": "Token is invalid.", "valid": False}

    return {"status": 200, "detail": None, "valid": True}
