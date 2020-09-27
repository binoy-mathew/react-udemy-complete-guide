import React from 'react';

import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((person, index) => {
        return <Person name={person.name}
                    key = {persons.id}
                    age={person.age} click={() => props.clicked(index)}
                     changed={(event) => props.changed(event, person.id)}
                />
    });
}

export default persons;
