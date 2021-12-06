USE [master]
GO

/****** Object:  Database [DaariiouPhotographyDB]    Script Date: 06.12.2021 10:48:06 ******/
DROP DATABASE [DaariiouPhotographyDB]
GO

/****** Object:  Database [DaariiouPhotographyDB]    Script Date: 06.12.2021 10:48:06 ******/
CREATE DATABASE [DaariiouPhotographyDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Daariiou-Photography', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\Daariiou-Photography.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Daariiou-Photography_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\Daariiou-Photography_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DaariiouPhotographyDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [DaariiouPhotographyDB] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET ARITHABORT OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET  DISABLE_BROKER 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET  MULTI_USER 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [DaariiouPhotographyDB] SET DB_CHAINING OFF 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [DaariiouPhotographyDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [DaariiouPhotographyDB] SET QUERY_STORE = OFF
GO

ALTER DATABASE [DaariiouPhotographyDB] SET  READ_WRITE 
GO


USE [DaariiouPhotographyDB]
GO

/****** Object:  Table [dbo].[User]    Script Date: 06.12.2021 10:47:54 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[User]') AND type in (N'U'))
DROP TABLE [dbo].[User]
GO

/****** Object:  Table [dbo].[User]    Script Date: 06.12.2021 10:47:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[User](
	[UId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](120) NOT NULL,
	[Name] [varchar](120) NOT NULL,
	[Lastname] [varchar](120) NOT NULL,
	[Password] [varchar](255) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [U_Username] UNIQUE NONCLUSTERED 
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


USE [DaariiouPhotographyDB]
GO

/****** Object:  Table [dbo].[KindOfShooting]    Script Date: 06.12.2021 10:47:26 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[KindOfShooting]') AND type in (N'U'))
DROP TABLE [dbo].[KindOfShooting]
GO

/****** Object:  Table [dbo].[KindOfShooting]    Script Date: 06.12.2021 10:47:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[KindOfShooting](
	[KoSId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](90) NOT NULL,
 CONSTRAINT [PK_KindOfShooting] PRIMARY KEY CLUSTERED 
(
	[KoSId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


USE [DaariiouPhotographyDB]
GO

ALTER TABLE [dbo].[Shooting] DROP CONSTRAINT [FK_Shooting_User]
GO

ALTER TABLE [dbo].[Shooting] DROP CONSTRAINT [FK_Shooting_KindOfShooting]
GO

/****** Object:  Table [dbo].[Shooting]    Script Date: 06.12.2021 10:47:46 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Shooting]') AND type in (N'U'))
DROP TABLE [dbo].[Shooting]
GO

/****** Object:  Table [dbo].[Shooting]    Script Date: 06.12.2021 10:47:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Shooting](
	[SId] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NOT NULL,
	[Remarks] [varchar](500) NULL,
	[Rejected] [varchar](500) NULL,
	[KoSId] [int] NOT NULL,
	[UId] [int] NOT NULL,
 CONSTRAINT [PK_Shooting] PRIMARY KEY CLUSTERED 
(
	[SId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Shooting]  WITH CHECK ADD  CONSTRAINT [FK_Shooting_KindOfShooting] FOREIGN KEY([KoSId])
REFERENCES [dbo].[KindOfShooting] ([KoSId])
GO

ALTER TABLE [dbo].[Shooting] CHECK CONSTRAINT [FK_Shooting_KindOfShooting]
GO

ALTER TABLE [dbo].[Shooting]  WITH CHECK ADD  CONSTRAINT [FK_Shooting_User] FOREIGN KEY([UId])
REFERENCES [dbo].[User] ([UId])
GO

ALTER TABLE [dbo].[Shooting] CHECK CONSTRAINT [FK_Shooting_User]
GO


USE [DaariiouPhotographyDB]
GO

ALTER TABLE [dbo].[Picture] DROP CONSTRAINT [FK_Picture_User]
GO

ALTER TABLE [dbo].[Picture] DROP CONSTRAINT [FK_Picture_Picture]
GO

/****** Object:  Table [dbo].[Picture]    Script Date: 06.12.2021 10:47:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Picture]') AND type in (N'U'))
DROP TABLE [dbo].[Picture]
GO

/****** Object:  Table [dbo].[Picture]    Script Date: 06.12.2021 10:47:39 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Picture](
	[PId] [int] IDENTITY(1,1) NOT NULL,
	[Img] [image] NOT NULL,
	[IsPublic] [char](1) NULL,
	[Date] [datetime] NOT NULL,
	[UId] [int] NULL,
 CONSTRAINT [PK_Picture] PRIMARY KEY CLUSTERED 
(
	[PId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Picture]  WITH CHECK ADD  CONSTRAINT [FK_Picture_Picture] FOREIGN KEY([UId])
REFERENCES [dbo].[User] ([UId])
GO

ALTER TABLE [dbo].[Picture] CHECK CONSTRAINT [FK_Picture_Picture]
GO

ALTER TABLE [dbo].[Picture]  WITH CHECK ADD  CONSTRAINT [FK_Picture_User] FOREIGN KEY([UId])
REFERENCES [dbo].[User] ([UId])
GO

ALTER TABLE [dbo].[Picture] CHECK CONSTRAINT [FK_Picture_User]
GO


