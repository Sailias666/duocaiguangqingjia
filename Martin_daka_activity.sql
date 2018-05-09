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
-- Table structure for table `daka_activity`
--

DROP TABLE IF EXISTS `daka_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daka_activity` (
  `activity_id` varchar(20) NOT NULL DEFAULT '',
  `activity_name` varchar(90) NOT NULL DEFAULT '',
  `activity_desc` text NOT NULL,
  `activity_date` text NOT NULL,
  `activity_img` varchar(255) NOT NULL,
  `activity_active` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daka_activity`
--

LOCK TABLES `daka_activity` WRITE;
/*!40000 ALTER TABLE `daka_activity` DISABLE KEYS */;
INSERT INTO `daka_activity` VALUES ('1','自主运动健身','备注：自律给我自由，分享送你积分。员工参与非区域、城市公司及项目组织的运动健身活动，或是自主健身，分享运动健身的自拍照片打卡，即可获得+5运动积分。','','https://chengjiushuangxiang.com/Martin/tp5/public/upload/daka/6.jpg','0'),('6','运动健身','备注：积极参与运动健身活动，赚取高额积分。参与区域、城市公司及项目组织的运动健身活动，分享活动现场自拍照片打卡，即可获得+5运动积分。','','https://chengjiushuangxiang.com/Martin/tp5/public/upload/daka/1.jpg','1'),('888881','每日健身任务',' ',' ','https://chengjiushuangxiang.com/Martin/tp5/public/upload/gaoguan/1.jpg','1'),('888882','特训健身课程',' ',' ','https://chengjiushuangxiang.com/Martin/tp5/public/upload/gaoguan/2.jpg','1'),('888883','活力周末',' ',' ','https://chengjiushuangxiang.com/Martin/tp5/public/upload/gaoguan/3.jpg','1'),('888884','超级星期三+',' ',' ','https://chengjiushuangxiang.com/Martin/tp5/public/upload/gaoguan/4.jpg','1');
/*!40000 ALTER TABLE `daka_activity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-09 23:04:07
