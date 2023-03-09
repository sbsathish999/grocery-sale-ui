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
    fetchItemByName(selectedItem);
  }

  const handleSelect = (selectedItem) => {
    //alert(selectedItem);
    console.log('Selected option:', selectedItem);
    setSelectedItem(selectedItem.itemName);
    setItemData(selectedItem);
    fetchItemByName(selectedItem);
  };

  useEffect(() => {
    //alert("first fetch")
    async function fetchData() {
      const response = await fetch('http://localhost:8080/grocery/list');
      const json = await response.json();
      initializeOptions(json);
      setSelectedItem(json[0].itemName)
    }
    fetchData()
  }, []);

  const fetchItemByName = (selectedItem) => {
    //alert("fetch api", selectedItem)
    fetch('http://localhost:8080/grocery/sale-list?itemName='+ encodeURIComponent(selectedItem))
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
