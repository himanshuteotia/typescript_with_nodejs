class Vehicle {
  constructor(public color: string) {}
}

/**
 *  public color means
 *
 *  1. define a variable like => color: string = "red"
 *  2. also need to define in constructor parameter
 *
 */

const vehicle = new Vehicle("orange");
console.log(vehicle.color); // orange

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // here I have not put public before color as I dont want to create another color variable in Car class
    super(color);
  }
}

const car = new Car(4, "red");
