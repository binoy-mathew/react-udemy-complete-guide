import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons : [
            {name: "Brian", age: 37},
            {name: "Julia", age: 30},
            {name: "Stephan", age: 35}
        ],
        isPersonNameChanged: false
    }

    switchNameHandler = () => {
        //console.log('Button Clicked');
        //DO NOT DO THIS -- this.state.persons[0].name = 'Bailey';
        this.setState({
                persons : [
                    {name: "Brian2", age: 38},
                    {name: "Julia2", age: 35},
                    {name: "Stephan", age: 35}
                ]
            }
        );
    }

    switchNameOnConditionHandler = () => {
            this.setState({isPersonNameChanged: true});
    };

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    /*
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Music, Arts</Person>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    */

    render() {
           let person = null;
           if (this.state.isPersonNameChanged) {
            person = (
                <div className="App">
                    <h1>Click on the button below to see magic!
                    </h1>
                    <button onClick={this.switchNameHandler}>Switch Name Now</button>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} />
                        })
                    }

                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi!! I am a React App.
                </h1>
                <button onClick={this.switchNameOnConditionHandler}>Display Switch Name Button</button>
                {person}
            </div>
        );

    }
}

export default App;
