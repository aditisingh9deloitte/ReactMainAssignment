import React from 'react'
import './App.css';
import Platform from './Platform';

const tab = ["Choose Image", "Choose Instance Type", "Choose Storage and Network", 
            "Configure Security", "Review & Launch"];

const App = () => {
  return (
    <div className="App">
      <div className='header'><h2><b>HVC</b></h2></div>
      <Platform />
    </div>
  );
}

export default App;