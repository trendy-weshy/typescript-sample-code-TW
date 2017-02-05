let isDone: boolean = false; // #Boolean
console.log(`Boolean data type variable 'isDone': ${isDone}`);
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(`All Number data type variables: ${decimal} ${hex} ${binary} ${octal}`);
let color: string = "blue"; // #string data type rep by single/double quotes and `` backticks for mutiline strings
color = 'red';
console.log(`String data type varible 'color': ${color}`);
let listArr: number[] = [1, 2, 3]; // denoted by [] 
let listArrGeneric: Array<number> = [1, 2, 3]; // denoted by Array generic type
console.log(`An array: ${listArr}`);
// #tuples
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // #Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // #Error, 'number' does not have 'substr'
/*
* union types to be discussed in a later chapter.
* */ 

// #Enum
// enum Color {Red, Green, Blue};
// enum Color {Red=1, Green, Blue};
enum Color {Red=1, Green=2, Blue=3};
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(`Color.Green Enum value: ${c}`);
console.log(`Color name value for 2: ${colorName}`)

// #any
let notSure: any = 4; // any data type holds a number
notSure = "maybe a string instead"; // any data type holds an String
notSure = false; // any data type holds in Boolean
let list: any[] = [1, true, "free"]; // an Array that holds any type of value
list[1] = 100;

// #void
function warnUser(): void{
    console.log(`This is a void function`);
}
warnUser();
let aVoidVar: void = undefined; // can only hold `undefined` and `null` values

// #Null and Undefined
let u: undefined = undefined;
let n: null = null;

// #never
/**************************************************************************
***************************************************************************
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
console.log(fail());
***************************************************************************
***************************************************************************/

// #Type Assertion
// angle-bracket syntax
let someValueAngleSyntax: any = "this is a string";
let num1: number = (<string>someValueAngleSyntax).length;
let someValueAsSyntax: any = "this is a string";
let num2: number = (someValueAsSyntax as string).length;
console.log(`type asserted variables 'num1', 'num2' (${num1}, ${num2})`);