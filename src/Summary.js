import React from 'react';
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

const Summary = ({memory, cpuCores, image, radioButton}) => {

    console.log('**********data', memory, cpuCores, image, radioButton)

  return (
    <div className='summary-tab'>
        <div className="platform-card">
            <div className="platform-card-left">
              <h3>{image.name}</h3>
              <h5>{image.desc}</h5>
              <h4>${image.price}</h4>
            </div>
            <div className="platform-card-right">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                    <label>
                      {radioButton}
                      <Radio
                        value={radioButton}
                      />
                    </label>
              </RadioGroup>
            </div>
          </div>
          <option value={memory}>{memory}</option>
          <option value={cpuCores}>{cpuCores}</option>
    </div>
  )
}

export default Summary