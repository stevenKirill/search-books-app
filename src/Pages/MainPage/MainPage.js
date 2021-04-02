import React from 'react';
import BooksList from '../../Components/BooksList/BooksList';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SortButtons from '../../Components/SortButton/SortButton';
import bookStore from '../../Store/BooksStore';

export default function Mainpage() {
    return (
        <div>
            <SearchBar bookStore={bookStore}/>
            <SortButtons bookStore={bookStore}/>
            <BooksList bookStore={bookStore}/>
        </div>
    )
}
