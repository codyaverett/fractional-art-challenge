#!/bin/bash

## Requires SQLITE to be installed
## Reference https://www.tutorialspoint.com/sqlite/index.htm

sqlite3 nba.db .dump > /dev/null 2>&1

# Creating tables and schemas

sqlite3 nba.db < ./sql/genesis.sql > /dev/null 2>&1

# Inserting dumbo data
sqlite3 nba.db < ./sql/dumbo.sql
