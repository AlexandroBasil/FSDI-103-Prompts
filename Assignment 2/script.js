var productName=prompt("Please enter the Product Name:");
var quantity=prompt("Please enter the Quantity:");
var price=prompt("Please enter the Price of product:");
// total price calculated based on Mexico sales tax of 16%

console.log(`
    Product Name: ${productName}
    Product Quantity: ${quantity}
    Total Price(incl. taxes): ${(price+Number(1.16))*quantity}
`)