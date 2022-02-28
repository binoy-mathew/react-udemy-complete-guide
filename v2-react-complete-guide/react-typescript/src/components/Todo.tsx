import React from 'react';

const Todo: React.FC<{ items: string[] }> = (props) => {
    // function Todo: (props) {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default Todo;
