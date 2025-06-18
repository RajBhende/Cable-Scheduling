import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function CableSchedule() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("AC SIDE");
  const navigate = useNavigate();

  const handleTabChange = (tab) => setActiveTab(tab);
  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-4">
        <button
          className="text-blue-600 hover:text-blue-800 transition font-semibold"
          onClick={() => navigate(-1)}
        >
          &larr; Cable Schedule {id}
        </button>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Two-core Multipurpose Power Cable
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            activeTab === "AC SIDE"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTabChange("AC SIDE")}
        >
          AC SIDE
        </button>

        <Link to="/ACDBCableSchedule">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === "ACDB"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleTabChange("ACDB")}
          >
            ACDB
          </button>
        </Link>

        <Link to="/DCSideCableSchedule">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === "DC SIDE"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleTabChange("DC SIDE")}
          >
            DC SIDE
          </button>
        </Link>
      </div>

       {/* Top Actions */}
      <div className="flex justify-end space-x-2 mb-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Download Template
        </button>
        <input type="file" className="border px-3 py-2 rounded-md" />
        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded border hover:bg-blue-200">
          Save Changes
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-gray-300 text-sm text-center bg-white">
          <thead className="bg-blue-100 sticky top-0 z-10">
            <tr className="border border-gray-300">
              <th rowSpan="2" className="py-2 px-4 border">SR.NO.</th>
              <th rowSpan="2" className="py-2 px-4 border">CABLE NO.</th>
              <th rowSpan="2" className="py-2 px-4 border">FEEDER DESCRIPTION</th>
              <th colSpan="4" className="py-2 px-4 border">FROM</th>
              <th colSpan="4" className="py-2 px-4 border">TO</th>
              <th colSpan="5" className="py-2 px-4 border">CABLE</th>
              <th rowSpan="2" className="py-2 px-4 border">DRAWING NO.</th>
              <th rowSpan="2" className="py-2 px-4 border">PURPOSE</th>
            </tr>
            <tr className="border border-gray-300">
              <th className="py-2 px-2 border">EQUIPMENT</th>
              <th className="py-2 px-2 border">TERMINAL BLOCK</th>
              <th className="py-2 px-2 border">TERMINAL NO.</th>
              <th className="py-2 px-2 border">WIRE NO.</th>
              <th className="py-2 px-2 border">EQUIPMENT</th>
              <th className="py-2 px-2 border">TERMINAL BLOCK</th>
              <th className="py-2 px-2 border">TERMINAL NO.</th>
              <th className="py-2 px-2 border">WIRE NO.</th>
              <th className="py-2 px-2 border">CORE</th>
              <th className="py-2 px-2 border">NO. OF RUNS</th>
              <th className="py-2 px-2 border">Sq.mm</th>
              <th className="py-2 px-2 border">CONDUCTOR</th>
              <th className="py-2 px-2 border">INSULATION</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row - you can map through data later */}
            {/* <tr className="bg-gray-50 hover:bg-gray-100 border-t">
              <td className="py-2 px-4 border">1</td>
              <td className="py-2 px-4 border">PAC-6601</td>
              <td className="py-2 px-4 border">Substation</td>
              ...
            </tr> */}
            <tr>
              <td colSpan="18" className="text-left py-2 px-4 bg-gray-100 font-semibold border">
                {/* 66kV TRAFO BAY (601) */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CableSchedule;
