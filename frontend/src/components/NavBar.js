import "../styles/NavBarStyles.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBarContainer">
      <div className="NavItemContainer">
        <h1 className="Logo">HealthPlug</h1>
      </div>
      <div className="NavItemContainer">
        <Link to="/" style={{ color: `white`, textDecoration:`none`}}><h2>Dashboard</h2></Link>
      </div>
      <div className="NavItemContainer">
        <Link to="/signup" style={{ color: `white`, textDecoration:`none`}}><h2 className="LoginSignup">Sign Up</h2></Link>
      </div>
    </div>
  );
}

export default NavBar;
