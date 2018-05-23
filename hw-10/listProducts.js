const faker = require('faker');

console.log(`
=====================
“Welcome to my shop!”
=====================
`)
for (let i = 0; i < 10; i++) {
	console.log(faker.commerce.productName() + ": \t\t$" + faker.commerce.price());
}
