import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import './navigation.css'

export default function Navigation() {
    return (
        <div className="navigation_container">
            <ul className="navigation_items_wrapper">
                <li className="navigation_item"><Link to="/" className="navigation_item_link">Главная</Link></li>
                <li className="navigation_item"><Link to="/add-book" className="navigation_item_link">Добавить книгу</Link></li>
                <li className="navigation_item"><Link to="/book-slider" className="navigation_item_link">Слайдер</Link></li>
            </ul>
        </div>
    );
};
