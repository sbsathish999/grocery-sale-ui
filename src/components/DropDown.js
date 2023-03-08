import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      <select value={selectedOption} onChange={(event) => handleSelectOption(event.target.value)}>
        <option value={null}>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
