// most common variable declaration methods are `let` and `const`
// `let` is like `var`
// `const` is like let but avoid re-assignment to the variable

// var a = 10;
function f() {
    var message = "Hello, world!";
    return message;
} // declaring a variable inside a function
function f1() {
    var a = 10;
    return function g() {
        // g function captured variable a which is declared in f
        var b = a + 1;
        return b;
    }
} // accessing variables in other function
/*var g = f1();
g(); // returns '11'*/

function f2(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
        return x;
    }
    x=11;
    return x;
}
/*console.log(f2(true));  // returns '10'
console.log(f2(false)); // returns 'undefined'*/

// variable scope 
// variable capturing
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
// work around on the variable capturing problem
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

// let declarations
let hello = 'Hello World'; // key difference is not the syntax but the semantics
// #Block-Scoping
// let variable declaration uses lexical-scoping or block-scoping
// not visible outside the block or for-loop
// Example:
/*function f(input: boolean) {
    let a = 100;
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    return b;
}*/
// variables declared in a try...catch have the similar scope-rules
/*try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
// Error: 'e' doesn't exist here
console.log(e);*/
// block variables can be accessed after declaration not before

// #Re-declarations and Shadowing
/*let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope
*/
/*function f(x) {
    let x = 100; // error: interferes with parameter declaration
}*/
/*function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}*/
// block-variables can be re-declared but under a different  like below
// this is referred to as shadowing
function f3(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}
f3(false, 0); // returns '0'
f3(true, 0);  // returns '100'

// #Block-scoped variable capturing
for(let i=0;i<10;i++) {
    // creates a new variable scope environment per iteration
    // hence we can be able to capture the state of the variable per iteration
    setTimeout(function () { console.log(i); }, 100 * i);
}

// #CONST declaration
// does not mean that the variable is `immutable` 
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
// Error
/*kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};*/
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// #Destructuring
/*let input = [1, 2];
let [first, second] = input; // same as: `let first=input[0]; let second=input[1]`
console.log(first); // outputs 1
console.log(second); // outputs 2
[first, second] = [second, first]; // swapping variables
console.log(first); // outputs 2
console.log(second); // outputs 1
function f4([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f4(input);*/
// remaining items
/*let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]*/
let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1
let [, second, , fourth] = [1, 2, 3, 4];

// #Object Destructuring
let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let { a, b } = o; // a='foo' b=12
({ a, b } = { a: "baz", b: 101 });
let { a: newName1, b: newName2 } = o;
