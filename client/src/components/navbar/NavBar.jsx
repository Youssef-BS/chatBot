import React from 'react';
import { Link } from 'react-router-dom'; 
import "./navBar.css";
import Logo from "../../assets/Logo.JPG" ; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt='' width={40} height={40} style={{borderRadius : "50%"}}/>
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Deconnect</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
