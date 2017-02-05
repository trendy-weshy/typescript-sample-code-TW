/**
 * three ways to implementing of generic interfaces
*/
// arrow function generic type used as interfaces
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: <U>(arg: U) => U = identity;
// the first generic interface using functions
function identityTwo<T>(arg: T): T {
    return arg;
}
let myIdentityTwo: {<T>(arg: T): T} = identityTwo;

interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identityThree<T>(arg: T): T {
    return arg;
}
let myIdentityThree: GenericIdentityFn = identityThree;
/**
 * special generic interface with a type argument due to the non-generic parameter/option
*/
interface GenericIdentityFnOne<T> {
    (arg: T): T;
}
function identityFour<T>(arg: T): T {
    return arg;
}
let myIdentityFour: GenericIdentityFnOne<number> = identityFour;

// #generic classes
/**
 * generic classes are accessed on the instance side of the class
*/
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
// a number type argument for the generic class
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
// a string type argument for the generic class
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// #generic constrains
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T{
    console.log(arg.length);
    return arg;
}
loggingIdentity({length: 10, value: 3});
loggingIdentity("Hello World");