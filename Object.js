// Object
// ======

// 1. Create an object using Object.create with a prototype that includes a method to calculate the square of a number.
const mathPrototype = {
  square: function(num) {
    return num * num;
  }
};

const mathObj = Object.create(mathPrototype);
console.log("Square of 4:", mathObj.square(4)); // Output: 16


// 2. Use Object.assign to merge two objects representing user profiles.
const user1 = { name: "Alice", age: 30 };
const user2 = { email: "alice@example.com", country: "USA" };

const mergedUser = Object.assign({}, user1, user2);
console.log("Merged user profile:", mergedUser); // Output: { name: "Alice", age: 30, email: "alice@example.com", country: "USA" }



// 3. Seal an object representing a book and attempt to add and modify its properties.
const book = { title: "1984", author: "George Orwell" };
Object.seal(book);

// Modify existing property
book.title = "Animal Farm"; // Allowed
console.log("Sealed book after title modification:", book); // Output: { title: "Animal Farm", author: "George Orwell" }

// Attempt to add new property (fails silently)
book.year = 1945;
console.log("Year in sealed book:", book.year); // Output: undefined

// Attempt to delete property (fails silently)
delete book.author;
console.log("Sealed book after deletion attempt:", book); // Output: { title: "Animal Farm", author: "George Orwell" }



// 4. Freeze an object representing a car and try to modify its properties.
const car = { make: "Honda", model: "Civic" };
Object.freeze(car);

// Modify existing property (fails silently)
car.model = "Accord"; // Fails silently
console.log("Frozen car after model modification:", car); // Output: { make: "Honda", model: "Civic" }

// Attempt to add new property (fails silently)
car.year = 2021;
console.log("Frozen car after adding year:", car); // Output: { make: "Honda", model: "Civic" }



// 5. Verify if the objects in exercises 3 and 4 are sealed or frozen.
console.log("Is the book sealed?", Object.isSealed(book)); // Output: true
console.log("Is the car frozen?", Object.isFrozen(car)); // Output: true



// 6. Create an object using Object.create that inherits properties and methods from two prototypes.
const prototype1 = {
  greet: function() {
    return `Hello, ${this.name}`;
  }
};

const prototype2 = {
  introduce: function() {
    return `I am ${this.name}, and I am ${this.age} years old.`;
  }
};

const combinedPrototype = Object.assign({}, prototype1, prototype2);
const person = Object.create(combinedPrototype);
person.name = "John";
person.age = 25;

console.log(person.greet()); // Output: Hello, John
console.log(person.introduce()); // Output: I am John, and I am 25 years old.



// 7. Use Object.assign to create a shallow copy of an object.
const originalObj = { a: 1, b: 2, c: 3 };
const shallowCopy = Object.assign({}, originalObj);

console.log("Shallow copy:", shallowCopy); // Output: { a: 1, b: 2, c: 3 }



// 8. Seal an object and verify its properties cannot be deleted or added but can be modified.
const sealedObject = { color: "red", size: "medium" };
Object.seal(sealedObject);

sealedObject.color = "blue"; // Allowed modification
console.log("Sealed object after modification:", sealedObject); // Output: { color: "blue", size: "medium" }

sealedObject.shape = "circle"; // Fails silently
delete sealedObject.size; // Fails silently
console.log("Sealed object after add/delete attempt:", sealedObject); // Output: { color: "blue", size: "medium" }



// 9. Freeze an object and verify its properties cannot be modified or added.
const frozenObject = { brand: "Toyota", model: "Corolla" };
Object.freeze(frozenObject);

frozenObject.brand = "Honda"; // Fails silently
frozenObject.year = 2020; // Fails silently
console.log("Frozen object after modification attempt:", frozenObject); // Output: { brand: "Toyota", model: "Corolla" }



// 10. Create a function that seals an object and prevents further modification of properties.
function sealObject(obj) {
  Object.seal(obj);
  console.log("Object sealed:", obj);
}

const objToSeal = { name: "Sam", age: 28 };
sealObject(objToSeal);

objToSeal.name = "Alex"; // Allowed
objToSeal.city = "New York"; // Fails silently
delete objToSeal.age; // Fails silently
console.log("Sealed object:", objToSeal); // Output: { name: "Alex", age: 28 }
