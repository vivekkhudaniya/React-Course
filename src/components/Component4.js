import React,{useState} from 'react';

const Component4 = () => {
    
    const [state, setState] = useState({ counter: 0 });

    const increment = () => {
      setState(prevState => ({ counter: prevState.counter + 1 }));
    }

    return(
    <div>
        <h1>Counter: {state.counter}</h1>
        <button onClick={increment}>Increment</button>
    </div>
    )
}

export default Component4;