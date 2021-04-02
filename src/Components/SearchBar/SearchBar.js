import React from 'react';
import {useState} from 'react';
import {Input} from '../Common/Input/Input';
import search from '../../assets/img/search.png';
import './searchBar.css';

export default function SearchBar({bookStore}) {
    const [value,setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
        bookStore.searchBooks(e.target.value);
    };

    function handleSearch() {
        bookStore.searchBooks(value)
    };

    return (
        <div className="searchbar_wrapper">
            <Input
            inputType="text" 
            onChange={handleChange} 
            placeholder="Введите название книги"
            value={value}
            name="search"/>
            <img
            src={`${search}`}
            alt="search"
            width="50px"
            height="50px"
            className="search_image"
            onClick={handleSearch}/>
        </div>
    );
};
