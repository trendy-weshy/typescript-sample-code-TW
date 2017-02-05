/*
* @docs:
*   meaning: a typescript core principle is that type-checking focuses on the shape that values have.
*   aka: duck-typing / structural-typing
*   interfaces fill the role of naming these types and are a powerful way to defining contracts within your code as well as contracts with code outside your project
*   Example of how it is implemented;
* */

/*function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);*/

// same implementation as the commented cde above
interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

/* *
 * optional properties for interfaces implementation
 * are written similar to to other interfaces but has ? at the end of the property name eg. color? below
 * are normally called :- `option bags`
*/
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});

// #Read-Only properties
interface Point{
    readonly x: number;
    readonly y: number;
}
/**
 * produces error!
*/
/*
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
*/
let p1 = <Point>{x:5, y: 20};
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
let arr1: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr1;
arr1 = ro as number[];

// #Function Types as properties
interface SearchFunc {
    (source: string, subString: string): boolean;
}
/**
 * for function types the parameters dont need to be exact can be { src: string, sub: string } as the arguments
*/
let mySearch: SearchFunc;
mySearch=function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// #class implementation of interfaces
interface ClockInterface{
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {}
    setTime(d: Date) {
        this.currentTime = d;
    }
}

// #Extending interfaces
// allows copying from one interface to another
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
let square = <Square>{ color: "blue" };
square.color = "blue";
// square.sideLength = 10;
console.log(square);

// an interface can extend multi interfaces
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
let square2 = <Square>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
console.log(square2);


// #Hybrid interfaces
// did not fully understand Hybrid Interfaces
interface Counter {
    (start: number): string;
    interval: number;
    reset: void;
}

function getCounter(): Counter{
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    // counter.reset = function () { }; // Error!
    return counter;
}
let c = getCounter();
c(10);
// c.reset(); // Error!
c.interval = 5.0;

// difference between static and instance side of classes
/*interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
*/
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterfaceOne;
}
interface ClockInterfaceOne {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfaceOne {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterfaceOne {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterfaceOne {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();