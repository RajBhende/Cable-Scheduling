import { Link, useLocation, useNavigate } from "react-router-dom";
import {FaBolt, FaUser, FaProjectDiagram, FaCog, FaTachometerAlt, FaSignOutAlt,} from "react-icons/fa";

const Sidebar = ({ collapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user role from localStorage
  const role = localStorage.getItem("role");

  // Determine dashboard path based on role
  let dashboardPath = "/dashboard";
  if (role === "admin") dashboardPath = "/admindashboard";
  else if (role === "client") dashboardPath = "/clientdashboard";
  else if (role === "employee") dashboardPath = "/employeedashboard";

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  // Sidebar item style
  const baseClasses =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-white-700";
  const iconSize = collapsed ? "text-xl" : "text-lg";

  // Menu items
  const navItems = [
    { label: "Dashboard", icon: FaTachometerAlt, to: dashboardPath },
    ...(role === "admin"
      ? [
          { label: "Users", icon: FaUser, to: "/users" },
          { label: "Settings", icon: FaCog, to: "/settings" },
        ]
      : []),
    { label: "Projects", icon: FaProjectDiagram, to: "/projects" },
  ];

  return (
    <div
      className={`min-h-screen bg-blue-800 text-white flex flex-col justify-between shadow-lg ${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300`}
    >
      {/* Top Section */} 
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <FaBolt className="text-yellow-400 text-3xl" />
          {!collapsed && (
            <span className="text-2xl font-bold tracking-wide">Cable Scheduling</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3">
          {navItems.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              className={`${baseClasses} ${
                location.pathname === to ? "bg-gray-700" : ""
              }`}
            >
              <Icon className={iconSize} />
              {!collapsed && <span>{label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t border-gray-700">
        <button onClick={handleLogout} className={baseClasses}>
          <FaSignOutAlt className={iconSize} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
