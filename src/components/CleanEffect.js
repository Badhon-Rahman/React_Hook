import React,{useState, useEffect} from "react";
import EffectOnce from "./EffectOnce";

function CleanEffect(){
    const [display, handleDisplay] = useState(false);
    
    return (
        <div>
            <button onClick={() => handleDisplay(!display)}>Toggle Display</button>
            {display && <EffectOnce />}
        </div>
    );
}

export default CleanEffect; 