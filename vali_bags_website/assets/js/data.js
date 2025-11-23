// =============================
// 🚗 DANH SÁCH Ô TÔ
// =============================
const cars = [{
        id: 1,
        name: "Toyota Camry 2025",
        price: 1250000000,
        img: "../IMG/Camry2025.jpg",
        desc: "Sedan hạng D sang trọng, động cơ 2.5L mạnh mẽ, tiết kiệm nhiên liệu và nội thất cao cấp. Trang bị nhiều tính năng an toàn như cảnh báo va chạm, hỗ trợ giữ làn đường, và màn hình giải trí 10 inch."
    },
    {
        id: 2,
        name: "Mazda CX-5 2025",
        price: 970000000,
        img: "../IMG/Mazda-CX-5-2025.jpg",
        desc: "SUV 5 chỗ thời thượng với thiết kế KODO tinh tế, động cơ SkyActiv 2.0L, công nghệ GVC Plus giúp lái xe êm ái và ổn định. Khoang nội thất rộng rãi và tiện nghi cao cấp."
    },
    {
        id: 3,
        name: "KIA Carnival 2025",
        price: 1500000000,
        img: "../IMG/KIA-CARNIVAL-2025-1.jpg",
        desc: "MPV đa dụng cho gia đình, 7 chỗ ngồi thoải mái, nội thất da cao cấp, cửa lùa điện và hệ thống giải trí hiện đại. Động cơ Diesel 2.2L mạnh mẽ và tiết kiệm."
    },
    {
        id: 4,
        name: "Honda Accord 2025",
        price: 950000000,
        img: "../IMG/Honda-Accord-2025.jpg",
        desc: "Mẫu sedan cao cấp với phong cách thể thao, nội thất tinh tế, động cơ Turbo 1.5L cho công suất mạnh mẽ và tiết kiệm nhiên liệu. Hệ thống Honda Sensing hỗ trợ lái an toàn."
    },
    {
        id: 5,
        name: "Hyundai Tucson 2025",
        price: 1050000000,
        img: "../IMG/Hyundai-Tucson-2025.jpg",
        desc: "SUV 5 chỗ với thiết kế hiện đại, đèn LED hình học độc đáo, động cơ 2.0L và hộp số 6 cấp. Trang bị màn hình trung tâm 10.25 inch và hỗ trợ kết nối Apple CarPlay, Android Auto."
    },
    {
        id: 6,
        name: "BMW X5 2025",
        price: 2600000000,
        img: "../IMG/BMW-X5-2025.jpg",
        desc: "SUV hạng sang mạnh mẽ với động cơ 3.0L TwinPower Turbo, dẫn động 4 bánh xDrive, khoang nội thất sang trọng với hệ thống âm thanh Harman Kardon và đèn nội thất ambient."
    },
    {
        id: 7,
        name: "Mercedes-Benz S-Class 2025",
        price: 3500000000,
        img: "../IMG/Mercedes-Benz-S-Class-2025.jpg",
        desc: "Biểu tượng của sự đẳng cấp, sedan hạng sang với nội thất da Nappa cao cấp, màn hình OLED 12.8 inch, hệ thống lái bán tự động và cách âm tuyệt hảo."
    },
    {
        id: 8,
        name: "Audi Q7 2025",
        price: 2800000000,
        img: "../IMG/Audi-Q7-2025.jpg",
        desc: "SUV 7 chỗ sang trọng, động cơ V6 3.0L Mild Hybrid, nội thất da Valcona, màn hình kỹ thuật số ảo Audi Virtual Cockpit, hệ thống treo khí nén êm ái."
    },
    {
        id: 9,
        name: "Nissan Altima 2025",
        price: 850000000,
        img: "../IMG/Nissan-Altima-2025.jpg",
        desc: "Sedan thể thao, tiết kiệm nhiên liệu với động cơ VC-Turbo, hộp số vô cấp X-Tronic. Thiết kế năng động và trang bị hệ thống cảnh báo va chạm tiên tiến."
    },
    {
        id: 10,
        name: "Ford Mustang 2025",
        price: 2200000000,
        img: "../IMG/Ford-Mustang-2025.jpg",
        desc: "Xe thể thao huyền thoại với động cơ V8 5.0L, công suất 480 mã lực, hộp số 10 cấp và khả năng tăng tốc vượt trội. Thiết kế cơ bắp, đậm chất Mỹ."
    },
    {
        id: 11,
        name: "Chevrolet Silverado 2025",
        price: 2300000000,
        img: "../IMG/Chevrolet-Silverado-2025.jpg",
        desc: "Bán tải hạng nặng mạnh mẽ, động cơ V8 6.2L, hệ dẫn động 4 bánh, khả năng kéo tải vượt trội, nội thất rộng rãi và tiện nghi cho công việc lẫn giải trí."
    },
    {
        id: 12,
        name: "Porsche 911 2025",
        price: 4000000000,
        img: "../IMG/Porsche-911-2025.jpg",
        desc: "Siêu xe thể thao biểu tượng, động cơ Boxer 6 xi-lanh tăng áp kép, công suất 450 mã lực. Thiết kế khí động học hoàn hảo và khả năng tăng tốc 0-100 km/h trong 3.5 giây."
    }
];

// =============================
// 🧰 DANH SÁCH PHỤ KIỆN Ô TÔ
// =============================
const accessories = [{
        id: 1,
        name: "Thảm sàn 5D cao cấp",
        price: 500000,
        img: "../IMG/accessory1.jpg",
        desc: "Thảm sàn 5D chống nước, chống trơn trượt, kháng bụi và dễ vệ sinh. Thiết kế vừa khít từng dòng xe, bảo vệ sàn xe khỏi bẩn và trầy xước."
    },
    {
        id: 2,
        name: "Camera hành trình VietMap C65",
        price: 1500000,
        img: "../IMG/accessory2.jpg",
        desc: "Ghi hình Full HD, góc rộng 170°, có cảm biến va chạm và chế độ ghi hình ban đêm. Tích hợp GPS theo dõi hành trình."
    },
    {
        id: 3,
        name: "Bọc vô lăng da cao cấp",
        price: 300000,
        img: "../IMG/accessory3.jpg",
        desc: "Bọc vô lăng da mềm, chống trơn trượt, tăng độ bám tay và mang lại cảm giác lái thoải mái. Nhiều màu sắc sang trọng."
    },
    {
        id: 4,
        name: "Bộ sạc nhanh ô tô USB-C",
        price: 250000,
        img: "../IMG/accessory4.jpg",
        desc: "Sạc nhanh 2 cổng USB-A và USB-C, công suất 36W, tương thích với mọi dòng điện thoại và tablet. Có bảo vệ quá dòng an toàn."
    },
    {
        id: 5,
        name: "Máy lọc không khí trên xe",
        price: 1200000,
        img: "../IMG/accessory5.jpg",
        desc: "Thiết bị lọc bụi mịn PM2.5, khử mùi thuốc lá và mùi ẩm mốc trong xe. Sử dụng công nghệ ion âm và màng lọc HEPA."
    },
    {
        id: 6,
        name: "Giá đỡ điện thoại từ tính",
        price: 200000,
        img: "../IMG/accessory6.jpg",
        desc: "Giá đỡ gắn trên taplo hoặc khe gió điều hòa, có nam châm hút mạnh, giúp cố định điện thoại chắc chắn khi di chuyển."
    },
    {
        id: 7,
        name: "Cảm biến áp suất lốp TPMS",
        price: 1800000,
        img: "../IMG/accessory7.jpg",
        desc: "Hệ thống giám sát áp suất và nhiệt độ lốp theo thời gian thực, hiển thị trên màn hình nhỏ tiện lợi, giúp lái xe an toàn hơn."
    },
    {
        id: 8,
        name: "Bơm hơi mini cắm tẩu thuốc",
        price: 600000,
        img: "../IMG/accessory8.jpg",
        desc: "Máy bơm điện mini 12V, có màn hình hiển thị áp suất và tự ngắt khi đủ hơi. Gọn nhẹ, dễ mang theo khi đi xa."
    },
    {
        id: 9,
        name: "Tấm che nắng kính lái",
        price: 150000,
        img: "../IMG/accessory9.jpg",
        desc: "Tấm che phản quang chống nóng, gập gọn dễ cất. Giúp bảo vệ nội thất xe và giảm nhiệt độ bên trong xe khi đậu ngoài trời."
    }
];