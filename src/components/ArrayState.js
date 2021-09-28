import React, {useState} from "react";

function ArrayState(){
    const [items, changeArray] = useState([]);

    const addItem = () =>{
        changeArray([...items, {
            id: items.length,
            value: Math.ceil(Math.random() * 100) + 1
        }])
    }
    return(
        <div>
            <button onClick={addItem}>Add Item</button>
            <ol>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))} 
            </ol>
        </div>
    );
}

export default ArrayState;