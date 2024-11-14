let drinks = [
    { id: 1, idname: 'oldfashioned', name: 'Old Fashioned', quantity: 0, img: '../Images/juice-1.jpg', priceValue: 10000 },
    { id: 2, idname: 'martini', name: 'Martini', quantity: 0, img: '../Images/juice-2.png', priceValue: 12000 },
    { id: 3, idname: 'manhatten', name: 'Manhattan', quantity: 0, img: '../Images/juice-3.png', priceValue: 9000 },
    { id: 4, idname: 'negroni', name: 'Negroni', quantity: 0, img: '../Images/juice-4.jpg', priceValue: 15000 },
    { id: 5, idname: 'margarita', name: 'Margarita', quantity: 0, img: '../Images/juice-5.jpg', priceValue: 11000 },
    { id: 6, idname: 'sazerac', name: 'Sazerac', quantity: 0, img: '../Images/juice-6.jpg', priceValue: 12000 },
    { id: 7, idname: 'whiskeysour', name: 'Whiskey Sour', quantity: 0, img: '../Images/juice-7.jpg', priceValue: 10500 },
    { id: 8, idname: 'french75', name: 'French 75', quantity: 0, img: '../Images/juice-8.jpg', priceValue: 10800 }
];

function addQuantity(itemId) {
    const drink = drinks.find(d => d.id === itemId);
    if (drink) {
        drink.quantity++;
        document.getElementById(`drink-quantity${itemId}`).innerText = drink.quantity;
    }
}

function removeQuantity(itemId) {
    const drink = drinks.find(d => d.id === itemId);
    if (drink && drink.quantity > 0) {
        drink.quantity--;
        document.getElementById(`drink-quantity${itemId}`).innerText = drink.quantity;
    }
}

function addToCart(itemId) {
    const drink = drinks.find(d => d.id === itemId);
    if (!drink) return; // If item not found, exit

    // Get existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the item already exists in the cart
    let cartItem = cartItems.find(item => item.id === itemId);

    if (cartItem) {
        // If the item is already in the cart, increase its quantity
        cartItem.quantity++;
    } else {
        // If the item is not in the cart, add it as a new item
        cartItem = { 
            id: drink.id, 
            name: drink.name, 
            price: drink.priceValue, 
            image: drink.img, 
            quantity: 1 
        };
        cartItems.push(cartItem);
    }

    // Save updated cart items array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Alert user that the item was added
    alert(`${drink.name} added to cart!`);
}
