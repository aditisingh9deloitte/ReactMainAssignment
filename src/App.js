import React from 'react'
import './App.css';
import Platform from './Platform';
import Regions  from './Regions';
import Cost from './Cost'

const tab = ["Choose Image", "Choose Instance Type", "Choose Storage and Network", 
            "Configure Security", "Review & Launch"];

const App = () => {
  return (
    <div className="App">
      <div className='header'><h2><b>HVC</b></h2></div>
      <Regions />
      <Cost />

      <div className='tabselected'>
      {tab.map((tabSelected) => {
        return <button className='button-tab' type="select" value={tabSelected}>{tabSelected}</button>
      })}
      </div>

      <Platform />
    </div>
  );
}

export default App;