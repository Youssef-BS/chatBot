import './App.css';
import SideBar from './components/siderbar/SideBar';
import HomeAdmin from './pages/Admin/HomeAdmin';
import Users from './pages/Admin/Users';
import HomeClient from './pages/Client/HomeClient';
import IndexClient from './pages/Client/Index';
import Auth from './pages/Login'; 
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
    {/* <IndexClient /> */}
    <Auth />
    </div>
  );
}

export default App;
