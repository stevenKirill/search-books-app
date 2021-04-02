import React from 'react';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import BookItem from '../BookItem/BookItem';
import './booksList.css';

export default observer(function BooksList({bookStore}) {
    function handleDelete(e) {
        const id = e.target.dataset.id;
        bookStore.deleteBook(id);
    };
    console.log('component re rendr')
    console.log(toJS(bookStore.books))
    let books = null;
    if (!bookStore.books.length) {
        books = <div>Нет книг</div>
    } else {
        books = bookStore.books.map(book => <BookItem book={book} handleDelete={handleDelete}/>)
    }
    return <div className="wrapper">{books}</div>
});
