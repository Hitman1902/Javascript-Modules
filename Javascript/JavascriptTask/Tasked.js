// Develop a Mini Shopping Cart System using JavaScript that demonstrates the use of Sets, Maps, Closures, Callbacks, Array Methods, Sorting, Date Handling, and Internationalization.

// Product Management:

// Create a Set to store unique product categories (e.g., "Electronics", "Clothing", "Groceries").
// Use a Map to store product details with Product ID as the key and an object as the value (containing name, category, price, and dateAdded).
// Functions to Implement:

// listProducts() → Display all products with their details.
// filterProductsByCategory(category) → Return an array of products that match the given category.
// sortProductsByPrice() → Sort and return products in ascending order of price.
// Discount System (Closures):

// Implement a closure function that takes a discount percentage and returns a function to apply the discount to any product price.
// Checkout System (Callbacks):

// Implement a checkout(productId, callback) function:
// Retrieve the product by its ID.
// Apply a 10% discount using the closure function.
// Print the original and discounted price.
// Execute the callback function once the order is complete.
// Date & Price Formatting (Intl API):

// Format product prices using Intl.NumberFormat (currency: INR).
// Format product dates using Intl.DateTimeFormat (en-GB).

// OUTPUT as -

// 🛍️ Welcome to the Shopping Cart!

// 🛒 Available Products:
// #1 - Laptop [Electronics] - ₹75,000.00 - Added: 1 February 2024
// #2 - T-Shirt [Clothing] - ₹1,500.00 - Added: 10 January 2024
// #3 - Rice [Groceries] - ₹800.00 - Added: 5 March 2024
// #4 - Headphones [Accessories] - ₹3,500.00 - Added: 15 February 2024
// #5 - Smartphone [Electronics] - ₹50,000.00 - Added: 20 February 2024
// #6 - Cooking Oil [Groceries] - ₹1,200.00 - Added: 10 March 2024
// #7 - JavaScript Book [Books] - ₹2,500.00 - Added: 25 January 2024
// #8 - Hoodie [Clothing] - ₹3,000.00 - Added: 5 February 2024

// 🔍 Searching for 'Clothing' category:
// [ { name: 'T-Shirt', category: 'Clothing', price: 1500, dateAdded: 2024-01-10T00:00:00.000Z },
//  { name: 'Hoodie', category: 'Clothing', price: 3000, dateAdded: 2024-02-05T00:00:00.000Z } ]

// 📊 Products sorted by price:
// [
//  { name: 'Rice', price: 800 },
//  { name: 'Cooking Oil', price: 1200 },
//  { name: 'T-Shirt', price: 1500 },
//  { name: 'JavaScript Book', price: 2500 },
//  { name: 'Hoodie', price: 3000 },
//  { name: 'Headphones', price: 3500 },
//  { name: 'Smartphone', price: 50000 },
//  { name: 'Laptop', price: 75000 }
// ]

// 🛒 Checking out Product ID 5:
// ✅ Checkout: Smartphone
// Original Price: ₹50,000.00, Discounted Price: ₹45,000.00
// 🎉 Order placed successfully!

const productCategories = new Set(['Electronics', 'Clothing', 'Groceries', 'Accessories', 'Books']);

const products = new Map([
  [1, { name: 'Laptop', category: 'Electronics', price: 75000, dateAdded: new Date('2024-02-01') }],
  [2, { name: 'T-Shirt', category: 'Clothing', price: 1500, dateAdded: new Date('2024-01-10') }],
  [3, { name: 'Rice', category: 'Groceries', price: 800, dateAdded: new Date('2024-03-05') }],
  [4, { name: 'Headphones', category: 'Accessories', price: 3500, dateAdded: new Date('2024-02-15') }],
  [5, { name: 'Smartphone', category: 'Electronics', price: 50000, dateAdded: new Date('2024-02-20') }],
  [6, { name: 'Cooking Oil', category: 'Groceries', price: 1200, dateAdded: new Date('2024-03-10') }],
  [7, { name: 'JavaScript Book', category: 'Books', price: 2500, dateAdded: new Date('2024-01-25') }],
  [8, { name: 'Hoodie', category: 'Clothing', price: 3000, dateAdded: new Date('2024-02-05') }],
]);

function listProducts() {
  console.log('Available Products:');
  products.forEach((product, id) => {
    console.log(`#${id} | Name: ${product.name} | category: ${product.category} | ${formatCurrency(product.price)} | Added: ${formatDate(product.dateAdded)}`);
  });
}

function filterProductsByCategory(category) {
  console.log(` Searching for '${category}' category:`);
  const filteredProducts = Array.from(products.values()).filter(product => product.category === category);
  console.log(filteredProducts);
}

function sortProductsByPrice() {
  const sortedProducts = Array.from(products.values()).sort((a, b) => a.price - b.price);
  console.log('Products sorted by price:');
  console.log(sortedProducts);
}

function createDiscountFunction(discountPercentage) {
  return function(price) {
    return price - (price * discountPercentage / 100);
  };
}

function checkout(productId, callback) {
  const product = products.get(productId);
  const discount = createDiscountFunction(10); 
  const discountedPrice = discount(product.price);
  console.log(`Checking out Product ID ${productId}:`);
  console.log(`Checkout: ${product.name}`);
  console.log(`Original Price: ${formatCurrency(product.price)}, Discounted Price: ${formatCurrency(discountedPrice)}`);
  callback();
}

function onOrderComplete() {
  console.log('Order placed successfully!');
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB').format(date);
}

console.log(' Welcome to the Shopping Cart!');


listProducts();

filterProductsByCategory('Clothing');

sortProductsByPrice();

checkout(5, onOrderComplete);
