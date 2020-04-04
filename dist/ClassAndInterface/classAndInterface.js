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
var Person = (function () {
    function Person(name) {
        this.id = 0;
        this.name = name;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.checkEmployeeCount = function () {
    };
    Object.defineProperty(Employee.prototype, "getDepartment", {
        get: function () {
            return this.department;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setDepartment", {
        set: function (value) {
            if (!value)
                throw new Error('Please send a valid value');
            this.department = value;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    Employee.employeeHelpDeskNumber = '9876543210';
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getDepartment);
howard.setDepartment = 'Marketing';
console.log(howard.getDepartment);
Employee.employeeHelpDeskNumber = 'asasasa';
console.log(Employee.employeeHelpDeskNumber);
Employee.checkEmployeeCount();
//# sourceMappingURL=classAndInterface.js.map