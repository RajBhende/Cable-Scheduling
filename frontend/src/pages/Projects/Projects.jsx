import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { saveAs } from 'file-saver';
import { FaBars } from "react-icons/fa";

const mockProjects = [
  {
    id: 1,
    name: "Two-core Multipurpose Cable Line",
    clientname: "NPPMT",
    typeofline: "400kv",
    totallengthofcable: 120,
    fromlocation: "Neemuch",
    tolocation: "Pachora",
    status: "Active",
  },
  {
    id: 2,
    name: "400kV D/C Pachora PS - Rajgarh (PG) Quad Line",
    clientname: "NPPMT",
    typeofline: "400kv",
    totallengthofcable: 95,
    fromlocation: "Pachora",
    tolocation: "Rajgarh",
    status: "In Progress",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  const projectsPerPage = 5;

  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProjects = [...filtered].sort((a, b) => {
    if (!sortField) return 0;
    return a[sortField].localeCompare(b[sortField]);
  });

  const current = sortedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const confirmDelete = () => {
    setProjects((prev) => prev.filter((p) => p.id !== deleteId));
    setShowConfirm(false);
  };

  const exportCSV = () => {
    const header = "Project Name,Client,Type,Length,From,To\n";
    const rows = projects
      .map((p) =>
        [p.name, p.clientname, p.typeofline, p.totallengthofcable, p.fromlocation, p.tolocation].join(",")
      )
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "projects.csv");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <div className="flex items-center gap-2 text-gray-700 mb-4">
          <FaBars className="text-2xl cursor-pointer" />
          <h5 className="text-xl font-semibold">Projects</h5>
        </div>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="🔍 Search projects..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-3 py-1"
          />
          <select
            onChange={(e) => setSortField(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="">Sort by</option>
            <option value="name">Project Name</option>
            <option value="clientname">Client</option>
            <option value="typeofline">Type</option>
          </select>
          <button onClick={exportCSV} className="bg-green-600 text-white px-3 py-1 rounded">
            Export CSV
          </button>
          <Link
            to="/AddProject"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            + Add Project
          </Link>
        </div>
      </div>

      {/* Project Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-3 py-2">Project</th>
              <th className="px-3 py-2 text-center">Client</th>
              <th className="px-3 py-2 text-center">Type</th>
              <th className="px-3 py-2 text-center">Length</th>
              <th className="px-3 py-2 text-center">From</th>
              <th className="px-3 py-2 text-center">To</th>
              <th className="px-3 py-2 text-center">Status</th>
              <th className="px-3 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {current.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-3 py-2 text-blue-600">
                  <Link to={`/projects/${p.id}`}>{p.name}</Link>
                </td>
                <td className="px-3 py-2 text-center">{p.clientname}</td>
                <td className="px-3 py-2 text-center">{p.typeofline}</td>
                <td className="px-3 py-2 text-center">{p.totallengthofcable} km</td>
                <td className="px-3 py-2 text-center">{p.fromlocation}</td>
                <td className="px-3 py-2 text-center">{p.tolocation}</td>
                <td className="px-3 py-2 text-center">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      p.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : p.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-3 py-2 text-center">
                  <div className="flex justify-center gap-3">
                    <FiEdit2
                      className="cursor-pointer text-blue-600"
                      onClick={() => navigate(`/editproject/${p.id}`)}
                    />
                    <FiTrash2
                      className="cursor-pointer text-red-500"
                      onClick={() => {
                        setDeleteId(p.id);
                        setShowConfirm(true);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {current.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-gray-500 py-4">
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

      {/* Confirm Delete Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Confirm Deletion</h3>
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
