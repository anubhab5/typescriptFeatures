"use strict";
/*
    Interface determines the structure of object.
    Interface is created by the keyword interface
    Interface can be implemented on class but custom type cannot be implemented
    A class can implement multiple interface.
    Interface is a contract between a class.
    Whatever method, property declared in interface has to be implemented in class
    Only readonly modifier can be added  in interface.
    Access Modifiers like Public, Private, Protected are not applicable
    An interface can implement another interface as well
    Interface can also be used as Function Types
*/
var user;
user = {
    firstName: "Ajay",
    age: 21,
    greet: function (greetMsg) { return 'Hi, ' + greetMsg; } // Arrow Function
};
// user.firstName = ''; Will Throw an Error
var MyPerson = /** @class */ (function () {
    function MyPerson() {
        this.firstName = '';
        this.age = 0;
    }
    MyPerson.prototype.greet = function (greetMesg) {
        return "";
    };
    return MyPerson;
}());
var myAddFn;
myAddFn = function (val1, val2) {
    return val1 + val2;
};
