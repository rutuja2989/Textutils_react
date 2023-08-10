
//rfc stands for react function based components so any time you want this tempelate use rfc
import React from 'react';
import PropTypes from 'prop-types'; //impt use to import proptypes
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutName}</Link>
          </li> */}
        </ul>
        <form className="d-flex" role="search">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault " id='text'>Enabling Darkmode</label>
</div>
        </form>
      </div>
    </div>
  </nav>


  );
}

Navbar.propTypes={
title: PropTypes.string.isRequired,
aboutName: PropTypes.string.isRequired
};

Navbar.defautProps={  //if in any  case you have not set the props then this defalut props will trigger
  title:'set title here',
  aboutName:'About text here'
};
