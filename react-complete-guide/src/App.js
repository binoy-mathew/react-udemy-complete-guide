import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi!! I am a React App. </h1>
    //   </div>
    // );
    return React.createElement('div', {className: 'App'}, React.createElement('hi', null, 'this is inside createElement'));
  }
}

export default App;
