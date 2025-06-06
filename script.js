// Order Now Function
function orderNow() {
    alert("Redirecting to menu...");
    window.location.href = "menu.html";
}

// Add to Cart Function
function addToCart(item, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ item, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item} added to cart!`);
}

// Checkout Function
function checkout() {
    alert("Order placed!");
    localStorage.removeItem("cart");
    window.location.href = "tracking.html";
}

// Order Status Function
function updateStatus() {
    let status = document.getElementById("status");
    if (status.innerText === "Order Placed") {
        status.innerText = "Cooking...";
    } else if (status.innerText === "Cooking...") {
        status.innerText = "Out for Delivery!";
    } else {
        status.innerText = "Delivered!";
    }
}
