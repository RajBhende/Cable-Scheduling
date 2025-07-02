import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const EquipmentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const entriesPerPage = 10;
  const navigate = useNavigate();

  const data = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    // equipmentCode: `EQ-${i + 1001}`,
    // equipmentName: `Crane ${i + 1}`,
    // equipmentType: i % 2 === 0 ? "Heavy" : "Light",
    // availabletotalUnits: 5 + i,
    // contractorName: `Contractor ${i + 1}`,
    // location: `Site ${i % 3 + 1}`,
    // assignedlocation: `Zone ${i % 4 + 1}`,
    // assignedNumbers: i % 5,
    // assignedDate: "2025-07-01",
    // approvedDate: "2025-07-02",
    // returnDate: "2025-07-10",
    // remarks: `No remarks`,
  }));

  const currentPage = 1;
  const totalPages = Math.ceil(data.length / entriesPerPage);
  const currentData = data.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-700 text-lg hover:underline flex items-center"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
        <h4 className="text-2xl font-semibold text-gray-800">Equipment Management</h4>
      </div>

      {/* Project Title */}
      {/* <h4 className="text-lg font-semibold mb-4">
        Project:{" "}
        <span className="text-gray-700 font-normal">
          Two-core Multipurpose Power Cable Line
        </span>
      </h4> */}

      <h4 className="text-xl font-semibold mb-4">Equipment List</h4>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search equipment..."
          className="w-full md:w-1/3 p-2 border rounded shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-100 border text-sm text-blue-700 rounded hover:bg-blue-200">
            Export CSV
          </button>
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => navigate("/addequipment")}
          >
            + Add New Equipment
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg text-sm">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Sl.No.",
                "Equipment Code",
                "Equipment Name",
                "Equipment Type",
                "Available Total Units(no's)",
                "Contractor Name",
                "Location",
                "Assigned Location",
                "Assigned No.",
                "Assigned Date",
                "Approved Date",
                "Return Date",
                "Remarks",
                "Actions",
              ].map((head, i) => (
                <th key={i} className="border px-3 py-2 text-left">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border px-3 py-2">{index + 1}</td>
                <td className="border px-3 py-2">{row.equipmentCode}</td>
                <td className="border px-3 py-2">{row.equipmentName}</td>
                <td className="border px-3 py-2">{row.equipmentType}</td>
                <td className="border px-3 py-2">{row.availabletotalUnits}</td>
                <td className="border px-3 py-2">{row.contractorName}</td>
                <td className="border px-3 py-2">{row.location}</td>
                <td className="border px-3 py-2">{row.assignedlocation}</td>
                <td className="border px-3 py-2">{row.assignedNumbers}</td>
                <td className="border px-3 py-2">{row.assignedDate}</td>
                <td className="border px-3 py-2">{row.approvedDate}</td>
                <td className="border px-3 py-2">{row.returnDate}</td>
                <td className="border px-3 py-2">{row.remarks}</td>
                <td className="border px-3 py-2 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs">
                      View
                    </button>
                    <button className="bg-gray-200 p-1 rounded hover:bg-gray-300">
                      <FiEdit className="text-black" />
                    </button>
                    <button className="bg-red-500 p-1 rounded hover:bg-red-600">
                      <FiTrash2 className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <p>
          Showing {(currentPage - 1) * entriesPerPage + 1} to{" "}
          {Math.min(currentPage * entriesPerPage, data.length)} of {data.length} entries
        </p>
        <div className="space-x-1">
          <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">First</button>
          <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">Prev</button>
          <button className="px-4 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">Next</button>
          <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">Last</button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDashboard;
