import React from 'react';
import {  NavLink } from 'react-router-dom';

function Navbar() {
    const navlinkstyle=({isActive})=>{
        return {
            fontweight: isActive  ? '800' : 'normal',
            textDecoration : isActive ? 'none':"underline",

        }
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink style={navlinkstyle} to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navlinkstyle}  to="/About" className="nav-link" href="#">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navlinkstyle}  to="/Product" className="nav-link" href="#">Product</NavLink>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
