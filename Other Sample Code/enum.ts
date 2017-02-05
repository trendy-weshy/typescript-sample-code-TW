/**
 * enum in typescript is a defined set of named numeric constants
*/
enum Direction {
    north=1,
    south,
    east,
    west
}
// reverse mapping from enum values
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A]; // "A"
// const enum
const enum ConstEnum {
    A = 1,
    B = A * 2
}
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
/**
 ************** Ambient enums **************
 * Ambient enums are used to describe the shape of already existing enum types.
*/
declare enum Enum {
    D = 1,
    B,
    C = 2
}