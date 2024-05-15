import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import "./navBar.css";
import Logo from "../../assets/Logo.JPG" ; 
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

    const {logout , currentUser} = useContext(AuthContext) ; 

    const handleLogout = async()=>{
        await logout() ; 
        window.location.href = "/login" ;
    }

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
            <Link to="/profile" className="navbar-link">See your Profile {currentUser.username}</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={handleLogout}>Deconnect</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
