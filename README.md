Typescript

A junior to senior developer:

```you write interfaces I will write classes for them  ```




Abstract class :

1. We can not create objects directly
2. Only used as a parent class
3. In abstract class we can have references that dont exists in abstract class the only thing is we need to define them where we implements the abstract class.
```
// here abstract class is saying provide me these three functions { compare, swap, length } I will do the sort for you
abstract class SortArray {
    abstract compare(leftIndex: number, rightIndex: number) : boolean;
    abstract swap(leftIndex: number, rightIndex: number) : void;
    abstract length:number;
      
    sort() : void {
        const { length } = this;
        for(let i =0; i < length; i++) {
            for( let j =0; j < length-1; j++ ) {
                if(this.compare(j, j+1)) {
                    this.swap(j,j+1)
                }
            }
        }
    }
}
  
class NumbersCollection extends SortArray {
    constructor(public data: number[]) {
        super()
    }
    get length():number{
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number):boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex: number, rightIndex: number) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}

const arr = new NumbersCollection([2,4,8,2,4,8,2,4,8])
arr.sort()
console.log(arr.data);
// [2, 2, 2, 4, 4, 4, 8, 8, 8]
```
