import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";

const dummyProjects = [
  {
    id: 1,
    name: "Two-core Multipurpose Cable Line",
    customer: "",
    from: "",
    to: "",
    code: "",
    contractor: "",
    startDate: "",
    endDate: "",
    status: "",
    cableType: "",
    lengthOfCable: "",
    consultancy: "",
  },
];

const ProjectDashboard = () => {
  const { id } = useParams();
  const project = dummyProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="p-4 text-red-600 font-semibold">Project not found</div>;
  }

  return (
    <div className="main-content p-6 space-y-6">
      {/* Top Navbar */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">Project Dashboard</h3>
        <div className="text-right">
          {/* <small className="text-gray-500 block">abc@gmail.com</small> */}
          <span className="font-medium">Welcome,abc@gmail.com</span>
        </div>
      </div>

      {/* Project Details Card */}
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">{project.name}</h2>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Edit Project Details
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Project Planning
            </button>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <p><strong>Project Code:</strong> {project.code}</p>
            <p><strong>Client Name:</strong> {project.customer}</p>
            <p><strong>Contractor Name:</strong> {project.contractor}</p>
            <p><strong>Consultancy Name:</strong> {project.consultancy}</p>
            <p><strong>Project Start Date:</strong> {project.startDate}</p>
             <p><strong>Project Status:</strong> {project.status}</p>

          </div>
          <div>
            <p><strong>Cable Type:</strong> {project.cableType}</p>
            <p><strong>Length of Cable:</strong> {project.lengthOfCable}</p>
             <p><strong>From Location City:</strong> {project.fromcity}</p>
            <p><strong>To Location City:</strong> {project.tocity}</p>
            <p><strong>From Location District:</strong> {project.fromdistrict}</p>
            <p><strong>To Location District:</strong> {project.todistrict}</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4">
        <Link
          to="/cableschedule"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <FiCalendar className="text-lg" />
          <span>Cable Schedule</span>
        </Link>

        <Link
                    to="/manpowermanagement_name"

          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Manpower Management
        </Link>

        <Link
          to={`/projects/${id}/materialmanagment`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Material Management
        </Link>
      </div>

      {/* Back Link */}
      <div className="mt-6">
        {/* <Link to="/projects" className="text-blue-600 hover:underline">← Back to Projects</Link> */}
      </div>
    </div>
  );
};

export default ProjectDashboard;
