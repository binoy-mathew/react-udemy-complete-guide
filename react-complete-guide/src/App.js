import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
    state = {
        persons : [
            {id: '01', name: "Brian", age: 37},
            {id: '02', name: "Julia", age: 30},
            {id: '03', name: "Stephan", age: 35}
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
        const persons = this.state.persons.slice();
        //const persons = [...this.state.persons];  you can also use spread operator to create a new list.
        persons.splice(index, 1);
        this.setState({persons: persons});
    };


    nameChangedHandler = (event, personId) => {
        const newName = event.target.value;

        const personIndex = this.state.persons.findIndex(p => p.id === personId);
        const newPerson = {...this.state.persons[personIndex]};
        newPerson.name = newName;

        const persons = [...this.state.persons];
        persons[personIndex] = newPerson;

        this.setState({persons: persons});
    };



    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover' : {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let person = null;
        if (this.state.isPersonNameChanged) {
            person = (<div className="App">
                <h1>Click on the button below to see magic!
                </h1>
                <button onClick={this.switchNameHandler}>Switch Name Now</button>
                {
                    this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                                <Person name={person.name}
                                    age={person.age} click={() => this.deletePersonHandler(index)}
                                     changed={(event) => this.nameChangedHandler(event, person.id)}
                                />
                            </ErrorBoundary>
                    })
                }

            </div>);

            style.backgroundColor = 'maroon';
        }

        return (
            <div className="App" style={style}>
                <h1>Hi!! I am a React App.
                </h1>
                <button onClick={this.switchNameOnConditionHandler}>Display Switch Name Button</button>
                {person}
            </div>
        );

    }
}

export default App;
