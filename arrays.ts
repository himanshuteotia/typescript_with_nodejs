const numbers: number[] = [];
const carMakers = ["ford", "toyata", "chevy"];

const dates = [new Date(), new Date()];

let carByMake: string[][] = [];

carByMake = [["f150"], ["corola"], ["camaro"]];

// help with inferences when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();
const myCarArray = carByMake.pop();

// prevent incompatible values
carMakers.push(100); // error (Argument of type '100' is not assignable to parameter of type 'string'.)

// help with 'map'

carMakers.map((car: string): string => {
  return car;
});

// Flexible types

const inportantDates: (string | Date)[] = [new Date(), "25-4-2015"];
