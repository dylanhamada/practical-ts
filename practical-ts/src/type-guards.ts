// Type guarding is a term in TypeScript that refers to the ability to narrow down the type of an object within a certain scope. This is usually done using conditional statements that check the type of an object.

// In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type in some scope.

type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

// Define the function checkValue that takes one parameter value of type ValueType
// Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function
// If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.
// If value is neither a string nor a number, it must be a boolean. Log the string 'boolean: ' followed by the boolean value.
// Finally, call the checkValue function with value as the argument.

function checkValue(val: ValueType): void {
  if (typeof val === 'string') {
    return console.log(val.toLowerCase());
  } else if (typeof val === 'number') {
    return console.log(val.toFixed(2));
  } else {
    return console.log(`boolean: ${val}`);
  }
}

// checkValue(value);

type Dog = {
  type: 'dog';
  name: string;
  bark: () => void;
};

type Cat = {
  type: 'cat';
  name: string;
  meow: () => void;
};

type Animal = Dog | Cat;

// Define a function named makeSound that takes one parameter animal of type Animal.
// Inside the function, use an if statement to check if animal.type is 'dog'.
// If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
// If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
// Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.

function makeSound(animal: Animal): void {
  if (animal.type === 'dog') {
    animal.bark();
  } else {
    animal.meow();
  }
}

const Dalmatian: Dog = {
  type: 'dog',
  name: 'Spot',
  bark() {
    console.log('Woof!');
  },
};

// makeSound(Dalmatian);

// Define a function named printLength that takes one parameter str which can be of type string, null or undefined
// Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (ie. except for false, 0, -0, 0n, "", null, undefined, and NaN).
// If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.
// If str is not truthy (ie. it's either null or undefined), log the string 'No string provided'.
// Now you can call the printLength function with a string, null or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.

function printLength(str: string | null | undefined): void {
  if (str) {
    console.log(str.length);
  } else {
    console.log('No string provided.');
  }
}

// printLength('Hello world!');
// printLength(undefined);
// printLength('100');
// printLength(null);
