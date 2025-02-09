// Task 1: Customer Profile
let customer = {name: "John Doe", 
    age: 35, 
    email: "johndoe@email.com"
}; // Declares customer profile as an object
console.log(`Customer Name: ${customer.name}`); // Outputs customer name
console.log(`Customer Age: ${customer.age}`); // Outputs customer age
console.log(`Customer Email: ${customer.email}`); // Outputs customer email

// Task 2: Order Details
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder () { // Declares displayOrder as a function inside object
        return console.log(`Order ID: ${this.orderId} | Total Amount: $${this.totalAmount} | Status: ${this.status}`) // Outputs order details 
    }
}; // Declares order details as an object
order.displayOrder(); // Returns displayOrder and outputs function

// Task 3: Shopping Cart
let cartItems = ["Cheese", "Milk", "Eggs"]; // Declares initial array
console.log(`Initial Cart Items: ${cartItems}`); // Outputs initial cart items
cartItems.push("Steak"); // Adds steak to array
cartItems.pop(); // Removes last item from array
cartItems.unshift("Juice"); // Adds juice to the beginning of array
cartItems.shift(); // Removes juice from beginning of array
console.log(`Final Cart Items: ${cartItems}`); // Outputs final cart items

// Task 4: Price Adjustments
let prices = [100, 200, 300]; // Declares initial prices as array
let discountedPrices = prices.map(price => price * .90); // Applies 10% discount to each price
console.log(`Discounted Prices: ${discountedPrices}`); // Outputs discounted prices 