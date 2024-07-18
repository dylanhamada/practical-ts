let car: { brand: string; year: number } = {
  brand: 'toyota',
  year: 2020,
};

car.brand = 'ford';

let car1: { brand: string; year: number } = {
  brand: 'audi',
  year: 2022,
};

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = 'new book'

let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 };

let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: 'HP' };

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };
let products: { title: string; price?: number }[] = [];
products.push({ title: 'shoes' });

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi('John');
// sayHi(3)

function calculateDiscount(price: number): number {
  const hasDiscount = true;

  if (hasDiscount) {
    return price;
  }

  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

// someValue.myMethod();

// Create a new array of names.
const names: string[] = ['Dylan', 'Tommy', 'Madie'];

// Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
function checkName(arr: string[], name: string): boolean {
  for (const item of arr) {
    if (item === name) {
      return true;
    }
  }

  return false;
}

// Use this function to check if various names are in your array and log the results.
console.log(checkName(names, 'Katelyn'));

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message}${total}`;
}

let result2 = sum('The total is: ', 1, 2, 3, 4, 5);
console.log(result2);

function logMessage(message: string): void {
  console.log(message);
}

logMessage('Hello, TypeScript');

// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// - If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(param: string | number): void {
  if (typeof param === 'number') {
    return console.log(param * 2);
  }

  return console.log(param.toUpperCase());
}

processInput(12);
processInput('omg');

// using objects in parameters, using destructuring
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative way of using an object as a parameter
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'anna',
};

createStudent(newStudent);

// if an object is passed inline and has extra parameters not defined in the function declaration, TypeScript will throw an error
// createStudent({id: 1, name: 'bob', age: 3})

// if an object reference is passed as a parameter, it throws no such error
const oldStudent = {
  id: 1,
  name: 'cob',
  age: 200,
};

createStudent(oldStudent);

// Your task is to create a function named processData that accepts two parameters:

// The first parameter, input, should be a union type that can be either a string or a number.
// The second parameter, config, should be an object with a reverse property of type boolean, by default reverse should be false

// The function should behave as follows:

// If input is of type number, the function should return the square of the number.
// If input is of type string, the function should return the string in uppercase.
// If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', { reverse: true }));
