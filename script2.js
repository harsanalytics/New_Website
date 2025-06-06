document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    let totalPrice = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.classList.add("cart-item");
        listItem.innerHTML = `${item.item} - $${item.price} 
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>`;
        
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price;
        itemCount++;
    });

    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("item-count").innerText = itemCount;
});

// Function to Remove Item from Cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// Checkout Function
function checkout() {
    alert("Your order has been placed!");
    localStorage.removeItem("cart");
    location.reload();
}
