import React, { useState, useEffect, useRef } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // //例
  // const number = useRef(100);
  // console.log("number is", number);
  // console.log("number.current is", number.current);//100

  // const inputElement = useRef(null)
  // <input ref={inputElement} type="text" />
  // console.log(inputElement.current); // <input type="text" />

  const inputEl = useRef(null);
  const handleClick = () => {
    inputEl.current.focus();
    console.log("inputEl.current:", inputEl.current);//inputEl.current: <input type="text">
  };

  return (
    <div className="App">
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>入力エリアをフォーカスする</button>
    </div>
  );
}

export default App;
