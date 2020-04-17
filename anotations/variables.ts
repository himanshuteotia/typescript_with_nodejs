let now: Date = new Date();

let students: number = 7;

let group_status: boolean = true;

let str: string = "fast";
// Array

let colors: string[] = ["red", "green", "blue"];
let myNumber: number[] = [1, 2, 3, 4, 5, 6];
let trues: boolean[] = [true, true, false];

// clases

class Car {}

let car: Car = new Car();

// object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

const logNumber: (
  i: number
) => /** i is parameter annotation */ void /** void is return type of function */ = (
  i: number
) => {
  console.log(i);
};
