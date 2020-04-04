// Private Constructor
/*
    Singleton Pattern is implemented using private constructors.
    Singleton is a design pattern, which says that there should be only one instance for a class.
    That means only one object can be created per class.
*/

/*
Steps to Create a Singleton
    1. Once a constructor is made private then it means that no object can be created from outside
    2. Create a static method which will be creating an object
    3. If a object is already created it will return the same.
*/
class SingletonClassDemo {

    private id: string;
    private static instance: SingletonClassDemo;

    private constructor(id: string) {
        this.id = id;
    }

    public static getInstance() {
        if (SingletonClassDemo.instance) {
            return this.instance;
        }
        this.instance = new SingletonClassDemo("007");
        return this.instance;
    }
}

const childObj = SingletonClassDemo.getInstance();
const childObj1 = SingletonClassDemo.getInstance();

console.log(childObj); // Here the object is created for the first time
console.log(childObj1); // Here the same object is accessed/ returned created on the above line