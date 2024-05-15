import React , {useState , useEffect , useContext} from "react";
import "./login.css"
import Logo from "../assets/Logo.JPG"
import { AuthContext } from '../context/authContext';
import { Link , useNavigate } from 'react-router-dom';

const Auth = () => {

  const { login } = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext); 
  const navigate = useNavigate();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();


  const handleLogin = async () => {
    await login(email, password);  
    if (currentUser?.admin)
        navigate("/admin/*");
    else 
      navigate("/client/*") ;  
  };

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
        <input type="password" value={password}  placeholder="Password" id="password" onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleLogin}>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i> Google</div>
        </div>
        <Link to="/register"><p className="loginHereParagraphe">Register here if you don't have an account !</p></Link>
      </form>
    </>
  );
};

export default Auth;