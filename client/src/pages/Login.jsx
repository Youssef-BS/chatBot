import React , {useState , useEffect} from "react";
import "./login.css"
import Logo from "../assets/Logo.JPG"
import axios from 'axios' ; 

const Auth = () => {

  const [email , setEmail] = useState();
  const [password , setPassword] = useState();


  const handleLogin = async () => {
   console.log({
    email , password
   })
  }

  return (
    <>
      <div className="background">
       <img src={Logo} alt="logo"  className="logo"/>   
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="glassmorphism-form">
        <h3>Login Here</h3>

        <label htmlFor="email">Email</label>
        <input type="text" value={email}  placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password" value={password}  placeholder="Password" id="password" onChange={(e)=>(e.target.value)} />

        <button onClick={handleLogin}>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i> Google</div>
        </div>
        <p className="loginHereParagraphe">Register here if you don't have an account !</p>
      </form>
    </>
  );
};

export default Auth;