import React from 'react';
import classes from './input.module.css';

export const Input = (props) => {
    let input = null;
    switch (props.inputType) {
        case 'text':
            input = <input
                    type="text" 
                    placeholder={props.placeholder} 
                    name={props.name}
                    className={classes.singleInput}
                    value={props.value}
                    onChange={props.onChange}/>
            break;
        case "email":
            input = <input
                    type="email" 
                    placeholder={props.placeholder} 
                    name={props.name}
                    className={classes.singleInput}
                    value={props.value}
                    onChange={props.onChange}/>
            break;
        case "password":
            input = <input
                    type="password"
                    placeholder={props.placeholder} 
                    name={props.name}
                    className={classes.singleInput}
                    value={props.value}
                    onChange={props.onChange}
                    style={{
                        border: props.error !== '' ? '2px solid red' : ''
                    }}/>
            break;
        case "checkbox":
            input = <input
                    type="checkbox"
                    checked={props.value}
                    className={classes.checkbox}
                    placeholder={props.placeholder}
                    name={props.name}
                    checked={props.checked}
                    onChange={props.onChange}/>
            break;
        case 'select':
            input = <select 
                    value={props.value}
                    className={classes.select}
                    name={props.name}
                    onChange={props.onChange}>
                        {props.options.map((option,id)=> {
                            return (
                                <option key={id}>{option}</option>
                            )
                        })}
                    </select>
            break;
        case 'file':
            input = <input
            type="file"
            className={classes.hidden}
            placeholder={props.placeholder}
            name={props.name}
            checked={props.checked}
            onChange={props.onChange}
            ref={props.uploadRef}/>
            break;
        default:
            break;
    }
    return input
}