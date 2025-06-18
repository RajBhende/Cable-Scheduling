import React from "react";
import { FaTowerBroadcast } from "react-icons/fa6";

// Inline styles as JS objects
const styles = {
  dashboardContainer: {
    width: "100%",
  },
  dashboardNavbar: {
    backgroundColor: "#ffffff",
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #e0e0e0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  projectWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "flex-start",
  },
  projectCard: {
    backgroundColor: "#fff",
    border: "1px solid #eaeaea",
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    width: "calc(50% - 0.75rem)",
    transition: "transform 0.2s ease",
  },
  projectCardHover: {
    transform: "translateY(-3px)",
  },
  responsiveCard: {
    width: "100%",
  }
};

const projects = [
  {
    name: "Two-core Multipurpose Cable Line",
    typeofline: "",
    totallengthofcable: "",
    clientname: "",
    status: "",
  },
];

const Dashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      {/* Top Navbar */}
      <div className="d-flex justify-content-between align-items-center w-100 mb-4" style={styles.dashboardNavbar}>
        <h1 className="fw-bold mb-0">Dashboard</h1>
        <span className="text-muted large fw-bold">Welcome, abc@nppmt.com</span>
      </div>

      {/* Project Cards */}
      <div className="card p-4 mt-4">
        <h3 className="fw-semibold mb-4">Your Projects</h3>
        <div style={styles.projectWrapper}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              style={styles.projectCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <FaTowerBroadcast size={30} className="mb-3 text-dark" />
              <h4 className="fw-bold">{project.name}</h4>
              <p><strong>Type of Line:</strong> {project.typeofline}</p>
              <p><strong>Total Length of Cable:</strong> {project.totallengthofcable}</p>
              <p><strong>Client Name:</strong> {project.clientname}</p>
              <p><strong>Status:</strong> {project.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
