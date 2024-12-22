console.log(23*5);

// datatype javascript
// premitive datatype, and non primitive datatype
// premitive : number, string, boolean, null, undefined, and bigInt
// non premitive datatype : array, object, set

let b = 23;
console.log(b);
let c = "java core";
console.log(b + c + b);

b = 45; // const can not be change 
console.log(b);

// object creation in js
let a = {
    Name : "akhilesh",
    age : 24,
    city : "jaipur",
    Hobbies : ['cricket', "drawing"],
}

console.log(a.Name);
console.log(a.age);
console.log(a.city);
console.log(a.Hobbies);
console.log(a.Hobbies[1]);
console.log(a);

// array creation in js

let B = [12,34,45,56,78,87,89,100]
console.log(B)
console.log(B[6])

let d = 100;
{
    d = 22;
    console.log(d);
}

// let = can reassign value , 
// const = cannot reassigned ,
// var = reassigned global scope

// if / else
let e = 10;
if(e > 18){
    console.log("eligible for voting");
}else{
    console.log("Not eligible for voting");
}

let I_phone13 = 45000;
let salary = 70000;
if(salary > 60000){
    console.log("can buy iphone13");
}else{
    console.log("you cannot buy iphone13 ");
}

// while loop
let money = 100000;
while(money > 30000){
    console.log("can buy laptop");
    money = money - 30000;
}
console.log(money)

// do while loop
let num = 3;
do{
    console.log(num);
    num++;
}while(num<10)

console.log("end");

// for loop
for(let f = 5; f<10; f++){
    console.log(f);
}

// // for-in loop 
// let arr = [10,20,30,20,40,20,20];
// let count = 0;
// let key = 20;
// for(i of arr){
//     if(i == key){
//         count++;
//     }    
// }
// console.log("===="+count);



// similar for OR AND operator
// typeof operator help to get datatype
let fruits = ["apple", "mango", "grapes"];
let numbers = [1,2,3,4,5];
let mixed = [1,2,2.3, "string", null, undefined];
console.log(mixed);
console.log(numbers);
console.log(fruits[2]);

// predefined function for arrays
// pop(), push(), shift(), unshift()

// push(_) add elements in array
numbers.push(10)
console.log(numbers);

// pop() remove element from array 
let  x= numbers.pop();
console.log(x);
console.log(numbers);

// shift() remove first element ffrom array and shift elements to right side 
numbers.shift();
console.log(numbers);

// unshift(_) add element in first place in array 
numbers.unshift(100);
console.log(numbers);

for(let j = 0; j < 5; j++){
    console.log(numbers[j]);
}

// for-in loop 
let arr = [10,20,30,20,40,20,20];
let count = 0;
let key = 20;
for(let i of arr){
    if(i == key){
        count++;
    }    
}
console.log("===="+count);

if(count > 1){
    console.log(`${key} is not present in ${arr}`);
}else{
    console.log(`${key} is present in array, and count of key is ${count}`);
}
// ====================================================================
// // while loop in array 

const fruits3 = ["apple", "mango", "grapes"];
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);
//======================================================================
// // for-of loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// // for(let fruit of fruits){
// //     fruits2.push(fruit.toUpperCase());
// // }
// // console.log(fruits2);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);

//===============================================================
//     // for-in loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

// array destructuring 
const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);
//===================================================================

// const person = {name:"Golu ",age:22};
const person = {
    firstName: "Vikram",
    lastName: "Singh",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
console.log(person["firstName"]);
console.log(person["age"]);
console.log(person.hobbies);

// // how to add key value pair to objects
person["person"] = "male";
console.log(person);

// // difference between dot and bracket notaion
// const key1 = "email";
// const person1 = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]

// }

// console.log(person1["person hobbies"]);
// person1[key1] = "harshitvashisth@gmail.com";
// console.log(person1);

