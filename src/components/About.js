import React from 'react'
import { useState } from "react";


export default function About() {

    const[myStyle,setMyStyle]=useState({
        color:'black',
        BackgroundColor:'white'
        
    })

    const[btntext,setBtntext]=useState('Dark Mode')
    
    const handelDark=()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color:'red',
                Background:'black',
                border:'1px solid black'
            })
            setBtntext("Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                BackgroundColor:'white'
            })
        }
        
    }

  return (

    
    <>
    <div className="container" style={myStyle}>
        <h1 className='my-3'>About Us </h1>
    <div class="accordion accordion-flush" id="accordionFlushExample"  >
    <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div>
    </div>
    <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
    </div>
    <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
    </div>
    </div>
    <button className="btn btn-dark" onClick={handelDark}>{btntext}</button>
    </div>
    </>
  )
}
