interface add {
   a: number;
   b:number;
}

function doSomething <T extends add>(obj:T) {
   return obj.a + obj.b;
}

console.log(doSomething({a:6,b:5}))
