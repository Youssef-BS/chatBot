import './App.css';
import SideBar from './components/siderbar/SideBar';
import HomeAdmin from './pages/Admin/HomeAdmin';
import Users from './pages/Admin/Users';
import HomeClient from './pages/Client/HomeClient';
import Auth from './pages/Login'; 
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
    {/* <Auth /> */}
    {/* <Register /> */}
    {/* <SideBar /> */}
    {/* <Users /> */}
    <HomeAdmin />
    {/* <HomeClient /> */}
    </div>
  );
}

export default App;
