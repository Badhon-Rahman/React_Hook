import React, {useState, useEffect} from "react";

function EffectHook(){
    const [count, hookEffect] = useState(0);
    const [name, handleName] = useState('');

    useEffect(() =>{
        document.title = `Clicked ${count} times`
        console.log('update')
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => handleName(e.target.value)} />
            <button onClick={() => hookEffect(count + 1)}>Clicked {count} times</button>
        </div>
    );
}

export default EffectHook;