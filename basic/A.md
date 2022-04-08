## Prompt

A) Design an SQL database to store data on NBA players, teams, and games (column and table contents are all up to you). Consider the following as you design the database:

The most frequent query for this database will be for game results by date and team name
The second most frequent query will be players statistics by player name

## Cody's Answer

My first thought is that I need to understand the type of information that is usually tracked for player stats because I don't want to guess.

I did a quick search for specific metrics and found a plausible list of [commonly tracked metrics](https://www.nbastuffer.com/analytics-101/player-evaluation-metrics/) I can build with.

Now, I am considering how to logically split the data up into logical related tables along with the data.

### Table planning

- A "player" table where 1 row represents the identity of a single NBA player
  - id: auto incrementing PK
  - firstName: varChar
  - lastName: varChar
  - shirtNumber: smallInt

- A "team" table where 1 row represents a registered NBA team
  - id: auto incrementing PK
  - name: varChar(25) [longest nba name may be 22 chars with spaces](https://sports.answers.com/Q/Who_has_the_longest_nba_team_name)
  - desc: varChar(255)

- A "team_roster" table where 1 row represents a players contract to a team and active/expiration state
  - id: auto incrementing PK
  - playerId: FK to player table
  - teamId: FK to team table
  - activeDate: Date
  - expireDate: Date

- A "game" table where 1 row represents a single basketball match between two teams
  - id: auto incrementing PK
  - teamOneId: FK to team table
  - teamTwoId: FK to team table
  - teamOneScore: smallInt
  - teamTwoScore: smallInt
  - date: Date
  - startTime: Date
  - endTime: Date
  - ... other columns may relate, such as location
  - ... games might be further broken out into single player shots

I am taking an extra minute to consider how stats might be stored.

- A "stats" table could be made where 1 row represents all stats of a single existing player, but it could be 
  - id: auto incrementing PK
  - playerId: FK to player table
  - metric1: smallInt
  - metric2: decimal
  - ...

I don't think I want to maintain a table that has so many moving pieces and at the same time lacks many details we could use to relate temporal data to player metrics. 

I am assuming new metrics may be added or removed in the future, so I think metrics will each have their own tables now.

- A "metric.[game_score](nbastuffer.com/analytics101/game-score/)" table
  - id: PK
  - value: smallInt | decimal | any needed data type
  - playerId: FK to player table
  - gameId: FK to game table

- A "metric.[win_score](https://www.nbastuffer.com/analytics101/win-score/)" table
  - id: PK
  - value: smallInt | decimal | any needed data type
  - playerId: FK to player table
  - gameId: FK to game table

- ... so on and so forth

### Queries

> The most frequent query for this database will be for game results by date and team name

```SQL
SELECT
  DISTINCT game.id
  , game.date AS "game date"
  , game.homeTeamId AS "home team"
  , game.awayTeamId AS "away team"
  , team.name AS "team name"
FROM game
  INNER JOIN team 
    ON game.homeTeamId = team.id
WHERE game.date IN ("01/02/2022", "01/04/2022")

-- verbose name for the sake of verbosity in demo
```

output
```csv
id,game date,home team,away team,team name
1,01/02/2022,1,2,Boston Celtics
3,01/04/2022,1,4,Boston Celtics
```

> The second most frequent query will be players statistics by player name



### Implementation

I created a working [SQLITE](https://www.tutorialspoint.com/sqlite/sqlite_create_database.htm) database for this challenge.

I decided to use SQLITE3 because it was already installed on my system.  I hadn't used it much before now, so I saw this as a good opportunity to learn more about it while exploring it's limitations. I also believe that this solution will help me in the future practical challenge you all have provided me.

I created a shell script, [create_sqlite3_db.sh](create_sqlite3_db.sh), to orchestrate the generation of an `nba.db` sqlite database and populate it with data.

I also created individual sql scripts to aid in setup and querying data.

#### Challenge Files

1. [create_sqlite3_db.sh](create_sqlite3_db.sh) - running this script will create a sqlite db file called "nba.db" and populate the data using the "genesis.sql" and "dumbo.sql" files.
1. [dumbo.sql](sql/dumbo.sql) - used to define and inject dummy data into the sqlite database
1. [genesis.sql](sql/genesis.sql) - used to populate `nba.db` with the planned tables and columns
1. [get_game_results_by_team.sql](sql/get_game_results_by_team.sql) - The "most frequent" query for this database
1. [get_player_statistics_by_name.sql](sql/get_player_statistics_by_name.sql) - The "second most frequent query" for this database

### Retrospective

- This was not a challenging task, but I did learn many things related to sqlite and simple db generation while working through it
- I believe I designed small normalized tables that would lend well to any future changes of the schema.
- I should have used the more naive metrics data table for the demo as it would have simplified the second query emmensely :)
- I considered attributes like a players contract active and expiration date that wasn't used in the demo, but to me it would make sense for an actual application. Players change teams all the time!
- I probably spent too much time nerding-out on the generation/setup of the mock db (which wasn't even a requirement for this task).  That said, I am glad I did have an opportunity to explore which was an enjoyable process.
