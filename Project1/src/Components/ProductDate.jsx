import React from 'react'
import "./productDate.css"

export default function ProductDate(props) {
    const date=props.date;
    const month=props.month;
    const year=props.year;
  return (
    <div className='product-date'>
      <div>{date}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  )
}
