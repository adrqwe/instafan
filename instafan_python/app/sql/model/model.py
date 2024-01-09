import mysql.connector

from pydantic import BaseModel


class MysqlConnector:
    MyDatabaseModel = (
        mysql.connector.pooling.PooledMySQLConnection
        | mysql.connector.pooling.MySQLConnection
    )

    class MysqlConnectorModel(BaseModel):
        status: int
        detail: str | list
