import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";
  

const allProjects = [
  {
    id: 1,
    name: "Two-core Multipurpose Cable Line",
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
  // Add more mock projects if needed for pagination
];

const Projects = () => {
  const [projects, setProjects] = useState(allProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // reset to page 1 on search
  };

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const openConfirm = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setProjects((prev) => prev.filter((p) => p.id !== deleteId));
    setShowConfirm(false);
  };

  return (
    <div className="p-6">
              <h1 className="text-2x1 front-bold text-gray- 1000"> Projects</h1>
<br></br>
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Project List:
        </h2>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="🔍 Search projects..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-blue-500"
          />
          <Link to="/AddProject" 
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 btn btn-primary inline-block"
>
  + Add New Project
</Link>
        </div>
      </div>
      <br></br>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left ">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 ">Name</th>
              <th className="px-4 py-2  text-center">Client Name</th>
              <th className="px-4 py-2  text-center">Type of Line</th>
              <th className="px-4 py-2  text-center">Total Length of cable</th>
              <th className="px-4 py-2  text-center">From Location</th>
              <th className="px-4 py-2  text-center ">To Location</th>
              <th className="px-4 py-2  text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-2 py-1  text-blue-600 hover:underline">
                  <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </td>
                <td className="px-4 py-2  text-center ">{project.clientname}</td>
                <td className="px-4 py-2  text-center ">{project.typeofline}</td>
                <td className="px-4 py-2  text-center ">{project.totallengthofcable}</td>
                <td className="px-4 py-2  text-center ">{project.fromlocation}</td>
                <td className="px-4 py-2  text-center ">{project.tolocation}</td>
                <td className="px-4 py-2  text-center">
                  <div className="flex justify-center gap-3">
                    <FiEdit2 className="cursor-pointer text-blue-600" />
                    <FiTrash2
                      className="cursor-pointer text-red-500"
                      onClick={() => openConfirm(project.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {currentProjects.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>  
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-2 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Prev
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              Confirm Deletion
            </h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this project?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
