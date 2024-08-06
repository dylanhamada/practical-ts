// An alias allows us to reuse complex type definitions to reduce repetitive code

type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// An alias isn't limited to an object, but can be used for types like unions

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'hello';
value = 123;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'dark';
theme = 'light';

function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark');

// Challenge

// Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

type Employee = {
  id: number;
  name: string;
  department: string;
};

// Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

// Create a Union Type: Define a type Staff that is a union of Employee and Manager.

type Staff = Employee | Manager;

// Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    return console.log(
      `${staff.name} is a manager. They have ${staff.employees.length} employees.`
    );
  }

  return console.log(
    `${staff.name} is an employee. They belong to the ${staff.department} department.`
  );
}

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' };
const steve: Employee = { id: 2, name: 'steve', department: 'HR' };
const bob: Manager = { id: 3, name: 'bob', employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(steve);
printStaffDetails(bob);

// An intersection type combines multiple aliases to basically extend one

type Book = { id: number; name: string; price: number };

// Intersection type extending the Book alias by adding one additional property

type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: 'how to cook a dragon',
  price: 15,
};

const book2: Book = {
  id: 2,
  name: 'the secret life of unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 3,
  name: 'gnomes vs goblins',
  price: 25,
  discount: 0.15,
};

// Using computed property names when defining an alias

const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

// An interface type is similar to the alias type

interface BookInterface {
  // The readonly modifier prevents the property from being modified after it's declared
  readonly isbn: number;
  title: string;
  author: string;
  // The '?' means the property is optional
  genre?: string;
  // Method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: BookInterface = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // First option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // Second option
  // printSomething: (someValue) => {
  //   return someValue;
  // },
  // Third option
  printSomething(someValue) {
    return someValue;
  },
};

deepWork.printAuthor();
console.log(deepWork.printTitle('is an awesome book.'));
console.log(deepWork.printSomething(34));

// Challenge

// Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
// Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
// Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
// Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optioanl), and the methods should be implemented.
// Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
