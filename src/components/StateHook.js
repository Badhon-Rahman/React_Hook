import React, {useState} from "react";

function StateHook(){
    const initialValue = 0;
    const [count, stateChange] = useState(initialValue);

    const incrementMultiple = () =>{
        for(let i = 0; i < 5; i++){
            stateChange(prevState => prevState + 1);
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => stateChange(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => stateChange(prevState => prevState - 1)}> Decrement</button>
            <button onClick={() => stateChange(initialValue)}>Reset</button>
            <button onClick={incrementMultiple}>Multi Increment</button>
        </div>
    );
}

export default StateHook;