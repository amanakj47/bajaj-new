import React from "react";
import "./Dropdown.css"; // Ensure you have a corresponding CSS file for styling

const Dropdown = ({ onSelect }) => {
  const handleSelect = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    onSelect(selectedOptions); // Pass the selected options to the parent component
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="multi-select">Multi Filter</label>
      <select id="multi-select" multiple onChange={handleSelect}>
        <option value="Alphabets">Alphabets</option>
        <option value="Numbers">Numbers</option>
        <option value="HighestLowercase">Highest lowercase alphabet</option>
      </select>
    </div>
  );
};

export default Dropdown;
