// import { useState } from 'react'
// import './App.css'

// function App() {
//   let [count, setCount] = useState(5) //it is hook through which we can change the UI.Here *count is a variable and *setCount is a method that will change the count.
//   const addValue = ()=>{
//     count++;
//     setCount(count);
//     console.log(count);
//     if(count > 20){
//       count = 20;
//       setCount(count);
//     }
//   }
//   const removeValue = ()=>{
//     count--;
//     setCount(count);
//     console.log(count);
//     if(count < 0){
//       count = 0;
//       setCount(count);
//     }
//   }
//   return (
//     <>
//      <h1>Chai Aur React {count}</h1>
//      <button
//      onClick={addValue}
//      >addNumber {count}</button>
//      <button
//      onClick={removeValue}
//      >removeNumber {count}</button>
//     </>
//   )
// }

// export default App\
import React from 'react'
import "./App.css"
import Counter from './Components/Counter'

export default function App() {
  return (
    <div className='container'>
      <Counter></Counter>
    </div>
  )
}

