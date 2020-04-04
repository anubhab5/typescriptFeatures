/*
This demos the Javascript or (ES6+) features which are available in Typescript
*/

const userName = 'Ajay';
// userName = ''; // Here reassigning a constant will throw an error

/* 
    1. let declares a variable which can be changed.
    2. Similar to var in javascript
    3. Provides a block scope
*/
let myHobby = 'coding';


// Arrow Function
/*
1. Function keyword is not required
2. If there is just one statement in the function body then the return keyword can be omiited.
*/
let addUsingArrowFn = (numberOne: number, numberTwo: number) => numberOne + numberTwo;



// Default Parameter
/*
The default parameter allows to set a default value to any parameter
The
*/
function valueToAdd(numberOne: number = 0, numberTwo: number = 0) {
    console.log(numberOne + numberTwo);
}


// Spred Operator
/* 
    The syntax is three dots(...) followed by the array (or iterable*). 
    It expands the array into individual elements. 
    So, it can be used to expand the array in a places where zero or more elements are expected.

    It is also used for deep copying
*/
let currentHobbies = ["Reading", "Painting", "Coding"];
let newHobbies = ["Cooking", "Gardening"];

// The new array will be like ["Reading", "Painting", "Coding", "Cooking", "Gardening"]
currentHobbies.push(...newHobbies);

let oldPerson = {
    name: 'Alex'
};
// let newPerson = oldPerson; // This will reference the same memory address, and not create a new object
let newPerson = { ...oldPerson }; // Creates a new person object


// Rest Parameter
/*
Rest parameter is an improved way to handle function parameter, 
allowing us to more easily handle various input as parameters in a function. 
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
*/
function restDemoFn(...numberList: number[]) {
    // some code
}

restDemoFn(2, 3, 4, 5, 6, 7);


// Array and Object Destructuring
/*
    Array Destructuring happens in order
    Object Destructuring happens by key name
*/
let myHobbyList = ["Reading", "Painting", "Coding", "Cooking"];
let [hobby1, hobby2] = myHobbyList; // First two items will be stored in the variable

let destructuringObject = {
    firstName: "Ajay",
    age: 21
};

// Here the variable firstName is one of the key in the object. Only firstName key comes out.
let { firstName } = destructuringObject;

// In order to rename follow the below the syntax
let { firstName: userNam } = destructuringObject; 