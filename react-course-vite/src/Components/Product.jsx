import React from 'react'
import "../Components/Product.css"

export default function Product(props) {
  const products = props.products;

  return (
    <div className='container'>
      <div className='product-item'>
        <div className='product-date'>
          <span>{products[0].itemDate}</span>
          <span>{products[0].itemMonth}</span>
          <span>{products[0].itemYear}</span>
        </div>
        <div className="product-name">
          <div>{products[0].itemName}</div>
        </div>
      </div>
    </div>
  );
}
