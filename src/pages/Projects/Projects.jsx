import React, { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiGrid,
  FiList,
  FiLayout,
} from "react-icons/fi";
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

const Projects = () => {
  const [projects, setProjects] = useState(allProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("medium");
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
          <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <h3 className="text-3xl font-bold text-gray-800">Projects List</h3>
        <div className="flex gap-3 flex-wrap items-center">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white hover:bg-gray-100 transition"
            >
              View
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-44 bg-white border shadow-lg rounded-lg z-20">
                {[ "small", "medium", "list"].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      navigate(`/${v}view`);
                      setView(v);
                      setShowDropdown(false);
                    }}
                    className={`w-full px-4 py-2 flex items-center gap-2 text-sm ${
                      view === v
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {/* {v === "detail" && <FiLayout />} */}
                    {v === "small" && <FiGrid />}
                    {v === "medium" && <FiGrid />}
                    {v === "list" && <FiList />}
                    {v.charAt(0).toUpperCase() + v.slice(1)} View
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="🔍 Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <Link
            to="/AddProject"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            + Add New Project
          </Link>
        </div>
      </div>

      {/* Card View */}
      {view === "medium" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white rounded-xl shadow-sm border hover:shadow-lg transition p-5 group"
            >
              <div
                onClick={() => navigate(`/projects/${project.id}`)}
                className="cursor-pointer"
              >
                <h3 className="text-lg font-bold text-blue-700 mb-2 group-hover:underline">
                  {project.name}
                </h3>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>
                    <strong>Client:</strong> {project.customer}
                  </p>
                  <p>
                    <strong>Type:</strong> {project.type}
                  </p>
                  <p>
                    <strong>Towers:</strong> {project.towers}
                  </p>
                  <p>
                    <strong>Route:</strong> {project.from} → {project.to}
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <FiEdit2 className="text-blue-500 cursor-pointer" />
                <FiTrash2
                  onClick={() => openConfirm(project.id)}
                  className="text-red-500 cursor-pointer"
                />
              </div>
            </div>
          ))}
          {currentProjects.length === 0 && (
            <div className="col-span-full text-center py-10 text-gray-500">
              No projects found.
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-4 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
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
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-96">
            <h2 className="text-xl font-semibold text-red-600 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this project?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Projects;
