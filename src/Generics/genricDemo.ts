let testArr: Array<string> = [];


// Generic Function 
function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items); // some logic
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]); 
