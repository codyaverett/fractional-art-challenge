-- Creates all SQL Objects

PRAGMA foreign_keys = ON;

-- A "player" table where 1 row represents the identity of a single NBA player
DROP TABLE player;
CREATE TABLE player(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
    , firstName TEXT
    , lastName TEXT
    , shirtNumber SMALLINT
);

-- A "team" table where 1 row represents a registered NBA team
DROP TABLE team;
CREATE TABLE team(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
    , name TEXT
);

-- A "team_roster" table where 1 row represents a players contract to a team and active state
DROP TABLE team_roster;
CREATE TABLE team_roster(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
    , playerId INTEGER
    , teamId INTEGER
    , activeDate TEXT
    , expireDate TEXT
    , FOREIGN KEY(playerId) REFERENCES player(id)
    , FOREIGN KEY(teamId) REFERENCES team(id)
);

-- A "game" table where 1 row represents a single basketball match between two teams
DROP TABLE game;
CREATE TABLE game(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
    , homeTeamId INTEGER
    , awayTeamId INTEGER
    , homeTeamScore INTEGER
    , awayTeamScore INTEGER
    , date TEXT
    -- , startTime TEXT
    -- , endTime TEXT
    , FOREIGN KEY(HomeTeamId) REFERENCES team(id)
    , FOREIGN KEY(AwayTeamId) REFERENCES team(id)
);

-- I Had issues using SCHEMA with sqlite, 
-- but I think a schema would help with organizing 
-- these special metrics tables
-- CREATE SCHEMA metric;

-- A "metric_[game_score](nbastuffer.com/analytics101/game-score/)" table
DROP TABLE metric_game_score;
CREATE TABLE metric_game_score(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
    , value REAL
    , playerId INTEGER
    , gameId INTEGER
    , FOREIGN KEY(playerId) REFERENCES player(id)
    , FOREIGN KEY(gameId) REFERENCES game(id)
);

-- A "metric.[win_score](https://www.nbastuffer.com/analytics101/win-score/)" table
DROP TABLE metric_win_score;
CREATE TABLE metric_win_score(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
    , value REAL
    , playerId INTEGER
    , gameId INTEGER
    , FOREIGN KEY(playerId) REFERENCES player(id)
    , FOREIGN KEY(gameId) REFERENCES game(id)
);
