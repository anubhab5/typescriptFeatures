"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ABSTRACT CLASS
/*
    Abstract method enforces the child classes to implement the logic
    A method can be made abstract by appending the keyword abstract
    Once a method is marked as abstract the class MUST also be marked as abstract, else it will throw an error
    The abstract method should have only signature and NO METHOD BODY
    the child class HAS TO implement the method body
*/
/*
    In the below example the method: <someMethod> is marked as abstract
    so, the class <SuperClass> is also marked as abstract
    The method someMethod has only signature and no method body or implementation
*/
var SuperClass = /** @class */ (function () {
    function SuperClass() {
    }
    return SuperClass;
}());
// The <ChildClass> inherits from the SuperClass which has a  abstract method. 
// So the child class has to implement the method
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildClass.prototype.someMethod = function () {
        // Some logic
    };
    return ChildClass;
}(SuperClass));
