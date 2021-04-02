import React from 'react';
import {useState} from 'react';
import {Input} from '../Common/Input/Input';
import {observer} from 'mobx-react';
import bookStore from '../../Store/BooksStore';
import {generateYears, generatePages} from '../../utils/utilsFunctions';
import './editBook.css';

export default observer(function EditBook({handleEdit, bookId}) {
    const [value,setValue] = useState({
        bookName: '',
        author: '',
        publisher: '',
        pages: "",
        year: '',
    });

    const [error,setError] = useState('');

    function handleChange(e) {
        setValue((prev) => {
            return {
                ...prev,
                [e.target.name] : e.target.value,
            }
        })
    };
    
    function noneIsEmpty() {
        return Object.values(value).every(val => val !== '');
    }

    function handleSaveNewBook(e) {
        e.preventDefault();
        if(noneIsEmpty()) {
            bookStore.findAndEdit(bookId, value);
            handleEdit();
        } else {
            // обработка ошибок
            setError('Все поля должны быть заполнены');
        }
    };
    
    return (
        <div>
            {error !== '' && <div className="edit_error_text">{error}</div>}
        <form onSubmit={handleSaveNewBook} data-id={bookId} className="editForm">
            <div>
                <Input 
                inputType="text"
                onChange={handleChange} 
                placeholder="Введите название книги" 
                value={value.bookName}
                name="bookName"/>
                <Input 
                inputType="text"
                onChange={handleChange}
                placeholder="Введите автора"
                value={value.author}
                name='author'/>
                <Input 
                inputType="text" 
                onChange={handleChange} 
                placeholder="Введите издательство"
                value={value.publisher}
                name="publisher"/>
                <Input 
                inputType="select"
                onChange={handleChange}
                placeholder="Выберите год"
                options={generateYears()}
                name="year"
                value={value.year}/>
                <Input 
                inputType="select" 
                onChange={handleChange} 
                placeholder="L" 
                options={generatePages()}
                name="pages"
                value={value.pages}/>
            </div>
            <div className="edit_buttons_container">
                <button onClick={handleSaveNewBook} className="save_btn">Сохранить</button>
                <button onClick={handleEdit} className="cancel_btn">Отмена</button>
            </div>
        </form>
        </div>
    )
})
