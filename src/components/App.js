import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isOn, setIsOn] = useState(false)
  

  // this data will be passed down to the ShoppingList as a prop
  // console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const appClass = isOn ? "App dark" : "App light"
  const buttonText = isOn ? "Dark Mode" : "Light Mode"

  function changeLightMode (){
    setIsOn(isOn => !isOn)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeLightMode}>{buttonText}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
