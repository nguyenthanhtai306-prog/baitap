document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById('emailInput');
    const password = document.getElementById('passwordInput');
    const formLogin = document.getElementById('loginForm');
    const email_error = document.getElementById('email_error');
    const pass_error = document.getElementById('pass_error');

    formLogin.addEventListener('submit', (e) => {
        let isValid = true;

        if (email.value.trim() === '') {
            email_error.innerHTML = "*Email không được bỏ trống";
            isValid = false;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value.trim())) {
            email_error.innerHTML = "*Email không đúng định dạng";
            isValid = false;
        } else {
            email_error.innerHTML = "";
        }

        if (password.value.trim() === '') {
            pass_error.innerHTML = "*Mật khẩu không được bỏ trống";
            isValid = false;
        } else {
            pass_error.innerHTML = "";
        }

        const emailDN = localStorage.getItem('email');
        const passwordDN = localStorage.getItem('password');

        if (email.value.trim() !== emailDN || password.value.trim() !== passwordDN) {
            pass_error.innerHTML = "*Email hoặc mật khẩu không đúng";
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            alert("Đăng nhập thành công!");
        }
    });

    email.addEventListener("blur", function() {
        if (email.value.trim() === '') {
            email_error.innerHTML = "*Email không được bỏ trống";
            isValid = false;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value.trim())) {
            email_error.innerHTML = "*Email không đúng định dạng";
        } else {
            email_error.innerHTML = "";
        }
    });

    password.addEventListener("blur", function() {
        if (password.value.trim() === '') {
            pass_error.innerHTML = "*Mật khẩu không được bỏ trống";
        } else {
            pass_error.innerHTML = "";
        }
    });

    const hoTen = document.getElementById('hoTen');
    const sdt = document.getElementById('number');
    const emailDk = document.getElementById('emailRegister');
    const passwordDK = document.getElementById('passwordRegister');
    const rePassword = document.getElementById('rePassword');
    const diaChi = document.getElementById('diaChi');
    const checkedValue = document.querySelector('.dongY');
    const formSigin = document.getElementById('formSigin');

    const hoTen_error = document.getElementById('hoTen_error');
    const sdt_error = document.getElementById('numberRegister_error');
    const emailDK_error = document.getElementById('emailRegister_error');
    const passwordDK_error = document.getElementById('passwordRegister_error');
    const rePassword_error = document.getElementById('rePassword_error');
    const diaChi_error = document.getElementById('addRegister_error');
    const check_error = document.getElementById('check_error');

    formSigin.addEventListener('submit', (e) => {
        let isValidDK = true;

        if (hoTen.value.trim() === '') {
            hoTen_error.innerHTML = "*Họ tên không được để trống";
            isValidDK = false;
        } else {
            hoTen_error.innerHTML = "";
        }

        if (sdt.value.trim() === '') {
            sdt_error.innerHTML = "*Số điện thoại không được để trống";
            isValidDK = false;
        } else if (sdt.value.trim().length !== 10) {
            sdt_error.innerHTML = "*Số điện thoại phải gồm 10 kí số";
            isValidDK = false;
        } else if (!/^(09|03|07|06|05|04)\d{8}$/.test(sdt.value.trim())) {
            sdt_error.innerHTML = "*Số điện thoại phải bắt đầu bằng 09, 03, 07, 06, 05, 04.";
            isValidDK = false;
        } else {
            sdt_error.innerHTML = "";
        }

        if (emailDk.value.trim() === '') {
            emailDK_error.innerHTML = "*Email không được để trống";
            isValidDK = false;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailDk.value.trim())) {
            emailDK_error.innerHTML = "*Email không đúng định dạng";
        } else {
            emailDK_error.innerHTML = "";
        }

        if (passwordDK.value.trim() === '') {
            passwordDK_error.innerHTML = "*Mật khẩu không được để trống";
            isValidDK = false;
        } else if (passwordDK.value.trim().length < 8 || !/[0-9]/.test(passwordDK.value.trim()) || !/[A-Z]/.test(passwordDK.value.trim()) ||
            !/[^a-zA-Z0-9]/.test(passwordDK.value.trim())) {
            passwordDK_error.innerHTML = "*Mật khẩu phải từ 8 kí tự trở lên, có ít nhất 1 kí tự số, 1 kí tự in hoa và 1 kí tự đặc biệt.";
        } else {
            passwordDK_error.innerHTML = "";
        }

        if (rePassword.value.trim() === '') {
            rePassword_error.innerHTML = "*Vui lòng nhập lại mật khẩu";
            isValidDK = false;
        } else if (rePassword.value !== passwordDK.value) {
            rePassword_error.innerHTML = "*Mật khẩu không khớp";
            isValidDK = false;
        } else {
            rePassword_error.innerHTML = "";
        }

        if (diaChi.value.trim() === '') {
            diaChi_error.innerHTML = "*Địa chỉ không được để trống";
            isValidDK = false;
        } else {
            diaChi_error.innerHTML = "";
        }

        if (!checkedValue.checked) {
            check_error.innerHTML = "*Bạn phải đồng ý với điều khoản";
            isValidDK = false;
        } else {
            check_error.innerHTML = "";
        }

        if (!isValidDK) {
            e.preventDefault();
        } else {
            localStorage.setItem('email', emailDk.value.trim());
            localStorage.setItem('password', passwordDK.value.trim());
            alert("Đăng kí thành công!");
        }
    });

    hoTen.addEventListener("blur", function() {
        if (hoTen.value.trim() === '') {
            hoTen_error.innerHTML = "*Họ tên không được để trống";
            isValidDK = false;
        } else {
            hoTen_error.innerHTML = "";
        }
    });

    sdt.addEventListener("blur", function() {
        if (sdt.value.trim() === '') {
            sdt_error.innerHTML = "*Số điện thoại không được để trống";
            isValidDK = false;
        } else if (sdt.value.trim().length !== 10) {
            sdt_error.innerHTML = "*Số điện thoại phải gồm 10 kí số";
            isValidDK = false;
        } else if (!/^(09|03|07|06|05|04)\d{8}$/.test(sdt.value.trim())) {
            sdt_error.innerHTML = "*Số điện thoại phải bắt đầu bằng 09, 03, 07, 06, 05, 04.";
            isValidDK = false;
        } else {
            sdt_error.innerHTML = "";
        }
    });

    emailDk.addEventListener("blur", function() {
        if (emailDk.value.trim() === '') {
            emailDK_error.innerHTML = "*Email không được để trống";
            isValidDK = false;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailDk.value.trim())) {
            emailDK_error.innerHTML = "*Email không đúng định dạng";
        } else {
            emailDK_error.innerHTML = "";
        }
    });

    passwordDK.addEventListener("blur", function() {
        if (passwordDK.value.trim() === '') {
            passwordDK_error.innerHTML = "*Mật khẩu không được để trống";
            isValidDK = false;
        } else if (passwordDK.value.trim().length < 8 || !/[0-9]/.test(passwordDK.value.trim()) || !/[A-Z]/.test(passwordDK.value.trim()) ||
            !/[^a-zA-Z0-9]/.test(passwordDK.value.trim())) {
            passwordDK_error.innerHTML = "*Mật khẩu phải từ 8 kí tự trở lên, có ít nhất 1 kí tự số, 1 kí tự in hoa và 1 kí tự đặc biệt.";
        } else {
            passwordDK_error.innerHTML = "";
        }
    });

    rePassword.addEventListener("blur", function() {
        if (rePassword.value.trim() === '') {
            rePassword_error.innerHTML = "*Vui lòng nhập lại mật khẩu";
            isValidDK = false;
        } else if (rePassword.value !== passwordDK.value) {
            rePassword_error.innerHTML = "*Mật khẩu không khớp";
            isValidDK = false;
        } else {
            rePassword_error.innerHTML = "";
        }
    });

    diaChi.addEventListener("blur", function() {
        if (diaChi.value.trim() === '') {
            diaChi_error.innerHTML = "*Địa chỉ không được để trống";
            isValidDK = false;
        } else {
            diaChi_error.innerHTML = "";
        }
    });

    const decreaseBtn = document.getElementById("decreaseBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const quantityInput = document.getElementById("quantityInput");

    decreaseBtn.addEventListener("click", function() {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener("click", function() {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    const toggleMenu = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    toggleMenu.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('expanded');
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleMenu = toggleMenu.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggleMenu && window.innerWidth < 992 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // Responsive sidebar behavior
    function handleResize() {
        if (window.innerWidth >= 992) {
            sidebar.classList.remove('active');
        }
    }

    window.addEventListener('resize', handleResize);
});