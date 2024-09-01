import React,{ useState,useEffect } from 'react'

export default function App() {
  const [text, setText] = React.useState('');
  const changeHandler =(event) =>{
    console.log(text);
    setText(event.target.value);
  }
  //variation 1 -> It will run for each times when the page rerenders
  // useEffect(()=>{
  //   console.log("UI is rendered")
  // });

  //variation 2 -> It will run only once when the page is loaded
  // useEffect(()=>{
  //   console.log("UI is rendered")
  // },[]);

  //variation 3 -> It will run when the dependency changes. We have to pass the dependency
  // useEffect(()=>{
  //   console.log("UI is rendered")
  // },[text]);

  //variation 4-> It is used to handle unmounting ,i.e addListener and removeListener 
  useEffect(()=>{
    console.log("Listener is added")
    return ()=>{
      console.log("Listener is removed");
    }

  },[text]);
  return (
    <div>
      <input type="text" onChange={changeHandler} />
    </div>
  )
}
