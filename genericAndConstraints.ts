
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
