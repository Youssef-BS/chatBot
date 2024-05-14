import React , {useContext} from 'react';
import { Home, Person, ExitToApp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.JPG";
import './sideBar.css';


const  SideBar=()=> {
 
  return (
    <div className="sidebar">
        <img src={Logo} alt='logo' className='logoSideBar' />
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              {/* <Home className="sidebarIcon" /> */}
              {/* <Link to="/">Home</Link> */}
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              {/* <Person className="sidebarIcon" /> */}
              {/* <Link to="/Users">Users</Link> */}
            </li>
            <li className="sidebarListItem">
              {/* <Person className="sidebarIcon" /> */}
              {/* <Link to="/Chats">Chats</Link> */}
            </li>
            </ul>
          <ul className="sidebarList">
            {/* <Link href="/logout"> */}
              <li className="sidebarListItem" >
                {/* <ExitToApp className="sidebarIcon" /> */}
               {/* <Link to = "/">Logout</Link>  */}
              </li>
            {/* </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;