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
