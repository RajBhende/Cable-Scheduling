import React from "react";
import { FiEdit2, FiTrash2, FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";

const projects = [
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

const Projects = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Project List (2 / 10 projects)</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="🔍 Search projects..."
            className="border border-gray-300 rounded px-3 py-1"
          />
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            + Add New Project
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">End Customer</th>
              <th className="px-4 py-2 border">Transmission Line Type</th>
              <th className="px-4 py-2 border">Total Towers</th>
              <th className="px-4 py-2 border">From</th>
              <th className="px-4 py-2 border">To</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-blue-600 hover:underline">
                  <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </td>
                <td className="px-4 py-2 border">{project.customer}</td>
                <td className="px-4 py-2 border">{project.type}</td>
                <td className="px-4 py-2 border">{project.towers}</td>
                <td className="px-4 py-2 border">{project.from}</td>
                <td className="px-4 py-2 border">{project.to}</td>
                <td className="px-4 py-2 border flex gap-2 items-center">
                  <FiMoreVertical className="cursor-pointer" />
                  <FiEdit2 className="cursor-pointer text-blue-600" />
                  <FiTrash2 className="cursor-pointer text-red-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
