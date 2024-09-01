import React from 'react'
import Product from './Components/Product'
import "../src/App.css"
import NewProduct from './Components/NewProduct'

function App() {
  const response = [
    {
      id:101,
      itemName:"Mobile",
      itemDate:20,
      itemMonth:"May",
      itemYear:2000
    },
    {
      id:102,
      itemName:"Laptop",
      itemDate:13,
      itemMonth:"June",
      itemYear:1947
    },
    {
      id:103,
      itemName:"Telephone",
      itemDate:3,
      itemMonth:"july",
      itemYear:1990
    },
    {
      id:104,
      itemName:"Television",
      itemDate:23,
      itemMonth:"January",
      itemYear:1880
    }
  ];
  return(
    <div className='container'>
      <NewProduct></NewProduct>
      <Product res={response}></Product>
    </div>
  );
}
export default App;
