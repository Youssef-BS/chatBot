import React , {useContext} from 'react';
import { Home, Person, ExitToApp , Mail} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.JPG";
import './sideBar.css';
import { AuthContext } from '../../context/authContext';


const  SideBar=()=> {
 

  const {logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  }

  return (
    <div className="sidebar">
        <img src={Logo} alt='logo' className='logoSideBar' />
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" /> 
             <Link to="/admin/users">Users</Link>
            </li>
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />
              <Link to="/Chats">Chats</Link>
            </li>
            </ul>
          <ul className="sidebarList">
            {/* <Link href="/logout"> */}
              <li className="sidebarListItem" >
                <ExitToApp className="sidebarIcon" />
               <Link to="/" onClick={handleLogout}>Logout</Link> 
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;