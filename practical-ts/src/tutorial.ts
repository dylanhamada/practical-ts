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
