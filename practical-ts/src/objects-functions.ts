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
