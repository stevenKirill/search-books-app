import { action, makeObservable, observable, toJS} from "mobx";
import {booksWithId} from '../data/books';
import {NUMBER_SORT,STRING_SORT} from '../consts/sortConsts';
import {generateId} from '../utils/utilsFunctions';

class BooksStore {
    books = [];
    static copy = [];
    constructor() {
        makeObservable(this,{
            books: observable,
            addBook: action,
            deleteBook: action,
            fetchBooks: action,
            searchBooks: action,
        });
        this.fetchBooks();
    };

    /**
     * копируем книги
     * @param {array} books книги 
     */
    static makeCopy(books) {
        BooksStore.copy = BooksStore.copy.concat(books);
    };

    static updateCopy(current) {
        BooksStore.copy = [];
        BooksStore.copy = BooksStore.copy.concat(current);
    }

    /**
     * Добавление новой книги
     * @param {object} book объект новой книги
     */
    addBook(book) {
        book.id = generateId();
        this.books.push(book);
        BooksStore.updateCopy(this.books);
        this.writeToLocalStorage(this.books);
    };

    /**
     * Удаление книги из массива
     * @param {string} id ID 
     */
    deleteBook(id) {
        this.books = this.books.filter((book => book.id !== id));
        BooksStore.updateCopy(this.books);
        this.writeToLocalStorage(this.books);
    };

    /**Метод записывающих в локасторадж */
    writeToLocalStorage(data) {
        localStorage.removeItem('books');
        localStorage.setItem('books',JSON.stringify(data));
    }

    /**
     * Сортировка книг
     * @param {string} param Параметр сортировки 
     */
    sort(param) {
        if (param === NUMBER_SORT) {
            this.books = this.books.sort((a,b) => a.year - b.year)
        }
        if (param === STRING_SORT) {
            this.books = this.books.sort((a,b) => {
                if (a.name > b.name) {
                    return 1
                } else {
                    return -1
                }
            })
        }
        this.writeToLocalStorage(this.books);
    }

    /**
     * Найти и отредактировать
     * @param {string} id ID
     */
    findAndEdit(id,newFields) {
        const foundBook = this.books.find(book => book.id === id);
        const findIndex = this.books.indexOf(foundBook);
        const before = this.books.slice(0,findIndex);
        const after = this.books.slice(findIndex + 1,);
        const {bookName,author,publisher,year,pages} = newFields;
        const updated = {
            ...foundBook,
            name: bookName,
            author,
            publisher,
            year,
            pages
        };
        this.books = [...before,updated,...after];
        BooksStore.updateCopy(this.books);
        this.writeToLocalStorage(this.books);
    };

    /**
     * Поиск книг
     * @param {string} str Строка поиска 
     */
    searchBooks(str) {
        this.books = this.books.filter(book => {
            if (book.name.toLowerCase().startsWith(str)) {
                return book
            }
        });
        if (str === "") {
            this.books = [].concat(BooksStore.copy)
        };
        this.writeToLocalStorage(this.books);
    };

    /** Фейковый фетч */
    fetchBooks = () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('fake fetched')
            },1000);
        })
        promise.then(() => {
            const prevBooks = JSON.parse(localStorage.getItem('books'));
            if (prevBooks === null) {
                this.books = this.books.concat(booksWithId);
                this.writeToLocalStorage(this.books);
            } else {
                this.books = prevBooks;
            };
            BooksStore.makeCopy(this.books);
        })
    }
};

const bookStore = new BooksStore();
export default bookStore;