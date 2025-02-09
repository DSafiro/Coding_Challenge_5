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