import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        }
        else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message : 'Hello' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person name={person.name}
                        key = {person.id}
                        age={person.age} click={() => this.props.clicked(index)}
                         changed={(event) => this.props.changed(event, person.id)}
                    />
        });
    }
}

export default Persons;
