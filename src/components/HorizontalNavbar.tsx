import { Link } from "react-router-dom";

/**
 * This reusable component is horizontal navar 
 * @returns 
 */
const HorizontalNavbar = () => {
  return (
    <div className="sidebar">
    <h2>My App</h2>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/signUpPage">Sign Up Page</Link></li>
      {/* Add more links as needed */}
    </ul>
  </div>
  );
};

export default HorizontalNavbar;
