import React, { useState } from 'react'

const App = () => {
  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName] = useState("");

  // const changeFirstNameHandler = (event)=>{
  //   // console.log("printing first name:")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // const changeLastNameHandler = (event)=>{
  //   // console.log("printing last name:");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  //? storing data in state using object
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: ""
  });
  const changeHandler = (event) => {
    const { name, type, value, checked } = event.target; //destructuring 
    setFormData((prev) => {
      return {
        ...prev,
        //[event.target.name]: event.target.value //i.e firstName:abc
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  const submitHandler = (event) =>{
    event.preventDefault();
    console.log("Printing form data ...")
    console.log(formData);
  }
  return (
    <div className='app'>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='Enter the First name..'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />

        <br />
        <br />
        <input
          type="text"
          placeholder='Enter the Last name..'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <br />
        <br />
        <input
          type="email"
          placeholder='Enter the email..'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br />
        <br />
        <textarea
          placeholder='enter your comments...'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        ></textarea>

        <br /><br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          id='id1'
          checked={formData.isVisible}
        />
        <label htmlFor="id1">Am I visible?</label>

        <br /><br />

        <fieldset>
          <legend>MODE:</legend>

          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            id='id2'
            value="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="id2">Online Mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            id='id3'
            value="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="id3">Offline Mode </label>
        </fieldset>

        <br /><br />
        <label htmlFor="favCar">Favorite Car</label>
        <select
          name="favCar"
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Thar">Thar</option>
          <option value="Defender">Defender</option>
        </select>

        <br /><br />
        {/* <input type="submit" /> */}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
