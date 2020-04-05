type StringOrNumber = string | number;
type NumberOrBoolean = number ;
type Combine = stringNumberType | NumberOrBoolean;

function combineFn(a: string, b: string): void
function combineFn(a: number, b: number): void;
function combineFn(a: Combine, b: Combine): void {
    // some logic here
    console.log(a);
    console.log(b);
}