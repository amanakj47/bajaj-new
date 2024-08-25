import React from "react";

const Result = ({ data }) => {
  return (
    <div className="result-container">
      <h2>Filtered Response</h2>
      <div className="filtered-response">
        {data.length > 0 ? (
          data.join(", ")
        ) : (
          <span>No matching data</span>
        )}
      </div>
    </div>
  );
};

export default Result;
