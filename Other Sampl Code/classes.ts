/**
 * a simple class implementation in typescript :)
*/
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greeter = new Greeter("world");

// #inheritance
/**
 * uses super in the child class to refer to the parent class
 * 
*/
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// extends Animal class
class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
// extends Animal class
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
// object calling its methods
sam.move();
tom.move(34);

// #access modifiers
/**
 * allows public, private and protected modifiers
 * public is default
*/

// public explicitly declared
class AnimalOne {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// private can not be accessed outside the containing class
class AnimalTwo {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
class LionOne extends AnimalOne{
    constructor(theName: string) { 
        super(theName); // call the parent class constructor
        this.name = theName;
        // console.log(super.name); // Error! private variables/methods not accessible to child classes
        console.log(this.name);
    }
}
// new AnimalTwo("Leopard").name; // Error! Objects can't access private variables/methods
new AnimalTwo("Cat");
new LionOne("Lion");

// protected modifier
// can only be accessed by the child class
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

// we can have protected constructors
class PersonOne {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}
// Employee can extend Person
class EmployeeOne extends PersonOne {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howardOne = new EmployeeOne("Howard", "Sales");
// let john = new PersonOne("John"); // Error: The 'Person' constructor is protected

// #readonly modifier
// same as final in languages like 'java'
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.

// as parameter properties
class OctopusOne {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

// #Accessors
class EmployerOne{
    fullName: string;
}
let employerOne = new EmployerOne();
employerOne.fullName = "Bob Smith";
if (employerOne.fullName) {
    console.log(employerOne.fullName);
}

// must set compiler to target ECMAScript 5 and higher (tsc --target ES5)
let passcode = "secret passcode";
class EmployeeTwo {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode === "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employeeTwo = new EmployeeTwo();
employeeTwo.fullName = "Bob Smith";
if (employeeTwo.fullName) {
    console.log(employeeTwo.fullName);
}

// #Static class
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}
let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale
console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// using class as an interface
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};

// constructor functions
class GreeterOne {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return GreeterOne.standardGreeting;
        }
    }
}
// create a class-instance
let greeter1: GreeterOne;
greeter1 = new GreeterOne();
console.log(greeter1.greet());
// create a variable of type same to the class GreeterOne and use it as a class-instance
let greeterMaker: typeof GreeterOne = GreeterOne;
greeterMaker.standardGreeting = "Hey there!";
// instantiate new class-instance to an object-instance
let greeter2: GreeterOne = new greeterMaker();
console.log(greeter2.greet());

// #Abstract classes 
abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type