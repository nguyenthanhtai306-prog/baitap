document.addEventListener("DOMContentLoaded", function() {
    const hoTen = document.getElementById('hoTen');
    const sdt = document.getElementById('sdt');
    const email = document.getElementById('email');
    const diaChi = document.getElementById('diaChi');
    const paymentMethod = document.getElementById('paymentMethod');
    const formCheckout = document.getElementById('checkoutForm');

    const hoTen_error = document.getElementById('hoTen_error');
    const sdt_error = document.getElementById('sdt_error');
    const email_error = document.getElementById('email_error');
    const diaChi_error = document.getElementById('diaChi_error');
    const payment_error = document.getElementById('payment_error');

    formCheckout.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Kiểm tra họ tên
        if (hoTen.value.trim() === "") {
            hoTen_error.textContent = "Vui lòng nhập họ tên";
            isValid = false;
        } else {
            // Regex kiểm tra: Mỗi từ bắt đầu bằng chữ hoa có dấu, theo sau là chữ thường có dấu
            const namePattern =
                /^([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-zàáâãèéêìíòóôõùúăđĩũơưạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)(\s[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ][a-zàáâãèéêìíòóôõùúăđĩũơưạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)*$/;

            if (!namePattern.test(hoTen.value.trim())) {
                hoTen_error.textContent =
                    "Họ tên không hợp lệ. Mỗi từ phải bắt đầu bằng chữ in hoa (ví dụ: Nguyễn Văn A)";
                isValid = false;
            } else {
                hoTen_error.textContent = "";
            }
        }




        // Kiểm tra số điện thoại
        if (sdt.value.trim() === '') {
            sdt_error.innerHTML = "*Số điện thoại không được để trống";
            isValid = false;
        } else if (!/^(09|03|07|06|05|04)\d{8}$/.test(sdt.value.trim())) {
            sdt_error.innerHTML = "*Số điện thoại phải gồm 10 số và bắt đầu bằng 09,03,07,06,05,04";
            isValid = false;
        } else {
            sdt_error.innerHTML = "";
        }

        // Kiểm tra email
        if (email.value.trim() === '') {
            email_error.innerHTML = "*Email không được để trống";
            isValid = false;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value.trim())) {
            email_error.innerHTML = "*Email không đúng định dạng";
            isValid = false;
        } else {
            email_error.innerHTML = "";
        }

        // Kiểm tra địa chỉ
        if (diaChi.value.trim() === '') {
            diaChi_error.innerHTML = "*Địa chỉ không được để trống";
            isValid = false;
        } else {
            diaChi_error.innerHTML = "";
        }

        // Kiểm tra phương thức thanh toán
        if (paymentMethod.value.trim() === '') {
            payment_error.innerHTML = "*Vui lòng chọn phương thức thanh toán";
            isValid = false;
        } else {
            payment_error.innerHTML = "";
        }

        if (isValid) {
            // Lưu thông tin thanh toán tạm thời
            const orderInfo = {
                hoTen: hoTen.value.trim(),
                sdt: sdt.value.trim(),
                email: email.value.trim(),
                diaChi: diaChi.value.trim(),
                payment: paymentMethod.value
            };
            localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
            alert("✅ Đặt hàng thành công!\nCảm ơn bạn đã mua sắm tại OTO STORE.");
            window.location.href = "success.html";
        }
    });

    // Kiểm tra khi blur từng ô
    hoTen.addEventListener("blur", () => {
        if (hoTen.value.trim() === '') hoTen_error.innerHTML = "*Họ tên không được để trống";
        else hoTen_error.innerHTML = "";
    });

    sdt.addEventListener("blur", () => {
        if (sdt.value.trim() === '') sdt_error.innerHTML = "*Số điện thoại không được để trống";
        else if (!/^(09|03|07|06|05|04)\d{8}$/.test(sdt.value.trim()))
            sdt_error.innerHTML = "*Số điện thoại không hợp lệ";
        else sdt_error.innerHTML = "";
    });

    email.addEventListener("blur", () => {
        if (email.value.trim() === '') email_error.innerHTML = "*Email không được để trống";
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value.trim()))
            email_error.innerHTML = "*Email không đúng định dạng";
        else email_error.innerHTML = "";
    });

    diaChi.addEventListener("blur", () => {
        if (diaChi.value.trim() === '') diaChi_error.innerHTML = "*Địa chỉ không được để trống";
        else diaChi_error.innerHTML = "";
    });
});