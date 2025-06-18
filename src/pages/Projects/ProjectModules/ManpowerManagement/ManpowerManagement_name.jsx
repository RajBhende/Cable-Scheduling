import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";


// ✅ Import components
import Manpower from "./Manpower";
import Contractor from "./Contractor";

const ManpowerManagementName = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("manpower");

  return (
    <div className="p-6">
      {/* Back Button */}
      <div className="flex items-center gap-2 text-gray-700 mb-4 ">
        <IoArrowBack
          className="h-5 w-5 cursor-pointer hover:text-blue-600 rounded-md hover:bg-gray-200"
          onClick={() => navigate(-1)}
        />
        <span className="text-base font-medium px-4 py-2 rounded-md hover:bg-gray-200">Manpower Management Page</span>
      </div>

      {/* Tab Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "manpower"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("manpower")}
        >
          Manpower
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "contractor"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("contractor")}
        >
          Contractor
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="bg-white p-4 rounded shadow">
        {activeTab === "manpower" && <Manpower />}
        {activeTab === "contractor" && <Contractor />}
      </div>
    </div>
  );
};

export default ManpowerManagementName;
