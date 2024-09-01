import React from 'react'
import "../Components/Product.css"
import ProductItem from './ProductItem';

export default function Product(props) {
  const products =props.res;
  return (
    <div className='product'>
        <ProductItem name={products[0].itemName} date={products[0].itemDate} month={products[0].itemMonth} year={products[0].itemYear}>
        </ProductItem>
        <ProductItem name={products[1].itemName} date={products[1].itemDate} month={products[1].itemMonth} year={products[1].itemYear}>
        </ProductItem>
        <ProductItem name={products[2].itemName} date={products[2].itemDate} month={products[2].itemMonth} year={products[2].itemYear}>
        </ProductItem>
        <ProductItem name={products[3].itemName} date={products[3].itemDate} month={products[3].itemMonth} year={products[3].itemYear}>
        </ProductItem>
    </div>
    
  );
}
