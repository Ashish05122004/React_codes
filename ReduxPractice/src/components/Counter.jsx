import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../redux/slice/CounterSlice';

const Counter = () => {

    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
      <button
      onClick={()=>dispatch(increment())}
      >
        increment
      </button>
      <br /><br />
      <div>
        {count}
      </div>

      <br /><br />
      <button
      onClick={()=>dispatch(decrement())}
      >
        decrement
      </button>
    </div>
  )
}

export default Counter
