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

class Novel {
  private checkedOut: boolean = false;

  constructor(
    readonly title: string,
    public author: string,
    private someValue: number
  ) {}

  public getSomeValue() {
    return this.someValue;
  }
}

const robustWork = new Novel('Deep Work', 'Cal Newport', 45);
console.log(robustWork.getSomeValue());

class Comic {
  private checkedOut: boolean = false;

  constructor(readonly title: string, public author: string) {}

  // A 'getter' method returns properties
  get info() {
    return `${this.title} by ${this.author}`;
  }

  // A 'setter' method modifies properties
  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }

  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const goodWork = new Comic('Deep Work', 'Cal Newport');
console.log(goodWork.info);
// goodWork.checkOut = true;
console.log(goodWork);
console.log(goodWork.someInfo);
console.log(goodWork.checkOut);

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

// A class can implement an interface
class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const hipster = new Person('shakeAndBake', 100);
hipster.greet();
