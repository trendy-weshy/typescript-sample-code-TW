/*
* @docs:
*   meaning: a typescript core principle is that type-checking focuses on the shape that values have.
*   aka: duck-typing / structural-typing
*   interfaces fill the role of naming these types and are a powerful way to defining contracts within your code as well as contracts with code outside your project
*   Example of how it is implemented;
* */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
/**
 * produces error!
*/
/*
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
*/
var p1 = { x: 5, y: 20 };
/*
**
** ReadonlyArray<T> data type
**
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
**
**
**
*/
// last error above can easily be avoided through type assertion
var arr1 = [1, 2, 3, 4];
var ro = arr1;
arr1 = ro;
/**
 * for function types the parameters dont need to be exact can be { src: string, sub: string } as the arguments
*/
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = { color: "blue" };
square.color = "blue";
// square.sideLength = 10;
console.log(square);
var square2 = {};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
console.log(square2);
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    // counter.reset = function () { }; // Error!
    return counter;
}
var c = getCounter();
c(10);
// c.reset(); // Error!
c.interval = 5.0;
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();
