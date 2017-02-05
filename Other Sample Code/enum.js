/**
 * enum in typescript is a defined set of named numeric constants
*/
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 1] = "north";
    Direction[Direction["south"] = 2] = "south";
    Direction[Direction["east"] = 3] = "east";
    Direction[Direction["west"] = 4] = "west";
})(Direction || (Direction = {}));
// reverse mapping from enum values
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[Enum.A]; // "A"
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
