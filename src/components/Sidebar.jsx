    // src/components/Sidebar.jsx

import { Link } from "react-router-dom";
import './Sidebar.css';
import { FaBolt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="logo-container">
          <FaBolt className="logo-icon" />
          <span className="logo-text">Cable Scheduling</span>
        </div>

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </div>

      {/* <div className="logout">
        <Link to="/logout">Logout</Link>
      </div> */}
    </div>
  );
};

export default Sidebar;
