import React, { useState } from 'react';
import "./ProductItem.css";
import ProductDate from './ProductDate';

export default function ProductItem(props) {
  // let name = props.name;
  const [name, setName] = useState(props.name);

  const clickHanlder = () => {
    setName("Samrtphone");
    console.log("Buttom clicked...");
  }

  return (
    <div className='product-item'>
      <ProductDate date={props.date} month={props.month} year={props.year}></ProductDate>
      <div className="product-name">
        <div>{name}</div>
        <button onClick={clickHanlder}>Click me</button>
      </div>
    </div>
  )
}
