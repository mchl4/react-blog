-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2024 at 06:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_react_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_aid` int(11) NOT NULL,
  `post_title` varchar(100) NOT NULL,
  `post_image` varchar(50) NOT NULL,
  `post_author` varchar(50) NOT NULL,
  `post_category` varchar(20) NOT NULL,
  `post_is_active` tinyint(4) NOT NULL,
  `post_article` text NOT NULL,
  `post_publish_date` varchar(20) NOT NULL,
  `post_datetime` varchar(20) NOT NULL,
  `post_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_aid`, `post_title`, `post_image`, `post_author`, `post_category`, `post_is_active`, `post_article`, `post_publish_date`, `post_datetime`, `post_created`) VALUES
(1, 'Summer of ‘Pantropiko’: The BINI craze continues', 'article 1.webp', 'GELO GONZALES', 'PPOP', 1, 'The girl group and their hit song Pantropiko make their mark on Pinoy pop culture\nRIZAL, Philippines – In Antipolo on a Saturday afternoon, April 20, P-pop girl group BINI continued to draw the crowds.\n\nThe group officially debuted in 2021, but it was a late 2023 single that would propel their meteoric rise – “Pantropiko,” a summer anthem curiously released on a “Ber” month, which now, thanks to its success, looks no less than a stroke of genius by the group’s label Star Music.\n\nThe cheery tune actually had a slow start. Released on November 17, 2023, it wasn’t until February 11, 2024 that it would break into Spotify Charts’ Daily Top Songs for the Philippines list, landing on the 173rd spot, before eventually hitting the top spot on April 18.', '2024-05-23', '2024-05-24 09:21:02', '2024-05-22 14:09:19'),
(2, 'Get to Know BINI: The P-Pop Group Taking Over Playlists', 'article 2.jpg', 'fdxgvdfxsg', 'ENTERTAINMENT', 1, 'Did you know BINI\\\\\\\'s music video for Born to Win racked up over a million views in its first week? With a massive Spotify following, viral music videos, and a sold-out three-day concert in June, this girl group is taking over the P-Pop scene. \n\n \n\nTheir music is a fun mix of catchy melodies and empowering lyrics. Whether you need a boost of inspiration, a dose of encouragement, or a reason to dance, BINI\\\\\\\'s got the perfect jam for you. Keep reading to learn more about the BINI members, music, and fandom.', '2024-05-22', '2024-05-24 09:20:19', '2024-05-23 10:45:17'),
(3, 'BINI Are In Full Bloom: “We just decided to continue with what we want and what we can do.”', 'article 3.jpg', 'GABRIEL SAULOG', 'ENTERRAINMENT', 1, 'It’s not easy to forge your path in a competitive industry such as the local music scene, but in just less than three years since their debut –– BINI has made quite the splash in just a short amount of time. \n\nWith their colorful personalities on full display, it’s easy to understand why BINI’s appeal resonates with fans all over the country, even earning them the title of the “Nation’s Girl Group.” While others would feel the immense pressure that comes with a title such as that, the eight-member girl group carries its weight with a display of grace and honor that one wouldn’t expect from an act of their stature.\n\nTheir immense reach to hundreds of thousands of listeners across the Philippines has earned the support of a devout and loyal fanbase, lovingly named “Blooms”. Speaking about their encouragement, member Aiah explains just how much it inspires her and her fellow members of the group saying; “I think that their enthusiasm really helps us motivate one another.” \n\n“Seeing their efforts in supporting us, it makes us want to do more and put effort into the work we do. We put more energy into everything we do, and to make sure that always give our best –– whether it’s a song release or performance.”\n\nAs exemplified by the success of their recent release “Pantropiko”, it’s become evident that the reciprocal nature of mutual admiration for both BINI and their Blooms has resulted led to new career heights for the rising P-Pop group. Yet despite their rapid rise in the industry, the group’s focus on getting better at their craft while staying authentic to their own identities has only strengthened over time. \n\n“Before we launched [as a group], we initially set the standards for ourselves that we should be like this, and we should be proper. But when we started, we gradually started to reveal who we really are as people –– being more like the human beings we are rather than conforming to the idol standards that the industry is often used to”, says Mikha. “There are so many standards that you should be like this or that when you’re an idol. But when people started looking at us, we just decided to continue with what we want and what we can do, so I feel like they loved seeing us be ourselves and so relatable”, she continues.', '2024-05-22', '2024-05-24 09:21:10', '2024-05-23 12:00:23'),
(4, 'IN PHOTOS: BINI in Zamboanga City', 'bini-zamboanga-18.webp', 'GELO GONZALES', 'PPOP', 1, '![Bini Mikha](https://www.rappler.com/tachyon/2024/04/bini-zamboanga-4-2-scaled.jpg)\n\n*Filipino girl group BINI draws a crowd of 6,600 in Zamboanga City, Friday, April 26*\n\nZAMBOANGA CITY, Philippines – P-pop girl group BINI, who rose through the music charts with the success of the viral hit “Pantropiko,” performed at the KCC Convention Center at the KCC Mall de Zamboanga in Zamboanga City, Friday, April 26.\n\n\nThe show drew a crowd of 6,600, according to a post by the group, taking place as BINI’s surge continues on music platforms.\n\nThe eight-member group reached 3 million monthly listeners on April 19. But as of Sunday, April 28, that figure officially stands at 3,862,263 – increasing at a rate that may see them break through the 4-million mark. The previous high set by a P-pop group was by SB-19 at 2,823,832 in August 2023.\n\n\n![Bini Maloi](https://www.rappler.com/tachyon/2024/04/bini-zamboanga-5-3-scaled.jpg?resize=2560%2C1707&zoom=1)\n\nIn a previous article, we said that Taylor Swift “brutally cut short” the reign of “Pantropiko” at the top of Spotify’s “Daily Top Songs Philippines” – a list of the country’s top 200 songs in terms of daily streams – to just a day. Swift released her new album just as BINI’s hit made it to the top.\n\n\nBut as the jokey phrase goes – “how the turns have tabled.” BINI’s song regained the top spot on April 21 – two days after the Swift album release – where it has stayed for six days. (As of writing, figures for April 27 are not available on Spotify Charts yet.)\n\nThe success of “Pantropiko” has also been a boon for BINI’s discography as well, with new fans discovering their older songs all the way from 2021. “Karera” (like “Pantropiko,” it was first released in 2023 but is also a part of the 2024 Talaarawan EP), “Lagi” (2022), “Huwag Muna Tayo Umuwi” (2022), “Na Na Na” (2021) all broke into the list just this April 2024.\n\nTwo other Talaarawan songs, hit single “Salamin, Salamin” and “Na Na Nandito Lang” are also charting, giving the group seven songs on the Spotify list, currently.\n\n\nAnd online, there’s sentiment from newer fans jokingly lamenting how they let the group’s older songs go under their radar, expressing how they’re glad to be discovering these songs now, and appreciation for the members’ vocal talents, and skills such as harmonization, and synchronization when dancing.\n\n\n![Bini](https://www.rappler.com/tachyon/2024/04/bini-zamboanga-8-2-scaled.jpg?resize=2560%2C1707&zoom=1)\n\nBy these numbers, BINI and their team’s efforts in building up their discography in the past few years is seeing some payoff now. Because of this body of work, there’s something that casual listeners drawn in by “Pantropiko” can immediately listen to, potentially turning them into more committed fans – rather than “Pantropiko” being a one-off for listeners.', '2024-04-28', '2024-05-24 09:21:13', '2024-05-24 09:11:46');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_aid` int(11) NOT NULL,
  `user_is_active` tinyint(1) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_key` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created` varchar(20) NOT NULL,
  `user_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_aid`, `user_is_active`, `user_name`, `user_email`, `user_key`, `user_password`, `user_created`, `user_datetime`) VALUES
(3, 1, 'Michaela Arbilo', 'michaelaarbilo25@gmail.com', 'a7c00f00e8bab1eb6ffd8ff519f7cb52904a3cd3ea0f59aefbe992dd2fb111ca', '$2y$10$eS4oKBOY5c3Kl6npAl0eOe8W5eTvZL5LymIfTJiPQDtVCN71fYnR.', '2024-05-20 12:49:01', '2024-05-20 15:25:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_aid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
