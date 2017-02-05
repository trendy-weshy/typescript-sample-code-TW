var isDone = false; // #Boolean
console.log("Boolean data type variable 'isDone': " + isDone);
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("All Number data type variables: " + decimal + " " + hex + " " + binary + " " + octal);
var color = "blue"; // #string data type rep by single/double quotes and `` backticks for mutiline strings
color = 'red';
console.log("String data type varible 'color': " + color);
var listArr = [1, 2, 3]; // denoted by [] 
var listArrGeneric = [1, 2, 3]; // denoted by Array generic type
console.log("An array: " + listArr);
// #tuples
// Declare a tuple type
var x;
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
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[2];
console.log("Color.Green Enum value: " + c);
console.log("Color name value for 2: " + colorName);
// #any
var notSure = 4; // any data type holds a number
notSure = "maybe a string instead"; // any data type holds an String
notSure = false; // any data type holds in Boolean
var list = [1, true, "free"]; // an Array that holds any type of value
list[1] = 100;
// #void
function warnUser() {
    console.log("This is a void function");
}
warnUser();
var aVoidVar = undefined; // can only hold `undefined` and `null` values
// #Null and Undefined
var u = undefined;
var n = null;
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
var someValueAngleSyntax = "this is a string";
var num1 = someValueAngleSyntax.length;
var someValueAsSyntax = "this is a string";
var num2 = someValueAsSyntax.length;
console.log("type asserted variables 'num1', 'num2' (" + num1 + ", " + num2 + ")");
