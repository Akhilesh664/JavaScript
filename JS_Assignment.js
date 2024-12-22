// 1. FizzBuzz Problem
function fizzBuzz() {
    console.log("1. FizzBuzz Problem:");
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// 2. Find the Largest Number
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// 3. Sum of Even and Odd Numbers
function sumEvenAndOdd() {
    console.log("\n3. Sum of Even and Odd Numbers:");
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }

    console.log("Sum of Even numbers:", sumEven);
    console.log("Sum of Odd numbers:", sumOdd);
}

// 4. Square Each Number in Array
function squareArray(arr) {
    console.log("\n4. Square Each Number in Array:");
    let squaredArray = arr.map(num => num * num);
    console.log("Squared Array:", squaredArray);
}

// 5. Square if < 30, Cube if > 30
function transformArray(arr) {
    console.log("\n5. Transform Array (Square if < 30, Cube if > 30):");
    let transformedArray = arr.map(num=>(num<30 ? num*num : num*num*num));
    console.log("Transformed Array:", transformedArray);
}

// 6. Handle Strings in Array
function handleMixedArray(arr){
    console.log("\n6. Handle Mixed Array (Strings & Numbers):");
    let result = arr.map(item => {
        if(typeof item === "number"){
            return (item < 30 ? item * item : item * item * item);
        }
        else{
            console.log("invalid number : ", item);
            return null;
        }
    });
    console.log("Final Transformed Array:", result);
}

// Test Cases
fizzBuzz(); // Call FizzBuzz

let numbers = [5, 17, 9, 42, 23];
console.log("\n2. Largest number is:", findLargest(numbers));

sumEvenAndOdd(); // Sum of Even and Odd Numbers

let arr1 = [20, 35, 42, 66, 15];
squareArray(arr1); // Square Each Number in Array

transformArray(arr1); // Square if < 30, Cube if > 30

let mixedArray = [20, "hello", 35, "world", 15,"bros"];
handleMixedArray(mixedArray); // Handle Mixed Array

