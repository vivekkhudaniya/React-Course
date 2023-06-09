import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Component1 from './components/Component1';

function App() {

  const [state, setState] = useState({ counter: 0 });

  const counter = 0;

  const increment = () => {
    setState({counter : 5});
  }


  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <button onClick={increment}>Increment</button>
    
      <Component1 name = "Vivek" age = {25}/>
    </div>
  );
}

export default App;
