# OnlineBookStoreManagementSystem
# Book Heaven - Online Bookstore Web Application
Book Heaven is a simple online bookstore web application that allows users to browse books, manage their account, add books to a cart, and complete purchases through a checkout process. The application includes user authentication (login/register), an admin dashboard, and a receipt page for order confirmation.

## Features
- Browse books by categories and view product details.
- User registration and login with session management.
- Add books to a shopping cart and view cart contents.
- Checkout with payment form and order summary.
- Order receipt page displaying purchased books, payment details, and thank you message.
- Admin dashboard for managing the store (basic placeholder).
- Responsive and clean UI with CSS styling.

## File Structure
- `index.html` - Homepage of the bookstore.
- `products.html` - List of available books.
- `categories.html` - Book categories page.
- `book-description.html` - Detailed view of a selected book.
- `cart.html` - Shopping cart page.
- `checkout.html` - Checkout and payment page.
- `receipt.html` - Order receipt page shown after successful payment.
- `login.html` - User login and registration page.
- `account.html` - User account management page.
- `contact.html` - Contact form page.
- `admin-dashboard.html` - Admin dashboard page.
- `css/styles.css` - Main stylesheet.
- `js/` - JavaScript files handling various functionalities like account management, cart operations, animations, and general scripts.

## Technologies Used
- HTML5, CSS3 for structure and styling.
- JavaScript for client-side logic and interactivity.
- LocalStorage and SessionStorage for persisting user data, cart contents, and session management.

## How to Run
1. Clone or download the project files.
2. Open `index.html` in a modern web browser.
3. Navigate through the pages using the navigation menu.
4. Register a new user or login with existing credentials.
5. Add books to the cart and proceed to checkout.
6. Complete the payment form to place an order.
7. View the receipt on the receipt page after successful payment.

## Notes
- This is a front-end only application; no backend server or database is used.
- User data and cart information are stored in the browser's localStorage/sessionStorage.
- Payment processing is simulated; no real transactions occur.
- Admin login credentials are hardcoded as username: `admin`, password: `admin123`.

## Future Improvements
- Integrate with a backend server and database for persistent data storage.
- Implement real payment gateway integration.
- Enhance admin dashboard with full management capabilities.
- Add user profile picture upload and order history.
- Improve responsive design for mobile devices.

## License
This project is provided as-is for educational and demonstration purposes.

---
Thank you for using Book Heaven!
