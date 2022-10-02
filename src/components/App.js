
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [text,setText]=useState("");
 const[inputValue,setInputValue]=useState("");
 //const [items,setItems]=useState([]);
 const buttonClick=()=>{
    

    setText((oldItems)=>{
      return [...oldItems,inputValue];
    });
      //setText(...items+inputValue);
      setInputValue("");
 }
 const changeInput=(e)=>{
        setInputValue(e.target.value);
 }


 
  return (
    <div>
  <input id='input' type="text"value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
