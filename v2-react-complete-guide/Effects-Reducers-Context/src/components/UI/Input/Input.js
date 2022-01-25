import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

//function Input(props, ref) {
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    //Should return a Map with key as name of externally exported object and value as the object.
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        };
    });

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

//Function that we return should be wrapped in React.forwardRef()
//export default React.forwardRef(Input);

export default Input;