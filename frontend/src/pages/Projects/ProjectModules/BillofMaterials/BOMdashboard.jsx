import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

const BOMdashboard = () => {
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
          <h4 className="text-xl font-semibold text-gray-800">
            BOM Management
          </h4>
        </div>
        <button
          onClick={() => navigate("/addbom")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <FiPlus /> Add New BOM
        </button>
      </div>



      {/* Card Section */}
      <div className="bg-white rounded border p-6 shadow-sm">
        <h4 className="text-xl font-semibold mb-4">Bill of Materials List</h4>

       <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
 {/* Search Location */}
  <div>
    <label className="block font-medium mb-1">Search Location:</label>
    <select name="location" className="w-full px-3 py-2 border rounded">
      <option>Select location</option>
    </select>
  </div>

  {/* Filter by Stage */}
  <div>
    <label className="block font-medium mb-1">Filter by Stage:</label>
    <select name="stage" className="w-full px-3 py-2 border rounded">
      <option>Select stage</option>
    </select>
  </div>
</div>


        <div className="text-center py-10 text-gray-500">
          <p className="mb-2">No BOM added.</p>
          <p className="mb-4">
            Add New BOM by clicking on the button below.
          </p>
          <button
            onClick={() => navigate("/addbom")}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 flex items-center gap-2 mx-auto"
          >
            <FiPlus /> Add New BOM
          </button>
        </div>
      </div>
    </div>
  );
};

export default BOMdashboard;
