import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi!! I am a React App.
            </h1>
            <button onClick={props.clicked}>Display Switch Name Button</button>
            {props.person}
        </div>
    );
};

export default cockpit;
