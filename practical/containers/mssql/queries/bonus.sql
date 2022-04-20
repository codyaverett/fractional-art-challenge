-- Basic access log query
SELECT TOP (1000) [id]
      ,[api_key_id]
      ,[created_ts]
      ,[event]
  FROM [application].[api].[access_log]

-- Below are general utility queries created as I explored the data
-- Built up ideas and tried to work towards solving the bonus sql questions

-- Number of requests by event
SELECT 
    event
    , COUNT(*) AS number_of_requests
FROM application.api.access_log
GROUP BY event
ORDER by number_of_requests DESC

-- Number of requests by hour

WITH date_parts AS (
    SELECT
        api_key_id
        , event
        , DATEPART(DAY, created_ts) AS day
        , DATEPART(HOUR, created_ts) AS hour
        , DATEPART(MINUTE, created_ts) AS minute
    FROM application.api.access_log
)
SELECT 
    COUNT(hour) as numbera
FROM date_parts

-- AVG number of requests per specific timeframe
-- Since I have the date_parts common table defined, can get exact counts
WITH date_parts AS (
    SELECT
        api_key_id
        , event
        , DATEPART(DAY, created_ts) AS day
        , DATEPART(HOUR, created_ts) AS hour
        , DATEPART(MINUTE, created_ts) AS minute
    FROM application.api.access_log
)
SELECT 
    hour
    ,COUNT(hour) AS request_count_by_hour    
FROM date_parts
GROUP BY hour


-- Sum of all request in specific time frame
WITH date_parts AS (
    SELECT
        api_key_id
        , event
        , DATEPART(DAY, created_ts) AS day
        , DATEPART(HOUR, created_ts) AS hour
        , DATEPART(MINUTE, created_ts) AS minute
    FROM application.api.access_log
)
SELECT 
    COUNT(hour) AS Between_hour_3_and_6
FROM date_parts
WHERE hour BETWEEN 3 AND 6

-- Running total of request counts by hour -- limited to a specific api_key or not... whatever
WITH date_parts AS (
    SELECT
        id
        , api_key_id
        , event
        , DATEPART(DAY, created_ts) AS day
        , DATEPART(HOUR, created_ts) AS hour
        , DATEPART(MINUTE, created_ts) AS minute
    FROM application.api.access_log
)
SELECT
    SUM(COUNT(hour)) OVER (ORDER BY hour) AS total_requests
    , hour AS by_this_hour 
FROM date_parts 
--WHERE api_key_id = '123456789'
GROUP BY hour

-- 3 hour time period for specific api key, when the usage is the highest (Example: 3:00pm to 6:00pm)
-- maybe use a lag/window
WITH date_parts AS (
    SELECT
        api_key_id
        , event
        , DATEPART(DAY, created_ts) AS day
        , DATEPART(HOUR, created_ts) AS hour
        , DATEPART(MINUTE, created_ts) AS minute
    FROM application.api.access_log
)
SELECT 
    COUNT(hour) AS Between_hour_3_and_6
FROM date_parts
WHERE hour BETWEEN 3 AND 6


-- Most used API key (with num of req)
-- Number of requests by api_key
SELECT TOP 1
    api_key_id AS most_used_api_key
    , COUNT(*) AS number_of_requests
FROM application.api.access_log
GROUP BY api_key_id
ORDER BY number_of_requests DESC