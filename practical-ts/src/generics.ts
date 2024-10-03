// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// This is an alternative way of defining a string array in TypeScript
let array1: Array<string> = ['Apple', 'Banana', 'Mango'];

// function createString(arg: string): string {
//   return arg;
// }

// function createNumber(arg: number): number {
//   return arg;
// }

// This is a generic function, which allows the function to operate on different types without losing type information
// This is in contrast to the two functions above, which are tied to a specific type (string and number, respectively)
// The <T> denotes any type, and "T" can be any placeholder, including "shakeAndBake" if we want
function genericFunction<T>(arg: T): T {
  return arg;
}

// Generic functions can be reused with different types
const someStringValue = genericFunction<string>('Hello world');
const someNumValue = genericFunction<number>(100);

// We can also declare a generic interface
// Note the "T" is used as a placeholder for any type
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value;
  },
};

// The return type here must be Promise<string>, because by default, an async function returns a promise, so we cannot just assert the return type as 'string'
async function someFunc(): Promise<string> {
  return 'hello world';
}

const result = someFunc();

// Non-generic function
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

// Generic function that can achieve the same results as the above non-generic function, and comes with the flexibility of working with any type
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(10, 'hello');
let arrayNumbers = createArray<number>(15, 100);

// console.log(arrayStrings);
// console.log(arrayNumbers);

// We're not limited to one generic type, we can use "T", "U", and as many as we need
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

let resultPair = pair<number, string>(123, 'hello');

// Using the 'extends' keyword, we can limit the generic types that our function will accept
// In this case, we limit the type to 'string', but we can also use 'number', or even a union (ie. string | number)
function processValue<T extends string>(value: T): T {
  console.log(value);
  return value;
}

processValue('hello');

// We can assert that the default type be 'any'
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

// Because we asserted that the default type is 'any' in the type definition, we don't need to define a type when defining this randomStuff object
const randomStuff: StoreData = {
  data: ['random', 1],
};
