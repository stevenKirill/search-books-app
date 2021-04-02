import React from 'react';
import classes from './arrow.module.css';
import leftArrow from '../../../assets/img/left.png';
import rightArrow from '../../../assets/img/right.png';

export default function Arrow({direction, handleClick}) {
    return (
        <div
        onClick={handleClick} 
        className={classes.arrowWrapper}
        style={{
            right: direction === 'right' ? '20%' : '', 
            left: direction === 'left' ? '20%' : ''
        }}>
             {direction === 'right' 
             ? <img src={rightArrow} className={classes.arrow}/> 
             : <img src={leftArrow} className={classes.arrow}/>}
        </div>
    )
}
