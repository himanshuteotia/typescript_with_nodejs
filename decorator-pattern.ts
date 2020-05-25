

abstract class Car {
        public description: string;

        public getDescription() : string {
                return this.description;
        }

        public abstract cost():number;
}

class Nexon extends Car{
        public description = 'My nexon car';
         
        cost() :number{
           return 900000; 
        }
}

class Tiago extends Car{
        public description = 'My Tiago car';

        cost() : number{
           return 500000; 
        }
}

abstract class CarOptions extends Car {
        decoratedCar: Car;

        public abstract getDescription(): string;

        public abstract cost(): number;
}

class EnhancedConnectedCar extends CarOptions {
        decoratedCar: Car;

        constructor(car:Car) {
                super();
                this.decoratedCar = car;
        }
        public getDescription(): string {
         return this.decoratedCar.getDescription() + ', with enhanced connected car feature';
        }

        public cost(): number {
          return this.decoratedCar.cost() + 5000;
        }
}

class EnhancedCustomModificationCar extends CarOptions {
        decoratedCar: Car;

        constructor(car:Car) {
                super();
                this.decoratedCar = car;
        }
        public getDescription(): string {
         return this.decoratedCar.getDescription() + ', with enhanced custom modification';
        }

        public cost(): number {
          return this.decoratedCar.cost() + 9000;
        }
}

let nexon = new Nexon();
console.log(nexon.description)
console.log(nexon.cost())
nexon = new EnhancedConnectedCar(nexon)
console.log(nexon.getDescription())
console.log(nexon.cost())
