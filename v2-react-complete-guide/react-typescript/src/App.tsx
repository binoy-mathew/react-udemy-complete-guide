import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('React'),
    new Todo('Typescript')
  ];

  return (
    <div className="App">
      <Todos items={todos}/>
    </div>
  );
}

export default App;
