/*
Navicat MySQL Data Transfer

Source Server         : 强
Source Server Version : 50638
Source Host           : 127.0.0.1:3306
Source Database       : Martin

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2018-04-23 07:26:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bad
-- ----------------------------
DROP TABLE IF EXISTS `bad`;
CREATE TABLE `bad` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `team_name_a` varchar(255) NOT NULL COMMENT '队伍A',
  `team_name_b` varchar(255) NOT NULL COMMENT '队伍B',
  `date` date NOT NULL COMMENT '时间',
  `situs` varchar(255) NOT NULL COMMENT '地点',
  `activity_name` varchar(255) DEFAULT NULL COMMENT '活动名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bad
-- ----------------------------
INSERT INTO `bad` VALUES ('1', '湖人y', '火箭-y', '2018-03-21', '广州体育场', '2018广清第一届运动会');
INSERT INTO `bad` VALUES ('2', '勇士y', '雷霆-y', '2018-03-28', '广州第二体育场', '2018广清第二届运动会');

-- ----------------------------
-- Table structure for badge
-- ----------------------------
DROP TABLE IF EXISTS `badge`;
CREATE TABLE `badge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` int(11) NOT NULL,
  `badge` enum('w','d') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of badge
-- ----------------------------

-- ----------------------------
-- Table structure for baoming
-- ----------------------------
DROP TABLE IF EXISTS `baoming`;
CREATE TABLE `baoming` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` char(50) NOT NULL,
  `activity_num` int(11) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of baoming
-- ----------------------------
INSERT INTO `baoming` VALUES ('27', 'o1gwf5WhBxAqMwzwyMMx1gdASKZI', '3', '2018-03-22 16:54:16');
INSERT INTO `baoming` VALUES ('28', 'o1gwf5Vwtjg5B0mAWRJlPdaHUkSE', '1', '2018-03-26 22:14:48');
INSERT INTO `baoming` VALUES ('35', 'o1gwf5STi0Rdr0WpKiyFOvBz-oy4', '2', '2018-04-17 22:48:16');
INSERT INTO `baoming` VALUES ('36', 'o1gwf5STi0Rdr0WpKiyFOvBz-oy4', '3', '2018-04-17 22:48:29');
INSERT INTO `baoming` VALUES ('38', 'o1gwf5Wr_Kqn0YPutvhGFgeo6Tkc', '1', '2018-04-18 20:14:23');
INSERT INTO `baoming` VALUES ('39', 'o1gwf5e6hIUc0fCk_i1pGNLEImcs', '3', '2018-04-18 21:29:13');
INSERT INTO `baoming` VALUES ('44', 'o1gwf5STi0Rdr0WpKiyFOvBz-oy4', '1', '2018-04-22 15:21:11');

-- ----------------------------
-- Table structure for blm
-- ----------------------------
DROP TABLE IF EXISTS `blm`;
CREATE TABLE `blm` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `team_name_a` varchar(255) NOT NULL COMMENT '队伍A',
  `team_name_b` varchar(255) NOT NULL COMMENT '队伍B',
  `date` date NOT NULL COMMENT '时间',
  `situs` varchar(255) NOT NULL COMMENT '地点',
  `activity_name` varchar(255) DEFAULT NULL COMMENT '活动名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blm
-- ----------------------------
INSERT INTO `blm` VALUES ('1', '湖人', '火箭', '2018-03-21', '广州体育场', '2018广清第一届运动会');
INSERT INTO `blm` VALUES ('2', '勇士', '雷霆', '2018-03-28', '广州第二体育场', '2018广清第二届运动会');

-- ----------------------------
-- Table structure for challenge_in
-- ----------------------------
DROP TABLE IF EXISTS `challenge_in`;
CREATE TABLE `challenge_in` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT 'սĿ',
  `tov` varchar(255) NOT NULL COMMENT 'Ч',
  `desc` varchar(255) NOT NULL COMMENT 'ע',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of challenge_in
-- ----------------------------
INSERT INTO `challenge_in` VALUES ('1', '挑战项目1', '2018-03-01/2018-03-31', '备注：啊红萼红佛啊喂哈佛啊好发哦为哈佛i啊华为佛好额哈佛大森林砍伐哈利回复哦i恶化哦阿富汗手动恢复啦好的风格哈师傅违和感还u会发士大夫哈哈是空间发哈岁的i付哈维护饭卡色号空间还u好地方苦厄啊我还浮夸是否对啊好我iu会哈哈深刻的减肥哈苦厄和跨时代jfk哈克u话费卡刷的回复跨省覅u啊和咯哈四大皆空发哈文库话费卡视角和对方卡还是跨还是哭');
INSERT INTO `challenge_in` VALUES ('2', '挑战项目2', '2018-04-01/2018-04-30', '备注：啊红萼红佛啊喂哈佛啊好发哦为哈佛i啊华为佛好额哈佛大森林砍伐哈利回复哦i恶化哦阿富汗手动恢复啦好的风格哈师傅违和感还u会发士大夫哈哈是空间发哈岁的i付哈维护饭卡色号空间还u好地方苦厄啊我还浮夸是否对啊好我iu会哈哈深刻的减肥哈苦厄和跨时代jfk哈克u话费卡刷的回复跨省覅u啊和咯哈四大皆空发哈文库话费卡视角和对方卡还是跨还是哭');
INSERT INTO `challenge_in` VALUES ('3', '挑战项目3', '2018-05-01/2018-05-31', '备注：啊红萼红佛啊喂哈佛啊好发哦为哈佛i啊华为佛好额哈佛大森林砍伐哈利回复哦i恶化哦阿富汗手动恢复啦好的风格哈师傅违和感还u会发士大夫哈哈是空间发哈岁的i付哈维护饭卡色号空间还u好地方苦厄啊我还浮夸是否对啊好我iu会哈哈深刻的减肥哈苦厄和跨时代jfk哈克u话费卡刷的回复跨省覅u啊和咯哈四大皆空发哈文库话费卡视角和对方卡还是跨还是哭');

-- ----------------------------
-- Table structure for daka_activity
-- ----------------------------
DROP TABLE IF EXISTS `daka_activity`;
CREATE TABLE `daka_activity` (
  `activity_id` varchar(20) NOT NULL DEFAULT '',
  `activity_name` varchar(90) NOT NULL DEFAULT '',
  `activity_desc` text NOT NULL,
  `activity_date` date NOT NULL,
  `activity_img` varchar(255) NOT NULL,
  `activity_active` char(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of daka_activity
-- ----------------------------
INSERT INTO `daka_activity` VALUES ('1', '活动1', '备注：啊红萼红佛啊喂哈佛啊好发', '2018-03-20', 'https://m.hola-chino.cn/Martin/tp5/public/upload/daka/1.jpg', '0');
INSERT INTO `daka_activity` VALUES ('2', '活动2', '备注：啊红萼红佛啊喂哈佛啊好发哦为哈佛i啊华为佛好额哈佛大森林砍伐哈利回复哦i恶化哦阿富汗手动恢复啦好的风格哈师傅违和感还u会发士大夫哈哈是空间发哈岁的i付哈维护饭卡色号空间还u好地方苦厄', '2018-03-21', 'https://m.hola-chino.cn/Martin/tp5/public/upload/daka/2.jpg', '0');
INSERT INTO `daka_activity` VALUES ('3', '活动3', '备注：lxU9SxCVfAlZPVk71C54fvC52IvqZHvCXcLLYIykPq%2FY6Mna8NwvBfXiDLlOnT%2B%2FcpYysARLonJ5OaWJFEJwlh2l7rj%2BQrKrGqJly9sozO6pLYgXcoqlSalw99pQTQ0pAVELZs%2FOMNr38yXcKiBCXn1Wiem8pHFhgi%2BDZ68jjqrQxlhyikr9VS57AY7tNel002b5oVHTKPb5b3QR9ov%2BUw3pod1sRdb9g31%2B2T3z', '2018-03-22', 'https://m.hola-chino.cn/Martin/tp5/public/upload/daka/3.jpg', '0');

-- ----------------------------
-- Table structure for daka_challenge
-- ----------------------------
DROP TABLE IF EXISTS `daka_challenge`;
CREATE TABLE `daka_challenge` (
  `challenge_id` varchar(20) NOT NULL DEFAULT '',
  `challenge_name` varchar(90) NOT NULL DEFAULT '',
  `challenge_desc` varchar(300) NOT NULL DEFAULT '',
  `challenge_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of daka_challenge
-- ----------------------------
INSERT INTO `daka_challenge` VALUES ('1', '挑战项目1', '备注：啊红萼红佛啊喂哈佛啊好发哦为哈佛i啊华为佛好额哈佛大森林砍伐哈利回复哦i恶化哦阿富汗手动恢复啦好的风格哈师傅违和感还u会发士大夫哈哈是空间发哈岁的i付哈维护饭卡色号空间还u好地方苦厄啊我还浮夸是否对啊好我iu会哈哈深刻的减肥哈苦厄和跨时代jfk哈克u话费卡刷的回复跨省覅u啊和咯哈四大皆空发哈文库话费卡视角和对方卡还是跨还是哭', '2018-03-20');
INSERT INTO `daka_challenge` VALUES ('2', '挑战项目2', '备注：啊红萼红佛啊喂哈佛啊好发哦为哈佛i啊华为佛好额哈佛大森林砍伐哈利回复哦i恶化哦阿富汗手动恢复啦好的风格哈师傅违和感还u会发士大夫哈哈是空间发哈岁的i付哈维护饭卡色号空间还u好地方苦厄啊我还浮夸是否对啊好我iu会哈哈深刻的减肥哈苦厄和跨时代jfk哈克u话费卡刷的回复跨省覅u啊和咯哈四大皆空发哈文库话费卡视角和对方卡还是跨还是哭', '2018-03-21');
INSERT INTO `daka_challenge` VALUES ('3', '挑战项目3', '备注：啊红萼红佛啊喂哈佛啊好发哦为哈佛i啊华为佛好额哈佛大森林砍伐哈利回复哦i恶化哦阿富汗手动恢复啦好的风格哈师傅违和感还u会发士大夫哈哈是空间发哈岁的i付哈维护饭卡色号空间还u好地方苦厄啊我还浮夸是否对啊好我iu会哈哈深刻的减肥哈苦厄和跨时代jfk哈克u话费卡刷的回复跨省覅u啊和咯哈四大皆空发哈文库话费卡视角和对方卡还是跨还是哭', '2018-03-22');

-- ----------------------------
-- Table structure for daka_checkin
-- ----------------------------
DROP TABLE IF EXISTS `daka_checkin`;
CREATE TABLE `daka_checkin` (
  `activity_id` varchar(20) NOT NULL DEFAULT '',
  `user_openid` varchar(20) NOT NULL DEFAULT '',
  `activity_pic` varchar(0) NOT NULL,
  `audit_passed` char(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of daka_checkin
-- ----------------------------

-- ----------------------------
-- Table structure for daka_comment
-- ----------------------------
DROP TABLE IF EXISTS `daka_comment`;
CREATE TABLE `daka_comment` (
  `comment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `comment_activity_id` int(11) NOT NULL,
  `comment_name` varchar(255) NOT NULL,
  `comment_touxiang` varchar(255) NOT NULL,
  `comment_openid` varchar(255) NOT NULL,
  `comment_content` text CHARACTER SET utf8,
  `comment_pic` varchar(255) DEFAULT NULL,
  `comment_time` datetime NOT NULL,
  PRIMARY KEY (`comment_id`,`comment_activity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of daka_comment
-- ----------------------------
INSERT INTO `daka_comment` VALUES ('16', '1', 'Martin', 'https://wx.qlogo.cn/mmopen/vi_32/sXU4n8poeZjuhpVqYZnWVKge1zcfNTI4pCzUPUiblJ8LUWUgmtXjvXfCvFhyYxkNbqNkApO4fVibic7ZDBgnQCwjA/0', 'o1gwf5STi0Rdr0WpKiyFOvBz-oy4', 'tete1', '20180422/2475c2afaf698638db726d21f52460d8.jpg', '2018-04-22 04:20:56');
INSERT INTO `daka_comment` VALUES ('17', '2', 'Martin', 'https://wx.qlogo.cn/mmopen/vi_32/sXU4n8poeZjuhpVqYZnWVKge1zcfNTI4pCzUPUiblJ8LUWUgmtXjvXfCvFhyYxkNbqNkApO4fVibic7ZDBgnQCwjA/0', 'o1gwf5STi0Rdr0WpKiyFOvBz-oy4', 'werqwer', '20180422/f78f74ded2a170fd8715127881b5c76e.jpg', '2018-04-22 04:21:42');

-- ----------------------------
-- Table structure for flm
-- ----------------------------
DROP TABLE IF EXISTS `flm`;
CREATE TABLE `flm` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `team_name_a` varchar(255) NOT NULL COMMENT '队伍A',
  `team_name_b` varchar(255) NOT NULL COMMENT '队伍B',
  `date` date NOT NULL COMMENT '时间',
  `situs` varchar(255) NOT NULL COMMENT '地点',
  `activity_name` varchar(255) DEFAULT NULL COMMENT '活动名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of flm
-- ----------------------------
INSERT INTO `flm` VALUES ('1', '湖人-足球', '火箭-足', '2018-03-21', '广州体育场', '2018广清第一届运动会');
INSERT INTO `flm` VALUES ('2', '勇士-足球', '雷霆-足', '2018-03-28', '广州第二体育场', '2018广清第二届运动会');

-- ----------------------------
-- Table structure for group_info
-- ----------------------------
DROP TABLE IF EXISTS `group_info`;
CREATE TABLE `group_info` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of group_info
-- ----------------------------
INSERT INTO `group_info` VALUES ('1', '测试组1');
INSERT INTO `group_info` VALUES ('2', '测试组2');
INSERT INTO `group_info` VALUES ('3', '测试组3');

-- ----------------------------
-- Table structure for group_step_rank_month
-- ----------------------------
DROP TABLE IF EXISTS `group_step_rank_month`;
CREATE TABLE `group_step_rank_month` (
  `group_name` varchar(255) NOT NULL DEFAULT '',
  `teps` decimal(10,6) DEFAULT NULL,
  `step_date` date DEFAULT NULL,
  PRIMARY KEY (`group_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of group_step_rank_month
-- ----------------------------
INSERT INTO `group_step_rank_month` VALUES ('GQ B', '31.584400', null);
INSERT INTO `group_step_rank_month` VALUES ('哩哈哈', '18.772800', null);
INSERT INTO `group_step_rank_month` VALUES ('第一组', '168.765400', null);
INSERT INTO `group_step_rank_month` VALUES ('高管', '27.299600', null);

-- ----------------------------
-- Table structure for index_activity
-- ----------------------------
DROP TABLE IF EXISTS `index_activity`;
CREATE TABLE `index_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_id` int(11) DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of index_activity
-- ----------------------------
INSERT INTO `index_activity` VALUES ('2', '1', 'https://m.hola-chino.cn/Martin/tp5/public/upload/ad/1.jpg');
INSERT INTO `index_activity` VALUES ('3', '2', 'https://m.hola-chino.cn/Martin/tp5/public/upload/ad/2.jpg');
INSERT INTO `index_activity` VALUES ('4', '3', 'https://m.hola-chino.cn/Martin/tp5/public/upload/ad/3.jpg');

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `name` varchar(30) NOT NULL,
  `personkey` varchar(30) NOT NULL,
  `phone` varchar(50) NOT NULL,
  PRIMARY KEY (`personkey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('guozihao', 'woebg72323aisdf32', '13929111991');

-- ----------------------------
-- Table structure for personal_step_rank
-- ----------------------------
DROP TABLE IF EXISTS `personal_step_rank`;
CREATE TABLE `personal_step_rank` (
  `user_openid` varchar(255) NOT NULL,
  `today_steps` int(255) NOT NULL,
  `step_date` date NOT NULL,
  `group_name` varchar(255) NOT NULL,
  KEY `rankopenid` (`user_openid`),
  KEY `a` (`group_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of personal_step_rank
-- ----------------------------
INSERT INTO `personal_step_rank` VALUES ('o1gwf5Vwtjg5B0mAWRJlPdaHUkSE', '0', '2018-04-22', '测试组3');
INSERT INTO `personal_step_rank` VALUES ('o1gwf5VDVa6aYvT0652R6T6pH-A8', '0', '2018-04-22', '测试组3');
INSERT INTO `personal_step_rank` VALUES ('o1gwf5e6hIUc0fCk_i1pGNLEImcs', '0', '2018-04-22', '测试组3');
INSERT INTO `personal_step_rank` VALUES ('o1gwf5WhBxAqMwzwyMMx1gdASKZI', '0', '2018-04-22', '测试组3');
INSERT INTO `personal_step_rank` VALUES ('oJc0U0flGfPGRZlDC9iHRD-0E9gQ', '0', '2018-04-22', '测试组3');
INSERT INTO `personal_step_rank` VALUES ('o1gwf5Wr_Kqn0YPutvhGFgeo6Tkc', '0', '2018-04-22', '测试组3');
INSERT INTO `personal_step_rank` VALUES ('o1gwf5STi0Rdr0WpKiyFOvBz-oy4', '114', '2018-04-22', '测试组1');

-- ----------------------------
-- Table structure for personal_step_rank_month
-- ----------------------------
DROP TABLE IF EXISTS `personal_step_rank_month`;
CREATE TABLE `personal_step_rank_month` (
  `id` bigint(255) NOT NULL AUTO_INCREMENT,
  `user_openid` varchar(255) DEFAULT NULL COMMENT '΢Ψһ',
  `month_step` decimal(12,4) unsigned zerofill NOT NULL,
  `today_date` date NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `rankopenid` (`user_openid`)
) ENGINE=InnoDB AUTO_INCREMENT=206 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of personal_step_rank_month
-- ----------------------------
INSERT INTO `personal_step_rank_month` VALUES ('196', 'o1gwf5VDVa6aYvT0652R6T6pH-A8', '00000003.0000', '2018-04-22');
INSERT INTO `personal_step_rank_month` VALUES ('197', 'o1gwf5e6hIUc0fCk_i1pGNLEImcs', '00000003.0000', '2018-04-22');
INSERT INTO `personal_step_rank_month` VALUES ('198', 'o1gwf5WhBxAqMwzwyMMx1gdASKZI', '00000003.0000', '2018-04-22');
INSERT INTO `personal_step_rank_month` VALUES ('200', 'o1gwf5Wr_Kqn0YPutvhGFgeo6Tkc', '00000003.0000', '2018-04-22');
INSERT INTO `personal_step_rank_month` VALUES ('205', 'o1gwf5STi0Rdr0WpKiyFOvBz-oy4', '00000000.0000', '2018-04-22');

-- ----------------------------
-- Table structure for pic
-- ----------------------------
DROP TABLE IF EXISTS `pic`;
CREATE TABLE `pic` (
  `path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of pic
-- ----------------------------
INSERT INTO `pic` VALUES ('path');

-- ----------------------------
-- Table structure for pinglun
-- ----------------------------
DROP TABLE IF EXISTS `pinglun`;
CREATE TABLE `pinglun` (
  `pinglun_comment_id` bigint(11) NOT NULL,
  `pinglun_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `pinglun_content` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `pinglun_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of pinglun
-- ----------------------------
INSERT INTO `pinglun` VALUES ('16', 'Martin', '2134321', '2018-04-22 04:21:06');
INSERT INTO `pinglun` VALUES ('17', 'Martin', '234234', '2018-04-22 04:21:56');

-- ----------------------------
-- Table structure for registry
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry` (
  `tran_num` int(11) NOT NULL AUTO_INCREMENT,
  `registry_name` varchar(50) NOT NULL DEFAULT '',
  `registry_phone` varchar(20) NOT NULL DEFAULT '',
  `reward_key` varchar(30) NOT NULL DEFAULT '',
  `send_msg` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`tran_num`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry
-- ----------------------------
INSERT INTO `registry` VALUES ('6', '黄燕芳', '13670905030', 'woebg72323aisdf32', '0');
INSERT INTO `registry` VALUES ('7', '', '', '', '0');

-- ----------------------------
-- Table structure for upload
-- ----------------------------
DROP TABLE IF EXISTS `upload`;
CREATE TABLE `upload` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `activity` int(10) NOT NULL COMMENT '',
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of upload
-- ----------------------------
INSERT INTO `upload` VALUES ('1', 'o1gwf5STi0Rdr0WpKiyFOvBz-oy4', 'c5e43a27d86aa0207c7938749a633f61.jpg', '20180422/c5e43a27d86aa0207c7938749a633f61.jpg', '45346', '1', '2018-04-22 08:27:40');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `name` varchar(255) NOT NULL,
  `touxiang` varchar(255) NOT NULL,
  `group_name` varchar(255) DEFAULT '',
  `user_openid` varchar(255) NOT NULL DEFAULT '',
  `session_key` varchar(255) NOT NULL,
  `user_active` char(255) DEFAULT NULL,
  `user_integral` int(255) DEFAULT '0',
  PRIMARY KEY (`user_openid`),
  KEY `user_openid` (`user_openid`),
  KEY `group_name` (`group_name`),
  KEY `group_name_2` (`group_name`,`user_openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('Panda Honk', 'https://wx.qlogo.cn/mmopen/vi_32/0R90DZ8UoZennWf3DQB3bpscxMruP4YNs0K7ia5KltNsA4vU4kxfNeX0KEMeIzWcJVUSb78SPPIeLibofpXXEZQg/0', '测试组3', 'o1gwf5e6hIUc0fCk_i1pGNLEImcs', 'vDBHxptBfcQ8jx+MIZZflg==', null, '0');
INSERT INTO `user_info` VALUES ('Martin', 'https://wx.qlogo.cn/mmopen/vi_32/sXU4n8poeZjuhpVqYZnWVKge1zcfNTI4pCzUPUiblJ8LUWUgmtXjvXfCvFhyYxkNbqNkApO4fVibic7ZDBgnQCwjA/0', '测试组1', 'o1gwf5STi0Rdr0WpKiyFOvBz-oy4', 'EipUdKecZrxIwRD/oO1myQ==', '1', '0');
INSERT INTO `user_info` VALUES ('哩哈哈', 'https://wx.qlogo.cn/mmopen/vi_32/BMAcFlLtbuXYyUv5iaHtU96FZnKuwXkjdJzfDmeaPc6yIpwAONMicTnXR5I3TgrLmnBDEJvGGaNtzR6AnSVZNHUQ/0', '测试组3', 'o1gwf5VDVa6aYvT0652R6T6pH-A8', 'kUYmm5herwAJgQbeyuHs3Q==', null, '0');
INSERT INTO `user_info` VALUES ('梁俊華', 'https://wx.qlogo.cn/mmopen/vi_32/Gbwic9HVXCewELorb6CSLBFD9I2u0iaQicib5TjAM4XR7IUuEhLfabMsQ8WSkAg0YOdGPwDvL9jOjoOOmg1yhMicGKA/0', '测试组3', 'o1gwf5WhBxAqMwzwyMMx1gdASKZI', 'BE6MwrAVTaZ3Pu4GY8Py4Q==', null, '0');
INSERT INTO `user_info` VALUES ('姐姐', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJK2bN5jDwBnFGZtTIW6ibtmE1WBV3hjGfM0AEicjQP5tj3NbmBDibDib92w1IFWicBAS95hk1Zar5IW2w/0', '测试组3', 'o1gwf5Wr_Kqn0YPutvhGFgeo6Tkc', 'G8VjCpUcFTHqhoE2t3pnqA==', null, '0');
