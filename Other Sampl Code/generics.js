/**
 * three ways to implementing of generic interfaces
*/
// arrow function generic type used as interfaces
function identity(arg) {
    return arg;
}
var myIdentity = identity;
// the first generic interface using functions
function identityTwo(arg) {
    return arg;
}
var myIdentityTwo = identityTwo;
function identityThree(arg) {
    return arg;
}
var myIdentityThree = identityThree;
function identityFour(arg) {
    return arg;
}
var myIdentityFour = identityFour;
// #generic classes
/**
 * generic classes are accessed on the instance side of the class
*/
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// a number type argument for the generic class
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
// a string type argument for the generic class
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 10, value: 3 });
loggingIdentity("Hello World");
