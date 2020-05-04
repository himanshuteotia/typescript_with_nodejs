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
