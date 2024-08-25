import React, { useState } from "react";
import TextInput from "./components/TextInput";
import Dropdown from "./components/Dropdown";
import Result from "./components/Result";
import "./App.css"; // Import the CSS file

const App = () => {
  const [jsonData, setJsonData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const handleJsonSubmit = (data) => {
    setJsonData(data);
  };

  const handleDropdownSelect = (options) => {
    setSelectedOptions(options);
  };

  const filterData = () => {
    let filteredData = [];

    if (selectedOptions.includes("Alphabets")) {
      filteredData = filteredData.concat(
        jsonData.data.filter((item) => /^[A-Za-z]+$/.test(item))
      );
    }

    if (selectedOptions.includes("Numbers")) {
      filteredData = filteredData.concat(
        jsonData.data.filter((item) => /^[0-9]+$/.test(item))
      );
    }

    if (selectedOptions.includes("HighestLowercase")) {
      const lowercaseAlphabets = jsonData.data.filter((item) =>
        /^[a-z]+$/.test(item)
      );
      if (lowercaseAlphabets.length > 0) {
        const highestLowercase = lowercaseAlphabets.sort().reverse()[0];
        filteredData = filteredData.concat(highestLowercase);
      }
    }

    return filteredData;
  };

  return (
    <div className="App">
      <h1>21BCE2276</h1>
      <TextInput onSubmit={handleJsonSubmit} />
      {jsonData && <Dropdown onSelect={handleDropdownSelect} />}
      {jsonData && selectedOptions.length > 0 && (
        <Result data={filterData()} />
      )}
    </div>
  );
};

export default App;
