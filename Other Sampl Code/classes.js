var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * a simple class implementation in typescript :)
*/
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
// #inheritance
/**
 * uses super in the child class to refer to the parent class
 *
*/
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
// extends Animal class
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
// extends Animal class
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
// object calling its methods
sam.move();
tom.move(34);
// #access modifiers
/**
 * allows public, private and protected modifiers
 * public is default
*/
// public explicitly declared
var AnimalOne = (function () {
    function AnimalOne(theName) {
        this.name = theName;
    }
    AnimalOne.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalOne;
}());
// private can not be accessed outside the containing class
var AnimalTwo = (function () {
    function AnimalTwo(theName) {
        this.name = theName;
    }
    return AnimalTwo;
}());
var LionOne = (function (_super) {
    __extends(LionOne, _super);
    function LionOne(theName) {
        var _this = _super.call(this, theName) || this;
        _this.name = theName;
        // console.log(super.name); // Error! private variables/methods not accessible to child classes
        console.log(_this.name);
        return _this;
    }
    return LionOne;
}(AnimalOne));
// new AnimalTwo("Leopard").name; // Error! Objects can't access private variables/methods
new AnimalTwo("Cat");
new LionOne("Lion");
// protected modifier
// can only be accessed by the child class
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
// we can have protected constructors
var PersonOne = (function () {
    function PersonOne(theName) {
        this.name = theName;
    }
    return PersonOne;
}());
// Employee can extend Person
var EmployeeOne = (function (_super) {
    __extends(EmployeeOne, _super);
    function EmployeeOne(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    EmployeeOne.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return EmployeeOne;
}(PersonOne));
var howardOne = new EmployeeOne("Howard", "Sales");
// let john = new PersonOne("John"); // Error: The 'Person' constructor is protected
// #readonly modifier
// same as final in languages like 'java'
var Octopus = (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.
// as parameter properties
var OctopusOne = (function () {
    function OctopusOne(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return OctopusOne;
}());
// #Accessors
var EmployerOne = (function () {
    function EmployerOne() {
    }
    return EmployerOne;
}());
var employerOne = new EmployerOne();
employerOne.fullName = "Bob Smith";
if (employerOne.fullName) {
    console.log(employerOne.fullName);
}
// must set compiler to target ECMAScript 5 and higher (tsc --target ES5)
var passcode = "secret passcode";
var EmployeeTwo = (function () {
    function EmployeeTwo() {
    }
    Object.defineProperty(EmployeeTwo.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeTwo;
}());
var employeeTwo = new EmployeeTwo();
employeeTwo.fullName = "Bob Smith";
if (employeeTwo.fullName) {
    console.log(employeeTwo.fullName);
}
// #Static class
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    return Grid;
}());
Grid.origin = { x: 0, y: 0 };
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// using class as an interface
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
// constructor functions
var GreeterOne = (function () {
    function GreeterOne() {
    }
    GreeterOne.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return GreeterOne.standardGreeting;
        }
    };
    return GreeterOne;
}());
GreeterOne.standardGreeting = "Hello, there";
// create a class-instance
var greeter1;
greeter1 = new GreeterOne();
console.log(greeter1.greet());
// create a variable of type same to the class GreeterOne and use it as a class-instance
var greeterMaker = GreeterOne;
greeterMaker.standardGreeting = "Hey there!";
// instantiate new class-instance to an object-instance
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
// #Abstract classes 
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type 
