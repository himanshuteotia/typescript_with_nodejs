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

// when to use annotations

// 1)  Function that return 'any' type
const json = "{'x' : 10, 'y' : 20}";
const coordinates = JSON.parse(json); // this function return type is 'any'
console.log(coordinates);
// how to solve this problem we need to add type annotation after coordinates
// like const coordinates: {x : number; y: number } = JSON.parse(json)

// 2) when we declare variable on one line
// and initialize it late

let words = ["red", "green", "yellow"];
let findWord: boolean; // we are defining the variable here and initializing later so here we need to define the type annotation otherwise it
// act like a 'any' type

for (let i = 0; i < words.length; i++) {
  if (words[i] == "green") {
    findWord = true;
  }
}

// 3) variables whose type cannot be inferred correctly

let numberAboveZero: boolean | number = false;
