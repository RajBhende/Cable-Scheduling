import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

const SafetyDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-800 hover:text-blue-600"
          >
            <HiArrowLeft className="w-6 h-6" />
          </button>
          <h3 className="text-xl font-semibold text-gray-800">
            Safety Inspection for Two-core Multipurpose Power Cable Line
          </h3>
        </div>
        <button
          onClick={() => navigate("/addinspection")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <FiPlus /> Add New Inspection
        </button>
      </div>

      {/* Card Section */}
      <div className="bg-white rounded border p-6 shadow-sm">
        <h4 className="text-xl font-semibold mb-4">Safety Inspection List</h4>

        <div className="mb-4">
          <label className="block font-medium mb-1">Search Location: </label>
          <select className="w-full md:w-1/3 px-3 py-2 border rounded">
            <option>Select locations</option>
          </select>
        </div>

        <div className="text-center py-10 text-gray-500">
          <p className="mb-2">No safety inspection added.</p>
          <p className="mb-4">
            Please add New Inspection by clicking on the button below.
          </p>
          <button
            onClick={() => navigate("/addinspection")}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 flex items-center gap-2 mx-auto"
          >
            <FiPlus /> Add New Inspection
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafetyDashboard;
