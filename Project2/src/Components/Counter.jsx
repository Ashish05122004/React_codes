import React,{useState} from 'react'
import './Counter.css'

export default function Counter() {
    let [count,setCount]=useState(0);
    const decrementClickHandler =()=>{
      count==0?alert("Danger zone💀💀💀💀"):setCount(--count);
    }
    const incrementClickHandler =()=>{
      setCount(++count);
    }
  return (
    <div className='counter'>
      <button className='counter-btn' onClick={decrementClickHandler}>-</button>
      <div className='counter-content'>{count}</div>
      <button className='counter-btn' onClick={incrementClickHandler}>+</button>
    </div>
  )
}


