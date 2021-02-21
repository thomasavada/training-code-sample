/**
 * You can declare variable with const, let, var
 * But it is recommended to use const
 */
const myTechStack = ['NodeJs', 'ReactJs', 'Firebase']; // It is recommended that you use camelcase for variable name
// myTechStack = ['NodeJS'] //This will throw an error because you cannot change a constant

let myFirstStack = 'NodeJs';
// Well, with let or var, you change the variable
myFirstStack = 'React'; // Maybe your first stack can be React =)))

/**
 * The function syntax is quite the same
 * You can use both traditional function and the arrow function
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 1));
const addArrow = (num1, num2) => num1 + num2 // Arrow function
console.log(add(1, 1))

/**
 * You can use the JS high order function in the NodeJS env
 *
 * See these guide on high order functions
 * @link https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad
 */
const myTechStatus = myTechStack.map(stack => {
  return {
    name: stack,
    status: 'not-finished'
  }
});

// Filter only unique item
const list = [11, 24, 31, 24, 11, 56, 34];
const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}
const filterList = list.filter(onlyUnique);
console.log(filterList);

