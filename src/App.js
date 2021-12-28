import React, { useState, useEffect, useRef } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // pass the value
  const number = useRef(100);
  console.log("number is", number);
  console.log("number.current is", number.current);//100

  return (
    <div className="App">
      Test
    </div>
  );
}

export default App;
