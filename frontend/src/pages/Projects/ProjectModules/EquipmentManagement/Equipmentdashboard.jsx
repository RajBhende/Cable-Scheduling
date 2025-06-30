import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const EquipmentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const entriesPerPage = 10;
  const navigate = useNavigate();

  // Dummy data with full fields
  const data = Array.from({ length: 20 }, (_, i) => ({
    id: "" ,
    equipmentCode: ``,
    equipmentType: "",
    totalUnits: "",
    contractorName: "",
    location: "",
    assignedNumbers: "",
    assignedDate: "",
    returnDate: "",
    remarks: "",
  }));

  const currentPage = 1;
  const totalPages = Math.ceil(data.length / entriesPerPage);
  const currentData = data.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="p-6">
      {/* Back Button */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-700 text-lg hover:underline flex items-center"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800">Equipment Management</h3>
      </div>

      <h4 className="text-lg font-semibold mb-3">
        Project Title:{" "}
        <span className="text-gray-700 font-normal">
          Two-core Multipurpose Power Cable Line
        </span>
      </h4>

      <br></br>

      {/* Search and Add */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-1/3 p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="space-x-2">
          <button className="px-3 py-2 bg-blue-100 border rounded">.CSV</button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => navigate("/addequipment")}
          >
            + Add New Equipment
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border border-collapse mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Sl.No.</th>
            <th className="border p-2">Equipment Code</th>
            <th className="border p-2">Equipment Type</th>
            <th className="border p-2">Total Unit(No's)</th>
            <th className="border p-2">Contractor Name</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Assigned Numbers</th>
            <th className="border p-2">Assigned Date</th>
            <th className="border p-2">Return Date</th>
            <th className="border p-2">Remarks</th>
            <th className="border p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr key={row.id}>
              <td className="border p-2 text-center">
                {row.id.toString().padStart(2, "0")}
              </td>
              <td className="border p-2">{row.equipmentCode}</td>
              <td className="border p-2">{row.equipmentType}</td>
              <td className="border p-2">{row.totalUnits}</td>
              <td className="border p-2">{row.contractorName}</td>
              <td className="border p-2">{row.location}</td>
              <td className="border p-2">{row.assignedNumbers}</td>
              <td className="border p-2">{row.assignedDate}</td>
              <td className="border p-2">{row.returnDate}</td>
              <td className="border p-2">{row.remarks}</td>
              <td className="border p-2">
                <div className="flex items-center gap-2 justify-center">
                  {/* View Details */}
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                    View
                  </button>

                  {/* Edit Button */}
                  <button className="bg-white border border-gray-300 p-2 rounded hover:bg-gray-100 transition">
                    <FiEdit className="text-black" />
                  </button>

                  {/* Delete Button */}
                  <button className="bg-red-500 p-2 rounded hover:bg-red-600 transition">
                    <FiTrash2 className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p>
          Showing {entriesPerPage * (currentPage - 1) + 1} to{" "}
          {Math.min(entriesPerPage * currentPage, data.length)} of {data.length} entries
        </p>
        <div className="space-x-2">
          <button className="px-2 py-1 border rounded bg-gray-100">First</button>
          <button className="px-2 py-1 border rounded bg-gray-100">Prev</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-2 py-1 border rounded bg-gray-100">Next</button>
          <button className="px-2 py-1 border rounded bg-gray-100">Last</button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDashboard;
