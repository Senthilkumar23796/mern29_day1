// console.log("Welcome to Array Concepts");
console.log("Welcome to Object Concepts");

// 1. Array is an Collection of Elements
// 2. It contain different Data Types
// 3. It is represented with Square Bracket []
// 4. It can be empty also or else contain more than ond element

// Syntax of Array
//  const arr = [10,20,30,"Hello",true,[],{}];
//  console.log(arr);

// Accessing Array Elements

// Index start from 0 to n-1
// it can be accessed using index number
// length is always start from 1
//  const arr = [10,20,30,"Hello",true];
//  console.log(arr[0]);
//  console.log(arr.length);

// Adding the element in the Array

// const arr = [10,20,30,"Hello",true,100];
 // Index based adding the value
//  arr[6] = "New Value";
 // Method based adding the value
 // 1. Push => add the element at the End
 // 2. Unshift => add the element at the Start
//  arr.push(100);
//  arr.unshift(9);
//  console.log(arr)

// Modifying the array Element
// const arr = [10,20,30,"Hello",true,100];
// arr[1] = 800;
// console.log(arr);

// Removing the element from the Array
// const arr = [10,20,30,"Hello",true,100];
// Two methods
// pop => remove the element from the end
// shift => remove the element from the start
// arr.pop();
// arr.shift();
// console.log(arr);


// Object
// 1. Object is a Collection of properties
// 2. Property is a Key Value Pair
// 3. Key is always Unique and value can be duplicate
// 4. Object always enclosed with curly braces {}
// 5. It also contain different data types
// 6. It can contain more than one data

// Syntax
// const obj = {};

const student = {
    name : "Raj",
    age : 20,
    city : "Pune",
    isActive : true,
    skills : ["HTML","CSS","JS"],
    address : {
        street : "Wakad",
        pincode : 411057,
        state : "MH"
    }
}

// Accessing the object properties
// Two ways
// 1. Dot Notation (Most of time Used this method)
// 2. Bracket Notation
// console.log(student.name);
// console.log(student["age"]);
// console.log(student.skills[1])
// console.log(student.address.street)

// Bracket Notation
// console.log(student["name"])
// console.log(student.address["pincode"])

// Adding Elements to the object
// student.email = "ssk@gmail.com"
// student["Degree"] = "B.Tech IT"

// Removing the Element in the Object
// delete student.name
delete student.skills[0]
console.log(student)