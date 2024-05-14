import "./login.css"
import Logo from "../assets/Logo.JPG"

const Register = () => {



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
        <input type="text" value={""}  placeholder="Username" id="username" />    
        <label htmlFor="email">Email</label>
        <input type="text" value={""}  placeholder="Email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" value={""}  placeholder="Password" id="password" />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" value={""}  placeholder="Password" id="password" />
        <button onClick={""}>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>Google</div>
        </div>
        <p className="loginHereParagraphe">Login here if you have an account !</p>
      </form>
    </>
  );
};

export default Register;