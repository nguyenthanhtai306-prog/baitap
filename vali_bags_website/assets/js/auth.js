// js/auth.js
$("#registerForm").submit(function(e) {
    e.preventDefault();
    const email = $("#email").val();
    const pass = $("#password").val();
    const repass = $("#repass").val();
    if (pass !== repass) { alert("Mật khẩu không khớp!"); return; }

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === email)) { alert("Email đã tồn tại!"); return; }
    users.push({ email, pass });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    window.location.href = "login.html";
});

$("#loginForm").submit(function(e) {
    e.preventDefault();
    const email = $("#email").val();
    const pass = $("#password").val();
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let user = users.find(u => u.email === email && u.pass === pass);
    if (user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        window.location.href = "index.html";
    } else alert("Sai thông tin đăng nhập!");
});