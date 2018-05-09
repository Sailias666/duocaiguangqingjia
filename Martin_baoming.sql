CREATE DATABASE  IF NOT EXISTS `Martin` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `Martin`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: Martin
-- ------------------------------------------------------
-- Server version	5.6.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `baoming`
--

DROP TABLE IF EXISTS `baoming`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `baoming` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` char(50) NOT NULL,
  `activity_num` int(11) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baoming`
--

LOCK TABLES `baoming` WRITE;
/*!40000 ALTER TABLE `baoming` DISABLE KEYS */;
INSERT INTO `baoming` VALUES (27,'o1gwf5WhBxAqMwzwyMMx1gdASKZI',3,'2018-03-22 16:54:16'),(28,'o1gwf5Vwtjg5B0mAWRJlPdaHUkSE',1,'2018-03-26 22:14:48'),(35,'o1gwf5STi0Rdr0WpKiyFOvBz-oy4',2,'2018-04-17 22:48:16'),(36,'o1gwf5STi0Rdr0WpKiyFOvBz-oy4',3,'2018-04-17 22:48:29'),(38,'o1gwf5Wr_Kqn0YPutvhGFgeo6Tkc',1,'2018-04-18 20:14:23'),(39,'o1gwf5e6hIUc0fCk_i1pGNLEImcs',3,'2018-04-18 21:29:13'),(44,'o1gwf5STi0Rdr0WpKiyFOvBz-oy4',1,'2018-04-22 15:21:11'),(45,'o1gwf5WhBxAqMwzwyMMx1gdASKZI',1,'2018-04-23 08:38:06'),(46,'o1gwf5bmU7RYdtlgxoILLuCAcw7g',1,'2018-04-27 15:14:49'),(47,'ojinM4kqxwKG-hu6LSti2hcOfBcI',1,'2018-04-28 17:47:02'),(48,'ojinM4kqxwKG-hu6LSti2hcOfBcI',2,'2018-04-28 20:28:48'),(49,'ojinM4iRzYtx3qIOXi1Rnk3gLGdI',2,'2018-04-30 23:47:24'),(50,'ojinM4iRzYtx3qIOXi1Rnk3gLGdI',1,'2018-04-30 23:47:27'),(51,'ojinM4n5rQHG5MdvujYMaX_WuwF8',1,'2018-05-01 11:34:35'),(52,'ojinM4udU1rNc_UynhzCZi_VCMDs',1,'2018-05-03 22:15:47'),(53,'ojinM4udU1rNc_UynhzCZi_VCMDs',2,'2018-05-03 22:15:51'),(54,'ojinM4sNhYWZHwy5xqKeGXfC9V2E',2,'2018-05-04 09:21:15'),(55,'ojinM4sNhYWZHwy5xqKeGXfC9V2E',1,'2018-05-04 09:21:20'),(56,'ojinM4vjoiZNWqvzgagi8hbBG92c',2,'2018-05-04 15:31:08'),(57,'ojinM4pDhqRU_nFdGJ4Br43J9QwY',1,'2018-05-05 11:30:25');
/*!40000 ALTER TABLE `baoming` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-09 23:04:11
