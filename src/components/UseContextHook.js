import React,{useContext} from "react";
import {firstContext, secondContext} from '../App'

function UseContextHook(){
    const fContext = useContext(firstContext);
    const sContext = useContext(secondContext);
    return (
        <div>
            {fContext} --- {sContext}
        </div>
    );
}

export default UseContextHook;