import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

import RadioGroup from "@mui/material/RadioGroup";
import platformData from "./data/platform-data.json";

const Platform = (
  { setImageElm, setradioButton, selectedRegion } // fetchSchedules,
) => {
  const [filteredPlatforms, setFilteredPlatform] = useState([]);
  const handleonclick = (elm) => {
    setImageElm(elm);
  };

  const handleRadioButton = (e) => {
    setradioButton(e.target.value);
  };

  React.useEffect(() => {
    setFilteredPlatform(
      platformData.data.filter((element) => {
        return element.regions.includes(selectedRegion);
      })
    );
  }, [selectedRegion]);

  return (
    <div className={"platform-main"}>
      {filteredPlatforms.map((elm) => {
        return (
          <div className="platform-card">
            <div className="platform-card-left">
              <h3>{elm.name}</h3>
              <h5>{elm.desc}</h5>
              <h4>${elm.price}</h4>
            </div>
            <div className="platform-card-right">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {elm.options.map((option) => {
                  return (
                    <label>
                      {option}
                      <Radio
                        onChange={() => handleRadioButton}
                        value={option}
                      />
                    </label>
                  );
                })}
              </RadioGroup>
              <Button
                onClick={() => {
                  handleonclick(elm);
                }}
              >
                Select
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Platform;
