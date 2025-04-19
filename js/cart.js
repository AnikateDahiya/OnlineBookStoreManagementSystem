// Function to display cart items
function displayCartItems() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Retrieve cart from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear the cart list
    cartList.innerHTML = '';

    // Calculate total price
    let totalPrice = 0;

    // Display each item in the cart
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartList.appendChild(itemElement);
        totalPrice += item.price * item.quantity; // Calculate total price
    });

    // Display total price
    totalPriceElement.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            removeItemFromCart(index);
        });
    });
}

// Function to remove an item from the cart
function removeItemFromCart(index) {
    // Retrieve cart from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item at the specified index
    cart.splice(index, 1);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart display
    displayCartItems();
}

// Call the function to display cart items
displayCartItems();