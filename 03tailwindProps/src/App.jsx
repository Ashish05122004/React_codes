import { useState } from 'react'
import './App.css'
import Card from './Card'



function App() {
  const [count, setCount] = useState(0);
  let obj = {
    name: "Ashish",
    age: 19
  }
  let arr = [1, 3, 4, 5,];

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Chai Aur Tailwind</h1>
      <Card username="chaiAurCode" btnText='visite my channel' myObj={obj} myarr={arr} />
      <Card username="ashish" btnText='More Details' myObj={obj} myarr={arr} />
    </>
  )
}

export default App
