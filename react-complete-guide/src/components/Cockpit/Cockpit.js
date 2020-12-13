import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(`Cockpit.js authenticated ${authContext.authenticated}`);

    useEffect(() => {
            console.log('[Cockpit.js] useEffect');
            console.log('Now toggling click');
            //toggleButtonRef.current.click();
            return () => {
                console.log('[Cockpit.js] Clean up work');
            }
    }, []);

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <button
                ref = {toggleButtonRef}
                onClick={props.clicked}>
                Display Switch Name Button
            </button>

            <button onClick={authContext.login}> Log in </button>
            
            {props.person}
        </div>
    );
};

export default cockpit;
