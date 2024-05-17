import React, { useState, useContext } from "react";
import Logo from "../assets/Logo.JPG";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Auth = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill all the fields");
      return;
    }
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{ width: '30rem' }}>
          <div className="text-center mb-4">
            <img src={Logo} alt="logo" className="img-fluid" style={{ width: '100px' }} />
          </div>
          <h3 className="text-center mb-4">Login Here</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <button type="submit" className="btn btn-primary w-100">Log In</button>
            <div className="text-center mt-3">
              <p>or</p>
              <button type="button" className="btn btn-outline-secondary w-100">
                <i className="fab fa-google"></i> Google
              </button>
            </div>
            <p className="text-center mt-3">
              <Link to="/register">Register here if you don't have an account!</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
