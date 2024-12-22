// 1. Transform an array of key-value pairs into an object
const arr1 = [["name", "John"], ["age", 25]];
const obj1 = Object.fromEntries(arr1);
console.log("1. Array to Object:", obj1);  // Output: { name: "John", age: 25 }

// 2. Transform a key-value pair array into an object where one of the values is itself an object
const data2 = [["id", 1], ["details", { gender: "female", status: "active" }]];
const obj2 = Object.fromEntries(data2);
console.log("2. Array to Object with nested object:", obj2);  // Output: { id: 1, details: { gender: "female", status: "active" } }

// 3. Convert an empty key-value pair array
const data3 = [];
const obj3 = Object.fromEntries(data3);
console.log("3. Empty Array to Object:", obj3);  // Output: {}

// 4. Convert an array of objects into an object with `id` as the key
const arr4 = [{ id: 1 }, { id: 2 }];
const obj4 = arr4.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});
console.log("4. Array of Objects to Object with `id` as key:", obj4);  // Output: { 1: { id: 1 }, 2: { id: 2 } }

// 5. Use reduce to find the maximum number in an array
const numbers = [3, 6, 2, 8, 5];
const maxNumber = numbers.reduce((max, current) => current > max ? current : max, numbers[0]);
console.log("5. Max Number:", maxNumber);  // Output: 8

// 6. Use find to get the object where the id is 3
const arr6 = [{ id: 1 }, { id: 3 }, { id: 5 }];
const foundObj = arr6.find(item => item.id === 3);
console.log("6. Object with id 3:", foundObj);  // Output: { id: 3 }

// 7. Use map to create a new array of full names
const people = [{ first: "John", last: "Doe" }];
const fullNames = people.map(person => `${person.first} ${person.last}`);
console.log("7. Full Names:", fullNames);  // Output: ["John Doe"]

// 8. Map to transform an array of arrays to a single-level array
const arr8 = [[1, 2], [3, 4]];
const flattenedArray = arr8.flat();
console.log("8. Flattened Array:", flattenedArray);  // Output: [1, 2, 3, 4]

// 9. Explanation of outer function with closure
function outerFunc(outerValue) {
  return function innerFunc(innerValue) {
    return outerValue + innerValue;
  };
}

const addFive = outerFunc(5);
console.log("9. Output of addFive(10):", addFive(10));  // Output: 15
console.log("9. Output of addFive(3):", addFive(3));    // Output: 8
// Explanation: The `outerValue` (5) is captured by the closure and used when calling innerFunc with different values (10 and 3).

// 10. Explanation of greet function with spread operator
const robot = {
  name: "Robo",
  greet(...messages) {
    return `${this.name}: ${messages.join(" ")}`;
  }
};

console.log("10. Robot Greeting:", robot.greet("Hello", "World!"));  // Output: "Robo: Hello World!"
// Explanation: The `greet` function uses the spread operator to collect all arguments and joins them into a single string.

