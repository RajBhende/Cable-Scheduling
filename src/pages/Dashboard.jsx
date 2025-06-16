import React from "react";
import { FaTowerBroadcast } from "react-icons/fa6";
import "./Dashboard.css";

const projects = [
  {
    name: "220KV Getco PSS to BAP 220KV PSS",
    type: "220KV Line",
    code: "GETCO",
    customer: "Test3",
  },
 
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <div className="dashboard-navbar d-flex justify-content-between align-items-center">
        <h4 className="fw-bold mb-0">Dashboard</h4>
        <span className="text-muted small">Welcome, abc@nppmt.com</span>
      </div>

      {/* Project Cards */}
      <div className="card p-4 mt-4">
        <h5 className="fw-semibold mb-4">Your Projects</h5>
        <div className="project-wrapper">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <FaTowerBroadcast size={30} className="mb-3 text-dark" />
              <h6 className="fw-bold">{project.name}</h6>
              <p><strong>Type:</strong> {project.type}</p>
              <p><strong>Code:</strong> {project.code}</p>
              <p><strong>Customer:</strong> {project.customer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
