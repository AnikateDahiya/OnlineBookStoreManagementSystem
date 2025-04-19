// Initialize cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Login/logout toggle logic for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');

    function checkLoginStatus() {
        const currentUser = sessionStorage.getItem('currentUser');
        if (currentUser) {
            if (loginLink) loginLink.style.display = 'none';
            if (logoutLink) logoutLink.style.display = 'inline';
        } else {
            if (loginLink) loginLink.style.display = 'inline';
            if (logoutLink) logoutLink.style.display = 'none';
        }
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }

    checkLoginStatus();
});

// Function to update the cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.innerText = totalCount; // Update the cart count
    }
}

// Function to save cart to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const price = parseFloat(this.getAttribute('data-price'));

        // Create a cart item object
        const cartItem = { title, price, quantity: 1 };

        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.title === title);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if item already exists
        } else {
            cart.push(cartItem); // Add new item to cart
        }

        // Update cart count display
        updateCartCount();
        saveCartToLocalStorage(); // Save cart to local storage
        alert(`${title} has been added to your cart!`); // Alert user
    });
});

// Add event listeners to all "Buy Now" buttons (direct buy)
document.querySelectorAll('.direct-buy').forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const price = parseFloat(this.getAttribute('data-price'));
        // Clear cart and add only this item
        cart = [{ title, price, quantity: 1 }];
        saveCartToLocalStorage();
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    });
});

// Update cart count on page load
updateCartCount();
