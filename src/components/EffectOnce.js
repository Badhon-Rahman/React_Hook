import React,{useState, useEffect} from "react";

function EffectOnce(){
    const [x, xAxis] = useState(0);
    const [y, yAxis] = useState(0);

    const getMousePosition = (e) =>{
        xAxis(e.clientX);
        yAxis(e.clientY);
        console.log('mouse moved');
    }

    useEffect(() =>{
        window.addEventListener('mouseover', getMousePosition);
        console.log('effect occured');

        return (() => {
            console.log('Unmounted');
            window.removeEventListener('mouseover', getMousePosition);
        });
    },[]);

    // useEffect(()=>{
    //     console.log('2nd effect');
    // });

    return (
        <div>xAxis: {x} -- yAxis: {y}</div>
    );
}

export default EffectOnce;