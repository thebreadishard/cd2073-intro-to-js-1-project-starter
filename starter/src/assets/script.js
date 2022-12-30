/* Creating an array named products which we will use to add all of our product object literals. */

const products = [];
let totalPaid = 0;

/* Creating 3 or more product objects using object literal notation 
   Each product includes five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

products[0] = {
  name: "Carton of Cherries",
  price: 4,
  quantity: 0,
  productId: 101,
  image: "/images/cherry.jpg"
};

products[1] = {
  name: "Carton of Strawberries",
  price: 5,
  quantity: 0,
  productId: 102,
  image: "/images/strawberry.jpg"
};

products[2] = {
  name: "Bag of Oranges",
  price: 10,
  quantity: 0,
  productId: 103,
  image: "/images/orange.jpg"
};

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declaring an empty array named cart to hold the items in the cart */

const cart = [];

function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}

/* Creating a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart gets the correct product based on the productId
  - addProductToCart then increases the product's quantity
  - if the product is not already in the cart, we add it to the cart
*/

function addProductToCart(productId) {
  let product = getProductByIdFromList(productId, products);
  product.quantity = product.quantity + 1;
  if (!cart.includes(product)) {
    cart.push(product);
  }
}

/* Creating a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity gets the correct product based on the productId
  - increaseQuantity then increases the product's quantity
*/

function increaseQuantity(productId) {
  let product = getProductByIdFromList(productId, cart);
  product.quantity = product.quantity + 1;
}

/* Creating a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity gets the correct product based on the productId
  - decreaseQuantity decreases the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  let product = getProductByIdFromList(productId, cart);
  product.quantity = product.quantity - 1;
  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
}

/* Creating a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart gets the correct product based on the productId
  - removeProductFromCart updates the product quantity to 0
  - removeProductFromCart removes the product from the cart
*/

function removeProductFromCart(productId) {
  let product = getProductByIdFromList(productId, cart);
  product.quantity = 0;
  cart.pop(product);
}

/* Creating a function named cartTotal that has no parameters
  - cartTotal iterates through the cart to get the total of all products
  - cartTotal returns the sum of the products in the cart
*/

function cartTotal() {
  let total = 0;
  for (let p = 0; p < cart.length; p = p + 1) {
    total += cart[p].quantity * cart[p].price;
  }
  return Number.parseFloat(total.toFixed(2));
}

/* Creating a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.splice(0, cart.length);
}

/* Creating a function named pay that takes in an amount as an argument
  - pay returns a negative number if there is a remaining balance
  - pay returns a positive number if money should be returned to customer
*/

function pay(cashReceived) {
  totalPaid += cashReceived;
  let cashReturned = totalPaid - cartTotal();
  if (cashReturned >= 0) {
    totalPaid = 0;
  }
  return cashReturned;
}

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
}
