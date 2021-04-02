import React from 'react';
import classes from './dots.module.css';

export default function Dot({active}) {
    return <div className={classes.dot} style={{
        backgroundColor: active ? 'black' : 'red',
    }}></div>
}
