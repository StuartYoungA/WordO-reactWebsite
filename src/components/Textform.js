import React from 'react'


import { useState } from "react";
// const _=require('lodash')

export default function Textform(props) {

  const[text ,setText]=useState('');
  // setText("Computer");   //correct way
  // text="amaan";  wrong way to change the state  

  const handelClick = ()=>{
      let newText=text.toUpperCase();
      setText(newText);
  }
  const handelClickLower = ()=>{
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handelChange = (likha_hai)=>{
    // setText("Hi")   //as soon as this function will be triggered , state value will be updated 
      setText(likha_hai.target.value)          //we will get entered value by parameter, if we dont include it, then we will not able to type on text area
  }   //this is changing text to entered text

  const speak = () => {

    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    setInterval(() => {
      document.title="WordO Speech "
    }, 1000);
    setInterval(() => {
      document.title="Its amazing "
    }, 1500);
  }


  return (
    <>

     <div className='container my-3' style={ {color: props.modes==='dark'?'white':'black'  } }>
      <h2  >{props.title}  </h2>
    <label htmlFor="exampleFormControlTextarea1"></label>

    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handelChange} style={ {backgroundColor:  props.modes==='dark'?'#393646':'white', color:props.modes==='dark'?'white':'black'  } }></textarea>
    
    <button  className=' btn btn-success btn-md float-end mx-1 my-1 ' onClick={handelClick} >Convert to Uppercase</button>
    <button type="submit" onClick={speak} className="btn btn-warning float-end mx-1 my-1">Speak</button>
    <button  className=' btn btn-success btn-md float-end mx-1 my-1' onClick={handelClickLower} >Convert to Lowercase</button>
    
    
    </div> 

    <div className=" container my-2"  style={ {color:  props.modes==='dark'?'white':'black'  } }>
      <h2>Your Text Summary</h2>
      <p>Characters: {text.length} Words: {text.split(" ").length-1} </p>
    </div>
 
    </>
  )
}
