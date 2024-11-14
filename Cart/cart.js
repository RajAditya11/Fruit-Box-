document.addEventListener('DOMContentLoaded', function () {
    // Get the cart container element
    const cartContainer = document.getElementById('cart-upper');
    if (!cartContainer) {
        console.error("Cart container element not found!");
        return;
    }

    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length > 0) {
        // Loop through cartItems and append each to the cart container
        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('juice-box');
            itemDiv.innerHTML = `
                <img class="drink-img" src="${item.image}" alt="${item.name}">
                <h2 class="drink-text">${item.name}</h2>
                <div class="quantity-section">
                    <button class="sub" onclick="removeQuantity(${item.id})">-</button>
                    <h3 id="drink-quantity${item.id}" class="drink-quantity">${item.quantity}</h3>
                    <button class="add" onclick="addQuantity(${item.id})">+</button>
                </div>
                <h3 class="drink-price">₹ ${item.price}</h3>
                <button class="drink-button" onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartContainer.appendChild(itemDiv);
        });
    } else {
        cartContainer.innerHTML = "<h1>Your cart is empty</h1>";
    }
});

function addQuantity(itemId) {
    // Retrieve the cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItem = cartItems.find(item => item.id === itemId);

    if (cartItem) {
        cartItem.quantity++;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay();
    }
}

function removeQuantity(itemId) {
    // Retrieve the cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItem = cartItems.find(item => item.id === itemId);

    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay();
    }
}

function removeFromCart(itemId) {
    // Retrieve the cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.id !== itemId);

    // Update localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartDisplay();
}

function updateCartDisplay() {
    // Re-fetch and update the cart display
    const cartContainer = document.getElementById('cart-upper');
    cartContainer.innerHTML = ''; // Clear previous cart content

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('juice-box');
        itemDiv.innerHTML = `
            <img class="drink-img" src="${item.image}" alt="${item.name}">
            <h2 class="drink-text">${item.name}</h2>
            <div class="quantity-section">
                <button class="sub" onclick="removeQuantity(${item.id})">-</button>
                <h3 id="drink-quantity${item.id}" class="drink-quantity">${item.quantity}</h3>
                <button class="add" onclick="addQuantity(${item.id})">+</button>
            </div>
            <h3 class="drink-price">₹ ${item.price}</h3>
            <button class="drink-button" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });
}
