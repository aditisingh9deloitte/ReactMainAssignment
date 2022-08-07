import React, { useState } from "react";
import "./App.css";
import Platform from "./Platform";
import Regions from "./Regions";
import Cost from "./Cost";
import InstanceType from "./InstanceType";
import Summary from "./Summary";
import { color } from "@mui/system";
import { blue } from "@mui/material/colors";

const tab = {
  1: "Choose Image",
  2: "Choose Instance Type",
  3: "Choose Storage and Network",
  4: "Configure Security",
  5: "Review & Launch",
};

const App = () => {
  const [image, setImageElm] = useState([]);
  const [radioButton, setradioButton] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("us-east-1");
  const [memory, setMemory] = useState(null);
  const [cpuCores, setCpuCores] = useState(null);
  const [step, setStep] = useState(1);

  const handleStepChange = (tabSelected) => {
    setStep(tabSelected);
  };

  const returnStepContents = () => {
    switch (parseInt(step)) {
      case 1:
        return (
          <Platform
            selectedRegion={selectedRegion}
            setImageElm={setImageElm}
            setradioButton={setradioButton}
          />
        );
      case 2:
        return <InstanceType setMemory={setMemory} setCpuCores={setCpuCores} />;
        
      case 5:
        return <Summary memory={memory} cpuCores={cpuCores} image={image} radioButton={radioButton}/>

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h2>
          <b>HVC</b>
        </h2>
      </div>
      <Regions setSelectedRegion={setSelectedRegion} />
      <Cost
        image={image}
        price={image.price}
        memory={memory}
        cpuCores={cpuCores}
      />

      <div className="tabselected">
        {Object.keys(tab).map((tabSelected) => {
          return (
            <button
              className="button-tab"
              type="select"
              value={tabSelected}
              onClick={() => {
                handleStepChange(tabSelected);
              }}
            >
              {tab[tabSelected]}
            </button>
          );
        })}
      </div>
      {returnStepContents()}
      {/* <Summary memory={memory} cpuCores={cpuCores} image={image} radioButton={radioButton}/> */}
    </div>
  );
};

export default App;
