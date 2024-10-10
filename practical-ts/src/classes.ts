// In TypeScript classes, the same rules apply as other data types
class Book {
  // One difference is that constructor property types have to be defined before the constructor method
  title: string;
  author: string;
  // We can define a property checkedOut that defaults as false
  // TypeScript will infer its type
  // A private property can only be accessed from within the class itself, and cannot be accessed from outside
  // Properties are public by default
  private checkedOut = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  // This public method calls the private toggleCheckedOutStatus method to toggle the checkedOut property
  checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  }

  isCheckedOut() {
    return this.checkedOut;
  }

  // A private method that can only be accessed from within the class
  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
deepWork.checkOut();
console.log(deepWork.isCheckedOut());
