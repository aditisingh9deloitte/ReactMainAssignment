import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import platformData from './data/platform-data.json';
import { color } from '@mui/system';


const Platform = (() => {

  const [image, setImage] = useState("");
  const [radioButton, setradioButton] = useState("");

  const handleonclick = (e) => {
    console.log('clicked', e)
    // radioButton
    setImage(e);
  };

  return (
    <div className={'platform-main'}>
      { platformData.data.map((elm) => {
        // const {name, desc, price, region, option} = elm;
        return (<div className='platform-card'>
            <div className='platform-card-left'>
            <h3>{elm.name}</h3>
            <h5>{elm.desc}</h5>
            <h4>${elm.price}</h4>
            </div>
            <div className='platform-card-right'>

            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {elm.options.map((option)=>{
              return  <label>{option}<Radio name="hi"/></label> 
            })}
            </RadioGroup>

            
              
              <button type="submit" onClick={(e) => {handleonclick(e)}}>Select</button>
            </div>
        </div>)
      })};
    </div>
  )
});

export default Platform