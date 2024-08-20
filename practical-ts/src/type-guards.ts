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

checkValue(value);
