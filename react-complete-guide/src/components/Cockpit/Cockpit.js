import React, { useEffect, useRef } from 'react';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    useEffect(() => {
            console.log('[Cockpit.js] useEffect');
            console.log('Now toggling click');
            toggleButtonRef.current.click();
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
            {props.person}
        </div>
    );
};

export default cockpit;
