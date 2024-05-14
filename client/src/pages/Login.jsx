import "./login.css"
import Logo from "../assets/Logo.JPG"

const Auth = () => {



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
        <input type="text" value={""}  placeholder="Email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" value={""}  placeholder="Password" id="password" />

        <button onClick={""}>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i> Google</div>
        </div>
        <p className="loginHereParagraphe">Register here if you don't have an account !</p>
      </form>
    </>
  );
};

export default Auth;