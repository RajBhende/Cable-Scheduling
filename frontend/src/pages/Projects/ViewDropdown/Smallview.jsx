import React, { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const projects = [
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
  {
    id: 3,
    name: "765kV Tripple Circuit Testing Line",
    customer: "PGCIL",
    type: "765kv",
    towers: 750,
    from: "Rajgarh",
    to: "Indore",
  },
];

const Smallview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [view, setView] = useState("small");
  const navigate = useNavigate();

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
        <h4 className="text-xl font-medium text-gray-700">Projects List</h4>
        <div className="flex justify-end gap-2 flex-wrap items-center"></div>
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
                    className={`w-full px-4 py-2 text-sm text-left flex items-center gap-2 ${
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

        {/* Search Field */}
        <input
          type="text"
          placeholder="🔍 Search projects..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Add Project Button */}
        <Link
          to="/AddProject"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Add New Project
        </Link>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4 text-sm"
          >
            <h3 className="text-blue-700 font-semibold text-base mb-2 leading-tight line-clamp-2">
              {project.name}
            </h3>

            <div className="text-gray-700 space-y-0.5">
              <p><span className="font-medium">Client:</span> {project.customer}</p>
              <p><span className="font-medium">Type:</span> {project.type}</p>
              <p><span className="font-medium">Towers:</span> {project.towers}</p>
              <p>
                <span className="font-medium">From:</span> {project.from} → <span className="font-medium">To:</span> {project.to}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center text-gray-500 py-12 text-lg">
          No projects found.
        </div>
      )}
    </div>
  );
};

export default Smallview;
