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
let numberValue = 5; // Type Inference: Here compiler will understand it's a number value
let numberValueTwo: number; // Explicitly mention the variable as number

let strValue: string = 'this is string';

let boolValue: boolean = true;

// Here the functin accepts two parameters as Number
function getSum(numberOne: number, numberTwo: number) {
    return numberOne + numberTwo;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Object demo

const person = {
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
let personObjectWithType: {
    name: string;
    age: number;
} = {
    name: "Akash",
    age: 29
};

//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Arrays
TS has strict arrays as well as flexible array
*/
// Strict array type
let hobbyArr: string[] = ["Reading", "Coding"];

// The below array will throw an error
// let hobbyArr: string[] = ["Reading", "Coding", 6];

// flexible array
let flexibleArray: any = ["StringValue", 6, true];

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Tuple Demo
/* 
A tuple allows an array to specifically mention the types of elements and
 number of elements it will hold. For below example the variable will hold 2 types of elements,
 first one is string, second one is number
*/
let tupleDemo: [string, number] = ['test', 5];

//////////////////////////////////////////////////////////////////////////////////////////////////////


// enums Demo

/*
enums allow to declare a set of named constants 
i.e. a collection of related values that can be numeric or string values

Custom Type
Assign label to numbers => the first item will be 0, second one will be 1 and so on...
*/

enum Role { ADMIN, READ_ONLY, PUBLISHER };
console.log("Role Value is:- " + Role.ADMIN); // output will be 0

// Custom values can also be assigned to the values
enum CustomRoleValue { ADMIN = 10, READ_ONLY = 20, PUBLISHER };
console.log(CustomRoleValue.ADMIN); // value 10 will be printed
console.log(CustomRoleValue.READ_ONLY); // value 20 will be printed
console.log(CustomRoleValue.PUBLISHER); // value 21 will be printed

// In the below example string is used as a value.
// In this case the next identifier must be initialized
enum CustomRoleValueAgain { ADMIN = 10, READ_ONLY = 20, PUBLISHER = "publisher", WRITER = 2 };
console.log(CustomRoleValueAgain.PUBLISHER); // value 21 will be printed

//////////////////////////////////////////////////////////////////////////////////////////////////////

// UNION TYPE
/*
A union type allows us to define a variable with multiple types.
This is achieved by using the pipe ( '|' ) symbol between the types
*/
// In the below example the variable can hold either string type or number type
let unionDemoVariable: string | number;
unionDemoVariable = 5;
unionDemoVariable = "testStringValue";
// unionDemoVariable = true; // It will throw a error.