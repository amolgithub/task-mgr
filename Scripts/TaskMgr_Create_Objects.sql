CREATE DATABASE [TaskMgr] 
 ON  PRIMARY 
( NAME = N'TaskMgr', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\TaskMgr.mdf' , SIZE = 5120KB , FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'TaskMgr_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\TaskMgr_log.ldf' , SIZE = 2048KB , FILEGROWTH = 10%)
GO
USE [TaskMgr]
GO
IF NOT EXISTS (SELECT name FROM sys.filegroups WHERE is_default=1 AND name = N'PRIMARY') ALTER DATABASE [TaskMgr] MODIFY FILEGROUP [PRIMARY] DEFAULT
GO

CREATE TABLE Task
(
	TaskId INT IDENTITY(1,1),
	TaskName VARCHAR(1000) NOT NULL,
	StartDate DATE NOT NULL,
	EndDate	DATE NOT NULL,
	Priority INT NOT NULL,
	Status CHAR(1) NOT NULL,
	ParentId INT
)
GO

ALTER TABLE Task ADD CONSTRAINT pk_task_id PRIMARY KEY (TaskId)
GO

ALTER TABLE Task ADD CONSTRAINT fk_parent_id FOREIGN KEY (ParentId) REFERENCES Task(TaskId)
GO

ALTER TABLE Task ADD CONSTRAINT chk_status CHECK (status IN('I','C')) /* I - In Progress, C - Completed*/
GO

