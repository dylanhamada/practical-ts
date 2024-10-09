// In TypeScript classes, the same rules apply as other data types
class Book {
  // One difference is that constructor property types have to be defined before the constructor method
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
console.log(deepWork); // {title: 'Deep Work', author: 'Cal Newport'}
