import React, { useState } from "react";
import "./TextInput.css"; // Import the CSS file

const TextInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    try {
      const parsedData = JSON.parse(inputValue);
      onSubmit(parsedData);
    } catch (error) {
      console.error("Invalid JSON input:", error);
      alert("Please enter valid JSON data.");
    }
  };

  return (
    <div className="text-input-container">
      <h3>API Input</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter valid JSON"
        className="text-input"
      />
      <button onClick={handleSubmit} className="submit-button" >
        Submit
      </button>
    </div>
  );
};

export default TextInput;
