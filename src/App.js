import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  const [state, setState] = useState({ counter: 0 });

  const counter = 0;

  const increment = () => {
    setState({counter : 5});
  }

  const name = "Vivek"

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <button onClick={increment}>Increment</button>
      {name}
    </div>
  );
}

export default App;
