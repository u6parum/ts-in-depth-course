import { Book, LibMgrCallback } from "../interfaces";
import { Category } from "../enums";

export function purge<T>(inventory: T[]): T[] {
    return inventory.splice(2, inventory.length - 2);
}

export function getAllBooks(): Array<Book> {

    let books: Array<Book> = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}

export function logFirstAvailable(books: Array<Object>): void {
    console.log(`Number of books is: ${books.length}`);
    for (const [i, book] of books.entries()) {
        if (i === 0) {
            console.log(book);
        } else {
            break;
        }
    }
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    let books: Array<string> = getAllBooks().filter((book: any) => book.category === category).map((book: any) => book.title);
    return books;
}

export function logBookTitles(titles: string[]): void {
    // for (const str of titles) {
    //   console.log(str);
    // }
    titles.forEach(title => console.log(title));
}

export function getBookByID(id: number): Book | undefined {
    return getAllBooks().find(book => book.id === id);
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age)
        console.log(`Customer age: ${age}`);

    if (city)
        console.log(`Customer city: ${city}`);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);
    let bookTitles: string[] = [];
    for (const bookID of bookIDs) {
        let book: any = getBookByID(bookID);
        if (book.available) {
            bookTitles.push(book.title);
        }
    }
    return bookTitles;
}


export function getTitles(authorOrAvailable: string | boolean): string[] {
    if (typeof authorOrAvailable === 'string') {
        return getAllBooks().filter((book: any) => book.title === authorOrAvailable).map((book: any) => book.title);
    } else if (typeof authorOrAvailable === 'boolean') {
        return getAllBooks().filter((book: any) => book.available === authorOrAvailable).map((book: any) => book.title);
    } else {
        return [];
    }
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            let bookTitles = getBookTitlesByCategory(category);
            if (bookTitles && bookTitles.length > 0) {
                callback(null, bookTitles);
            } else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}


export function logCategorySearch(err: Error, titles: string[]) {
    if (err) {
        console.log(err.message);
    } else {
        for (const title of titles) {
            console.log(title);
        }
    }
}


export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let bookTitles = getBookTitlesByCategory(category);
                if (bookTitles && bookTitles.length > 0) {
                    resolve(bookTitles);
                } else {
                    throw new Error('No books found');
                }
            } catch (error) {
                reject(error);
            }
        }, 2000);
    });
}


export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}
