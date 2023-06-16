import { useReducer, useState } from 'react';
// import Button from '../components/Button';
// import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = "change_value_to_add"



const reducer = (state,action) =>{

  switch(action.type){
    case INCREMENT_COUNT:
      return{
        ...state,
        count: state.count + 1
      }
    
    case SET_VALUE_TO_ADD:
      return{
        ...state,
        valueToAdd: action.payload
      }

    default:
      return{
        state
      }

  }
  // if(action.type === INCREMENT_COUNT){
    // return{
    //   ...state,
    //   count: state.count + 1
    // }
  // }

  // if(action.type === SET_VALUE_TO_ADD){
    // return{
    //   ...state,
    //   valueToAdd: action.payload
    // }
  // }
} 

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd] = useState(0);

  const[state, dispatch] = useReducer(reducer,{
    count:0,
    valueToAdd:0
  })


  const increment = () => {
    dispatch({
      type : INCREMENT_COUNT
    })
  };


  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type : SET_VALUE_TO_ADD,
      payload : value
    })

    //setValueToAdd(value);

  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };


  return (
    <div>
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <button>Add it!</button>
      </form>
      </div>
  );
}

export default CounterPage;
