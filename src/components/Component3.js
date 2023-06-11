import React,{useState} from 'react';

const Component3 = () => {

    const [state, setState] = useState({ counter: '' });


    const handleChange = (event) =>{
        console.log(event.target.value);
        setState(prevState => ({ counter: event.target.value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(state.counter);
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <label> Name </label>
            <input id = "text"  onChange={ handleChange}/> 
            <button type = "submit"> Submit </button>
            </form>
        </div>

    )

}

export default Component3;