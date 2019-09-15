import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { ReferenceItem, UniversityLibrarian, Shelf } from './classes/index';
import Encyclopedia, * as RefBook from "./classes/encyclopedia";
import { purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from "./lib/utility-functions";


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//
//
//01
//logFirstAvailable(getAllBooks());

//02
//logBookTitles(getBookTitlesByCategory(Category.JavaScript));

//03
//logBookTitles(getBookTitlesByCategory(Category.JavaScript));
//console.log(getBookByID(2));

//04
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string = (name: string, id: number): string => {
//   return `${name} ${id}`; 
// }
// idGenerator = createCustomerID;
// console.log(idGenerator('Slava', 20));


//05
// createCustomer('Kolya');
// createCustomer('Kolya', 15);
// createCustomer('Kolya', 15, 'Omsk');

// logBookTitles(getBookTitlesByCategory());

// let myBooks = checkoutBooks('Ann', 1, 2, 4);
// myBooks.forEach((bookTitle: string) => console.log(bookTitle));


//06
// let checkedOutBooks = getTitles(false);
// checkedOutBooks.forEach(b => console.log(b));


//07
// let myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason: string) => { console.log(`Damaged: ${reason}`) }
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

//08
// let logDamage: Logger = (reason: string) => {console.log(`Damaged: ${reason}`)};
// logDamage('missing back cover');


//09
// let favoriteAuthor: Author = {
//   name: 'Steven King',
//   email: 'a@b.com',
//   numBooksPublished: 1000
// };

// let favoriteLibrarian: Librarian = {
//   name: 'Monty Python',
//   email: 'b@a.com',
//   department: 'Test Department',
//   assistCustomer: (custName: string) => {console.log(`Assisting customer: ${custName}`)}
// };

//10
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.assistCustomer('Vasya');


//11
// let ref = new ReferenceItem('New Title', 2020);
// ref.printItem();
// ref.publisher = 'Test Pub';
// console.log(ref.publisher);


//12
// let refBook = new RefBook.default('Test Encyclopedia', 2021, 1);
// refBook.printItem();



//18
// let inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

//console.log(purge(inventory));
//console.log(purge([1, 2, 3, 4]));

//19
// let bookShelf: Shelf<Book> = new Shelf();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// let magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// let magazineShelf: Shelf<Magazine> = new Shelf();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst().title);


//20
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
 

//21
// let fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.printLibrarian();

//23
// fLibrarian.assistFaculty = () => {
//     console.log(`New Assisting faculty`);
// };
// fLibrarian.assistFaculty();

// fLibrarian.teachCommunity = () => {
//     console.log(`New Teaching community`);
// };
// fLibrarian.teachCommunity();


//25
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Kolya';
// favoriteLibrarian.assistCustomer('Vasya');

//26
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Proper';
// console.log(favoriteLibrarian.name);


//27
// let e = new Encyclopedia('E', 2020, 2);
// e.copies = -10;
// e.copies = 0;
// e.copies = 4.5;
// e.copies = 5;


//28
// getBooksByCategory(Category.JavaScript, logCategorySearch);


//29
// getBooksByCategoryPromise(Category.JavaScript)
// .then((titles: string[]) => {
//     for (const title of titles) {
//         console.log(title);
//     }
//     return titles.length;
// })
// .then((numOfBooks: number) => {
//     console.log(`numOfBooks: ${numOfBooks}`);
// })
// .catch((error: Error) => {
//     console.log(error.message);
// });


//30
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));
console.log('Search submitted...');

