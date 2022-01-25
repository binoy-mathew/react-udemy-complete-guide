import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

//The reducer function can be created outside of the scope of the component function.
//Because it does not require anything apart from the parameters.
const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }

    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }

    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }

    return { value: '', isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    //const [enteredPassword, setEnteredPassword] = useState('');
    //const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });

    const authCtx = useContext(AuthContext);

    //Read the isValid and store into respective local variables
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking Form validity...');
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log('CLEANUP!!');
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        //setEnteredEmail(event.target.value);
        dispatchEmail({
            type: 'USER_INPUT',
            val: event.target.value,
        });

        // setFormIsValid(
        //     event.target.value.includes('@') &&
        // 		passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        //setEnteredPassword(event.target.value);
        dispatchPassword({
            type: 'USER_INPUT',
            val: event.target.value,
        });

        // setFormIsValid(
        //     emailState.isValid && event.target.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        //setEmailIsValid(emailState.isValid);
        dispatchEmail({
            type: 'INPUT_BLUR',
        });
    };

    const validatePasswordHandler = () => {
        //setPasswordIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({
            type: 'INPUT_BLUR',
        });
    };

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            //This is where we need to focus on email input field
            emailInputRef.current.focus();
        } else {
            //This is where we need to focus on password input field
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    isValid={emailState.isValid}
                    id="email"
                    label="E-Mail"
                    type="email"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    isValid={passwordState.isValid}
                    id="password"
                    label="Password"
                    type="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />

                {/*
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                */
                }
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
