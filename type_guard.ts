function doSomething <T,U>(a:T,b:U):any {
   // if I dint put here if check & directly return value like a + B will not work
   if(typeof a === 'number' && typeof b === 'number')  return a + b;
}

console.log(doSomething<number,number>(1,2))
