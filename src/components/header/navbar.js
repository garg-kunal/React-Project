import React from 'react';
import '../css/navbar.css';
import {NavLink} from 'react-router-dom';
import logo2 from "../images/university.png";
import logo from "../images/cart.jpg";
import Test from "../images/test.jpg"

export default function Header() {



    return (         
    <nav className="navbar navbar-expand-lg navbar-fixed-top fixed-top">
  <NavLink className="navbar-brand" to="/"><img src={logo2} alt="Micamp" className="img-fluid logo"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i className="fa fa-align-left"></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" exact activeStyle={{color:"white",textShadow:"2px 2px 3px white"}} to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  activeStyle={{color:"white",textShadow:"2px 2px 3px white"}}  to="/snackers">Snackers</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  activeStyle={{color:"white",textShadow:"2px 2px 3px white"}}  to="/web">Mentors</NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link"  activeStyle={{color:"white",textShadow:"2px 2px 3px white"}}  to="/chat">Chat</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  activeStyle={{color:"white",textShadow:"2px 2px 3px white"}}  to="/Explore">Explore</NavLink>
      </li>
    </ul>
     <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" autoComplete="off" type="search" id="search" placeholder="Search" aria-label="Search"/>
      <i className=" btn fa fa-search" aria-hidden="true"></i>
      
   </form>
   <NavLink className="nav-link" to="/cart"><img alt="cart" src={logo} id="cart" className="img-fluid rounded-circle"/></NavLink>
   <div className="nav-link dropdown" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false" style={{color:"white"}}>
          <img src={Test} className="rounded-circle z-depth-0" style={{height:"50px"}}
            alt="avatar image"/>
       
        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-55">
          <a className="dropdown-item" href="#">User Profile</a>
          <a className="dropdown-item" href="#">Logout</a>
         
        </div>
        </div>
      
   </div>
  </nav>
    
       )
}