import logo from "../Images/Navbar-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <img className="nav-img" src={logo} alt="logo" />
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
