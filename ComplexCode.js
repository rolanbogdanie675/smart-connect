/*
File Name: ComplexCode.js
Content: A complex code example demonstrating a simplified online shopping system with user authentication, product searching, cart management, and payment processing.
*/

// Constants
const MIN_PASSWORD_LENGTH = 8;
const CART_LIMIT = 10;
const PRODUCTS_PER_PAGE = 10;

// User Authentication
class User {
  constructor(username, password) {
    this.username = username;
    this.setPassword(password);
    this.loggedIn = false;
  }

  setPassword(password) {
    if (password.length >= MIN_PASSWORD_LENGTH) {
      this.password = password;
    } else {
      throw new Error("Password should be at least " + MIN_PASSWORD_LENGTH + " characters long.");
    }
  }

  login() {
    this.loggedIn = true;
    console.log("Welcome, " + this.username + "!");
  }

  logout() {
    this.loggedIn = false;
    console.log("Goodbye, " + this.username + "!");
  }

  searchProduct(name, category) {
    // Simulated product search
    console.log("Searching for products with name: " + name + ", category: " + category);
  }

  addToCart(productId, quantity) {
    // Simulated cart management
    console.log(quantity + " units of product " + productId + " added to the cart.");
  }

  checkout() {
    // Simulated checkout and payment processing
    console.log("Checkout process initiated...");
    console.log("Payment processed successfully!");
    console.log("Order placed. Thank you for shopping with us, " + this.username + "!");
  }
}

// Product Listing
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

// Sample Usage
const user = new User("john_doe", "password123");
user.login();
user.searchProduct("headphones", "Electronics");
user.addToCart(123, 2);
user.addToCart(456, 1);
user.checkout();
user.logout();

const product1 = new Product(123, "Wireless Bluetooth Headphones", 49.99, "Electronics");
const product2 = new Product(456, "Smartphone Case", 14.99, "Accessories");
console.log(product1);
console.log(product2);