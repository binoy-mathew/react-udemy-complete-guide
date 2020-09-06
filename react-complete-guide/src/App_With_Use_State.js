import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

    const [personState, setPersonState] = useState({
        persons : [
            {name: "Brian", age: 37},
            {name: "Julia", age: 30},
            {name: "Stephan", age: 35}
        ],
        otherState : "some other value"
        }
    );

    const switchNameHandler = () => {
        setPersonState({
                persons : [
                    {name: "Brian2", age: 37},
                    {name: "Julia", age: 30},
                    {name: "Stephan", age: 35}
                ]
            }
        );
    }

    return (
        <div className="App">
            <h1>Hi!! I am a React App.
            </h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>Hobbies: Music, Arts</Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
        </div>
    );this.setState

}

export default app;
