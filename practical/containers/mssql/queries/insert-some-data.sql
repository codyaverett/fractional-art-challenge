
INSERT INTO application.api.access_key
VALUES
('open', GETDATE(), GETDATE(), 0)  -- used for any random requestor
, ('123456789', GETDATE(), GETDATE(), 0)
, ('987654321', GETDATE(), GETDATE(), 1)


INSERT INTO application.api.access_log
VALUES
('123456789', GETDATE(), '/hi')
, ('987654321', GETDATE(), '/hi')
, ('123456789', convert(datetime2,'2022-04-20 03:37:16.2866667'), '/get/something/important')
, ('123456789', convert(datetime2,'2022-04-20 03:38:16.2866667'), '/get/something/important')
, ('123456789', convert(datetime2,'2022-04-20 03:39:16.2866667'), '/get/something/important')
, ('123456789', convert(datetime2,'2022-04-20 03:40:16.2866667'), '/get/something/important')
, ('123456789', convert(datetime2,'2022-04-20 04:37:16.2866667'), '/get/something/important')
, ('123456789', convert(datetime2,'2022-04-20 04:38:16.2866667'), '/get/something/important')
, ('987654321', convert(datetime2,'2022-04-20 04:37:16.2866667'), '/get/something/important')
, ('987654321', convert(datetime2,'2022-04-20 04:38:16.2866667'), '/get/something/important')
, ('123456789', convert(datetime2,'2022-04-20 05:37:16.2866667'), '/get/something/important')
, ('123456789', convert(datetime2,'2022-04-20 05:39:16.2866667'), '/get/something/important')
