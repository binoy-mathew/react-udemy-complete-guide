import React, { useEffect } from 'react';

const cockpit = (props) => {
    useEffect(() => {
            console.log('[Cockpit.js] useEffect');
            return () => {
                console.log('[Cockpit.js] Clean up work');
            }
    }, []);

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <button onClick={props.clicked}>Display Switch Name Button</button>
            {props.person}
        </div>
    );
};

export default cockpit;
