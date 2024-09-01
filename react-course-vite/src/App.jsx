import React  from "react"
import Product from './Components/Product';
function App() {
  const products = [
    {
      id:101,
      itemName:"Mobile",
      itemDate:20,
      itemMonth:"May",
      itemYear:2000
    }, 
  ];

  return (
    <React.Fragment>
      <Product products={products}></Product>
    </React.Fragment>
  );
}

export default App
