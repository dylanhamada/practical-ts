// Add the "!" (non-null assertion operator) at the end of the querySelector method tells TypeScript that we definitely know that the element with class 'test-btn' exists
// Without the "!", TypeScript assumes that the element may not exist, and will treat all subsequent methods, like adding an event listener, as optional
// Adding the type assertion <HTMLButtonElement> tells TypeScript that the element we're expecting is a button
// Without this, TypeScript assumes that the element is a generic element, and will not provide autocomplete for a button element
const btn = document.querySelector<HTMLButtonElement>('.test-btn')!;

btn.disabled = true;

const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

// We didn't use a non-null assertion to define taskForm, so TypeScript automatically adds an optional operator "?"
taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  // We grab the value of the form input
  const taskDescription = formInput?.value;
  // If the form input is not empty when the form is submitted, we reset the form input and return, thus avoiding the alert method below
  if (taskDescription) {
    formInput.value = '';
    return;
  }
  // If the form input is empty, we issue an alert
  alert('Please enter a task description');
});
