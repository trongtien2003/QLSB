-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 08, 2023 at 04:11 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phanhuunghi_tttn`
--

-- --------------------------------------------------------

--
-- Table structure for table `airline`
--

CREATE TABLE `airline` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `airline`
--

INSERT INTO `airline` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'VietjetAir', '2023-05-02 19:17:25.743549', '2023-05-02 19:17:25.743549'),
(2, 'VietnamAirlines', '2023-05-02 19:23:18.814544', '2023-05-02 19:23:18.814544'),
(3, 'BambooAirways', '2023-05-02 19:23:31.152707', '2023-05-02 19:23:31.152707'),
(5, 'PaficicAirways', '2023-05-04 08:46:26.498304', '2023-05-04 08:46:26.498304');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int NOT NULL,
  `bookingDate` datetime NOT NULL,
  `flightNumber` int NOT NULL,
  `seat` int NOT NULL,
  `passengerId` int DEFAULT NULL,
  `payStatus` int NOT NULL DEFAULT '0',
  `amount` float NOT NULL,
  `token` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `seatId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `isRoundTrip` int DEFAULT '0',
  `returnFlightNumber` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `bookingDate`, `flightNumber`, `seat`, `passengerId`, `payStatus`, `amount`, `token`, `seatId`, `createdAt`, `updatedAt`, `isRoundTrip`, `returnFlightNumber`) VALUES
(10, '2023-06-22 00:00:00', 6, 1, 10, 0, 500000, '3a488384-6555-4740-b0d8-27de08f44986', '16975', '2023-06-22 14:36:10.388581', '2023-06-22 14:36:10.388581', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `createdAt`, `updatedAt`) VALUES
(1, 'Tin tức', 'tin-tuc', '2023-05-02 23:31:44.405572', '2023-05-02 23:31:44.405572'),
(2, 'Dịch vụ', 'dich-vu', '2023-05-02 23:32:02.611089', '2023-05-02 23:32:02.611089'),
(4, 'Hỗ trợ', 'ho-tro', '2023-05-02 23:34:47.458828', '2023-05-02 23:34:47.458828'),
(5, 'Chưa phân loại', 'chua-phan-loai', '2023-05-02 23:42:11.979285', '2023-05-02 23:42:11.979285');

-- --------------------------------------------------------

--
-- Table structure for table `flight`
--

CREATE TABLE `flight` (
  `id` int NOT NULL,
  `arrivalTime` time NOT NULL,
  `departureTime` time NOT NULL,
  `availableSeat` int NOT NULL,
  `destination` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `travelDate` datetime NOT NULL,
  `price` float NOT NULL,
  `airlineId` int DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`id`, `arrivalTime`, `departureTime`, `availableSeat`, `destination`, `source`, `travelDate`, `price`, `airlineId`, `createdAt`, `updatedAt`) VALUES
(5, '12:15:00', '10:00:00', 20, 'SGN', 'HAN', '2023-06-22 00:00:00', 600000, 1, '2023-05-18 06:51:05.695000', '2023-06-22 05:59:34.000000'),
(6, '15:15:00', '13:00:00', 29, 'HAN', 'SGN', '2023-06-24 00:00:00', 500000, 1, '2023-05-18 06:51:43.354000', '2023-06-22 14:36:10.000000'),
(8, '04:52:00', '02:52:00', 20, 'SGN', 'HAN', '2023-06-22 00:00:00', 500000, 1, '2023-05-18 07:52:11.381000', '2023-05-18 07:52:11.381000'),
(9, '18:52:00', '04:52:00', 20, 'SGN', 'HAN', '2023-06-22 00:00:00', 500000, 1, '2023-05-18 07:52:58.847000', '2023-05-18 07:52:58.847000'),
(10, '18:53:00', '17:53:00', 10, 'SGN', 'HAN', '2023-06-22 00:00:00', 200000, 1, '2023-05-18 07:53:49.134000', '2023-05-18 07:53:49.134000'),
(11, '18:54:00', '15:54:00', 20, 'HAN', 'SGN', '2023-06-24 00:00:00', 400000, 1, '2023-05-18 07:54:29.055000', '2023-05-18 07:54:29.055000'),
(12, '21:54:00', '18:54:00', 20, 'HAN', 'SGN', '2023-06-24 00:00:00', 300000, 1, '2023-05-18 07:55:03.345000', '2023-05-18 07:55:03.345000'),
(13, '20:00:00', '16:55:00', 20, 'HAN', 'SGN', '2023-06-24 00:00:00', 600000, 1, '2023-05-18 07:55:40.180000', '2023-05-18 07:55:40.180000'),
(14, '18:56:00', '16:55:00', 20, 'SGN', 'HAN', '2023-06-22 00:00:00', 100000, 1, '2023-05-18 07:56:17.248000', '2023-05-18 07:56:17.248000'),
(15, '06:56:00', '17:56:00', 20, 'HAN', 'SGN', '2023-06-24 00:00:00', 700000, 1, '2023-05-18 07:56:46.171000', '2023-05-18 07:56:46.171000'),
(16, '16:57:00', '14:57:00', 20, 'PQC', 'SGN', '2023-06-22 00:00:00', 500000, 2, '2023-05-18 07:57:26.944000', '2023-05-18 07:57:26.944000'),
(17, '18:57:00', '15:57:00', 20, 'PQC', 'SGN', '2023-06-22 00:00:00', 600000, 2, '2023-05-18 07:57:50.504000', '2023-05-18 07:57:50.504000'),
(18, '21:58:00', '19:58:00', 20, 'PQC', 'SGN', '2023-06-22 00:00:00', 800000, 2, '2023-05-18 07:58:22.778000', '2023-05-18 07:58:22.778000'),
(21, '20:01:00', '18:01:00', 20, 'PQC', 'SGN', '2023-06-22 00:00:00', 300000, 2, '2023-05-18 01:01:24.503000', '2023-05-18 01:01:24.503000'),
(22, '20:01:00', '17:01:00', 20, 'SGN', 'PQC', '2023-06-24 00:00:00', 400000, 3, '2023-05-18 01:01:59.411000', '2023-05-18 01:01:59.411000');

-- --------------------------------------------------------

--
-- Table structure for table `passenger`
--

CREATE TABLE `passenger` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `passenger`
--

INSERT INTO `passenger` (`id`, `name`, `age`, `email`, `gender`, `createdAt`, `updatedAt`) VALUES
(3, 'Phan Hữu Nghị', 20, 'cuong2th2@gmail.com', 'Nam', '2023-05-04 08:44:33.660521', '2023-05-04 08:44:33.660521'),
(4, 'PhanHuuNghi', 20, 'phanhuunghi00000@gmail.com', 'Nam', '2023-05-04 10:02:16.065603', '2023-05-04 10:02:16.065603'),
(5, 'Nghị', 20, 'phanhuunghi00000@gmail.com', 'Nam', '2023-05-04 10:40:45.479528', '2023-05-04 10:40:45.479528'),
(6, 'phan huu nghị', 21, 'phanhuunghi00000@gmail.com', 'Nam', '2023-05-04 15:24:08.163472', '2023-05-04 15:24:08.163472'),
(7, 'Phan Huu Nghi', 21, 'phanhuunghi00000@gmail.com', 'Nữ', '2023-05-18 13:53:14.998976', '2023-05-18 13:53:14.998976'),
(8, 'Phan Huu Nghi', 21, 'phanhuunghi00000@gmail.com', 'Nam', '2023-05-25 12:02:48.853571', '2023-05-25 12:02:48.853571'),
(9, 'Phan Huu Nghi', 21, 'phanhuunghi00000@gmail.com', 'Nam', '2023-05-25 12:07:45.880293', '2023-05-25 12:07:45.880293'),
(10, 'Phan Huu Nghi', 20, 'phanhuunghi00000@gmail.com', 'Nam', '2023-06-22 14:36:10.345719', '2023-06-22 14:36:10.345719');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `catId` int NOT NULL DEFAULT '1',
  `markdown` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `html` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `catId`, `markdown`, `html`, `createdAt`, `updatedAt`) VALUES
(1, 'Các loại giấy tờ cần thiết khi đi máy bay', 4, '**CHUYẾN BAY NỘI ĐỊA**\n\n- Hành khách từ 14 tuổi trở lên khi làm thủ tục đi tàu bay trên các chuyến bay nội địa phải xuất trình:\n\n-   Đối với hành khách mang quốc tịch nước ngoài: hộ chiếu hoặc công hàm của cơ quan ngoại giao, lãnh sự xác nhận nhân thân của hành khách, có dán ảnh, dấu giáp lai và đơn giải trình mất hộ chiếu của hành khách có xác nhận của công an địa phương.\n-   Đối với hành khách mang quốc tịch Việt Nam phải xuất trình một trong các loại giấy tờ sau: hộ chiếu; giấy chứng minh nhân dân/Thẻ căn cước công dân; giấy chứng minh, chứng nhận của các lực lượng vũ trang; thẻ Đại biểu Quốc hội; thẻ Đảng viên; thẻ Nhà báo; giấy phép lái xe ô tô, mô tô; Thẻ của Ủy ban An ninh hàng không dân dụng quốc gia; Thẻ kiểm soát an ninh cảng hàng không, sân bay loại có giá trị sử dụng dài hạn; thẻ nhận dạng của các hãng hàng không Việt Nam; giấy chứng nhận nhân thân có xác nhận của công an phường, xã nơi cư trú.\n\n- Hành khách từ 12 tuổi đến dưới 14 tuổi không có hộ chiếu hoặc hành khách dưới 12 tuổi phải đáp ứng một trong các yêu cầu sau đây\n\n-   Đi cùng với người đại diện theo pháp luật;\n-   Đi cùng với hành khách là người làm thủ tục đi tàu bay và đi cùng suốt hành trình, được đăng ký với hãng hàng không khi mua vé;\n-   Có cam kết của đại diện hãng hàng không vận chuyển ban đầu trong việc chăm sóc hành khách đến điểm cuối của hành trình\n\n- Ngoài các quy định đối với hành khách từ 12 tuổi đến dưới 14 tuổi không có hộ chiếu hoặc hành khách dưới 12 tuổi, hành khách dưới 14 tuổi mà không có hộ chiếu khi làm thủ tục đi tàu bay trên các chuyến bay nội địa phải xuất trình một trong các loại giấy tờ sau:\n\n-   Giấy khai sinh; trường hợp dưới 01 tháng tuổi chưa có giấy khai sinh thì phải có giấy chứng sinh;\n-   Giấy xác nhận của tổ chức xã hội đối với trẻ em do tổ chức xã hội đang nuôi dưỡng, chỉ có giá trị sử dụng, trong thời gian 06 tháng kể từ ngày xác nhận.\n\n**CHUYẾN BAY QUỐC TẾ **\n\nHành khách khi làm thủ tục đi tàu bay trên các chuyến bay quốc tế phải xuất trình hộ chiếu hoặc giấy thông hành hoặc giấy tờ khác có giá trị xuất, nhập cảnh theo quy định của pháp luật như thị thực rời, thẻ thường trú, thẻ tạm trú (sau đây gọi chung là hộ chiếu); trường hợp trẻ em không có hộ chiếu riêng thì họ tên, ngày tháng năm sinh và ảnh của trẻ em được ghi và dán vào hộ chiếu của người đại diện theo pháp luật, bao gồm: cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi hoặc người giám hộ.', '<p><strong>CHUYẾN BAY NỘI ĐỊA</strong></p>\n<ul>\n<li>\n<p>Hành khách từ 14 tuổi trở lên khi làm thủ tục đi tàu bay trên các chuyến bay nội địa phải xuất trình:</p>\n</li>\n<li>\n<p>Đối với hành khách mang quốc tịch nước ngoài: hộ chiếu hoặc công hàm của cơ quan ngoại giao, lãnh sự xác nhận nhân thân của hành khách, có dán ảnh, dấu giáp lai và đơn giải trình mất hộ chiếu của hành khách có xác nhận của công an địa phương.</p>\n</li>\n<li>\n<p>Đối với hành khách mang quốc tịch Việt Nam phải xuất trình một trong các loại giấy tờ sau: hộ chiếu; giấy chứng minh nhân dân/Thẻ căn cước công dân; giấy chứng minh, chứng nhận của các lực lượng vũ trang; thẻ Đại biểu Quốc hội; thẻ Đảng viên; thẻ Nhà báo; giấy phép lái xe ô tô, mô tô; Thẻ của Ủy ban An ninh hàng không dân dụng quốc gia; Thẻ kiểm soát an ninh cảng hàng không, sân bay loại có giá trị sử dụng dài hạn; thẻ nhận dạng của các hãng hàng không Việt Nam; giấy chứng nhận nhân thân có xác nhận của công an phường, xã nơi cư trú.</p>\n</li>\n<li>\n<p>Hành khách từ 12 tuổi đến dưới 14 tuổi không có hộ chiếu hoặc hành khách dưới 12 tuổi phải đáp ứng một trong các yêu cầu sau đây</p>\n</li>\n<li>\n<p>Đi cùng với người đại diện theo pháp luật;</p>\n</li>\n<li>\n<p>Đi cùng với hành khách là người làm thủ tục đi tàu bay và đi cùng suốt hành trình, được đăng ký với hãng hàng không khi mua vé;</p>\n</li>\n<li>\n<p>Có cam kết của đại diện hãng hàng không vận chuyển ban đầu trong việc chăm sóc hành khách đến điểm cuối của hành trình</p>\n</li>\n<li>\n<p>Ngoài các quy định đối với hành khách từ 12 tuổi đến dưới 14 tuổi không có hộ chiếu hoặc hành khách dưới 12 tuổi, hành khách dưới 14 tuổi mà không có hộ chiếu khi làm thủ tục đi tàu bay trên các chuyến bay nội địa phải xuất trình một trong các loại giấy tờ sau:</p>\n</li>\n<li>\n<p>Giấy khai sinh; trường hợp dưới 01 tháng tuổi chưa có giấy khai sinh thì phải có giấy chứng sinh;</p>\n</li>\n<li>\n<p>Giấy xác nhận của tổ chức xã hội đối với trẻ em do tổ chức xã hội đang nuôi dưỡng, chỉ có giá trị sử dụng, trong thời gian 06 tháng kể từ ngày xác nhận.</p>\n</li>\n</ul>\n<p>**CHUYẾN BAY QUỐC TẾ **</p>\n<p>Hành khách khi làm thủ tục đi tàu bay trên các chuyến bay quốc tế phải xuất trình hộ chiếu hoặc giấy thông hành hoặc giấy tờ khác có giá trị xuất, nhập cảnh theo quy định của pháp luật như thị thực rời, thẻ thường trú, thẻ tạm trú (sau đây gọi chung là hộ chiếu); trường hợp trẻ em không có hộ chiếu riêng thì họ tên, ngày tháng năm sinh và ảnh của trẻ em được ghi và dán vào hộ chiếu của người đại diện theo pháp luật, bao gồm: cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi hoặc người giám hộ.</p>\n', '2023-05-02 23:53:53.274921', '2023-05-02 23:53:53.274921'),
(2, 'Các vật dụng phải kiểm tra soi chiếu riêng', 4, 'Hành khách cởi bỏ áo khoác, mũ, giầy, dép, thắt lưng, vật dụng cá nhân và các đồ vật khác mang theo người; đặt các đồ vật, chất lỏng, thiết bị điện tử vào khay đưa qua máy soi tia X trước khi đi qua cổng từ', '<p>Hành khách cởi bỏ áo khoác, mũ, giầy, dép, thắt lưng, vật dụng cá nhân và các đồ vật khác mang theo người; đặt các đồ vật, chất lỏng, thiết bị điện tử vào khay đưa qua máy soi tia X trước khi đi qua cổng từ</p>\n', '2023-05-02 23:54:45.612307', '2023-05-02 23:54:45.612307'),
(3, 'Danh mục các vật phẩm nguy hiểm hạn chế vận chuyển', 4, '**Danh mục các vật phẩm nguy hiểm không được mang theo người, hành lý xách tay lên tàu bay**\\\n*(Theo Quyết định số 1531/QĐ-CHK do Cục hàng không Việt Nam ban hành ngày 11/7/2017)*\n\n-   Vũ khí hoặc các dụng cụ có thể gây thương tích như súng, dao găm, gươm, giáo, các đồ vật có hình dáng giống vũ khí.\n-   Các dụng cụ/ thiết bị được thiết kế để gây choáng/ngất hoặc làm bất động đối tượng.\n-   Các vật sắc, nhọn có thể sử dụng để gây thương tích.\n-   Các dụng cụ lao động có thể sử dụng để gây thương tích .\n-   Các loại gậy thể thao, dùi cui, dụng cụ tập luyện võ thuật có đầu tù, nhọn, sắc cạnh.\n-   Các vật, chất cháy, nổ.\n\n**Danh mục các vật phẩm nguy hiểm không được mang theo hành lý ký gửi lên tàu bay**\\\n*(Theo Quyết định số 1531/QĐ-CHK do Cục hàng không Việt Nam ban hành ngày 11/7/2017)*\n\n-   Đạn*, trừ trường hợp được người khai thác tàu bay chấp nhận vận chuyển trong hành lý ký gửi theo các điều kiện cụ thể . \n-   Các loại kíp nổ, dây cháy chậm.\n-   Mìn, lựu đạn, thiết bị nổ quân dụng khác.\n-   Các loại pháo như pháo nổ, pháo hoa, pháo bông, pháo sáng, pháo hiệu và thuốc pháo.\n-   Đạn khói, quả tạo khói. Các loại thuốc nổ, thuốc súng.\n-   Xăng, dầu, nhiên liệu nạp cho bật lửa, diêm không an toàn (quẹt đâu cũng cháy), vật có chứa ôxy lỏng.\n\n*Không áp dụng đối với các vật lưu niệm được chế tác từ vỏ đạn.\n\n**Các vật phẩm hạn chế vận chuyển, chỉ được phép mang trong hành lý xách tay**\\\n*(Theo Quyết định số 1531/QĐ-CHK do Cục hàng không Việt Nam ban hành ngày 11/7/2017)*\n\n-   Thiết bị điện tử: máy tính xách tay, điện thoại di động ,...\n-   Pin Lithium cho thiết bị điện tử (ví dụ: sạc dự phòng,...)', '<p><strong>Danh mục các vật phẩm nguy hiểm không được mang theo người, hành lý xách tay lên tàu bay</strong><br>\n<em>(Theo Quyết định số 1531/QĐ-CHK do Cục hàng không Việt Nam ban hành ngày 11/7/2017)</em></p>\n<ul>\n<li>Vũ khí hoặc các dụng cụ có thể gây thương tích như súng, dao găm, gươm, giáo, các đồ vật có hình dáng giống vũ khí.</li>\n<li>Các dụng cụ/ thiết bị được thiết kế để gây choáng/ngất hoặc làm bất động đối tượng.</li>\n<li>Các vật sắc, nhọn có thể sử dụng để gây thương tích.</li>\n<li>Các dụng cụ lao động có thể sử dụng để gây thương tích .</li>\n<li>Các loại gậy thể thao, dùi cui, dụng cụ tập luyện võ thuật có đầu tù, nhọn, sắc cạnh.</li>\n<li>Các vật, chất cháy, nổ.</li>\n</ul>\n<p><strong>Danh mục các vật phẩm nguy hiểm không được mang theo hành lý ký gửi lên tàu bay</strong><br>\n<em>(Theo Quyết định số 1531/QĐ-CHK do Cục hàng không Việt Nam ban hành ngày 11/7/2017)</em></p>\n<ul>\n<li>Đạn*, trừ trường hợp được người khai thác tàu bay chấp nhận vận chuyển trong hành lý ký gửi theo các điều kiện cụ thể .</li>\n<li>Các loại kíp nổ, dây cháy chậm.</li>\n<li>Mìn, lựu đạn, thiết bị nổ quân dụng khác.</li>\n<li>Các loại pháo như pháo nổ, pháo hoa, pháo bông, pháo sáng, pháo hiệu và thuốc pháo.</li>\n<li>Đạn khói, quả tạo khói. Các loại thuốc nổ, thuốc súng.</li>\n<li>Xăng, dầu, nhiên liệu nạp cho bật lửa, diêm không an toàn (quẹt đâu cũng cháy), vật có chứa ôxy lỏng.</li>\n</ul>\n<p>*Không áp dụng đối với các vật lưu niệm được chế tác từ vỏ đạn.</p>\n<p><strong>Các vật phẩm hạn chế vận chuyển, chỉ được phép mang trong hành lý xách tay</strong><br>\n<em>(Theo Quyết định số 1531/QĐ-CHK do Cục hàng không Việt Nam ban hành ngày 11/7/2017)</em></p>\n<ul>\n<li>Thiết bị điện tử: máy tính xách tay, điện thoại di động ,...</li>\n<li>Pin Lithium cho thiết bị điện tử (ví dụ: sạc dự phòng,...)</li>\n</ul>\n', '2023-05-02 23:55:27.923390', '2023-05-02 23:57:37.000000'),
(5, 'WIFI miễn phí', 2, '\n### Wifi miễn phí tại nhà ga\n\nNhà ga quốc nội và quốc tế đã được trang bị dịch vụ wifi miễn phí, hoạt động 24/24h, cho phép hành khách truy cập internet không giới hạn thời gian.\n\nVui lòng lựa chọn mạng \"FreeWifi TanSonNhat AirPort\" để kết nối.\n![daylahinhanh](https://vietnamairport.vn/uploads/tansonnhatairport/users/1428452f212cbccc8573/images/dich-vu-tien-ich/yte01.png)', '<h3>Wifi miễn phí tại nhà ga</h3>\n<p>Nhà ga quốc nội và quốc tế đã được trang bị dịch vụ wifi miễn phí, hoạt động 24/24h, cho phép hành khách truy cập internet không giới hạn thời gian.</p>\n<p>Vui lòng lựa chọn mạng &quot;FreeWifi TanSonNhat AirPort&quot; để kết nối.\n<img src=\"https://vietnamairport.vn/uploads/tansonnhatairport/users/1428452f212cbccc8573/images/dich-vu-tien-ich/yte01.png\" alt=\"daylahinhanh\"></p>\n', '2023-05-03 22:38:25.915621', '2023-05-04 09:20:12.000000'),
(6, 'Nước uống miễn phí', 2, 'Nhà ga quốc nội và quốc tế đã trang bị dịch vụ nước uống miễn phí, hoạt động 24/24h tại các vị trí như sau:\n\n-   Ga quốc nội: tại gate 5, 10 và 16 khu cách ly ga đi\n-   Ga quốc tế: tại gate 15, 16 & 18 khu cách ly ga đi và khu vực băng chuyền số 1 và 6 ga đến', '<p>Nhà ga quốc nội và quốc tế đã trang bị dịch vụ nước uống miễn phí, hoạt động 24/24h tại các vị trí như sau:</p>\n<ul>\n<li>Ga quốc nội: tại gate 5, 10 và 16 khu cách ly ga đi</li>\n<li>Ga quốc tế: tại gate 15, 16 &amp; 18 khu cách ly ga đi và khu vực băng chuyền số 1 và 6 ga đến</li>\n</ul>\n', '2023-05-04 09:17:58.474085', '2023-05-04 09:17:58.474085'),
(7, 'Dịch vụ y tế', 2, 'Hành khách, nhân viên nếu cảm thấy không khỏe hoặc có yêu cầu cần trợ giúp y tế khi đang tại Cảng Hàng không QT Tân Sơn Nhất, xin vui lòng đến hoặc liên hệ các phòng trực y tế được bố trí trên nhà ga.\n\n**Ga quốc nội**\n\n-   **Phòng trực y tế quốc nội:**\n    -   Vị trí: Sảnh giữa ga đi và đến, gần cửa D2\n    -   Số điện thoại: (08) 38 485 383 - 3307\n    -   Giờ làm việc: 24 giờ hàng ngày\n\n**Ga quốc tế**\n\n-   **Phòng trực y tế quốc tế đi:**\n    -   Vị trí: Gần cửa khởi hành số 18\n    -   Số điện thoại: (08) 38 485 383 - 5422\n    -   Giờ làm việc: 24 giờ hàng ngày\n\n-   **Phòng trực y tế quốc tế đến:**\n    -   Vị trí: Tầng trệt, Sảnh cách ly ga đến (Cửa A2, cạnh quầy dịch vụ Taxi Mai Linh)\n    -   Số điện thoại: (08) 38 485 383 - 4066\n    -   Giờ làm việc: 24 giờ hàng ngày\n\n-   **Phòng trực y tế tại gate 17:**\n    -   Vị trí: tầng trệt dưới gate 17\n    -   Số điện thoại: (08) 38 485 383 - 3408\n    -   Giờ làm việc: 24 giờ hàng ngày\n\nTrong trường hợp khẩn cấp, cần cấp cứu xin vui lòng gọi đường dây nóng số (08) 38 485 383 - 3408, nhân viên y tế và xe cứu thương của Đội Y tế hàng không sẽ đến tận nơi để cấp cứu và chuyển viện kịp thời (trong thời gian từ 5 đến 7 phút).', '<p>Hành khách, nhân viên nếu cảm thấy không khỏe hoặc có yêu cầu cần trợ giúp y tế khi đang tại Cảng Hàng không QT Tân Sơn Nhất, xin vui lòng đến hoặc liên hệ các phòng trực y tế được bố trí trên nhà ga.</p>\n<p><strong>Ga quốc nội</strong></p>\n<ul>\n<li><strong>Phòng trực y tế quốc nội:</strong>\n<ul>\n<li>Vị trí: Sảnh giữa ga đi và đến, gần cửa D2</li>\n<li>Số điện thoại: (08) 38 485 383 - 3307</li>\n<li>Giờ làm việc: 24 giờ hàng ngày</li>\n</ul>\n</li>\n</ul>\n<p><strong>Ga quốc tế</strong></p>\n<ul>\n<li>\n<p><strong>Phòng trực y tế quốc tế đi:</strong></p>\n<ul>\n<li>Vị trí: Gần cửa khởi hành số 18</li>\n<li>Số điện thoại: (08) 38 485 383 - 5422</li>\n<li>Giờ làm việc: 24 giờ hàng ngày</li>\n</ul>\n</li>\n<li>\n<p><strong>Phòng trực y tế quốc tế đến:</strong></p>\n<ul>\n<li>Vị trí: Tầng trệt, Sảnh cách ly ga đến (Cửa A2, cạnh quầy dịch vụ Taxi Mai Linh)</li>\n<li>Số điện thoại: (08) 38 485 383 - 4066</li>\n<li>Giờ làm việc: 24 giờ hàng ngày</li>\n</ul>\n</li>\n<li>\n<p><strong>Phòng trực y tế tại gate 17:</strong></p>\n<ul>\n<li>Vị trí: tầng trệt dưới gate 17</li>\n<li>Số điện thoại: (08) 38 485 383 - 3408</li>\n<li>Giờ làm việc: 24 giờ hàng ngày</li>\n</ul>\n</li>\n</ul>\n<p>Trong trường hợp khẩn cấp, cần cấp cứu xin vui lòng gọi đường dây nóng số (08) 38 485 383 - 3408, nhân viên y tế và xe cứu thương của Đội Y tế hàng không sẽ đến tận nơi để cấp cứu và chuyển viện kịp thời (trong thời gian từ 5 đến 7 phút).</p>\n', '2023-05-04 09:18:45.972911', '2023-05-04 09:18:45.972911'),
(8, 'Khu vui chơi trẻ em', 2, 'Khu vui chơi trẻ em là tiện ích sân bay hoàn toàn miễn phí dành cho gia đình đi du lịch cùng trẻ nhỏ, được đặt tại ga Quốc tế hành lang cửa khởi hành 26-27, bố mẹ có thể chơi cùng bé trong thời gian chờ đến giờ bay. Khu vui chơi rộng 40m2 được trang bị thảm xốp lót sàn an toàn cho bé và nhiều đồ chơi như lego, đất nặn, cầu trượt, nhà đồ chơi… \n\n', '<p>Khu vui chơi trẻ em là tiện ích sân bay hoàn toàn miễn phí dành cho gia đình đi du lịch cùng trẻ nhỏ, được đặt tại ga Quốc tế hành lang cửa khởi hành 26-27, bố mẹ có thể chơi cùng bé trong thời gian chờ đến giờ bay. Khu vui chơi rộng 40m2 được trang bị thảm xốp lót sàn an toàn cho bé và nhiều đồ chơi như lego, đất nặn, cầu trượt, nhà đồ chơi…</p>\n', '2023-05-04 09:21:03.058274', '2023-05-04 09:21:03.058274'),
(9, 'Hãng hàng không', 2, '\n### Quốc nội\n![hangquocnoi](https://vietnamairport.vn/uploads/tansonnhatairport/users/1428452f212cbccc8573/images/THONG%20BAO1jpg_Page1.jpg)\n\n### Quốc tế\n![quocte](https://vietnamairport.vn/uploads/tansonnhatairport/users/1428452f212cbccc8573/images/Logo%20QT.jpg)\n', '<h3>Quốc nội</h3>\n<p><img src=\"https://vietnamairport.vn/uploads/tansonnhatairport/users/1428452f212cbccc8573/images/THONG%20BAO1jpg_Page1.jpg\" alt=\"hangquocnoi\"></p>\n<h3>Quốc tế</h3>\n<p><img src=\"https://vietnamairport.vn/uploads/tansonnhatairport/users/1428452f212cbccc8573/images/Logo%20QT.jpg\" alt=\"quocte\"></p>\n', '2023-05-04 09:22:47.243823', '2023-05-04 09:22:47.243823'),
(10, 'Hội thao Công đoàn Tổng công ty Cảng HKVN – Cụm miền Nam năm 2023', 1, 'Thực hiện Kế hoạch số 321 ngày 28/02/2023 của Công đoàn Tổng công ty Cảng hàng không Việt Nam về việc Tổ chức Hội thao chào mừng Đại hội Công đoàn các cấp, tiến tới Đại hội đại biểu Công đoàn Tổng công ty Cảng HKVN lần thứ III, nhiệm kỳ 2023-2028.\n\nĐược sự chỉ đạo, phân công nhiệm vụ của Ban Chấp hành Công đoàn Tổng công ty, Công đoàn cơ sở Cảng HKQT Tân Sơn Nhất là đơn vị chủ trì tổ chức “Hội thao Công đoàn TCT Cảng HKVN – Cụm miền Nam năm 2023” gồm các nội dung: bóng đá mini nam, cầu lông và bóng bàn.\n\n\n\nNghi thức Chào cờ Khai mạc Hội thao “Công đoàn TCT Cảng HKVN,\nCụm miền Nam năm 2023”.\n\n\n\nCác đội tuyển tham dự Lễ Khai mạc Hội thao\n\n\n\nBan tổ chức Hội thao trao hoa và cờ lưu niệm cho đại diện các Đội tuyển tham gia thi đấu.\n\nLễ khai mạc đã được tổ chức vào sáng ngày 24/4/2023 tại Nhà thi đấu Học Đường, quận Phú Nhuận, Tp. Hồ Chí Minh với sự tham gia chỉ đạo của ông Đặng Tuấn Tú, UV.BTV Đảng ủy TCT, Chủ tịch Công đoàn TCT Cảng HKVN và bà Hoàng Thị Thành, UV.BTV Công đoàn TCT, Phó Chánh Văn phòng Đảng ủy TCT Cảng HKVN. Buổi lễ còn có sự tham dự của các đại biểu là Chủ tịch, Phó chủ tịch các CĐCS trực thuộc Công đoàn TCT và hơn 120 vận động viên/cổ động viên đến từ 10 đội tuyển trực thuộc các cơ quan, đơn vị trong Cụm hoạt động phía Nam.\n\n\n\nÔng Đặng Tuấn Tú, UV.BTV Đảng ủy TCT, Chủ tịch Công đoàn TCT Cảng HKVN phát biểu chỉ đạo\n\ntại Lễ Khai mạc\n\nPhát biểu tại Lễ khai mạc Hội thao Cụm miền Nam năm 2023, Ông Đặng Tuấn Tú, UV.BTV Đảng ủy TCT, Chủ tịch Công đoàn TCT Cảng HKVN đã nhấn mạnh về việc phát huy tinh thần thể dục thể thao, thi đua lành mạnh và gắn bó tình đoàn kết cho CBNV-NLĐ trong toàn ACV nói chung và Cụm miền Nam nói riêng.\n\n\n\nÔng Phạm Vũ Cường, UV.BTV Công đoàn TCT, Phó Bí thư Đảng ủy Cảng, Phó Giám đốc, Chủ tịch Công đoàn cơ sở Cảng HKQT Tân Sơn Nhất, Trưởng Ban tổ chức tuyên bố Khai mạc hội thao.\n\nThay mặt Ban tổ chức Hội thao, ông Phạm Vũ Cường, UV.BTV Công đoàn TCT, Phó Bí thư Đảng ủy Cảng, Phó Giám đốc, Chủ tịch công đoàn cơ sở Cảng HKQT Tân Sơn Nhất, Trưởng Ban tổ chức đã đại diện tiếp thu ý kiến chỉ đạo của Chủ tịch Công đoàn TCT và chính thức tuyên bố Khai mạc “Hội thao Công đoàn TCT Cảng HKVN – Cụm miền Nam năm 2023”.\n\nSau gần 3 ngày triển khai thi đấu, vào chiều ngày 26/4/2023, Hội thao đã chính thức Bế mạc và công bố trao giải với các kết quả cụ thể được ghi nhận như sau:\n\n* Đối với Bộ môn Cầu lông\n\n1. Nội dung đôi nam nữ\n\n+ Giải nhất: Nguyễn Đức Thanh - Nguyễn Bùi Hồng Ngọc (Cần Thơ);\n\n+ Giải nhì: Trần Quang Phú - Phạm Thị Thu Trang (TIA);\n\n+ Giải ba: Võ Thành Trung - Nguyễn Thị Kiều Liên (TIA).\n\n2. Nội dung đôi nam\n\n+ Giải nhất: Trịnh Thanh Nhựt - Võ Hà Phan (TIA);\n\n+ Giải nhì: Võ Thành Trung - Ngô Tuấn Hiền (TIA);\n\n+ Giải ba: Nguyễn Phạm Tuấn - Lê Đình Cao (Liên Khương).\n\n3. Nội dung đơn nữ\n\n+ Giải nhất: Đinh Thị Tâm (SAGS);\n\n+ Giải nhì: Nguyễn Thị Kiều Liên (TIA);\n\n+ Giải ba: Phạm Thị Thu Trang (TIA).\n\n4. Nội dung đơn nam\n\n+ Giải nhất: Võ Hà Phan (TIA);\n\n+ Giải nhì: Trần Huỳnh Thanh Tùng (SAGS);\n\n+ Giải ba: Ngô Tuấn Hiền (TIA).\n\n* Đối với Bộ môn Bóng bàn\n\n1. Nội dung đơn nam\n\n+ Giải nhất: Võ Tấn Nam (TIA);\n\n+ Giải nhì: Hồ Quang Minh (TIA);\n\n+ Giải ba: Trần Sỹ Phong (Khối cơ quan ACV).\n\n2. Nội dung đôi nam\n\n+ Giải nhất: Hồ Quang Minh + Võ Tấn Nam (TIA);\n\n+ Giải nhì: Trần Sỹ Phong + Trương Quang Thịnh (Khối cơ quan ACV);\n\n+ Giải ba: Nguyễn Văn Nghi + Mai Anh Tuấn (Liên quân Rạch Giá + Cà Mau).\n\n* Đối với Bộ môn Bóng đá mini nam\n\n+ Giải nhất: Công ty Phục vụ Mặt đất Sài Gòn – SAGS;\n\n+ Giải nhì: Cảng HKQT Phú Quốc;\n\n+ Giải ba: Cảng HKQT Tân Sơn Nhất.\n\n\n\nÔng Đặng Tuấn Tú, Chủ tịch Công đoàn TCT Cảng HKVN và ông Phạm Vũ Cường, Trưởng Ban tổ chức Hội thao tham dự Lễ Bế mạc, công bố và trao giải cho Hội thao năm 2023\n\nKết thúc Hội thao Công đoàn Cụm miền Nam năm 2023, Khối Cơ quan ACV và Cảng HK Cần Thơ đạt “Giải Ba Toàn đoàn”; Công ty CP Phục vụ mặt đất Sài Gòn (SAGS) đạt “Giải Nhì toàn đoàn”; Cảng HKQT Tân Sơn Nhất xuất sắc đạt “Giải Nhất toàn đoàn” với 4 HCV, 4 HCB và 3 HCĐ.\n\n\n\nCác tập thể CĐCS xuất sắc đạt giải “Nhất – Nhì – Ba toàn đoàn” trong Hội thao Cụm miền Nam năm 2023.\n\nCó thể nói, Hội thao “Công đoàn TCT Cảng HKVN – Cụm miền Nam năm 2023” đã được tổ chức thành công với những kết quả rất xứng đáng và công tâm, tạo nên khí thế tưng bừng hướng tới chào mừng Đại hội Công đoàn các cấp và Đại hội đại biểu Công đoàn Tổng công ty Cảng HKVN lần thứ III, nhiệm kỳ 2023-2028.', '<p>Thực hiện Kế hoạch số 321 ngày 28/02/2023 của Công đoàn Tổng công ty Cảng hàng không Việt Nam về việc Tổ chức Hội thao chào mừng Đại hội Công đoàn các cấp, tiến tới Đại hội đại biểu Công đoàn Tổng công ty Cảng HKVN lần thứ III, nhiệm kỳ 2023-2028.</p>\n<p>Được sự chỉ đạo, phân công nhiệm vụ của Ban Chấp hành Công đoàn Tổng công ty, Công đoàn cơ sở Cảng HKQT Tân Sơn Nhất là đơn vị chủ trì tổ chức “Hội thao Công đoàn TCT Cảng HKVN – Cụm miền Nam năm 2023” gồm các nội dung: bóng đá mini nam, cầu lông và bóng bàn.</p>\n<p>Nghi thức Chào cờ Khai mạc Hội thao “Công đoàn TCT Cảng HKVN,\nCụm miền Nam năm 2023”.</p>\n<p>Các đội tuyển tham dự Lễ Khai mạc Hội thao</p>\n<p>Ban tổ chức Hội thao trao hoa và cờ lưu niệm cho đại diện các Đội tuyển tham gia thi đấu.</p>\n<p>Lễ khai mạc đã được tổ chức vào sáng ngày 24/4/2023 tại Nhà thi đấu Học Đường, quận Phú Nhuận, Tp. Hồ Chí Minh với sự tham gia chỉ đạo của ông Đặng Tuấn Tú, UV.BTV Đảng ủy TCT, Chủ tịch Công đoàn TCT Cảng HKVN và bà Hoàng Thị Thành, UV.BTV Công đoàn TCT, Phó Chánh Văn phòng Đảng ủy TCT Cảng HKVN. Buổi lễ còn có sự tham dự của các đại biểu là Chủ tịch, Phó chủ tịch các CĐCS trực thuộc Công đoàn TCT và hơn 120 vận động viên/cổ động viên đến từ 10 đội tuyển trực thuộc các cơ quan, đơn vị trong Cụm hoạt động phía Nam.</p>\n<p>Ông Đặng Tuấn Tú, UV.BTV Đảng ủy TCT, Chủ tịch Công đoàn TCT Cảng HKVN phát biểu chỉ đạo</p>\n<p>tại Lễ Khai mạc</p>\n<p>Phát biểu tại Lễ khai mạc Hội thao Cụm miền Nam năm 2023, Ông Đặng Tuấn Tú, UV.BTV Đảng ủy TCT, Chủ tịch Công đoàn TCT Cảng HKVN đã nhấn mạnh về việc phát huy tinh thần thể dục thể thao, thi đua lành mạnh và gắn bó tình đoàn kết cho CBNV-NLĐ trong toàn ACV nói chung và Cụm miền Nam nói riêng.</p>\n<p>Ông Phạm Vũ Cường, UV.BTV Công đoàn TCT, Phó Bí thư Đảng ủy Cảng, Phó Giám đốc, Chủ tịch Công đoàn cơ sở Cảng HKQT Tân Sơn Nhất, Trưởng Ban tổ chức tuyên bố Khai mạc hội thao.</p>\n<p>Thay mặt Ban tổ chức Hội thao, ông Phạm Vũ Cường, UV.BTV Công đoàn TCT, Phó Bí thư Đảng ủy Cảng, Phó Giám đốc, Chủ tịch công đoàn cơ sở Cảng HKQT Tân Sơn Nhất, Trưởng Ban tổ chức đã đại diện tiếp thu ý kiến chỉ đạo của Chủ tịch Công đoàn TCT và chính thức tuyên bố Khai mạc “Hội thao Công đoàn TCT Cảng HKVN – Cụm miền Nam năm 2023”.</p>\n<p>Sau gần 3 ngày triển khai thi đấu, vào chiều ngày 26/4/2023, Hội thao đã chính thức Bế mạc và công bố trao giải với các kết quả cụ thể được ghi nhận như sau:</p>\n<ul>\n<li>Đối với Bộ môn Cầu lông</li>\n</ul>\n<ol>\n<li>Nội dung đôi nam nữ</li>\n</ol>\n<ul>\n<li>\n<p>Giải nhất: Nguyễn Đức Thanh - Nguyễn Bùi Hồng Ngọc (Cần Thơ);</p>\n</li>\n<li>\n<p>Giải nhì: Trần Quang Phú - Phạm Thị Thu Trang (TIA);</p>\n</li>\n<li>\n<p>Giải ba: Võ Thành Trung - Nguyễn Thị Kiều Liên (TIA).</p>\n</li>\n</ul>\n<ol start=\"2\">\n<li>Nội dung đôi nam</li>\n</ol>\n<ul>\n<li>\n<p>Giải nhất: Trịnh Thanh Nhựt - Võ Hà Phan (TIA);</p>\n</li>\n<li>\n<p>Giải nhì: Võ Thành Trung - Ngô Tuấn Hiền (TIA);</p>\n</li>\n<li>\n<p>Giải ba: Nguyễn Phạm Tuấn - Lê Đình Cao (Liên Khương).</p>\n</li>\n</ul>\n<ol start=\"3\">\n<li>Nội dung đơn nữ</li>\n</ol>\n<ul>\n<li>\n<p>Giải nhất: Đinh Thị Tâm (SAGS);</p>\n</li>\n<li>\n<p>Giải nhì: Nguyễn Thị Kiều Liên (TIA);</p>\n</li>\n<li>\n<p>Giải ba: Phạm Thị Thu Trang (TIA).</p>\n</li>\n</ul>\n<ol start=\"4\">\n<li>Nội dung đơn nam</li>\n</ol>\n<ul>\n<li>\n<p>Giải nhất: Võ Hà Phan (TIA);</p>\n</li>\n<li>\n<p>Giải nhì: Trần Huỳnh Thanh Tùng (SAGS);</p>\n</li>\n<li>\n<p>Giải ba: Ngô Tuấn Hiền (TIA).</p>\n</li>\n</ul>\n<ul>\n<li>Đối với Bộ môn Bóng bàn</li>\n</ul>\n<ol>\n<li>Nội dung đơn nam</li>\n</ol>\n<ul>\n<li>\n<p>Giải nhất: Võ Tấn Nam (TIA);</p>\n</li>\n<li>\n<p>Giải nhì: Hồ Quang Minh (TIA);</p>\n</li>\n<li>\n<p>Giải ba: Trần Sỹ Phong (Khối cơ quan ACV).</p>\n</li>\n</ul>\n<ol start=\"2\">\n<li>Nội dung đôi nam</li>\n</ol>\n<ul>\n<li>\n<p>Giải nhất: Hồ Quang Minh + Võ Tấn Nam (TIA);</p>\n</li>\n<li>\n<p>Giải nhì: Trần Sỹ Phong + Trương Quang Thịnh (Khối cơ quan ACV);</p>\n</li>\n<li>\n<p>Giải ba: Nguyễn Văn Nghi + Mai Anh Tuấn (Liên quân Rạch Giá + Cà Mau).</p>\n</li>\n</ul>\n<ul>\n<li>Đối với Bộ môn Bóng đá mini nam</li>\n</ul>\n<ul>\n<li>\n<p>Giải nhất: Công ty Phục vụ Mặt đất Sài Gòn – SAGS;</p>\n</li>\n<li>\n<p>Giải nhì: Cảng HKQT Phú Quốc;</p>\n</li>\n<li>\n<p>Giải ba: Cảng HKQT Tân Sơn Nhất.</p>\n</li>\n</ul>\n<p>Ông Đặng Tuấn Tú, Chủ tịch Công đoàn TCT Cảng HKVN và ông Phạm Vũ Cường, Trưởng Ban tổ chức Hội thao tham dự Lễ Bế mạc, công bố và trao giải cho Hội thao năm 2023</p>\n<p>Kết thúc Hội thao Công đoàn Cụm miền Nam năm 2023, Khối Cơ quan ACV và Cảng HK Cần Thơ đạt “Giải Ba Toàn đoàn”; Công ty CP Phục vụ mặt đất Sài Gòn (SAGS) đạt “Giải Nhì toàn đoàn”; Cảng HKQT Tân Sơn Nhất xuất sắc đạt “Giải Nhất toàn đoàn” với 4 HCV, 4 HCB và 3 HCĐ.</p>\n<p>Các tập thể CĐCS xuất sắc đạt giải “Nhất – Nhì – Ba toàn đoàn” trong Hội thao Cụm miền Nam năm 2023.</p>\n<p>Có thể nói, Hội thao “Công đoàn TCT Cảng HKVN – Cụm miền Nam năm 2023” đã được tổ chức thành công với những kết quả rất xứng đáng và công tâm, tạo nên khí thế tưng bừng hướng tới chào mừng Đại hội Công đoàn các cấp và Đại hội đại biểu Công đoàn Tổng công ty Cảng HKVN lần thứ III, nhiệm kỳ 2023-2028.</p>\n', '2023-05-04 09:35:39.906644', '2023-05-04 09:35:39.906644'),
(11, 'Lịch sử hình thành và phát triển sân bay Tân Sơn Nhất', 4, 'Sân bay Tân Sơn Nhất do chế độ cũ để lại từ năm 1975, chia thành hai khu vực quân sự và dân sự rõ rệt, có nhà ga dân dụng quy mô so với bấy giờ là khá lớn, công suất khoảng 1,5 triệu lượt khách/năm, với đầy đủ trang thiết bị, cơ sở kỹ thuật mặt đất, cơ sở thương mại và dịch vụ hành khách tương đối đủ, do lực lượng của Quân đội nhân dân Việt Nam  vào tiếp quản sớm nên hầu hết các cơ sở này vẫn còn nguyên, bên cạnh đó, các trang thiết bị và cơ sở vật chất sửa chữa khôi phục và đưa vào hoạt động bình thường trong đó đáng kể là việc tập trung tiếp quản Nha kỹ thuật thuộc “Hãng hàng không Việt Nam” và “Sở khai thác không vận” thuộc Nha hàng không dân sự, khôi phục hệ thống thông tin chỉ huy, sửa chữa và ổn định lại nhà ga dân dụng.\nNgày 1 tháng 5 năm 1975, chiếc trực thăng Mi6 do phi công Lê Đình Ký thuộc Trung đoàn không quân 916 lái, hạ cánh xuống Sân bay Tân Sơn Nhất trở thành chiếc máy bay đầu tiên sơn phù hiệu Không quân Nhân dân Việt Nam hạ cánh xuống sân bay này. Ngày 3 tháng 5 năm 1975, chiếc máy bay vận tải IL14 của Lữ đoàn 919 chở đoàn cán bộ và phương tiện kỹ thuật hạ cánh xuống Tân Sơn Nhất nhằm tăng cường công tác đảm bảo kỹ thuật phục vụ các chuyến bay thường lệ đi, đến Tân Sơn Nhất.\nNgày 15 tháng 5 năm 1975, chiếc máy bay IL18 của Lữ đoàn 919 vinh dự đưa Chủ tịch Tôn Đức Thắng và nhiều đồng chí lãnh đạo cao cấp của Đảng, Nhà nước vào Sài Gòn dự lễ mừng chiến thắng. Cũng ngày 15 tháng 5 năm 1975, lực lượng tiếp quản đã khôi phục hoàn chỉnh 4 máy bay vận tải dân dụng vừa mới tiếp thu và đưa ngay những máy bay này vào hoạt động. Đường hàng không Sài Gòn – Hà Nội và ngược lại và Sài Gòn đi các địa phương ở miền Nam bắt đầu hoạt động với tần suất 5-6 lần/chuyến/ngày.\nNăm 1986, Đại hội lần thứ VI của Đảng cộng sản Việt Nam diễn ra từ ngày 15 - 18/12 đánh dấu cột mốc lớn cho sự thay đổi toàn diện của đất nước ta. Nền kinh tế bao cấp được xóa bỏ, cơ chế quản lý kinh tế và cách thức công nghiệp hóa được đổi mới toàn diện. Ngành giao thông vận tải nói chung và ngành hàng không dân dụng Việt Nam nói riêng cũng có những bước chuyển mình mạnh mẽ, nhanh chóng nắm bắt những cơ hội của nền kinh tế thị trường, tạo ra những bước phát triển đột phá, năng động trong hội nhập kinh tế quốc tế và vươn tới các châu lục.\nTrong xu thế phát triển đó, Cảng hàng không quốc tế Tân Sơn Nhất cũng không ngừng đầu tư các trang thiết bị hiện đại, nâng cấp cơ sở hạ tầng, góp phần cho công tác phục vụ hành khách ngày càng văn minh, lịch sự. Sản lượng hành khách, sản lượng cất hạ cánh và vận chuyển hàng hóa liên tục tăng nhanh qua các năm, đưa Cảng hàng không quốc tế Tân Sơn Nhất trở thành cảng hàng không lớn nhất cả nước, trở thành một nhân tố quan trọng thu hút đầu tư, du lịch và các hoạt động thương mại, văn hoá giữa Việt Nam nói chung và TP.HCM nói riêng với thế giới.\nNgày 7/9/2015,  Bộ trưởng Bộ Giao thông vận tải Đinh La Thăng đã ký Quyết định số 3193/QĐ-BGTVT về việc phê duyệt điều chỉnh quy hoạch chi tiết Cảng hàng không quốc tế Tân Sơn Nhất giai đoạn đến năm 2020 và định hướng đến năm 2030.\nTheo quy hoạch điều chỉnh, Cảng hàng không quốc tế Tân Sơn Nhất là Cảng hàng không đạt cấp 4E theo mã tiêu chuẩn của Tổ chức Hàng không dân dụng quốc tế (ICAO) và sân bay quân sự cấp I. \nQuy hoạch khu bay: Sử dụng 02 đường cất hạ cánh hiện hữu có khả năng tiếp nhận các loại tàu bay code E; sử dụng các đường lăn hiện hữu có khả năng tiếp nhận các loại tàu bay code E; hệ thống sân đỗ tàu bay gồm 82 vị trí đỗ tàu bay, trong đó 54 vị trị đỗ của hàng không dân dụng và 28 vị trị đỗ của hàng không lưỡng dụng; khai thác các loại máy bay: B747, B777/787, A350, A321 và tương đương.\nQuy hoạch khu hàng không dân dụng: Cải tạo, mở rộng các nhà ga hành khách đạt công suất 28 triệu hành khách/năm; đầu tư nâng cấp nhà ga hàng hóa theo từng giai đoạn phù hợp với nhu cầu khai thác, công suất đến năm 2030 đạt 1 triệu tấn/năm;\n', '<p>Sân bay Tân Sơn Nhất do chế độ cũ để lại từ năm 1975, chia thành hai khu vực quân sự và dân sự rõ rệt, có nhà ga dân dụng quy mô so với bấy giờ là khá lớn, công suất khoảng 1,5 triệu lượt khách/năm, với đầy đủ trang thiết bị, cơ sở kỹ thuật mặt đất, cơ sở thương mại và dịch vụ hành khách tương đối đủ, do lực lượng của Quân đội nhân dân Việt Nam  vào tiếp quản sớm nên hầu hết các cơ sở này vẫn còn nguyên, bên cạnh đó, các trang thiết bị và cơ sở vật chất sửa chữa khôi phục và đưa vào hoạt động bình thường trong đó đáng kể là việc tập trung tiếp quản Nha kỹ thuật thuộc “Hãng hàng không Việt Nam” và “Sở khai thác không vận” thuộc Nha hàng không dân sự, khôi phục hệ thống thông tin chỉ huy, sửa chữa và ổn định lại nhà ga dân dụng.\nNgày 1 tháng 5 năm 1975, chiếc trực thăng Mi6 do phi công Lê Đình Ký thuộc Trung đoàn không quân 916 lái, hạ cánh xuống Sân bay Tân Sơn Nhất trở thành chiếc máy bay đầu tiên sơn phù hiệu Không quân Nhân dân Việt Nam hạ cánh xuống sân bay này. Ngày 3 tháng 5 năm 1975, chiếc máy bay vận tải IL14 của Lữ đoàn 919 chở đoàn cán bộ và phương tiện kỹ thuật hạ cánh xuống Tân Sơn Nhất nhằm tăng cường công tác đảm bảo kỹ thuật phục vụ các chuyến bay thường lệ đi, đến Tân Sơn Nhất.\nNgày 15 tháng 5 năm 1975, chiếc máy bay IL18 của Lữ đoàn 919 vinh dự đưa Chủ tịch Tôn Đức Thắng và nhiều đồng chí lãnh đạo cao cấp của Đảng, Nhà nước vào Sài Gòn dự lễ mừng chiến thắng. Cũng ngày 15 tháng 5 năm 1975, lực lượng tiếp quản đã khôi phục hoàn chỉnh 4 máy bay vận tải dân dụng vừa mới tiếp thu và đưa ngay những máy bay này vào hoạt động. Đường hàng không Sài Gòn – Hà Nội và ngược lại và Sài Gòn đi các địa phương ở miền Nam bắt đầu hoạt động với tần suất 5-6 lần/chuyến/ngày.\nNăm 1986, Đại hội lần thứ VI của Đảng cộng sản Việt Nam diễn ra từ ngày 15 - 18/12 đánh dấu cột mốc lớn cho sự thay đổi toàn diện của đất nước ta. Nền kinh tế bao cấp được xóa bỏ, cơ chế quản lý kinh tế và cách thức công nghiệp hóa được đổi mới toàn diện. Ngành giao thông vận tải nói chung và ngành hàng không dân dụng Việt Nam nói riêng cũng có những bước chuyển mình mạnh mẽ, nhanh chóng nắm bắt những cơ hội của nền kinh tế thị trường, tạo ra những bước phát triển đột phá, năng động trong hội nhập kinh tế quốc tế và vươn tới các châu lục.\nTrong xu thế phát triển đó, Cảng hàng không quốc tế Tân Sơn Nhất cũng không ngừng đầu tư các trang thiết bị hiện đại, nâng cấp cơ sở hạ tầng, góp phần cho công tác phục vụ hành khách ngày càng văn minh, lịch sự. Sản lượng hành khách, sản lượng cất hạ cánh và vận chuyển hàng hóa liên tục tăng nhanh qua các năm, đưa Cảng hàng không quốc tế Tân Sơn Nhất trở thành cảng hàng không lớn nhất cả nước, trở thành một nhân tố quan trọng thu hút đầu tư, du lịch và các hoạt động thương mại, văn hoá giữa Việt Nam nói chung và TP.HCM nói riêng với thế giới.\nNgày 7/9/2015,  Bộ trưởng Bộ Giao thông vận tải Đinh La Thăng đã ký Quyết định số 3193/QĐ-BGTVT về việc phê duyệt điều chỉnh quy hoạch chi tiết Cảng hàng không quốc tế Tân Sơn Nhất giai đoạn đến năm 2020 và định hướng đến năm 2030.\nTheo quy hoạch điều chỉnh, Cảng hàng không quốc tế Tân Sơn Nhất là Cảng hàng không đạt cấp 4E theo mã tiêu chuẩn của Tổ chức Hàng không dân dụng quốc tế (ICAO) và sân bay quân sự cấp I.\nQuy hoạch khu bay: Sử dụng 02 đường cất hạ cánh hiện hữu có khả năng tiếp nhận các loại tàu bay code E; sử dụng các đường lăn hiện hữu có khả năng tiếp nhận các loại tàu bay code E; hệ thống sân đỗ tàu bay gồm 82 vị trí đỗ tàu bay, trong đó 54 vị trị đỗ của hàng không dân dụng và 28 vị trị đỗ của hàng không lưỡng dụng; khai thác các loại máy bay: B747, B777/787, A350, A321 và tương đương.\nQuy hoạch khu hàng không dân dụng: Cải tạo, mở rộng các nhà ga hành khách đạt công suất 28 triệu hành khách/năm; đầu tư nâng cấp nhà ga hàng hóa theo từng giai đoạn phù hợp với nhu cầu khai thác, công suất đến năm 2030 đạt 1 triệu tấn/năm;</p>\n', '2023-05-04 09:38:17.720809', '2023-05-04 09:38:17.720809'),
(12, 'Hội nghị Người lao động Cảng HKQT Tân Sơn Nhất năm 2023', 1, 'Sáng ngày 18/4/2023- Cảng HKQT Tân Sơn Nhất đã tổ chức thành công Hội nghị Đại biểu Người lao động năm 2023. Đến dự và chỉ đạo Hội nghị có ông Lại Xuân Thanh, Bí thư Đảng ủy, Chủ tịch Hội đồng quản trị Tổng công ty Cảng HKVN và ông Đặng Tuấn Tú, Ủy viên Ban Thường vụ Đảng ủy, Chủ tịch Công đoàn TCT Cảng HKVN. Chủ trì Hội nghị là ông Đặng Ngọc Cương, Bí thư Đảng ủy, Giám đốc Cảng HKQT Tân Sơn Nhất. Hội nghị còn có sự tham dự của các đồng chí là Ủy viên BTV Đảng ủy, Ban Giám đốc Cảng; thủ trưởng các cơ quan, đơn vị trực thuộc cùng với sự có mặt của 150 đại biểu đại diện cho 2.358 CBNV-NLĐ đang làm việc tại Cảng HKQT Tân Sơn Nhất.\n\n\n\nLễ chào cờ của các Đại biểu tham dự\nHội nghị Người lao động Cảng HKQT Tân Sơn Nhất năm 2023.\n\nHội nghị đã được nghe báo cáo đánh giá tình hình kết quả thực hiện nhiệm vụ kế hoạch năm 2022, phương hướng nhiệm vụ trong năm 2023; báo cáo kết quả tổ chức Hội nghị người lao động tại các đơn vị trực thuộc Cảng; kết quả thực hiện thỏa ước lao động tập thể, quy chế dân chủ và tổng hợp ý kiến đóng góp của NLĐ vào bản “Dự thảo Thỏa ước lao động tập thể”;“Dự thảo Nội quy lao động”;“Quy chế trả lương, thưởng” và một số quy định liên quan đến các chế độ, chính sách đối với Người lao động của TCT Cảng HKVN - CTCP.\n\n\n\nÔng Đặng Ngọc Cương, Bí thư Đảng ủy, Giám Đốc Cảng HKQT Tân Sơn Nhất\nchủ trì, diều hành thông qua các dự thảo báo cáo.\n\nNăm 2022, sản lượng khai thác tại Cảng HKQT Tân Sơn Nhất tăng cao đột biến so với cùng kỳ năm 2021. Vào một số thời điểm, sản lượng khai thác tại Cảng đã vượt so với cao điểm năm 2019 (giai đoạn chưa bị ảnh hưởng bởi dịch bệnh). Các vấn đề về điều hành khai thác, về tổ chức và phân công nhân sự lao động hợp lý… đã nhận được sự quan tâm lãnh đạo, chỉ đạo sâu sát từ Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc Tổng công ty Cảng HKVN. Cùng với đó, Đảng ủy, Ban Giám đốc Cảng HKQT Tân Sơn Nhất đã nỗ lực, quyết tâm, quyết liệt hoàn thành xuất sắc mọi nhiệm vụ được cấp trên giao phó.\n\nPhát biểu tại Hội nghị, đồng chí Lại Xuân Thanh – Chủ tịch Hội đồng quản trị TCT Cảng HKVN đã đánh giá cao về công tác tổ chức Hội nghị Người lao động của Cảng HKQT Tân Sơn Nhất; đồng chí ghi nhận mọi nỗ lực của Ban lãnh đạo và tập thể đội ngũ CB,CNV, NLĐ đang làm việc tại Cảng đã nỗ lực khắc phục mọi khó khăn trong thời gian qua để hoàn thành nhiệm vụ, kế hoạch được cấp trên giao phó. Đồng chí đề nghị Cảng HKQT Tân Sơn Nhất tiếp tục phát huy hơn nữa trong năm 2023 theo hướng linh hoạt, chủ động và phù hợp với tình hình thực tế tại Cảng.\n\n\n\nÔng Lại Xuân Thanh, Bí thư Đảng ủy, Chủ tịch Hội đồng quản trị TCT\nphát biểu chỉ đạo Hội nghị.\n\nQua gần 4 giờ làm việc khẩn trương, nghiêm túc với tinh thần dân chủ, đoàn kết và nhất trí cao, Hội nghị Đại biểu Người lao động Cảng HKQT Tân Sơn Nhất năm 2023 đã thành công tốt đẹp. Hội nghị đã thống nhất thông qua các nội dung dự thảo các báo cáo và thống nhất bầu 20 đại biểu tham dự Hội nghị Người lao động Tổng công ty Cảng HKVN năm 2023.\n\n\n\nCác đồng chí UV.BTV Đảng ủy, Ban Giám đốc Cảng cùng các đại biểu\nthực hiện công tác bỏ phiếu kín.\n\n\n\nCác Đại biểu đai diện Cảng HKQT TSN tham dự\nHội nghị Người lao động TCT Cảng HKVN năm 2023.\n\nHội nghị Đại biểu Người lao động Cảng HKQT Tân Sơn Nhất năm 2023 đã phát huy được quyền dân chủ trực tiếp. Người lao động được biết, được tham gia ý kiến, được quyết định và giám sát những vấn đề có liên quan đến quyền, lợi ích, nghĩa vụ và trách nhiệm của Người lao động trong việc tham gia quản lý, xây dựng đơn vị. Đồng thời, sự thành công của Hội nghị cũng đã góp phần thực hiện dân chủ trong khuôn khổ pháp luật, xây dựng đơn vị phát triển bền vững./.\n\n*Tin & Ảnh: Văn phòng Đảng Đoàn*', '<p>Sáng ngày 18/4/2023- Cảng HKQT Tân Sơn Nhất đã tổ chức thành công Hội nghị Đại biểu Người lao động năm 2023. Đến dự và chỉ đạo Hội nghị có ông Lại Xuân Thanh, Bí thư Đảng ủy, Chủ tịch Hội đồng quản trị Tổng công ty Cảng HKVN và ông Đặng Tuấn Tú, Ủy viên Ban Thường vụ Đảng ủy, Chủ tịch Công đoàn TCT Cảng HKVN. Chủ trì Hội nghị là ông Đặng Ngọc Cương, Bí thư Đảng ủy, Giám đốc Cảng HKQT Tân Sơn Nhất. Hội nghị còn có sự tham dự của các đồng chí là Ủy viên BTV Đảng ủy, Ban Giám đốc Cảng; thủ trưởng các cơ quan, đơn vị trực thuộc cùng với sự có mặt của 150 đại biểu đại diện cho 2.358 CBNV-NLĐ đang làm việc tại Cảng HKQT Tân Sơn Nhất.</p>\n<p>Lễ chào cờ của các Đại biểu tham dự\nHội nghị Người lao động Cảng HKQT Tân Sơn Nhất năm 2023.</p>\n<p>Hội nghị đã được nghe báo cáo đánh giá tình hình kết quả thực hiện nhiệm vụ kế hoạch năm 2022, phương hướng nhiệm vụ trong năm 2023; báo cáo kết quả tổ chức Hội nghị người lao động tại các đơn vị trực thuộc Cảng; kết quả thực hiện thỏa ước lao động tập thể, quy chế dân chủ và tổng hợp ý kiến đóng góp của NLĐ vào bản “Dự thảo Thỏa ước lao động tập thể”;“Dự thảo Nội quy lao động”;“Quy chế trả lương, thưởng” và một số quy định liên quan đến các chế độ, chính sách đối với Người lao động của TCT Cảng HKVN - CTCP.</p>\n<p>Ông Đặng Ngọc Cương, Bí thư Đảng ủy, Giám Đốc Cảng HKQT Tân Sơn Nhất\nchủ trì, diều hành thông qua các dự thảo báo cáo.</p>\n<p>Năm 2022, sản lượng khai thác tại Cảng HKQT Tân Sơn Nhất tăng cao đột biến so với cùng kỳ năm 2021. Vào một số thời điểm, sản lượng khai thác tại Cảng đã vượt so với cao điểm năm 2019 (giai đoạn chưa bị ảnh hưởng bởi dịch bệnh). Các vấn đề về điều hành khai thác, về tổ chức và phân công nhân sự lao động hợp lý… đã nhận được sự quan tâm lãnh đạo, chỉ đạo sâu sát từ Ban Thường vụ Đảng ủy, Ban Tổng Giám đốc Tổng công ty Cảng HKVN. Cùng với đó, Đảng ủy, Ban Giám đốc Cảng HKQT Tân Sơn Nhất đã nỗ lực, quyết tâm, quyết liệt hoàn thành xuất sắc mọi nhiệm vụ được cấp trên giao phó.</p>\n<p>Phát biểu tại Hội nghị, đồng chí Lại Xuân Thanh – Chủ tịch Hội đồng quản trị TCT Cảng HKVN đã đánh giá cao về công tác tổ chức Hội nghị Người lao động của Cảng HKQT Tân Sơn Nhất; đồng chí ghi nhận mọi nỗ lực của Ban lãnh đạo và tập thể đội ngũ CB,CNV, NLĐ đang làm việc tại Cảng đã nỗ lực khắc phục mọi khó khăn trong thời gian qua để hoàn thành nhiệm vụ, kế hoạch được cấp trên giao phó. Đồng chí đề nghị Cảng HKQT Tân Sơn Nhất tiếp tục phát huy hơn nữa trong năm 2023 theo hướng linh hoạt, chủ động và phù hợp với tình hình thực tế tại Cảng.</p>\n<p>Ông Lại Xuân Thanh, Bí thư Đảng ủy, Chủ tịch Hội đồng quản trị TCT\nphát biểu chỉ đạo Hội nghị.</p>\n<p>Qua gần 4 giờ làm việc khẩn trương, nghiêm túc với tinh thần dân chủ, đoàn kết và nhất trí cao, Hội nghị Đại biểu Người lao động Cảng HKQT Tân Sơn Nhất năm 2023 đã thành công tốt đẹp. Hội nghị đã thống nhất thông qua các nội dung dự thảo các báo cáo và thống nhất bầu 20 đại biểu tham dự Hội nghị Người lao động Tổng công ty Cảng HKVN năm 2023.</p>\n<p>Các đồng chí UV.BTV Đảng ủy, Ban Giám đốc Cảng cùng các đại biểu\nthực hiện công tác bỏ phiếu kín.</p>\n<p>Các Đại biểu đai diện Cảng HKQT TSN tham dự\nHội nghị Người lao động TCT Cảng HKVN năm 2023.</p>\n<p>Hội nghị Đại biểu Người lao động Cảng HKQT Tân Sơn Nhất năm 2023 đã phát huy được quyền dân chủ trực tiếp. Người lao động được biết, được tham gia ý kiến, được quyết định và giám sát những vấn đề có liên quan đến quyền, lợi ích, nghĩa vụ và trách nhiệm của Người lao động trong việc tham gia quản lý, xây dựng đơn vị. Đồng thời, sự thành công của Hội nghị cũng đã góp phần thực hiện dân chủ trong khuôn khổ pháp luật, xây dựng đơn vị phát triển bền vững./.</p>\n<p><em>Tin &amp; Ảnh: Văn phòng Đảng Đoàn</em></p>\n', '2023-05-04 09:43:34.130285', '2023-05-04 09:43:34.130285');

-- --------------------------------------------------------

--
-- Table structure for table `province`
--

CREATE TABLE `province` (
  `id` int NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `airportName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `province`
--

INSERT INTO `province` (`id`, `code`, `name`, `airportName`, `createdAt`, `updatedAt`) VALUES
(1, 'HAN', 'Hà Nội', 'Sân bay Nội Bài', '2023-05-02 13:17:23.210000', '2023-05-02 13:17:23.210000'),
(2, 'SGN', 'TP Hồ Chí Minh', 'Sân bay Tân Sơn Nhất', '2023-05-02 13:17:51.180000', '2023-05-02 13:17:51.180000'),
(3, 'DAD', 'Đà Nẵng', 'Sân bay Đà Nẵng', '2023-05-02 20:18:50.371549', '2023-05-02 20:18:50.371549'),
(4, 'HPH', 'Hải Phòng', 'Sân bay Cát Bi', '2023-05-02 20:19:20.567248', '2023-05-02 20:19:20.567248'),
(5, 'PQC', 'Phú Quốc', 'Sân bay Phú Quốc', '2023-05-02 20:20:07.952932', '2023-05-02 20:20:07.952932');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int NOT NULL,
  `bookingDate` datetime NOT NULL,
  `totalPay` float NOT NULL,
  `bookingId` int NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isAdmin` int NOT NULL DEFAULT '0',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `username`, `fullname`, `isAdmin`, `password`, `phone`, `createdAt`, `updatedAt`) VALUES
(1, 'admin@test.com', 'admin', 'Người quản lý', 1, '123', '0123456789', '2023-05-02 12:34:39.000000', '2023-05-02 12:34:39.000000'),
(2, 'khachhang@test.com', 'customer', 'Khách hàng VIP', 0, '123456', '0123456789', '2023-05-02 15:54:16.196205', '2023-05-03 21:57:49.000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airline`
--
ALTER TABLE `airline`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_690e3cf53f5101c59b242095b2b` (`passengerId`),
  ADD KEY `FK_8074248992c157ea99a8dfbb7c5` (`flightNumber`),
  ADD KEY `FK_15493dc8b02c9e6d5338e4a76df` (`returnFlightNumber`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_99b6d4dab676a98abe90802a31c` (`source`),
  ADD KEY `FK_5a7c51e3a9d0b6bb5208bfcef19` (`destination`),
  ADD KEY `FK_9178ec2896690b7cd4d69c4bc12` (`airlineId`);

--
-- Indexes for table `passenger`
--
ALTER TABLE `passenger`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_f3594002e75a8fb371f1734724d` (`catId`);

--
-- Indexes for table `province`
--
ALTER TABLE `province`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_3288dfa18d390ed33b359fc041` (`code`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `airline`
--
ALTER TABLE `airline`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `flight`
--
ALTER TABLE `flight`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `passenger`
--
ALTER TABLE `passenger`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `province`
--
ALTER TABLE `province`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `FK_15493dc8b02c9e6d5338e4a76df` FOREIGN KEY (`returnFlightNumber`) REFERENCES `flight` (`id`),
  ADD CONSTRAINT `FK_690e3cf53f5101c59b242095b2b` FOREIGN KEY (`passengerId`) REFERENCES `passenger` (`id`),
  ADD CONSTRAINT `FK_8074248992c157ea99a8dfbb7c5` FOREIGN KEY (`flightNumber`) REFERENCES `flight` (`id`);

--
-- Constraints for table `flight`
--
ALTER TABLE `flight`
  ADD CONSTRAINT `FK_5a7c51e3a9d0b6bb5208bfcef19` FOREIGN KEY (`destination`) REFERENCES `province` (`code`),
  ADD CONSTRAINT `FK_9178ec2896690b7cd4d69c4bc12` FOREIGN KEY (`airlineId`) REFERENCES `airline` (`id`),
  ADD CONSTRAINT `FK_99b6d4dab676a98abe90802a31c` FOREIGN KEY (`source`) REFERENCES `province` (`code`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_f3594002e75a8fb371f1734724d` FOREIGN KEY (`catId`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
