### Types :

Easy way to refer to the different properties + functions that a value has

1. Types are used by the typescript compiler to analyze our code for errors.
2. Types allow other engineers to understand what values are flowing around our codebase.

**Primitive Types**

1. number
2. string
3. boolean
4. void
5. undefined
6. string
7. symbol
8. null

**Object Types**

1. functions
2. arrays
3. objects
4. classes

type annotation : we (developers) tell the Typescript the type

- when a function return the 'any' type and we need to clarify the value (Avoid variables with 'any' at all costs)
- when we declare a variable on one line the intialize it later
- when we want a variable to have a type the can't be inferred

type inference : Typescript gusses the type

- (always rely on)
