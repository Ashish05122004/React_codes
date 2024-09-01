import React,{useState } from 'react'
import './ProductForm.css'

export default function ProductForm() {

    const [newName,setName] =useState('');
    const [newDate,setDate] =useState('');

    const nameChangeHandler =(event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    }
    const dateChangeHandler =(event)=>{
        //console.log(event.target.value);
        setDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const productData={
            name:newName,
            date:newDate
        }
        console.log(productData);
        setDate('');
        setName('');
    }

    return (
        <form className='newProduct-form' onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={newName} onChange={nameChangeHandler}/>
            </div>
            <div>
                <label >Date: </label>
                <input type="date" value={newDate} min={2024 - 1 - 1} max={2024 - 12 - 31}  onChange={dateChangeHandler}/>
            </div>
            <button type='submit' className='newProduct-button'>Add Product</button>
        </form>
    )
}
