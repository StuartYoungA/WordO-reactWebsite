import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function NavBar(props) {     //we got react function based component , we can use its functionality like template in ejs at other place
  
  const themesFunc=()=>{
    
  }
  
  return (
   //we get our navbar from here ...bootstrap code  , waha app.js pe raayta nhi failaayege
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>   
   {/* this curly braces and ` sign used to convert html string to a template of javascript */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>  
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenulink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Themes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenulink">
            <li><a className="dropdown-item" href="#" onClick={themesFunc()}>Blue</a></li>
            <li><a className="dropdown-item" href="#">Green</a></li>
            <li><a className="dropdown-item" href="#">Brown</a></li>
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      

      {/* <!-- theme dropdown --> */}
        




      <div class="form-check form-switch text-success mx-2 ">
  <input class="form-check-input" type="checkbox" role="switch" onChange={props.modebadlo} id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode} Mode</label>
    </div>
  </div>
  
</div>
</nav>
    
   </>

  )
    NavBar.propTypes={
      title:PropTypes.string
    };

    // default proptype -->if no prop is paased in app.js file then these are get rendered

    NavBar.defaultProps={
      title:'Amaan'
    };
  
}
