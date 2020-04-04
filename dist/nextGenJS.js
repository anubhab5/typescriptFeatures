"use strict";
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
var myHobby = 'coding';
var addUsingArrowFn = function (numberOne, numberTwo) { return numberOne + numberTwo; };
function valueToAdd(numberOne, numberTwo) {
    if (numberOne === void 0) { numberOne = 0; }
    if (numberTwo === void 0) { numberTwo = 0; }
    console.log(numberOne + numberTwo);
}
var currentHobbies = ["Reading", "Painting", "Coding"];
var newHobbies = ["Cooking", "Gardening"];
currentHobbies.push.apply(currentHobbies, newHobbies);
var oldPerson = {
    name: 'Alex'
};
var newPerson = __assign({}, oldPerson);
function restDemoFn() {
    var numberList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numberList[_i] = arguments[_i];
    }
}
restDemoFn(2, 3, 4, 5, 6, 7);
var myHobbyList = ["Reading", "Painting", "Coding", "Cooking"];
var hobby1 = myHobbyList[0], hobby2 = myHobbyList[1];
var destructuringObject = {
    firstName: "Ajay",
    age: 21
};
var firstName = destructuringObject.firstName;
var userNam = destructuringObject.firstName;
//# sourceMappingURL=nextGenJS.js.map