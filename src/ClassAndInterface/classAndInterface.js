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
/*
Convention to write a class is - Start the class name in capital
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.id = 0;
        this.name = name;
    }
    return Person;
}());
/*
    When a class inherits from another class then the parent class is called Base class and the class who inherits is called child class
    Employee class Inherits from the class Person.
    Keyword extends is used to create inheritance.
    Any member with protected access modifier can be inherited by the child class
    In this example the Base class id field is private and cannot be accessed from outside
    The name field is protected and can be accessed only from the child class and not from any other class
*/
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    // Static  method
    //
    Employee.checkEmployeeCount = function () {
        // some Logic implemented
    };
    Object.defineProperty(Employee.prototype, "getDepartment", {
        // Getters and Setters: start
        /*
            Getters and Setters can be used to access any member of a class from outside.
            Normally private members are accessed, but a logic and after vaildation only they are allowed to access (get or set)
            Getters and Setters are like normal functions but appended with keyword get / set
            They are accessed from outside as properties and not as methods
        */
        get: function () {
            return this.department;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setDepartment", {
        set: function (value) {
            if (!value)
                throw new Error('Please send a valid value'); // Some logic can be used before setting the value;
            this.department = value;
        },
        enumerable: true,
        configurable: true
    });
    // Getters and Setters: end
    // Public Method of class Employee
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    // static 
    /*
        A member or a method can be marked as static by appending the keyword static
        Once a method or a property is marked static then it can be accessed from outside with the className itself.
        To refer a static type object is not required.
        eg: Employee.employeeHelpDeskNumber ==> Here the property <employeeHelpDeskNumber> is made static
        so it can be accessed from outside the class in the above shown way
        Cannot be accessed using this keyword
    */
    // Static  property
    Employee.employeeHelpDeskNumber = '9876543210';
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
// accessing the getter of the Employee class
console.log(howard.getDepartment);
// Note: They are accessed as Properties. i.e. with out the parenthesis ()
howard.setDepartment = 'Marketing'; // This will set the value as Marketing in the department field;
console.log(howard.getDepartment); // Getting the newly set value;
// Accessing a static type
Employee.employeeHelpDeskNumber = 'asasasa';
console.log(Employee.employeeHelpDeskNumber);
Employee.checkEmployeeCount();
