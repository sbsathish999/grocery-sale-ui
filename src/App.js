import logo from './logo.svg';
import './App.css';
import GroceryItems from './components/GroceryItems';
import PriceTrending from './components/PriceTrending';
import { useState } from 'react';

function switchBody(value, setValue) {
  if(value == "price-trending") {
    setValue("max-sale");
  } else {
    setValue("price-trending")
  }
}
function App() {
  let [value, setValue] = useState("max-sale")
  return (
    <div>
    <div>
      <h2><u>Grocery Sale Information</u></h2>
      <div><button onClick={() => switchBody(value, setValue)}>{value == "max-sale" ? "Switch to Price Trending" : "Switch to Max Sale Items" }</button></div>
    </div>
    <div>
      {value == "price-trending" ? <PriceTrending/> : <GroceryItems />}
      {/* <PriceTrending /> */}
    </div>
    </div>
  );
}

export default App;
