"use strict";
/*
Core Types in Typescript
Fllowing are the coretypes in TypeScript (TS)-

1. Number
2. String
3. Boolean
4. Object
5, Array
6. Tuple
7. Enum

*/
var numberValue = 5; // Type Inference: Here compiler will understand it's a number value
var numberValueTwo; // Explicitly mention the variable as number
var strValue = 'this is string';
var boolValue = true;
// Here the functin accepts two parameters as Number
function getSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Object demo
var person = {
    name: "Akash",
    age: 29
};
console.log('Name is: ' + person.name);
/*
// Here in this case the person object does not have a property called <nickName>
So if the below code is uncommented it will throw an error
*/
// console.log("NickName is " + person.nickName); 
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Type can be provided on the above object. The example follows -
*/
var personObjectWithType = {
    name: "Akash",
    age: 29
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Arrays
TS has strict arrays as well as flexible array
*/
// Strict array type
var hobbyArr = ["Reading", "Coding"];
// The below array will throw an error
// let hobbyArr: string[] = ["Reading", "Coding", 6];
// flexible array
var flexibleArray = ["StringValue", 6, true];
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Tuple Demo
/*
A tuple allows an array to specifically mention the types of elements and
 number of elements it will hold. For below example the variable will hold 2 types of elements,
 first one is string, second one is number
*/
var tupleDemo = ['test', 5];
//////////////////////////////////////////////////////////////////////////////////////////////////////
// enums Demo
/*
enums allow to declare a set of named constants
i.e. a collection of related values that can be numeric or string values

Custom Type
Assign label to numbers => the first item will be 0, second one will be 1 and so on...
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["PUBLISHER"] = 2] = "PUBLISHER";
})(Role || (Role = {}));
;
console.log("Role Value is:- " + Role.ADMIN); // output will be 0
// Custom values can also be assigned to the values
var CustomRoleValue;
(function (CustomRoleValue) {
    CustomRoleValue[CustomRoleValue["ADMIN"] = 10] = "ADMIN";
    CustomRoleValue[CustomRoleValue["READ_ONLY"] = 20] = "READ_ONLY";
    CustomRoleValue[CustomRoleValue["PUBLISHER"] = 21] = "PUBLISHER";
})(CustomRoleValue || (CustomRoleValue = {}));
;
console.log(CustomRoleValue.ADMIN); // value 10 will be printed
console.log(CustomRoleValue.READ_ONLY); // value 20 will be printed
console.log(CustomRoleValue.PUBLISHER); // value 21 will be printed
// In the below example string is used as a value.
// In this case the next identifier must be initialized
var CustomRoleValueAgain;
(function (CustomRoleValueAgain) {
    CustomRoleValueAgain[CustomRoleValueAgain["ADMIN"] = 10] = "ADMIN";
    CustomRoleValueAgain[CustomRoleValueAgain["READ_ONLY"] = 20] = "READ_ONLY";
    CustomRoleValueAgain["PUBLISHER"] = "publisher";
    CustomRoleValueAgain[CustomRoleValueAgain["WRITER"] = 2] = "WRITER";
})(CustomRoleValueAgain || (CustomRoleValueAgain = {}));
;
console.log(CustomRoleValueAgain.PUBLISHER); // value 21 will be printed
//////////////////////////////////////////////////////////////////////////////////////////////////////
// UNION TYPE
/*
A union type allows us to define a variable with multiple types.
This is achieved by using the pipe ( '|' ) symbol between the types
*/
// In the below example the variable can hold either string type or number type
var unionDemoVariable;
unionDemoVariable = 5;
unionDemoVariable = "testStringValue";
var customTypeDemo = 'a';
customTypeDemo = 'a';
customTypeDemo = 6;
var typePersonDemo = {
    name: ' Ajay',
    age: 6
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Function
// Return type can be debined in a function like below
function addNumberWithReturnValue(number1, number2) {
    return number1 + number2;
}
function addNumberReturnVoid(number1, number2) {
    console.log(number1 + number2);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Function as Types
var addNumberVariable;
addNumberVariable = addNumberWithReturnValue;
// This code will throw an error as return type is not matching
addNumberVariable = addNumberReturnVoid;
//////////////////////////////////////////////////////////////////////////////////////////////////////
// TBD 
// never, unknown ---> TBD
