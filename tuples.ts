/**
 *  Array like structure where each element represents some property of a record
 *
 *
 *
 *  (save in order) can not change the order because we know the first prperty is 'color' and its value always be in first position in tuple
 */

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

// we can also do using define the 'type'

type Drink = [string, boolean, number];
const coke: Drink = ["brown", true, 40];
