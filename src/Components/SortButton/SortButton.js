import React from 'react'
import {NUMBER_SORT,STRING_SORT} from '../../consts/sortConsts';
import classes from './sortbutton.module.css';


export default function SortButtons({bookStore}) {
    function handleSortTitle() {
        bookStore.sort(STRING_SORT)
    };
    function handleSortYear() {
        bookStore.sort(NUMBER_SORT)
    };
    return (
        <div className={classes.wrapper}>
            <button className={classes.yearSort} onClick={handleSortYear}>Сортировка по году</button>
            <button className={classes.titleSort} onClick={handleSortTitle}>Сортировка по заголовку</button>
        </div>
    )
}
