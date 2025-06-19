import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiGrid, FiList } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

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
];

const ListView = () => {
  const [projects, setProjects] = useState(allProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("list");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const projectsPerPage = 5;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Projects</h2>
      <br></br>
      <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
        <h4 className="text-2xl font-semibold text-gray-700">Project List:</h4>

        {/* Controls: View, Search, Add */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* View Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md bg-white text-sm text-gray-700 hover:bg-gray-100 shadow-sm"
            >
              View
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-40 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-20">
                <div className="py-1">
                  {["small", "medium", "list"].map((v) => (
                    <button
                      key={v}
                      onClick={() => {
                        navigate(`/${v}view`);
                        setView(v);
                        setShowDropdown(false);
                      }}
                      className={`w-full px-4 py-2 text-sm flex items-center gap-2 ${
                        view === v
                          ? "text-blue-600 bg-blue-50 font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {v === "small" && <FiGrid />}
                      {v === "medium" && <FiGrid />}
                      {v === "list" && <FiList />}
                      {v.charAt(0).toUpperCase() + v.slice(1)} View
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="🔍 Search projects..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Add New Project Button */}
          <Link
            to="/AddProject"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Add New Project
          </Link>
        </div>
      </div>

      {/* Table View */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 text-center">Client Name</th>
              <th className="px-4 py-2 text-center">Type of Cable</th>
              <th className="px-4 py-2 text-center">Length of Cable</th>
              <th className="px-4 py-2 text-center">From</th>
              <th className="px-4 py-2 text-center">To</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-blue-600 hover:underline">
                  <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </td>
                <td className="px-4 py-2 text-center">{project.customer}</td>
                <td className="px-4 py-2 text-center">{project.type}</td>
                <td className="px-4 py-2 text-center">{project.towers}</td>
                <td className="px-4 py-2 text-center">{project.from}</td>
                <td className="px-4 py-2 text-center">{project.to}</td>
                <td className="px-4 py-2 text-center">
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
        <div className="flex justify-end items-center gap-2 mt-4 text-sm">
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

export default ListView;
