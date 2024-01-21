from types import SimpleNamespace
from google.cloud import storage
from decouple import config

from app.user.model.model import User

UPLOAD_DIR = config("UPLOAD_DIR")
CREDENTIALS_FILE = config("CREDENTIALS_FILE")


def sendFileToCloud(file, destination_blob_name) -> User.SendFileToCloudModel:
    try:
        storage_client = storage.Client.from_service_account_json(CREDENTIALS_FILE)
        bucket = storage_client.bucket(UPLOAD_DIR)

        blob = bucket.blob(destination_blob_name)
        blob.upload_from_file(file)
        return SimpleNamespace(**{"status": 200})

    except Exception:
        return SimpleNamespace(**{"status": 500})
