// Add the "!" (non-null assertion operator) at the end of the querySelector method tells TypeScript that we definitely know that the element with class 'test-btn' exists
// Without the "!", TypeScript assumes that the element may not exist, and will treat all subsequent methods, like adding an event listener, as optional
// Adding the type assertion <HTMLButtonElement> tells TypeScript that the element we're expecting is a button
// Without this, TypeScript assumes that the element is a generic element, and will not provide autocomplete for a button element
const btn = document.querySelector<HTMLButtonElement>('.test-btn')!;

btn.disabled = true;

// Store various form elements in variables
// Note the type assertions like <HTMLFormElement>
const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// Task type that includes a description and whether the task is completed
type Task = {
  description: string;
  isCompleted: boolean;
};

// An array of tasks
// It calls the loadTasks function to populate the array with tasks stored in local storage
const tasks: Task[] = loadTasks();

// Render the tasks array
tasks.forEach((task) => renderTask(task));

// A function that searches local storage for an item called 'tasks'
// It parses the JSON to return either an array of tasks, or an empty array if there is no 'task' item
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  // If storedTasks is not undefined, parse it into an array
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// The following function is an alternative way of defining an event handler, where we define the function and pass it as a callback function to addEventListener
// However, we must assert the type of the "event" parameter, as seen below
// function createTask(event: SubmitEvent) {
//   event.preventDefault();
//   const taskDescription = formInput?.value;
//   if (taskDescription) {
//     formInput.value = '';
//     return;
//   }
//   alert('Please enter a task description');
// }

// We didn't use a non-null assertion to define taskForm, so TypeScript automatically adds an optional chaining operator "?" to allow us to access properties or call methods that might be null or undefined, without causing a runtime error
taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  // We grab the value of the form input
  const taskDescription = formInput?.value;
  // If the form input is not empty when the form is submitted, we reset the form input and return, thus avoiding the alert method below
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // Add task to list
    addTask(task);
    // Render tasks
    renderTask(task);
    // Update local storage
    updateStorage();
    formInput.value = '';
    return;
  }
  // If the form input is empty, we issue an alert
  alert('Please enter a task description');
});

// A function to add individual tasks to the tasks array
function addTask(task: Task): void {
  tasks.push(task);
}

// A function to create a new list item and append it to the taskListElement list
function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;
  // Create a checkbox and then append it to the list element
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;

  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  // TypeScript automatically adds an optional chaining operator because it determine at runtime whether taskListElement exists
  taskListElement?.appendChild(taskElement);
}

// A function to update local storage with a JSON-stringified version of the tasks array
// Every time the user clicks the Add Tasks button, this function is called and overwrites the local storage item 'tasks'
function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
