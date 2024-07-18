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
