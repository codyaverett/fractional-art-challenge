SELECT
  game.id
  , game.date AS "game date"
  , game.homeTeamId AS "home team"
  , game.awayTeamId AS "away team"
  , team.name AS "team name"
FROM game
  INNER JOIN team 
    ON game.homeTeamId = team.id
WHERE game.date IN ("01/02/2022", "01/04/2022")
