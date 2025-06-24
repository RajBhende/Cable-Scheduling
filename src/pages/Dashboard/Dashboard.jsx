import React from "react";
import { FaTowerBroadcast } from "react-icons/fa6";

// Refined inline styles
const styles = {
  dashboardContainer: {
    width: "100%",
  },
  dashboardNavbar: {
    backgroundColor: "#ffffff",
    padding: "0.75rem 1rem",
    borderBottom: "1px solid #e0e0e0",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  projectWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "flex-start",
  },
  projectCard: {
    backgroundColor: "#fff",
    border: "1px solid #eaeaea",
    borderRadius: "6px",
    padding: "1rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    width: "calc(48% - 0.5rem)",
    transition: "transform 0.2s ease",
  },
  projectCardHover: {
    transform: "translateY(-2px)",
  },
};

const projects = [
  {
    name: "Two-core Multipurpose Cable Line",
    typeofline: "Underground",
    totallengthofcable: "85 km",
    clientname: "NPPMT",
    status: "In Progress",
  },
];

const Dashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      {/* Top Navbar */}
      <div className="d-flex justify-content-between align-items-center w-100 mb-3" style={styles.dashboardNavbar}>
        <h2 className="fw-bold mb-0 fs-4">Dashboard</h2>
        <span className="text-muted fw-semibold small">Welcome, abc@nppmt.com</span>
      </div>

      {/* Project Cards */}
      <div className="card p-3 mt-3">
        <h4 className="fw-semibold mb-3 fs-5">Your Projects</h4>
        <div style={styles.projectWrapper}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              style={styles.projectCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <FaTowerBroadcast size={28} className="mb-2 text-dark" />
              <h5 className="fw-bold fs-6 mb-2">{project.name}</h5>
              <p className="mb-1"><strong>Client:</strong> {project.clientname}</p>
              <p className="mb-1"><strong>Type of Line:</strong> {project.typeofline}</p>
              <p className="mb-1"><strong>Total Length of Cable:</strong> {project.totallengthofcable}</p>
              <p className="mb-0"><strong>Status:</strong> {project.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;