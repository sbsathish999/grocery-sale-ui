import React, { useEffect, useState } from 'react';
import Loader from './Loader';

function GroceryItems() {
  const [maxSaleitems, setMaxSaleItems] = useState([]);
  const [loading, setLoading] = useState(true);
  let [count] = useState(1);


  useEffect( () =>{
    async function fetchData() {
      const response = await fetch('http://localhost:8080/grocery/max-sale-list');
      const json = await response.json();
      setMaxSaleItems(json);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div><br/>{ loading ? <Loader /> : (
    <div style={{padding: '10px',margin: 'auto', height:'50%',width:'50%', alignContent : 'center'}}>
      <h6>Grocery Maxium sale List</h6>
      <table className='table' style={{textAlign : "center", width:"100%"}}>
        <thead>
            <tr>
                <td>No.</td>
                <td>Item Name</td>
                <td>Max Price</td>
                <td>Date</td>
            </tr>
        </thead>
        <tbody>
        {maxSaleitems.map(item => (
          <tr key={item.itemName}>
            <td>{count++}</td>
            <td>{item.itemName}</td> 
            <td>{item.price}</td> 
            <td>{item.date}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>)}</div>
    );
}

export default GroceryItems;
