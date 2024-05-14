import "./login.css"
import Logo from "../assets/Logo.JPG"
import { useState } from "react";

const Register = () => {

  const [username, setUsername] = useState("") ; 
  const [email , setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;
  const [confirmPassword, setConfirmPassword] = useState("") ;

  const handleRegister = async () => {
    if(password !== confirmPassword ){
      alert("Passwords don't match")
    }
    console.log({username, email, password, confirmPassword})
  }

  return (
    <>
      <div className="background">
       <img src={Logo} alt="logo"  className="logo"/>   
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="glassmorphism-form">
        <h3>Register Here</h3>
        <label htmlFor="username">username</label>
        <input type="text" value={username}  placeholder="Username" id="username" onChange={(e)=>setUsername(e.target.value)} />    
        <label htmlFor="email">Email</label>
        <input type="text" value={email}  placeholder="Email" id="email"  onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" value={password}  placeholder="Password" id="password"  onChange={(e)=> setPassword(e.target.value)}/>
        <label htmlFor="password">Confirm Password</label>
        <input type="password" value={confirmPassword}  placeholder="Password" id="password"  onChange={(e)=> setConfirmPassword(e.target.password)} />
        <button onClick={handleRegister}>Register</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>Google</div>
        </div>
        <p className="loginHereParagraphe">Login here if you have an account !</p>
      </form>
    </>
  );
};

export default Register;