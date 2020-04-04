"use strict";
var user;
user = {
    firstName: "Ajay",
    age: 21,
    greet: function (greetMsg) { return 'Hi, ' + greetMsg; }
};
var MyPerson = (function () {
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
//# sourceMappingURL=interface.js.map