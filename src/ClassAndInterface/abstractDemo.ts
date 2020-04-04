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
abstract class SuperClass {

    abstract someMethod(): void;
}

// The <ChildClass> inherits from the SuperClass which has a  abstract method. 
// So the child class has to implement the method
class ChildClass extends SuperClass {

    someMethod() {
        // Some logic
    }
}