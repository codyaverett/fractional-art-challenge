#!/bin/bash

CONTAINER_NAME=mssql

docker rm -f ${CONTAINER_NAME} &

wait 

echo "destroyed ${CONTAINER_NAME}"
