// console.log can print something on console 
console.log("hello world");

// "use strict";
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable 

var firstName = "Saurabh";

// use a variable 
console.log(firstName);

// change value 

firstName = "Shaurya";

console.log(firstName);

// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "Saurabh"; // snake case writing 
// var firstName = "Saurabh"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 

// let keyword 
// declare variable with let keyword 

let firstName1 = "harshit";
firstName1 = "Mohit";
console.log(firstName1);

// declare constants 

const pi = 3.14;
console.log(pi);

// String indexing 

let firstName = "saurabhmanipandey";

//  h    a   r   s   h   i   t 
//  0    1   2   3   4   5   6

// console.log(firstName[0]);
// length of string 
// firstName.length 

console.log(firstName.length);

console.log(firstName[firstName.length-2]);

// last Index : length - 1 

// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "  Saurabh ";

// console.log(firstName.length);
// firstName = firstName.trim(); // "Saurabh12"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // Saurabh
console.log(newString);

// typeof operator 

// data types (primitive data types)
// string "saurabh"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

// let age = 22; 
// let firstName = "harshit";

// // console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"


// // convert string to number. 

// let myStr = +"34";

// console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);
// string concatenation 

let string1 = "17";
let string2 = "10";

let newString1 = +string1 + +string2;
console.log(typeof newString1);

// template string 
let age1 = 24;
let firstName = "Shivansh"

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

// by ${name} we can retrieve data in place
let aboutMe = `my name is ${firstName} and my age is ${age1}`

console.log(aboutMe);

// undefined 
// null

// let firstName;
// console.log(typeof firstName);
// firstName = "Pandey";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "Pandey";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);
// bug , error 

// BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// // console.log(myNumber);
// // console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);

// booleans & comparison operator 

// booleans 
// true, false 

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs === 
// console.log(num1 === num2);

// != vs !==

// console.log(num1 !== num2);

// truthy and falsy values 

// falsy values 


// false
// ""
// null 
// undefined
// 0

// if else condition 

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }

// ternary operator 

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator 

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// and  or operator 



// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
let firstName = "arshit";
let age = 16;

if(firstName[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}

// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}


// if 
// else if 
// else if 
// else if 
// else 

// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello");



// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello there");



let tempInDegree = 4;

if(tempInDegree > 40){
    console.log("too hot");
}else if(tempInDegree > 30){
    console.log("lets go for swim");
}else if(tempInDegree > 20){
    console.log("weather is cool");
}else if(tempInDegree > 10){
    console.log("it is very cold outside");
}else{
    console.log("extremely cold");
}

console.log("hello");


// let day = 7; 

// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thursday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }

// switch statement 
let day = 9;

switch(day){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}

// while loop 

// 0 se 9 
// dry don't repeat yourself
let j = 0; // 1 2 3 4

while(j<=9){
    console.log(j);
    j++;
}
console.log(`current value of i is ${j}`);
console.log("hello");

// while loop example 
let num1 = 100;

// let total = 0; //1 + 2 +3
// let i = 0;

// while(i<=100){
//     total = total + i;
//     i++;
// }


// console.log(total);

// let total = (num*(num+1))/2;
// console.log(total);

// intro to for loop 
// print 0 to 9

for(let i = 0;i<=9;i++){
    console.log(i);
}

// console.log("value of i is ",i);
// for loop example 

let total = 0;

let num = 100;

for(let i = 1; i<=num; i++){
    total = total + i;
}

console.log(total);

// break keywork

// continue keyword 

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
console.log("hello there");

// do while loop

// while(i<=9){
//     console.log(i);
//     i++;
// }

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);

// console.log("value of i is ", i);

// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits1 = ["apple", "mango", "grapes"];
let obj3 = {}; // object literal
// console.log(fruits1);
// fruits1[1] = "banana";
// console.log(fruits1);
console.log(typeof fruits1);
console.log(typeof obj3);
console.log(Array.isArray(fruits1));
console.log(Array.isArray(obj3));

// array push pop 

// array shift unshift 

let fruits3 = ["apple", "mango", "grapes"];
console.log(fruits3);
// push 
fruits3.push("banana");
console.log(fruits3);

// pop 
// let poppedFruit = fruits3.pop();
// console.log(fruits3);
// console.log("popped fruits is", poppedFruit);

// unshift 
// fruits3.unshift("banana");
// fruits3.unshift("myfruit");
// console.log(fruits3);

// shift 
// let removedFruit = fruits3.shift();
// console.log(fruits3);
// console.log("removed fruits is ", removedFruit);


// primitve vs reference data types
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);


// reference types 
// array 
let array5 = ["item1", "item2"];
let array6 = array5;
console.log("array1", array5);
console.log("array2", array6);
array5.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array5);
console.log("array2", array6);

// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)

// for loop in array 
// let fruits = ["apple", "mango", "grapes", "banana"];

// // for(let i=0; i<=9;i++){
// //     console.log(i);
// // }

// // console.log(fruits.length);
// // console.log(fruits[fruits.length-2]);
// let fruits2 = [];
// for(let i=0; i < fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);


// // while loop in array 

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);

// // for of loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// // for(let fruit of fruits){
// //     fruits2.push(fruit.toUpperCase());
// // }
// // console.log(fruits2);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);

//     // for in loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);


// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Golu ",age:22};
const person = {
    firstName: "Vikram",
    lastName: "Singh",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
// console.log(person["firstName"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person["person"] = "male";
console.log(person);

// difference between dot and bracket notaion
// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// console.log(person["person hobbies"]);
// person[key] = "harshitvashisth@gmail.com";
// console.log(person);

// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };
  
  // const newObject = { ...obj2, ...obj1, key69: "value69" };
  // const newObject = { ...["item1", "item2"] };
  // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
  // console.log(newObject);

  // object destructuring
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  
  let { bandName, famousSong, ...restProps } = band;
  console.log(bandName);
  console.log(restProps);

  // objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}