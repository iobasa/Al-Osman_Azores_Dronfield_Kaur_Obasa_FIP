-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 13, 2020 at 03:15 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_meethiv`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_content`
--

DROP TABLE IF EXISTS `tbl_content`;
CREATE TABLE IF NOT EXISTS `tbl_content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `myth` varchar(300) NOT NULL,
  `fact_title` varchar(300) NOT NULL,
  `fact_description` text NOT NULL,
  `link1` varchar(300) NOT NULL,
  `link2` varchar(300) NOT NULL,
  `video_id` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_content`
--

INSERT INTO `tbl_content` (`id`, `myth`, `fact_title`, `fact_description`, `link1`, `link2`, `video_id`) VALUES
(1, 'I can get HIV from hugging someone who has HIV.', 'You can only get HIV if infected bodily fluids get into your bloodstream through unprotected sex, pregnancy, and sharing needles.						', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	', '/hiv-prevention', 'https://hivaidsconnection.ca/get-facts/get-tested', 'yFcwdeNt32A'),
(2, 'I can treat HIV without any medical help.', 'If you are having sex, the only methods of HIV prevention are condoms or pre-exposure prophylaxis (PrEP).', 'No matter how much you wash your genitals, drink water, or pee, the chances of treating HIV through any kind of method besides medical help is zero. ', '/hiv-prevention', 'https://hivaidsconnection.ca/get-facts/get-tested', '85SATn36Rks'),
(3, 'If you get HIV, your life is over.', 'With treatment, HIV-positive people can live a normal life span and live normal lives.\r\n	With treatment, they can be in serious and/or casual relationships and have babies without risking other people.				', 'With treatment, they can be in serious and/or casual relationships and have babies without risking other people.', '/hiv-living', 'https://hivaidsconnection.ca/get-facts/living-hivaidshep-c/hiv', 'mG75lUmEfb4'),
(4, 'If I get infected fluid from an HIV+ person, I will get HIV.', 'Undetectable = Untransmittable.', 'HIV is not always passed on from someone living with HIV, especially if their bodies have undetectable levels of HIV. If you’re scared of the risk, it is important to take an HIV test every time.					', '/hiv-prevention', 'https://hivaidsconnection.ca/get-facts/get-tested', 'iPruHLfXP80'),
(5, 'You can only get HIV if you’re gay.', 'HIV can be transmitted, no matter what your sexual orientation is.	', 'Like all illnesses, HIV doesn’t choose specific people to affect.					', '/hiv-prevention', 'https://hivaidsconnection.ca/get-facts/get-tested', 'Z1TCuLZO3i0'),
(6, 'Having HIV means that person is dirty or sexually promiscuous.', 'The risk of HIV does not increase with the amount of sexual activity.', 'The risk of HIV increases when one does not practice safe sex, whether it be with one or more partners.\r\n(There’s also nothing wrong about being sexually active)', '/hiv-prevention', 'https://hivaidsconnection.ca/get-facts/get-tested', 'cBD6RCwFdoU');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_avatar` varchar(20) NOT NULL,
  `user_permissions` int(11) NOT NULL,
  `user_admin` int(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_avatar`, `user_permissions`, `user_admin`) VALUES
(3, 'Trevor', 'user1', 'password', 'me@you.com', '2020-03-09 15:48:21', '::1', 'olaf', 5, 1),
(5, 'Madelaine', 'user3', 'password', 'me@you.com', '2020-03-09 15:49:39', '::1', 'null', 3, 0),
(6, 'Isabelle', 'user4', 'password', 'me@you.com', '2020-03-09 15:50:13', 'no', 'null', 2, 0),
(7, 'Serena', 'user5', 'password', 'me@you.com', '2020-03-09 15:50:48', '::1', 'null', 2, 0),
(9, 'Ifekitan', 'iffy', '123', 'qsqs@dqdqs.com', '2020-04-10 17:06:48', 'no', 'null', 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
