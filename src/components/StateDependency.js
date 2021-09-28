import React,{useState, useEffect} from "react";

function StateDependency(){
    const [count, handleCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(handleInterval, 1000);
        return(() => {
            console.log('Effect removed');
            clearInterval(interval);
        });
    },[]);

    //with dependency array @count
    // const handleInterval = () =>{
    //     handleCount(count + 1);
    // }

    const handleInterval = () =>{
        handleCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            {count}
        </div>
    );
}

export default StateDependency;