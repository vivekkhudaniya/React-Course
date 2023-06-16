import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import CounterPage from './pages/CounterPage';

function App() {

  return (
    <div>
    
      {/* <Component1 name="Vivek" age={25} />
      <Component2/>
      <Component3/> */}
      <CounterPage/>
      {/* <div>
        React
        {
          false
          ? true ? <div>Hey1</div> : <div>Hey2 </div>
          : true ? <div>Hey3</div> : <div>Hey4</div>
        }
      </div> */}
    </div>
  );

}

export default App;
