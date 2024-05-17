import React, { useState } from "react";
import Logo from "../assets/Logo.JPG";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill all the fields");
      return;
    }
    await axios.post("http://localhost:8089/api/users" , {
      username,
      email,
      password,
      admin: false
    })
    setErrorMessage("Register successfully");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{ width: '30rem' }}>
          <div className="text-center mb-4">
            <img src={Logo} alt="logo" className="img-fluid" style={{ width: '100px' }} />
          </div>
          <h3 className="text-center mb-4">Register Here</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <button type="submit" className="btn btn-primary w-100">Register</button>
            <div className="text-center mt-3">
              <p>or</p>
              <button type="button" className="btn btn-outline-secondary w-100">
                <i className="fab fa-google"></i> Google
              </button>
            </div>
            <p className="text-center mt-3">
              <Link to="/login">Login here if you have an account!</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
