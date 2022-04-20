USE master
GO

CREATE DATABASE application
GO

USE application
GO
CREATE SCHEMA api
GO

CREATE TABLE api.access_key(
    id VARCHAR(50) PRIMARY KEY NOT NULL
    , created_ts DATETIME2(7) NOT NULL
    , last_modified_ts DATETIME2(7) NOT NULL
    , locked BIT
)
GO

CREATE TABLE api.access_log(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL
    , api_key_id VARCHAR(50) REFERENCES api.access_key(id) NOT NULL
    , created_ts DATETIME2(7) NOT NULL
    , event VARCHAR(50)
)
GO