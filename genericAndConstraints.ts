
// Generic types 
function mergeGeneric<T, U>(k:T,g:U) { 
    return Object.assign(k,g)
}

const genericObject = mergeGeneric({ h: 1 }, { t: 5 })

// but if I do here something like 

const anotherGenericObject = mergeGeneric({ h: 1 }, 30)

// it will not through an error but we cannot merge number with object
// to overcome this problem we have to use Constraints. Using constraints 
// we can strictly tell typescript that both the parameters should be object type otherwise
// throws an error


// Contraints types (include extends)

function mergeConstraints<T extends object, U extends object>(k:T,g:U) { 
    return Object.assign(k,g)
}


const genericAndConstraintObject = mergeConstraint({ h: 1 }, { t: 5 })



// More advance stuff

const extractAndConvert<T extends object, U extends keyof T>(obj:T,key:U) {
    return obj[key];
}

extractAndConvert({},'name') // this will through an error because the {} we are sending dosent have key 'name'
extractAndConvert({'name' : 'Himanshu'},'name') // this will work



// create generic class

// we are defining here that, this class can only work with extended types (string, number and boolean)
// if we provide object it will through an error
class DataStorage<T extends string | number | boolean> {
    private data:T[]  = []
    
    addItem(item:T) {
        this.data.push(item)
    }
    
    popItem() {
        this.data.pop()
    }
    
    getData() {
        return this.data;
    }
}

// now I can create any type of data storage

const stringStorage = new DataStorage<string>();
stringStorage.addItem('Teotia') //Note: if I provide here number it will through an error 

// same I can create for number

const numberStorage = new DataStorage<number>();
numberStorage.addItem(28) //Note: if I provide here string it will through an error 





// Partial type

// let say we have a interface

interface Name {
    firstname : string;
    lastname : string;
}

// Partial type create object with optional properties so typescript will not show an error message of property 
// not exists in an object as intially we just defining the object without any property. 
// at return statement again we have to define the type as 'newName' is a Partial type now as we have defined
// that this function will return Name type which dosent have optional properties. 

function createName(fName : string, lName:string) : Name {
    let newName : Partial<Name> = {} // So what Partial do here is create an object with optional properties 
    newName.firstName = fName;
    newName.lName = lName;
    return newName as Name;
}





















