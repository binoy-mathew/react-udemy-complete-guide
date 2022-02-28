import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo items={['React', 'Typescript']}/>
    </div>
  );
}

export default App;
