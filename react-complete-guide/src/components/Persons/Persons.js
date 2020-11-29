import React from 'react';

import Person from './Person/Person';

/*
Below, you can even do away with the curly brackets and the return statement
because the return statement is the only statement that you need.
So the code would be like -
    const persons = (props) => props.persons.map((person, index) => {
        return <Person name={person.name} key=... />
    });
*/
const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return <Person name={person.name}
                    key = {person.id}
                    age={person.age} click={() => props.clicked(index)}
                     changed={(event) => props.changed(event, person.id)}
                />
    });
}

export default persons;
