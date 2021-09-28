import React, {useState} from "react";

function ObjState(){
    const [name, nameChange] = useState({firstName:'', lastName:''});
    
    return (
        <div>
            <h1>First Name: {name.firstName}</h1>
            <h1>last Name: {name.lastName}</h1>
            <form>
                <input type="text" value={name.firstName} name="First Name" onChange={e => nameChange({...name, firstName: e.target.value})} />
                <input type="text" value={name.lastName} name="Last Name" onChange={e => nameChange({...name, lastName: e.target.value})} />
            </form>
        </div>
    );
}

export default ObjState;