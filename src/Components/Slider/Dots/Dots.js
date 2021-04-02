import React from 'react';
import Dot from './Dot';
import classes from './dots.module.css';

export default function Dots({images, activeIndex}) {
    return (
        <div className={classes.dotsContainer}>
            {images.map((image,index) => {
                return (
                    <Dot key={image} active={activeIndex === index}/>
                );
            })}
        </div>
    )
}
