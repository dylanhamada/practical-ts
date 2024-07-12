console.log('typescript tutorial');

let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

let amount: number = 20;
amount = 12 - 1;

let isAwesome: boolean = true;
isAwesome = false;

// Create a variable of type string and try to invoke a string method on it.

let someString = 'dylan';
console.log(someString.length);

// Create a variable of type number and try to perform a mathematical operation on it.

let someNum: number = 69;
console.log(someNum + 27);

// Create a variable of type boolean and try to perform a logical operation on it.

let someBool: boolean = true;
console.log(!someBool);

// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.

// someString = 24
// someNum = 'amazing'
// someBool = [1, 2, 3]

let tax: number | string = 10;
tax = 100;
tax = '$10';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'pending';

let notSure: any = 4;
notSure = false;
notSure = 'maybe a string';

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1983') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.

let orderStatus: 'processing' | 'shipped' | 'delivered';
orderStatus = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

// Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

let discount: number | string = 20;
discount = 20;
discount = '20%';

let prices: number[] = [100, 75, 42];

let fruit: string[] = ['apple', 'orange'];

let temperatures: number[] = [20, 25, 30]

let colors: string[] ['red', 'green', 'blue']

let mixedArray: (number | string)[] = [1, two, 3]