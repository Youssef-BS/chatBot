import React, { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/Login';
import HomeAdmin from './pages/Admin/HomeAdmin';
import IndexClient from './pages/Client/Index';
import Register from './pages/Register';

function App() {
  const { currentUser } = useContext(AuthContext);


  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };


  const ProtectedAdminRoute = ({ children }) => {
    return currentUser?.admin ? children : <Navigate to="/login" />;
  };

  const RedirectBasedOnRole = () => {
    if (currentUser?.admin) {
      return <Navigate to="/admin" />;
    } else if (currentUser) {
      return <Navigate to="/client" />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RedirectBasedOnRole />} />
          <Route path="/client/*" element={<ProtectedRoute><IndexClient /></ProtectedRoute>} />
          <Route path="/admin/*" element={<ProtectedAdminRoute><HomeAdmin /></ProtectedAdminRoute>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
