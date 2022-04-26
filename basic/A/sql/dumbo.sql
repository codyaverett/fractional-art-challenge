-- SQLITE doesn't like multiline value inserts 

INSERT INTO player (id, firstName, lastName, shirtNumber) VALUES (NULL, 'Cody', 'Averett', 42);
INSERT INTO player (id, firstName, lastName, shirtNumber) VALUES (NULL, 'Andy', '8052', 1);
INSERT INTO player (id, firstName, lastName, shirtNumber) VALUES (NULL, 'Luke', 'Skywalker', 404);
INSERT INTO player (id, firstName, lastName, shirtNumber) VALUES (NULL, 'Satoshi', 'Nakamoto', 42);

INSERT INTO team (id, name) VALUES (NULL, 'Boston Celtics');
INSERT INTO team (id, name) VALUES (NULL, 'Oklahoma City Thunder');
INSERT INTO team (id, name) VALUES (NULL, 'New Orleans Pelicans');
INSERT INTO team (id, name) VALUES (NULL, 'Houston Rockets');

INSERT INTO team_roster (id, playerId, teamId, activeDate, expireDate) VALUES (NULL, 1, 1, '2020-06-02', '3030-11-12');
INSERT INTO team_roster (id, playerId, teamId, activeDate, expireDate) VALUES (NULL, 2, 2, '2020-06-02', '2025-08-27');
INSERT INTO team_roster (id, playerId, teamId, activeDate, expireDate) VALUES (NULL, 3, 3, '2020-06-02', '2030-01-30');
-- Dumb scope creep where players could be active on differet teams at different times
-- INSERT INTO team_roster (id, playerId, teamId, activeDate, expireDate) VALUES (NULL, 3, 4, '2020-06-02', '3030-03-12');
INSERT INTO team_roster (id, playerId, teamId, activeDate, expireDate) VALUES (NULL, 4, 4, '2009-06-02', '2011-04-21');

INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 1, 2, 48, 44, '2022-01-01');
INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 1, 3, 42, 49, '2022-01-02');
INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 1, 4, 54, 34, '2022-01-03');
INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 2, 1, 24, 31, '2022-01-04');
INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 2, 3, 44, 67, '2022-01-05');
INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 2, 4, 47, 47, '2022-01-06');
INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 3, 1, 32, 39, '2022-01-07');
INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 3, 2, 21, 35, '2022-01-08');
INSERT INTO game (id, homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date) VALUES (NULL, 3, 4, 48, 32, '2022-01-09');

INSERT INTO metric_game_score (id, value, playerId, gameId) VALUES (NULL, 87.1, 1, 1);
INSERT INTO metric_game_score (id, value, playerId, gameId) VALUES (NULL, 95.4, 1, 2);
INSERT INTO metric_game_score (id, value, playerId, gameId) VALUES (NULL, 89.7, 1, 3);
INSERT INTO metric_game_score (id, value, playerId, gameId) VALUES (NULL, 83.1, 4, 3);
INSERT INTO metric_game_score (id, value, playerId, gameId) VALUES (NULL, 92.4, 4, 5);
INSERT INTO metric_game_score (id, value, playerId, gameId) VALUES (NULL, 88.7, 4, 9);

INSERT INTO metric_win_score (id, value, playerId, gameId) VALUES (NULL, 77.1, 1, 1);
INSERT INTO metric_win_score (id, value, playerId, gameId) VALUES (NULL, 55.4, 1, 2);
INSERT INTO metric_win_score (id, value, playerId, gameId) VALUES (NULL, 49.7, 1, 3);
INSERT INTO metric_win_score (id, value, playerId, gameId) VALUES (NULL, 33.1, 4, 3);
INSERT INTO metric_win_score (id, value, playerId, gameId) VALUES (NULL, 72.4, 4, 5);
INSERT INTO metric_win_score (id, value, playerId, gameId) VALUES (NULL, 48.7, 4, 9);
