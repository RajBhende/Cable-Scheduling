import React from "react";
import { useParams, Link } from "react-router-dom";

const dummyProjects = [
  {
    id: 1,
    name: "400kV D/C Neemuch - Pachora PS Quad Line",
    customer: "NPPMT",
    type: "400kv",
    towers: 500,
    from: "Neemuch",
    to: "Pachora",
  },
  {
    id: 2,
    name: "400kV D/C Pachora PS - Rajgarh (PG) Quad Line",
    customer: "NPPMT",
    type: "400kv",
    towers: 500,
    from: "Pachora",
    to: "Rajgarh",
  },
];

const ProjectDashboard = () => {
  const { id } = useParams();
  const project = dummyProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="p-6">Project not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Project Dashboard</h1>

      <div className="space-y-2 mb-6">
        <p><strong>Name:</strong> {project.name}</p>
        <p><strong>End Customer:</strong> {project.customer}</p>
        <p><strong>Line Type:</strong> {project.type}</p>
        <p><strong>Total Towers:</strong> {project.towers}</p>
        <p><strong>From:</strong> {project.from}</p>
        <p><strong>To:</strong> {project.to}</p>
      </div>

     <div className="border rounded-lg p-4 shadow w-[200px] h-[50px]">
  <div className="flex flex-col items-center">
    <img
  src="./favicon.svg"
  alt="Manpower Icon"
  className="w-6 h-6 mb-2"
/>

    <h2 className="text-lg font-semibold mb-2">Manpower Management</h2>
    <Link
      to= "/ManpowerManagement_name"
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      View Manpower Management
    </Link>
  </div>
</div>


 <div className="border rounded-lg p-4 shadow w-[200px] h-[50px]">
  <div className="flex flex-col items-center">
    <img
  src="./favicon.svg"
  alt="Manpower Icon"
  className="w-6 h-6 mb-2"
/>

    <h2 className="text-lg font-semibold mb-2">Material Management</h2>
    <Link
      to={`/projects/${id}/manpower`}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      View Material Management
    </Link>
  </div>
</div>



      {/* Back to project list link */}
      <div className="mt-6">
        <Link to="/projects" className="text-blue-600 underline">← Back to Projects</Link>
      </div>
    </div>
  );
};

export default ProjectDashboard;
