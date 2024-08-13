// A tuple is a special type of array that allows you to specify the types of elements at specific positions within the array
// Tuples are useful for representing fixed-size arrays with known types for each element
let person: [string, number] = ['john', 25];

// A tuple can technically have elements pushed into it that make it longer, so making it readonly can prevent that
let date: readonly [number, number, number] = [12, 17, 2001];

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

// Elements in a tuple can also be made optional
let susan: [string, number?] = ['susan'];

// Enums are a way of defining a set of named constants
// If the values in an enum are numbers, reverse mapping is possible, whereby either side of the property is accessible by referencing either the key or the value
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value);
  }
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

// An enum with a number constant can have that value reassigned
enum NumericEnum {
  Member = 1,
}

// An enum with a string constant cannot have that value reassigned
enum StringEnum {
  Member = 'Value',
}

let numericEnumValue: NumericEnum = 1;

// TypeScript will throw an error with the following code
// This has to do with the reverse mapping we get with enum constants that are numbers
// let stringEnumValue: StringEnum = 'Value';

let someValue: any = 'this is a string';

// Type assertion is a way for TypeScript to indicate the type of an existing variable
// It uses the keyword 'as'
let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
// Even though we can assert dog is of type Bird, and TypeScript won't flag it as an error, at runtime it will show 'undefined' because dog does not have the 'name' property
let dog = dogObject as Bird;

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};

const statusValue = 'pending';

// If we didn't use type assertion to tell TypeScript that statusValue was of type Status, it would throw an error
const user: User = { name: 'john', status: statusValue as Status };

// The unknown type is a type-safe counterpart of the any type. It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.
let unknownValue: unknown;

unknownValue = 'hello world';
unknownValue = [1, 2, 3];
unknownValue = 42.33455;

// Outside of this type checking, calling a method on unknownValue would throw an error, but since it's being checked here, it's fine
if (typeof unknownValue === 'number') {
  unknownValue.toFixed();
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('there was an error...');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// Never is a type that represents the type of values that never occur. You can't assign any value to a variable of type never.
// TypeScript will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.
// let someValue: never = 0;

type Theme = 'light' | 'dark';

// TypeScript is smart, so if we have a conditional like in the function below, where all cases are covered, if somehow the last line of the function runs, TypeScript will
function checkTheme(theme: Theme): void {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }

  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }

  theme;
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    case Color.Green:
      return 'Green';
    default:
      // at build time
      let unexpectedColor: never = color;
      // at run time
      throw new Error(`Unexpected color value: ${color}`);
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
