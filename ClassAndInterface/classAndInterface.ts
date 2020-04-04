/* 
Convention to write a class is - Start the class name in capital
*/
class Person {
    private id: number = 0;
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}


/*
    When a class inherits from another class then the parent class is called Base class and the class who inherits is called child class  
    Employee class Inherits from the class Person.
    Keyword extends is used to create inheritance.
    Any member with protected access modifier can be inherited by the child class
    In this example the Base class id field is private and cannot be accessed from outside
    The name field is protected and can be accessed only from the child class and not from any other class
*/

class Employee extends Person {
    private department: string;

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
    static employeeHelpDeskNumber: string = '9876543210';

    // Static  method
    //
    static checkEmployeeCount() {
        // some Logic implemented
    }

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    // Getters and Setters: start
    /*
        Getters and Setters can be used to access any member of a class from outside.
        Normally private members are accessed, but a logic and after vaildation only they are allowed to access (get or set)
        Getters and Setters are like normal functions but appended with keyword get / set
        They are accessed from outside as properties and not as methods
    */
    get getDepartment() {
        return this.department;
    }

    set setDepartment(value: string) {
        if (!value) throw new Error('Please send a valid value'); // Some logic can be used before setting the value;
        this.department = value;
    }
    // Getters and Setters: end

    // Public Method of class Employee
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");

// accessing the getter of the Employee class
console.log(howard.getDepartment);

// Note: They are accessed as Properties. i.e. with out the parenthesis ()
howard.setDepartment = 'Marketing'; // This will set the value as Marketing in the department field;
console.log(howard.getDepartment); // Getting the newly set value;

// Accessing a static type
Employee.employeeHelpDeskNumber = 'asasasa';
console.log(Employee.employeeHelpDeskNumber);