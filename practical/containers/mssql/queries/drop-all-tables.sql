USE application
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[api].[access_log]') AND type in (N'U'))
DROP TABLE [api].[access_log]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[api].[access_key]') AND type in (N'U'))
DROP TABLE [api].[access_key]
GO
