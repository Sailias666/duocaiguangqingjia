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
-- Table structure for table `daka_comment`
--

DROP TABLE IF EXISTS `daka_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daka_comment` (
  `comment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `comment_activity_id` int(11) NOT NULL,
  `comment_name` varchar(255) NOT NULL,
  `comment_touxiang` varchar(255) CHARACTER SET latin1 NOT NULL,
  `comment_openid` varchar(255) CHARACTER SET latin1 NOT NULL,
  `comment_content` text,
  `comment_pic` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `comment_time` datetime NOT NULL,
  PRIMARY KEY (`comment_id`,`comment_activity_id`),
  KEY `comment_fk_idx` (`comment_openid`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daka_comment`
--

LOCK TABLES `daka_comment` WRITE;
/*!40000 ALTER TABLE `daka_comment` DISABLE KEYS */;
INSERT INTO `daka_comment` VALUES (104,1,'杰哥仔 wilson','https://wx.qlogo.cn/mmopen/vi_32/boQlJmwJSnoYdUp9S0mnhqCHNvbVVmTEo1mebNhr2892tb1ACdNg6Pylst0jQS5JXJ9rypJYkoT1TQLHAGLtow/132','ojinM4lU8LrcKreRTgNBmeFfYaEg','来了','20180505/52388fdb16e217dc4186dbe92c8e8149.jpg','2018-05-05 09:33:58'),(105,1,'杰哥仔 wilson','https://wx.qlogo.cn/mmopen/vi_32/boQlJmwJSnoYdUp9S0mnhqCHNvbVVmTEo1mebNhr2892tb1ACdNg6Pylst0jQS5JXJ9rypJYkoT1TQLHAGLtow/132','ojinM4lU8LrcKreRTgNBmeFfYaEg','来了','20180505/19ccf358d68a35a6abf00ab4b672690f.jpg','2018-05-05 09:34:06'),(106,1,'杰哥仔 wilson','https://wx.qlogo.cn/mmopen/vi_32/boQlJmwJSnoYdUp9S0mnhqCHNvbVVmTEo1mebNhr2892tb1ACdNg6Pylst0jQS5JXJ9rypJYkoT1TQLHAGLtow/132','ojinM4lU8LrcKreRTgNBmeFfYaEg','来了','20180505/8826cf861823f1ae5873afdd895bf433.jpg','2018-05-05 09:34:30'),(107,1,'张莹_Lynn','https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep0qufkWZvOR6vEVCbkwN43IRtNDWcTvTmHOW9Du08AtIS4RokI182bqJ2ulRWLSnk4B2ZVrCnbXA/132','ojinM4shoXWmPjfarJu7kggLCYG0','','20180505/846b5eb05f500e269f5242a8aadccdfb.jpg','2018-05-05 09:46:18'),(108,6,'kalok','https://wx.qlogo.cn/mmopen/vi_32/PCMZ5B6QCsxNxBhhB0SibUx80xu15HhntMv8AV0IZo5jI6ianvRvGWEmz0swjDiaTW6e1y643oRwh1CLmAGoCHMsQ/132','ojinM4s1joRQyOmWT8RG5ri1zvdM','昨天的5⃣️4⃣️运动','20180505/4ced2edb907499604c42a0164018f0f3.jpg','2018-05-05 12:45:56'),(109,6,'智明','https://wx.qlogo.cn/mmopen/vi_32/YcoicesicWvecnvKfkN3qsDXrbo6tNQZKuDJFHTtw94fIZryvXF66hhe5ZLeCyq7Ar7W1lrqXUibGx7tbcW6gOXWQ/132','ojinM4sI1GO3-6NreNDZTYFWuIKI','十八罗汉山定向越野','20180505/78bc20794ceeb31cd7e0b91fa47ac3a5.jpg','2018-05-05 12:47:02'),(110,6,'雕雕','https://wx.qlogo.cn/mmopen/vi_32/D0HMEMSa4XYwRgRd4UX3icacUicFsw0DlUCE8TDFtusKNa5icLT2yvic40NtHD2SsmhknqxAQZ4rb5WKv3cibNUNGUA/132','ojinM4hudZBh4lb8K8ZEmEbOIlR4','不想说什么，就是跑步','20180505/3347f636d25aa9ccc02d5dcc44acf646.jpg','2018-05-05 12:48:02'),(111,1,'王俞','https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqb5rkPk1Kia9VnQFBYicwVRdIzMrkx6tLHxf2pBcMVSU1icsmia5lKrOd36qo9cUDibQfibfy0fYozpQAA/132','ojinM4nNo_PN12Ytls03Mh0ZdYNI','','20180505/d8674cbbd13c6095b3ed15218461a21d.jpg','2018-05-05 14:42:23'),(112,6,'柴九','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIL8Wb8NJgwZIW39bkMBnvh3IaUJPxmCg6uaEic2OjuJuXEucph5G2OpEQCBcR9kBagzzEw2EicI95Q/132','ojinM4rK9Otsi03jiphnXZV16XLU','周末愉快','20180505/395573e404c5f99b60fd078b9e39c02c.jpg','2018-05-05 23:27:25'),(113,1,'柴九','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIL8Wb8NJgwZIW39bkMBnvh3IaUJPxmCg6uaEic2OjuJuXEucph5G2OpEQCBcR9kBagzzEw2EicI95Q/132','ojinM4rK9Otsi03jiphnXZV16XLU','遇见杰哥，','20180505/0eb8a42dc5950cf172439acd7aed649d.jpg','2018-05-05 23:30:07'),(115,6,'梁俊華','https://wx.qlogo.cn/mmopen/vi_32/MMicUIy22wZe5XtZJlkMVy0DAuAYiaGc8Jw0JgH5IsicfXeMkAiazC4uEmxwnCzvPPxiaTIQpuqo8uMODLRC72jPojQ/132','ojinM4pDhqRU_nFdGJ4Br43J9QwY','日常打卡~~~~周末多运动','20180506/2eee2723fa0c9f4b0e898f38d019bd0f.jpg','2018-05-06 20:46:36'),(116,1,'kalok','https://wx.qlogo.cn/mmopen/vi_32/PCMZ5B6QCsxNxBhhB0SibUx80xu15HhntMv8AV0IZo5jI6ianvRvGWEmz0swjDiaTW6v87f0UJeGg6icOokBejstwA/132','ojinM4s1joRQyOmWT8RG5ri1zvdM','打个卡','20180506/20ae1ec04be7f7c4e4282d3677ae8f84.jpg','2018-05-06 22:53:27'),(118,6,'旭','https://wx.qlogo.cn/mmopen/vi_32/R9h0RnicTHauWZjfMyTYDcibs5MsEIGoJA1VmZPAStpmPEDVwqAkldQPnZiabkQjh8bFleUQVUomAjgQQ1RjOHOfw/132','ojinM4idrScY8oneAXjq8vMxPaLA','打卡~','20180507/7e5afc8bee8642c68d9b614c4ea9fa16.jpg','2018-05-07 13:05:22'),(119,6,'雕雕','https://wx.qlogo.cn/mmopen/vi_32/D0HMEMSa4XYwRgRd4UX3icacUicFsw0DlUCE8TDFtusKNa5icLT2yvic40NtHD2SsmhknqxAQZ4rb5WKv3cibNUNGUA/132','ojinM4hudZBh4lb8K8ZEmEbOIlR4','爬楼梯也是响应运动','20180507/1920f0bbc51ad1c2275741dba6f12cfd.jpg','2018-05-07 21:50:24'),(120,6,'griffunk','https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo9h4niacIt8FB8xclbPlSKbzwkwZ3ykuaTJYMOunP3BS5azdbt9rqGTWLtnPaBgcNwmatHZMOhfzQ/132','ojinM4hRq2-_fIwQmOvzYqabuJaw','加班后举铁特别来劲','20180508/cc7c2234a371ca648ee1519c1a9bf2a0.jpg','2018-05-08 21:21:19'),(128,1,'XiaohuaBetter','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLEM8aBZNsZUv2WWYn6IXOTGjZ2f7cXhW2v7pSKOaup0aPU1s7I37S3wHK8gXfOpSwvQs4CSZ3KnQ/132','ojinM4hOYxo2L3q5bMWtVjWmcfc8','','20180509/97be705d48d0811064ee23a9a8f189c1.jpg','2018-05-09 11:33:55'),(129,6,'文俊-Elmknot','https://wx.qlogo.cn/mmopen/vi_32/t28kM5dWLAYTBqUgDicv6IEOMZHsw8wAtIYsGmunibfp8K5aZvfKOsMOEicNWCubKjptXOtbcZLGIoZqwN5TLHy1A/132','ojinM4i2KxozSV1tj9AOAaNyG2nE','超～级～吗','20180509/7eda2225cc92d4e16dab6f39b074a301.jpg','2018-05-09 11:34:15'),(130,6,'从新开始','https://wx.qlogo.cn/mmopen/vi_32/FFTO1yx4cSoB0hOHmzzq7CaLz3KemkIfLAkpgKkBfrWXDeH4tYoFm4MPwrtQVkL1icicnPEtibiabI1J4ctiaBksviaA/132','ojinM4kfOwKLztfDTv_O6-GzopXk','','20180509/0efa5402144c1efae37b233b1edc0a79.jpg','2018-05-09 11:38:39'),(131,1,'从新开始','https://wx.qlogo.cn/mmopen/vi_32/FFTO1yx4cSoB0hOHmzzq7CaLz3KemkIfLAkpgKkBfrWXDeH4tYoFm4MPwrtQVkL1icicnPEtibiabI1J4ctiaBksviaA/132','ojinM4kfOwKLztfDTv_O6-GzopXk','','20180509/ec7177616a9b3aaa5f5a466556651163.jpg','2018-05-09 11:39:10'),(132,1,'海芯沙','https://wx.qlogo.cn/mmopen/vi_32/0kAuNxJvkTPVNFicfW21ZNhqN1aJop08zib1pbEEtFTa1nNES3e7H4TkFMZ3L1G66NFkOlauA8cYvJ8O3jqWDwRA/132','ojinM4rCOvA9k2oNNoA2dPIqTlMY','运动套装','20180509/54a8f5485b32aca0e7c418a0b1732fc6.jpg','2018-05-09 11:57:43'),(133,1,'绿','https://wx.qlogo.cn/mmopen/vi_32/Zd0jstSaf4vw5A38D2XkZticVP1zT2PTQSRampxcO38icJ59vMl6UicfcOOcnzEaawAOKXlb393Lyx7mPSm5VkH0g/132','ojinM4nkElQ5YHyFT9ntiCGyBooI','','20180509/676b03317fa9f6f342abf5e89a7290a5.jpg','2018-05-09 12:14:20'),(134,6,'绿','https://wx.qlogo.cn/mmopen/vi_32/Zd0jstSaf4vw5A38D2XkZticVP1zT2PTQSRampxcO38icJ59vMl6UicfcOOcnzEaawAOKXlb393Lyx7mPSm5VkH0g/132','ojinM4nkElQ5YHyFT9ntiCGyBooI','定向越野打卡滴~','20180509/80b40842a42050a179471cad510c25c9.jpg','2018-05-09 12:17:45'),(135,1,'黄天不负有心人','https://wx.qlogo.cn/mmopen/vi_32/xFiboe1NeP4zfFPI0ibJsXf9cFMBC7yczoD3UQxyexXDicDNpUAxejiaZu8QsZ4DbDibqDeSxPJFiabAjgfsTaibe38hg/132','ojinM4n1bh9lH5YUn0HZN3JTEQaM','','20180509/a962e5fd224bef1d55515fa16594c974.jpg','2018-05-09 12:25:44'),(136,1,'贺锡联','https://wx.qlogo.cn/mmopen/vi_32/Shficg7eibDy40TRKeXCMJLUW5qztfWDQWBgjblTEsbDK8v5qcBl6kWhzV4IngAZn3sSHGg7B4NtNdjxru4vrIDg/132','ojinM4p3gvF7VH0JwP1eSis0qDsg','乒乓球半个钟','20180509/2a24c80c888a5aa5b61d4d01036cb502.jpg','2018-05-09 12:26:08'),(137,1,'旭','https://wx.qlogo.cn/mmopen/vi_32/R9h0RnicTHauWZjfMyTYDcibs5MsEIGoJA1VmZPAStpmPEDVwqAkldQPnZiabkQjh8bFleUQVUomAjgQQ1RjOHOfw/132','ojinM4idrScY8oneAXjq8vMxPaLA','继续无氧~二三头+胸','20180509/dfbcae9858f90a01b0f681d0163b3120.jpg','2018-05-09 12:35:25'),(138,1,'文俊-Elmknot','https://wx.qlogo.cn/mmopen/vi_32/t28kM5dWLAYTBqUgDicv6IEOMZHsw8wAtIYsGmunibfp8K5aZvfKOsMOEicNWCubKjptXOtbcZLGIoZqwN5TLHy1A/132','ojinM4i2KxozSV1tj9AOAaNyG2nE','像他一样？','20180509/96eb1a0fa5a067d257a76f348fc208ba.jpg','2018-05-09 13:54:47'),(139,1,'陈攀','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLzeN8qe1q0U5KUDZFcbk06SCXYHUh9k5ILOsS3H56WruX9owP4fD8UqQWr8ZrAI9Pp0Biad8icNkQQ/132','ojinM4mcy-NRZf1zdR202WZakgNo','','20180509/75c025cb59048508b1408b5ee1ea340b.jpg','2018-05-09 14:45:10'),(140,1,'超人','https://wx.qlogo.cn/mmopen/vi_32/sBWG9EoZjUaf8Z3HHSotqmCyFR7tXE1iaue6ibWK1FhAkF6icuzuE4qcDP7Wz5L76RBuKicicN1xah0KTDbqdiadzJyg/132','ojinM4oCl_P4oZGgdgaROVyONWDw','赣州财务部周三运动日羽毛球活动','20180509/71d142308a4cae46e7fe4445d7e04f47.jpg','2018-05-09 15:12:58'),(141,1,'超人','https://wx.qlogo.cn/mmopen/vi_32/sBWG9EoZjUaf8Z3HHSotqmCyFR7tXE1iaue6ibWK1FhAkF6icuzuE4qcDP7Wz5L76RBuKicicN1xah0KTDbqdiadzJyg/132','ojinM4oCl_P4oZGgdgaROVyONWDw','赣州财务部周三运动日篮球活动','20180509/6d52e67343ab5e9d76e502694d5c1440.jpg','2018-05-09 15:14:02'),(142,1,'di方','https://wx.qlogo.cn/mmopen/vi_32/GibCLgTx5qic3QovE0ic856o1Db7DYrwbTDvCmVj7ntTOfINV41GYHv9JwgibhVYCxTUhSRiav7W3NLybxyicgYpPKCg/132','ojinM4vPF4qV20ZO7opdUkX_ZW1A','打卡','20180509/3bcd5c5ae5f170ea98c7046385f6a562.jpg','2018-05-09 22:04:31'),(143,1,'陆宗华','https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoymb7z5BZExr5wFBlVasXm67S7qYQNMn000cuPAREdSN15YXdUNBwicA3Ecsz9R5STTELvj9b8JsA/132','ojinM4gY3zmS_mjZq9hbAvvHzGTs','哈哈哈哈嗨吧','20180509/f44f7da09f8269411272cb45ff05ce3c.jpg','2018-05-09 22:05:00'),(144,1,'Panda Honk','https://wx.qlogo.cn/mmopen/vi_32/A0WdM049X8Nr04DJB1LHiaPs2c7A1KexKP3hPAfGUvpKdRY3wQVO4fFsiclgE9hbsxWLm5ugXlY6ZRnFphFHZ9gA/132','ojinM4udU1rNc_UynhzCZi_VCMDs','测试','20180509/ef8adbf9d2c128f55443176e78997183.jpg','2018-05-09 22:07:18'),(145,1,'Kris.莹','https://wx.qlogo.cn/mmopen/vi_32/8icfELo600aEeXpEic6AxoqYxpibxYKmvSic9CCNOibhE42JJjNPOwEn8dA2ibxmA4TOVicu7ibU0XZ2ibu4lQCEHZqfR0g/132','ojinM4jvSnsG1f1y5wAKs0fQzqB4','测试','20180509/a17c73d5ae53d9c42058f95251b2d52c.jpg','2018-05-09 22:09:18'),(148,1,'Panda Honk','https://wx.qlogo.cn/mmopen/vi_32/A0WdM049X8Nr04DJB1LHiaPs2c7A1KexKP3hPAfGUvpKdRY3wQVO4fFsiclgE9hbsxWLm5ugXlY6ZRnFphFHZ9gA/132','ojinM4udU1rNc_UynhzCZi_VCMDs','Test','20180509/c2f14d3d595741d8fa3018dd94586d40.jpg','2018-05-09 22:42:52'),(149,6,'Panda Honk','https://wx.qlogo.cn/mmopen/vi_32/A0WdM049X8Nr04DJB1LHiaPs2c7A1KexKP3hPAfGUvpKdRY3wQVO4fFsiclgE9hbsxWLm5ugXlY6ZRnFphFHZ9gA/132','ojinM4udU1rNc_UynhzCZi_VCMDs','test','20180509/2fb8683cd1bf82eabc5fe0a0b2c444f7.jpg','2018-05-09 22:43:14'),(150,888881,'Kris.莹','https://wx.qlogo.cn/mmopen/vi_32/8icfELo600aEeXpEic6AxoqYxpibxYKmvSic9CCNOibhE42JJjNPOwEn8dA2ibxmA4TOVicu7ibU0XZ2ibu4lQCEHZqfR0g/132','ojinM4jvSnsG1f1y5wAKs0fQzqB4','测试','20180509/68e48da02c3207814776cf9783a9abaa.jpg','2018-05-09 22:44:58'),(151,1,'griffunk','https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo9h4niacIt8FB8xclbPlSKbzwkwZ3ykuaTJYMOunP3BS5azdbt9rqGTWLtnPaBgcNwmatHZMOhfzQ/132','ojinM4hRq2-_fIwQmOvzYqabuJaw','继续','20180509/d3283b32f3d9fc7b1f51b06fcf9f2b7b.jpg','2018-05-09 22:53:30');
/*!40000 ALTER TABLE `daka_comment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-09 23:04:25
