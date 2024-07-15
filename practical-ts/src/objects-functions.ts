let car: { brand: string; year: number } = {
  brand: 'toyota',
  year: 2020,
};

car.brand = 'ford';

let car1: { brand: string; year: number } = {
  brand: 'audi',
  year: 2022,
};

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = 'new book'

let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 };

let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: 'HP' };

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };
let products: { title: string; price?: number }[] = [];
products.push({ title: 'shoes' });
