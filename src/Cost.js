import React from "react";

const Cost = ({ image, cpuCores, memory }) => {
  console.log(memory, cpuCores);
  return (
    <div className="cost-div">
      <h2>
        <b>Cost Estimates</b>
      </h2>
      {image.name}        {image.price}
      <br />
      {memory}
      <br/>
      {cpuCores}
      <hr size="2" width="20%" color="grey" />
      <h3>${image.price}/mo</h3>
    </div>
  );
};

export default Cost;
