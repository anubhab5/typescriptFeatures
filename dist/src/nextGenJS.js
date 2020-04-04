"use strict";
/*
This demos the Javascript or (ES6+) features which are available in Typescript
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Ajay';
// userName = ''; // Here reassigning a constant will throw an error
/*
    1. let declares a variable which can be changed.
    2. Similar to var in javascript
    3. Provides a block scope
*/
var myHobby = 'coding';
// Arrow Function
/*
1. Function keyword is not required
2. If there is just one statement in the function body then the return keyword can be omiited.
*/
var addUsingArrowFn = function (numberOne, numberTwo) { return numberOne + numberTwo; };
// Default Parameter
/*
The default parameter allows to set a default value to any parameter
The
*/
function valueToAdd(numberOne, numberTwo) {
    if (numberOne === void 0) { numberOne = 0; }
    if (numberTwo === void 0) { numberTwo = 0; }
    console.log(numberOne + numberTwo);
}
// Spred Operator
/*
    The syntax is three dots(...) followed by the array (or iterable*).
    It expands the array into individual elements.
    So, it can be used to expand the array in a places where zero or more elements are expected.

    It is also used for deep copying
*/
var currentHobbies = ["Reading", "Painting", "Coding"];
var newHobbies = ["Cooking", "Gardening"];
// The new array will be like ["Reading", "Painting", "Coding", "Cooking", "Gardening"]
currentHobbies.push.apply(currentHobbies, newHobbies);
var oldPerson = {
    name: 'Alex'
};
// let newPerson = oldPerson; // This will reference the same memory address, and not create a new object
var newPerson = __assign({}, oldPerson); // Creates a new person object
// Rest Parameter
/*
Rest parameter is an improved way to handle function parameter,
allowing us to more easily handle various input as parameters in a function.
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
*/
function restDemoFn() {
    var numberList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numberList[_i] = arguments[_i];
    }
    // some code
}
restDemoFn(2, 3, 4, 5, 6, 7);
// Array and Object Destructuring
/*
    Array Destructuring happens in order
    Object Destructuring happens by key name
*/
var myHobbyList = ["Reading", "Painting", "Coding", "Cooking"];
var hobby1 = myHobbyList[0], hobby2 = myHobbyList[1]; // First two items will be stored in the variable
var destructuringObject = {
    firstName: "Ajay",
    age: 21
};
// Here the variable firstName is one of the key in the object. Only firstName key comes out.
var firstName = destructuringObject.firstName;
// In order to rename follow the below the syntax
var userNam = destructuringObject.firstName;
