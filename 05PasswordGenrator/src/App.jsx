import { useState,useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] =useState(8);
  const [numberPresent,setNumberPresent] =useState(false);
  const [charPresent,setCharPresent] =useState(false);
  const [password,setPassword] =useState("");

  // useRef
  const passwordRef = useRef(null);
  //useCallback
  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberPresent){
      str += "0123456789"
    }
    if(charPresent){
      str += "{&*^($'!}[]()<>,`~\;:"
    }
    for(let i=0;i<length;i++){
      let idx = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(idx);
    }
    setPassword(pass);
  },[length,numberPresent,charPresent,setPassword]);

  //select and copy password
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
  },[password])

  //useEffect
  useEffect(passwordGenerator,[length,numberPresent,charPresent,passwordGenerator]);

  return (
    <>                                                                                               
    <div className="container">

      <h1 className='heading'>PASSWORD GENERATOR</h1>

      <div className='password-sec'>
        <input type="text"
        value={password}
        placeholder='Password'
        readOnly
        ref={passwordRef}
         />
         <button 
         className='copy-btn'
         onClick={copyPassword}
         >Copy</button>
      </div>

      <div className="input-sec">
      <div>
        <input type="range"
        min={8}
        max={100}
        value={length}
        id='r'
        onChange={(e)=>{
          setLength(e.target.value);}}
         />
         <label htmlFor='r'>Length:{length}</label>
      </div>
      <div>
        <input type="checkbox" 
          checked={numberPresent}
          id='b'
          onChange={(e)=>{
            setNumberPresent(e.target.checked);}}
        />
        <label htmlFor='b'>Number</label>
      </div>
      <div>
        <input type="checkbox" 
          checked={charPresent}
          id='c'
          onChange={(e)=>{
            setCharPresent(e.target.checked);}}
        />
        <label htmlFor='c'>Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
