/*
    Nullish Coalescing Demo
    Only null and Undefined value will be treated as false
    Empty value will be treated as true
*/
const userInput = undefined;
const storedData = userInput ?? 'Default';

console.log(storedData);