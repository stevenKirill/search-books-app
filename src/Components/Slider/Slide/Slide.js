import React from 'react';
import classes from './slide.module.css';

export default function Slide({content}) {
    return <div className={classes.slide} style={{
        backgroundImage: `url(${content})`
    }}></div>
}