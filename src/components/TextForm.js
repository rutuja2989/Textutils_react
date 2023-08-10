import React, { useState } from "react";  //usestates are called hook in react
export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const clearOnClick=()=>{
        let newText='';
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const  [text,setText]= useState('');
    // setText('lkkakksk')
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control mb-3" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?"grey":'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearOnClick}>Clear</button>
  </div>
  <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008* text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something to the textbox to preview it here"}</p>
  </div>
  </>
  );
}
