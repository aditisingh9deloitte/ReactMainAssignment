import { Button } from "@mui/material";
import React from "react";
import instancedata from "./data/instance-data.json";

const InstanceType = ({ setCpuCores, setMemory }) => {
  const [selectedTab, setSelectedTab] = React.useState("generalPurpose");

  const handleOnSelectMemory = (e) => {
    setMemory(e.target.value);
  };

  const handleOnSelectCpu = (e) => {
    setCpuCores(e.target.value);
  };
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={"instance-main"}>
      <div>
        {Object.keys(instancedata.memory).map((tab) => {
          return (
            <Button className="button-tab"
              value={tab}
              onClick={() => {
                handleTabChange(tab);
              }}
            >
              {tab}
            </Button>
          );
        })}
      </div>
      <div className="instance-memory-div">
        <h2>Create Configuration</h2>
        {/* <h4 className="h4">Memory</h4> */}
        <select onChange={(e) => handleOnSelectMemory(e)}>
          {instancedata.memory[selectedTab].map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
      </div>
      <div className="instance-memory-div">
      {/* <h4 className="h4">CPU Cores</h4> */}
        <select onChange={(e) => handleOnSelectCpu(e)}>
          {instancedata.CPUcores[selectedTab].map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default InstanceType;
