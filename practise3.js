// A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
// Function type.
// 1. Anonymous
// 2. Declarative// expression
// 3. Arrow function 

// 1. anomymous
function hello(){
    console.log("hello");
}
hello();

// 2. declarative
let hello2 = function(){
    console.log("hello2");
}
hello2();

// arrow function
let hello3 = () => {
    console.log("hello3");
}
hello3();

const add = function(a,b){
    console.log(a+b);
}
add(2,3);

// const square = function(c){
//     console.log(c*c);
// }
// square(2);

// isEven
// input : 1 number 
// output : true , false 
// function isEven(number){
//     return number % 2 === 0;
// }
// console.log(isEven(4));
// function 
// input : string 
// output: firstCharacter 
// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("zbc"));


function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]== target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,5,4];
const ans = findTarget(myArray, 5);
console.log(ans);

// function expression 
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }
// or
const singHappyBirthday = function(){
    console.log("happy birthday to you ......");
}
singHappyBirthday();

// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }
const singHappyBirthday1 = () => {
    console.log("happy birthday to you baby......");
}
singHappyBirthday1();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}
const ans1 = sumThreeNumbers(2,3,4);
console.log(ans1);

// hoisting 
/*In JavaScript, hoisting is a behavior where variable and function declarations 
are moved (or "hoisted") to the top of their containing scope during the 
compilation phase, before the code is executed. This allows variables and functions 
to be used before they are declared in the code. 
*/

hello4();
function hello4(){
    console.log("hello world");
}
console.log(hello4);
// const hello4 = "hello world";
// console.log(hello4);


// functions inside function 
function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1 * num2;
    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app();


// lexical scope 
const myVar = "value1";

function myApp(){
    
    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}
myApp();

// block scope vs function scope 
// let and const are block scope
// var is function scope 
// if(true){
//     var firstName = "Saurabh";
//     console.log(firstName);
// }
// console.log(firstName);


function myApp(){
    if(true){
        var firstName = "Saurabh";
        console.log(firstName);
    }
    if(true){
        console.log(firstName);
        console.log("==");

    }
    console.log(firstName);
}
myApp();

// default parameters 
// function addTwo(a, b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(d,e=0){
    return d+e;
}

const ans2 = addTwo(4, 8);
console.log(ans2);

// rest parameter
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc(3,4,5,6,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans4 = addAll(4,5,6,7);
console.log(ans4);

// param destructuring 
// object 
// react 
const person = {
    firstName: "Saurabh",
    gender: "male",
    age: 500
}
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);


// callback functions 
function myFunc2(name3){
    console.log("inside my func 2")
    console.log(`your name is ${name3}`);
}
function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("pandey");
}
myFunc(myFunc2);

// function returning function 
function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans5 = myFunc();
console.log(ans5);

const numbers = [3,2,5,8];
function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
}
numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});
numbers.forEach(function(number, index){
    console.log(number*3, index);
})


console.log("==============");

const employee = [
    {firstName:"akhilesh", age:25},
    {firstName:"gowri", age:23},
    {firstName:"harishta", age:22},
    {firstName:"shreya", age:25},
]

employee.forEach(function(emp){
    console.log(emp.firstName);
})

employee.forEach((emp, index)=>{
    console.log(emp.firstName, index);
})

for(let emp of employee){
    console.log(emp.firstName);
}

// map method
const number = [3,2,1,5,6];
const square = function(number){
    return number*number;
}
const squareNumber = number.map((number, index)=>{
    return index;
})
console.log(squareNumber);


// mapping on objects 
const users = [
    {firstName: "shivam", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
})
console.log(userNames);

// filter method
const numbers1 = [1,3,2,6,4,8];
const evenNumbers = numbers1.filter((number)=>{
    return number % 2 === 0;  
});
console.log(evenNumbers);


// Reduce 
// const numbers2 = [1, 2, 3, 4, 5, 10];
// // aim : sum of all the numbers in array 
// const sum = numbers2.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);


// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]
const TotalAmount = userCart.reduce((TotalPrice, currentProduct)=>{
    return TotalPrice + currentProduct.price;
}, 0)

console.log(`${TotalAmount} rs`);


// sort  
// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)
// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]
const userNames1 = ['shivam', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
const new1 = userNames1.sort();
console.log(new1);
console.log(userNames1);

// const numbers3 = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// // numbers3.sort();
// console.log(numbers3);

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]
const lowToHigh = products.slice(0).sort((a, b)=>{
    return a.price - b.price
})

const HighToLow = products.slice(0).sort((a, b)=>{
    return b.price - a.price
})

console.log(lowToHigh);
console.log(HighToLow);


const users1  = [
    {firstName: "shivam", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]
users1.sort((a, b) => {
    if(a.firstName > b.firstName){
        return 1;
    }else{
        return -1;
    }
});
console.log(users1);


const myArray1 = ["Hello", "catt", "dog", "lion"];

function isLength3(string){
    return string.length === 3;
}
const ans3 = myArray.find((string)=>{string.length===3});
console.log(isLength3(myArray1));
// console.log(ans3);


const users2 = [
    {userId : 1, userName: "shivam"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users2.find((user) => user.userId === 3);
console.log(myUser);

// every method -- because it check all element in array is full-filling condition
const numbers2 = [2,4,6,9,10];
const ans6 = numbers2.every((number) => number%2===0);
console.log(ans6);

// In object
const userCart1 = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]

const ans7 = userCart1.every((cartItem) => cartItem.price > 3000);
console.log(ans7);


// some method  : is their any number in array full-filling condition 
const numbers3 = [3,5,11,9];
const ans8 = numbers3.some((number) => number%2 === 0);
console.log(ans8);

// on object
const userCart2 = [
    {productId: 1, productName: "mobile", price: 6000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

const ans9 = userCart2.some((cartItem)=>cartItem.price > 10000);
console.log(ans9);


// fill method 
// value , start , end 
const myArray2 = new Array(10).fill(0);
console.log(myArray2);

const myArray3 = [1,2,3,4,5,6,7,8];
myArray3.fill(0,2,5);
console.log(myArray3);


// splice method 
// start , delete , insert 
const myArray4 = ['item1', 'item2', 'item3'];

// delete
const deletedItem1 = myArray4.splice(1, 2);
console.log("deleted item", deletedItem1);

// insert 
myArray4.splice(1, 0,'inserted item');
console.log(myArray4);

// insert and delete 
const deletedItem2 = myArray.splice(1, 2, "inserted item1", "inserted item2")

console.log("deleted item", deletedItem2);
console.log(myArray4);


// iterables 
// string , array are iterable 
// on String
const firstName = "Yazhain";

for(let char of firstName){
    console.log(char);
}

// on Arrays
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}
// or
console.log(items);


// array like object : which have length property(), and which can access by index
// ex - string
const firstName2 = "Yazhain";
console.log(firstName2.length);
console.log(firstName2[2]);

// Sets (it is iterable), store data, sets also have its own methods, No index-based access, Order is not guaranteed, unique items only (no duplicates allowed)
const items1 = ['item1', 'item2', 'item3'];
const numbers4 = new Set();
numbers4.add(1);
numbers4.add(2);
numbers4.add(3);
numbers4.add(4);
numbers4.add(5);
numbers4.add(6);
numbers4.add(items);
if(numbers4.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}

console.log(numbers4);


for(let number of numbers4){
    console.log(number);
}

const myArray5 = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray5);
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(myArray5.length);
console.log(uniqueElements);
console.log(length);


// Maps
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps / objects: 
// objects can only have string or symbol
// as key =
// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol 
const person1 = {
    firstName : "Pranjal",
    age: 7,
    1:"one"
}
console.log(person1.firstName);
// console.log(person1["firstName"]);
console.log(person1[1]);
for(let key in person1){
    console.log(typeof key);
}



// key value pair 
const person2 = new Map();

person2.set('firstName', 'Saurabh');
person2.set('age', 7);
person2.set(1,'one');
person2.set([1,2,3],'onetwothree');
person2.set({1: 'one'},'onetwothree');

console.log(person2);
console.log(person2.get(1));

for(let key of person2.keys()){
    console.log(key, typeof key);
}

for(let [key, value] of person2){
    // console.log(Array.isArray(key));
    console.log(key, value)
}


const person3 = {
    id: 1,
    firstName: "Rishabh"
}
const person4 = {
    id: 2,
    firstName: "Rishabh"
}

const extraInfo = new Map();

extraInfo.set(person3, {age: 8, gender: "male"});
extraInfo.set(person4, {age: 9, gender: "female"});

console.log(extraInfo);
console.log(person3.id);
console.log(extraInfo.get(person3).gender)
console.log(extraInfo.get(person4).gender)



// clone using Object.assign 
// memory  
const obj = {
    key1: "value1",
    key2: "value2"
}

const obj3 = {'key69': "value69", ...obj};
const obj4 = Object.assign({'key69': "value69"}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj3);



// optional chaining 
const user  = {
    firstName: "Shivam",
    address: {houseNumber: '1234'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);



// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person5 = {
    firstName : "Rohit",
    age: 8,
    about: personInfo
}
const person6 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person7 = {
    firstName : "nitin",
    age: 17,
    about: personInfo
}

person5.about();
person6.about();
person7.about();


console.log("window"); // display window settings
"use strict";
function myFunc(){

    console.log(this);
}
myFunc();


// apply
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName : "Rohit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
}

// apply
about.apply(user1, ["guitar", "bach"]);
// bind
const func = about.bind(user2, "guitar", "bach");
func();


// const user3 = {
//     firstName : "Pranjal",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// // don't do this mistake 
// user1.about();
// const myFunc = user3.about.bind(user3);
// myFunc();

// arrow functions 

// const user3 = {
//     firstName : "pranjal",
//     age: 8,
//     about: () => {
//         console.log(this.firstName, this.age);
//     }   
// }

// user3.about(user1);


const user5 = {
    firstName : "Hello",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}
user5.about();

const user6 = {
    firstName : "Vivek",
    age: 10,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}
user6.about(user6);


function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18=function(){
        return this.age >= 18;
    }
    return user;
}

const user3 = createUser('Saurabh', 'Pandey', 'saurabh@gmail.com', 19, "my address");
console.log(user3);
const is18 = user3.is18();
const abt = user3.about();
console.log(abt);


// OR

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     // functions
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }


// const user4 = createUser('Saurabh', 'Pandey', 'saurabh@gmail.com', 19, "my address");
// console.log(user4.about()); 



// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]

// prototype

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.create(obj1);
obj2.key3 = "value3";

console.log(obj2);
// __proto__ is a property of all objects and points to the prototype from which the object directly inherits.
console.log(obj2.__proto__);

// example, alert is website specific property
// let a = {
//     name : "harry",
//     language: "java"
    
// }
// console.log(a)

// let p = {
//     run: ()=>{
//         alert("run")
//     }
// }

// a.__proto__ = p
// a.run();



function hello(){
    console.log("hello world");
}


function createUser1(firstName, lastName, email, age, address){
    const user = Object.create(createUser1.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser1.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser1.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser1.prototype.sing = function (){
    return "la la la la ";
}



const user4 = createUser('mohit', 'ved', 'jbnt@gmail.com', 17, "my address");
console.log(user4);
console.log(user4.is18());
