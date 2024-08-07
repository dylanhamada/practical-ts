// Define the Person interface Start by defining a Person interface with a name property of type string.
interface Person {
  name: string;
}

// Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
interface DogOwner extends Person {
  dogName: string;
}

// Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

// Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'john',
    };
  } else if (random < 0.66) {
    return {
      name: 'sarah',
      dogName: 'rex',
    };
  } else {
    return {
      name: 'bob',
      managePeople() {
        console.log('Managing people...');
      },
      delegateTasks() {
        console.log('Delegating tasks...');
      },
    };
  }
}

// Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);

// Define the isManager function Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.
function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}
