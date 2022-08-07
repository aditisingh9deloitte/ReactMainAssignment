import React from "react";

// const availRegions = ["us-east-1", "us-east-2", "us-west-1", "india-1"];

const Regions = ({ setSelectedRegion }) => {
  const handleOnSelect = (e) => {
    setSelectedRegion(e.target.value);
  };
  return (
    <div className="region-div">
      <select onChange={(e) => handleOnSelect(e)}>
        <option value="us-east-1">us-east-1</option>
        <option value="us-east-2">us-east-2</option>
        <option value="us-west-1">us-west-1</option>
        <option value="india-1">india-1</option>
      </select>
    </div>
  );
};

export default Regions;
