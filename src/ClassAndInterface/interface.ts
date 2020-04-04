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

/*
    Optional parameter/ property can be marked by the symbol '?'
*/

interface IPerson {
    readonly firstName: string; // Once a value is set cannot be changed
    age?: number; // here age is an optional property. Any class/ object implementing this interface can skip the age property
    greet(phrase: string): string;
}

let user: IPerson;
user = {
    firstName: "Ajay",
    age: 21,
    greet: (greetMsg: string) => 'Hi, ' + greetMsg // Arrow Function

};
// user.firstName = ''; Will Throw an Error

class MyPerson implements IPerson {
    firstName: string = '';
    age: number = 0;

    greet(greetMesg: string) {
        return "";
    }
}

// Interface as function types
interface IAddFn {
    (a: number, b: number): number;
}

let myAddFn: IAddFn;

myAddFn = (val1: number, val2: number) => {
    return val1 + val2;
}