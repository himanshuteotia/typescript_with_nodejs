interface add {
   a: number;
   b:number;
}

function doSomething <T extends add>(obj:T) {
   return obj.a + obj.b;
}

console.log(doSomething({a:6,b:5}))


interface properties {
   firstName : string;
   lastName : string;
   fullName: () => string
}

class MyName implements properties {
   constructor(public firstName:string, public lastName:string){

   }
   fullName() {
      return this.firstName + ' ' + this.lastName;
   }
}

let myname = new MyName('Himanshu', 'Teotia');
console.log(myname.fullName())





// advance interfaces


interface Name {
   firstName : string;
   lastName : string;
   age?: number; // optional key
   [key : string] : any; // we can add any string with any value
   greet(msg: string) : void;
}


// interface with clases

class Person implements Name {
   
   firstName : string;
   lastName: string;
   
   greet(msg:string) {
      console.log(`Greeting message from ${this.firstName} : ${msg}`)
   }

}

// interfaces with function

interface Add {
   (a : number, b : number) : number;
}

let add : Add;
add = function(v1 :number ,v2 : number) : number {
   return v1 + v2 * 2;
}


// interface inheritance

interface Aged extends Name {
 age : number; // here Aged interface age will override the Name's age property and make it required property now
} // please note: age property was optional in Name intergface




