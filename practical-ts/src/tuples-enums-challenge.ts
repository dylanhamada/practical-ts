// Define an enum named UserRole with members Admin, Manager, and Employee.
enum UserRole {
  Admin,
  Manager,
  Employee,
}

// Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

// Define a function named createUser that takes a User object as its parameter and returns a User object.
function createUser(user: User): User {
  return user;
}

// Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.
const newUser: User = createUser({
  id: 1,
  name: 'john',
  role: UserRole.Manager,
  contact: ['john@company.com', '123-456-7890'],
});

console.log(newUser);
