import React from "react";
import { useState } from "react";
const CounterHooks= ()=>{
    const[count, setCount]=useState(0)
    const increment=()=>{
        if(count<4)
        setCount(count+1)
    }
    const decrement=()=>{
        if(count>0)
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
    
}
export default CounterHooks