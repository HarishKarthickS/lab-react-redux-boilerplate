import { useState } from "react";
import React from 'react'
import { incrementNumber,decrementNumber } from "./Action";
import { createStore } from 'redux';
import reducer from './Reducer';
const store =createStore(reducer)
export default function LikeCounter(){
    
    const [count,setCount] = useState(0);
    store.subscribe(()=>{
        setCount(store.getState().count);
    })
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>store.dispatch(incrementNumber())}>Increment</button>
            <button onClick={()=>store.dispatch(decrementNumber())}>Decrement</button>
        </div>
    )
}