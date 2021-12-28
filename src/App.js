import React, { useState, useEffect, useRef } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // //pass the value
  // const number = useRef(100);
  // console.log("number is", number);
  // console.log("number.current is", number.current);//100

  // // reference the DOM
  // const inputElement = useRef(null)
  // <input ref={inputElement} type="text" />
  // console.log(inputElement.current); // <input type="text" />

  // // focus on input area
  // const inputEl = useRef(null);
  // const handleClick = () => {
  //   inputEl.current.focus();
  //   console.log("inputEl.current:", inputEl.current);//inputEl.current: <input type="text">
  // };

  // reference the DOM using useRef
  const inputEl = useRef(null);
  const [text, setText] = useState("");
  const handleClick = () => {
    setText(inputEl.current.value);
  };
  console.log("レンダリング！！");

  return (
    <div className="App">
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>set text</button>
      <p>テキスト : {text}</p>
    </div>
  );
}

export default App;
