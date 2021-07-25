import React, { useState } from "react";
// import App from './App'

// console.log(items)

function Item({ name, category}) {
  const [inCart, setInCart] = useState(true);

  const cartClass = inCart ? "" : "in-cart"
  const cartText = inCart ? "Add to Cart" : "Added to Cart"
  

  function changeCartClass (){
    // console.log('hey from cart')
    setInCart(!inCart)
    console.log(cartClass)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeCartClass} className="add">{cartText}</button>
    </li>
  );
}

export default Item;
