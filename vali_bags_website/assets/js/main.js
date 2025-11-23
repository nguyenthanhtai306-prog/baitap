// js/main.js
$(document).ready(function() {
    let html = '';
    cars.forEach(c => {
        html += `
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="${c.img}" class="card-img-top">
          <div class="card-body">
            <h5>${c.name}</h5>
            <p>Giá: ${c.price.toLocaleString()} VNĐ</p>
            <button class="btn btn-primary addCart" data-id="${c.id}">Thêm vào giỏ</button>
          </div>
        </div>
      </div>`;
    });
    $("#carList").html(html);

    $(".addCart").click(function() {
        const id = $(this).data("id");
        const car = cars.find(x => x.id === id);
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existing = cart.find(x => x.id === id);
        if (existing) existing.qty++;
        else cart.push({...car, qty: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("✅ Đã thêm vào giỏ hàng!");
    });
});