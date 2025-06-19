import React, { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
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
  const [projects] = useState(allProjects);
  const [searchTerm, setSearchTerm] = useState("");
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

  return (
    <div className="px-4 py-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
      </div>

      {/* Top Controls */}
      <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
        <h4 className="text-xl font-medium text-gray-700">Projects List</h4>
        <div className="flex gap-2 flex-wrap items-center">
          {/* View Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-3 py-1.5 border rounded-md bg-white hover:bg-gray-100 text-sm"
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
              <div className="absolute right-0 mt-1 w-40 bg-white border shadow-md rounded-md z-20 text-sm">
                {["small", "medium", "list"].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      navigate(`/${v}view`);
                      setView(v);
                      setShowDropdown(false);
                    }}
                    className={`w-full px-4 py-1.5 flex items-center gap-2 text-left ${
                      view === v
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {v === "small" && <FiGrid />}
                    {v === "medium" && <FiGrid />}
                    {v === "list" && <FiList />}
                    {v.charAt(0).toUpperCase() + v.slice(1)} View
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search & Add */}
          <input
            type="text"
            placeholder="🔍 Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 px-3 py-1.5 text-sm rounded-md focus:ring-1 focus:ring-blue-500"
          />
          <Link
            to="/AddProject"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-sm rounded-md"
          >
            + Add New Project
          </Link>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white rounded-lg shadow-sm border hover:shadow-md transition p-4"
          >
            <div
              onClick={() => navigate(`/projects/${project.id}`)}
              className="cursor-pointer"
            >
              <h3 className="text-base font-semibold text-blue-700 mb-1">{project.name}</h3>
              <div className="text-sm text-gray-700 space-y-0.5">
                <p><strong>Client:</strong> {project.customer}</p>
                <p><strong>Type:</strong> {project.type}</p>
                <p><strong>Towers:</strong> {project.towers}</p>
                <p><strong>Route:</strong> {project.from} → {project.to}</p>
              </div>
            </div>
          </div>
        ))}
        {currentProjects.length === 0 && (
          <div className="col-span-full text-center py-6 text-gray-500 text-sm">
            No projects found.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-3 mt-6 text-sm">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Prev
          </button>
          <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
