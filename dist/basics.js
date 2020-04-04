"use strict";
var numberValue = 5;
var numberValueTwo;
var strValue = 'this is string';
var boolValue = true;
function getSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
var person = {
    name: "Akash",
    age: 29
};
console.log('Name is: ' + person.name);
var personObjectWithType = {
    name: "Akash",
    age: 29
};
var hobbyArr = ["Reading", "Coding"];
var flexibleArray = ["StringValue", 6, true];
var tupleDemo = ['test', 5];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["PUBLISHER"] = 2] = "PUBLISHER";
})(Role || (Role = {}));
;
console.log("Role Value is:- " + Role.ADMIN);
var CustomRoleValue;
(function (CustomRoleValue) {
    CustomRoleValue[CustomRoleValue["ADMIN"] = 10] = "ADMIN";
    CustomRoleValue[CustomRoleValue["READ_ONLY"] = 20] = "READ_ONLY";
    CustomRoleValue[CustomRoleValue["PUBLISHER"] = 21] = "PUBLISHER";
})(CustomRoleValue || (CustomRoleValue = {}));
;
console.log(CustomRoleValue.ADMIN);
console.log(CustomRoleValue.READ_ONLY);
console.log(CustomRoleValue.PUBLISHER);
var CustomRoleValueAgain;
(function (CustomRoleValueAgain) {
    CustomRoleValueAgain[CustomRoleValueAgain["ADMIN"] = 10] = "ADMIN";
    CustomRoleValueAgain[CustomRoleValueAgain["READ_ONLY"] = 20] = "READ_ONLY";
    CustomRoleValueAgain["PUBLISHER"] = "publisher";
    CustomRoleValueAgain[CustomRoleValueAgain["WRITER"] = 2] = "WRITER";
})(CustomRoleValueAgain || (CustomRoleValueAgain = {}));
;
console.log(CustomRoleValueAgain.PUBLISHER);
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
function addNumberWithReturnValue(number1, number2) {
    return number1 + number2;
}
function addNumberReturnVoid(number1, number2) {
    console.log(number1 + number2);
}
var addNumberVariable;
addNumberVariable = addNumberWithReturnValue;
addNumberVariable = addNumberReturnVoid;
//# sourceMappingURL=basics.js.map