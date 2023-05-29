// import logo from './logo.svg';
// import './App.css';

import About from "./components/About";
import NavBar from "./components/NavBar"

import Textform from "./components/Textform";

import { useState } from "react";


import {BrowserRouter,Routes,Route} from "react-router-dom";

// let name="<em>Amaan</em>";
function App() {
  
  const[mode ,setMode]=useState('warning');
  const modehandle=()=>{
    if(mode==='dark'){
      setMode('warning');
      document.body.style.backgroundColor='white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#393646'
    }
  }


  return(
    <>
   

    
    <BrowserRouter>

      <NavBar title="WorDo"  mode={mode} modebadlo={modehandle} />     
      <Routes>

        <Route exact path='/about'  element={<About />}/>
         
       
        <Route exact path='/' element={<Textform title="Enter the text to Analyze"  modes={mode}/> }/>
          
         
        
      </Routes>

    </BrowserRouter>
          
   
    
    {/* <About/> */}
      
    
    </>
  );















  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
