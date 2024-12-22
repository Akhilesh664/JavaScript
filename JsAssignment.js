// Assignment Js
// =============

//====== Example 1: Using `call` with `greet`
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name} ${punctuation}`;
}

const person = { name: "Alice" };

// Using `call` to invoke `greet` with `person` as context
const message = greet.call(person, "Hello", "!");
console.log(message); // Output: "Hello, Alice!"

//======= Example 2: Using `apply` with `sum`
function sum(a, b, c) {
    return a + b + c + this.offset;
}

const context = { 
    offset: 10 
};

// Using `apply` to calculate the sum
const result = sum.apply(context, [1, 2, 3]);
console.log(result); // Output: 16 (1 + 2 + 3 + 10)

//======= Example 3: Using `call` and `apply` with `describe`

function describe(hobby, age) {
    return `${this.name} likes ${hobby} and is ${age} years old.`;
}

const user = { 
    name: "John" 
};

// Using `call`
const descriptionCall = describe.call(user, "cycling", 25);
console.log(descriptionCall); // Output: "John likes cycling and is 25 years old."

// Using `apply`
const descriptionApply = describe.apply(user, ["swimming", 28]);
console.log(descriptionApply); // Output: "John likes cycling and is 25 years old."


//======== Example 4: Using `call` to borrow `sayName`
const obj1 = { name: "David" };
const obj2 = { name: "Sarah" };

function sayName() {
    return this.name;
}

// Borrowing `sayName` from `obj1` and applying it to `obj2`
const name = sayName.call(obj2);
console.log(name); // Output: "Sarah"


//======== Example 5: Using `call`, `apply`, and `bind` with `calculateFinalPrice`
function calculateFinalPrice(tax, discount) {
    return this.price + tax - discount;
}

const product = { price: 100 };

// Using `call`
const priceWithCall = calculateFinalPrice.call(product, 20, 10);
console.log(priceWithCall); // Output: 110 (100 + 20 - 10)

// Using `apply`
const priceWithApply = calculateFinalPrice.apply(product, [20, 10]);
console.log(priceWithApply); // Output: 110

// Using `bind`
const calculateBound = calculateFinalPrice.bind(product, 20, 10);
const priceWithBind = calculateBound();
console.log(priceWithBind); // Output: 110
