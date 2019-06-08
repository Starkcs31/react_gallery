import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';


function Header() {

  

  return (
    <div className="Header">
     <ul>
       <li><NavLink to="/" exact >Home</NavLink></li>
       <li><NavLink to="/gallery">Gallery</NavLink></li>
     </ul>
     
    </div>
  );
}

export default Header;
