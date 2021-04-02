import React from 'react';
import {useState, useEffect} from 'react';
import EditBook from '../EditBook/EditBook';
import './bookItem.css';

export default function BookItem({book, handleDelete}) {
    const [visible,setVisible] = useState(false);
    const [loadImage,setLoadImage] = useState('');

    useEffect(()=> {
        let image = null;
        if (book.image === '') {
            image = import(`../../assets/img/unavailable.png`)
        } else {
            image = import(`../../assets/img/${book.image}`);
        }
        image.then((imageModule) => {
            setLoadImage(imageModule.default)
        });
    },[book])

    let component = null;

    function handleEdit() {
        setVisible(prev => !prev)
    };

    if (!visible) {
        component = <div className="book_list_wrapper">
        <div key={book.id} className="container">
            <div className="info_container">
                <div>
                    <span className="book_label">Автор: </span>
                    <span className="label_value">{book.author}</span>
                </div>
                <div>
                    <span className="book_label">Название: </span>
                    <span className="label_value">{book.name}</span>
                </div>
                <div>
                    <span className="book_label">Издательство: </span>
                    <span className="label_value">{book.publisher}</span>
                </div>
                <div>
                    <span className="book_label">Год выпуска: </span>
                    <span className="label_value">{book.year}</span>
                </div>
                <div>
                    <span className="book_label">Количество страниц: </span>
                    <span className="label_value">{book.pages}</span>
                </div>
            </div>
            <div className="image_container">
                <img src={loadImage} alt={book.name} width="250px" height="300px"/>
            </div>
        </div>
        <div className="buttons_container">
            <button onClick={handleDelete} className="delete_button" data-id={book.id}>Удалить</button>
            <button onClick={handleEdit} className="edit_button">Редактировать</button>
        </div>
    </div>
    } else {
        component = <EditBook handleEdit={handleEdit} bookId={book.id}/>
    }
    return component;
}
