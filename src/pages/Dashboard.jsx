import React from "react";
import { FaTowerBroadcast } from "react-icons/fa6";
import "./Dashboard.css";

const projects = [
  {
    name: "Two-core Multipurpose Cable Line",
    typeofline: "",
    totallengthofcable: "",
    clientname: "",
    status:"",
  },
  // {
  //   name: "Two-core Multipurpose Cable Line",
  //   typeofline: "",
  //   totallengthofcable: "",
  //   clientname: "",
  //   status:"",
  // },
  

];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <div className="dashboard-navbar d-flex justify-content-between align-items-center w-100 mb-4">
        <h1 className="fw-bold mb-0">Dashboard</h1>
        <span className="text-muted large fw-bold">Welcome, abc@nppmt.com</span>
      </div>


      {/* Project Cards */}
      <div className="card p-4 mt-4">
        <h3 className="fw-semibold mb-4" >Your Projects</h3>
        <div className="project-wrapper">
          {projects.map((project, idx) =>  (
            <div key={idx} className="project-card">
              <FaTowerBroadcast size={30} className="mb-3 text-dark" />
              <h4 className="fw-bold">{project.name}</h4>
              <p><strong>Type of Line:</strong> {project.typeofine}</p>
              <p><strong>Total Length of Cable:</strong> {project.lengthofcable}</p>
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
