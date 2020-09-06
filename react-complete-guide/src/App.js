import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons : [
            {name: "Brian", age: 37},
            {name: "Julia", age: 30},
            {name: "Stephan", age: 35}
        ]
    }

    switchNameHandler = () => {
        //console.log('Button Clicked');
        //DO NOT DO THIS -- this.state.persons[0].name = 'Bailey';
        this.setState({
                persons : [
                    {name: "Brian2", age: 37},
                    {name: "Julia2", age: 35},
                    {name: "Stephan", age: 35}
                ]
            }
        );
    }

    render() {
        return (
            <div className="App">
                <h1>Hi!! I am a React App.
                </h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Music, Arts</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );

        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'this is inside createElement'));

    }
}

export default App;
