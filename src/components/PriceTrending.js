import React, { useEffect, useState } from 'react';
import LineChart from './LineChart';
import Dropdown from './DropDown';


function PriceTrending() {
  const [itemData, setItemData] = useState({});
  const [options, setOptions] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const initializeOptions = (items) => {
    const itemOptionArray = items.map(function(item) {
        return item['itemName'];
      });
    setOptions(itemOptionArray);
    setSelectedItem(itemOptionArray[0]);
    fetchItemByName();
  }

  const handleSelect = (selectedItem) => {
    // alert(selectedItem);
    // console.log('Selected option:', selectedItem);
    setSelectedItem(selectedItem.itemName);
    setItemData(selectedItem);
    fetchItemByName();
  };

  useEffect(() => {
    fetch('http://localhost:8080/grocery/list')
      .then(response => response.json())
      .then(data => initializeOptions(data));
  }, []);

  const fetchItemByName = () => {
    fetch('http://localhost:8080/grocery/sale-list/'+ selectedItem)
      .then(response => response.json())
      .then(data => setItemData(data));
  };

  return (
    <div>
        <br/>
        <Dropdown options={options} onSelect={handleSelect} />
        <LineChart itemData={itemData}/>
    </div>)
}

export default PriceTrending;
