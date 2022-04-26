#!/bin/bash

CONTAINER_NAME=mssql

docker run \
  -e "ACCEPT_EULA=Y" \
  -e "MSSQL_SA_PASSWORD=Passw0rd" \
  -e "MSSQL_PID=Developer" \
  -e "MSSQL_USER=SA" \
  -p 1433:1433 \
  -d \
  --name=${CONTAINER_NAME} \
mcr.microsoft.com/azure-sql-edge &

wait 

echo "started ${CONTAINER_NAME}"
