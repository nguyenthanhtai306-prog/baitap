// === DỮ LIỆU MẪU (nếu localStorage trống) ===
if (!localStorage.getItem("cart")) {
    const sampleCart = [
        { name: "Mazda CX-5 2025", price: 970000000, quantity: 1 },
        { name: "Toyota Camry 2025", price: 850000000, quantity: 1 },
        { name: "KIA Carnival 2025", price: 1299000000, quantity: 1 },
    ];
    localStorage.setItem("cart", JSON.stringify(sampleCart));
}

// === HÀM HIỂN THỊ GIỎ HÀNG ===
function displayCart() {
    const cartBody = document.getElementById("cart-body");
    const totalEl = document.getElementById("cart-total");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartBody.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <input type="number" class="quantity" min="1" value="${item.quantity}"
          onchange="updateQuantity(${index}, this.value)">
      </td>
      <td>${itemTotal.toLocaleString()} VNĐ</td>
      <td><button class="btn-remove" onclick="removeItem(${index})">Bỏ chọn</button></td>
    `;
        cartBody.appendChild(row);
    });

    totalEl.textContent = `Tổng: ${total.toLocaleString()} VNĐ`;
}

// === CẬP NHẬT SỐ LƯỢNG ===
function updateQuantity(index, newQty) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    newQty = parseInt(newQty);

    if (newQty < 1) newQty = 1;
    cart[index].quantity = newQty;

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// === XÓA SẢN PHẨM ===
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// === CHẠY LÚC LOAD TRANG ===
displayCart();