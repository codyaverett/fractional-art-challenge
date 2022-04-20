SELECT
  playerId
  , player.firstName || ' ' || player.lastName AS name
  , shirtNumber
  , game_score
  , win_score
FROM (
  SELECT 
    mgs.playerId
    , mws.playerId
    , mgs.value AS game_score
    , mws.value AS win_score 
  FROM metric_game_score mgs
    JOIN metric_win_score mws
      ON mgs.playerId = mws.playerId 
        AND mgs.gameId = mws.gameId
) 
JOIN player ON id = playerId
WHERE name IN ('Cody Averett')
-- Since names could potentially collide we might need more information
-- such as team affiliation or shirtNumber
-- Would be good to index on names or to have the playerId 
-- for quicker queries over larger datasets.
