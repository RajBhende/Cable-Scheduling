import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi";

const DCSideCableSchedule = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("DC SIDE");
  const navigate = useNavigate();

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="mb-4 flex items-center space-x-2">
            <button
              onClick={() => navigate(-1)}
              className="text-blue-700 text-lg hover:underline"
            >
                  <HiArrowLeft className="w-7 h-5" />
            </button>
            
            <span className="text-lg font-semibold text-gray-800">
              <h3>Cable Schedule</h3>
            </span>
          </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Two-core Multipurpose Power Cable {id}
      </h2>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        <Link to="/cableschedule">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "AC SIDE"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("AC SIDE")}
          >
            AC SIDE
          </button>
        </Link>

        <Link to="/ACDBCableSchedule">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "ACDB"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("ACDB")}
          >
            ACDB
          </button>
        </Link>

        <Link to="/DCSideCableSchedule">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "DC SIDE"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("DC SIDE")}
          >
            DC SIDE
          </button>
        </Link>
      </div>

      {/* Top Actions: Upload, Download, Save */}
      <div className="flex flex-wrap justify-end gap-2 mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 text-sm">
          Download Template
        </button>

        <input
          type="file"
          className="border px-3 py-2 rounded-md text-sm cursor-pointer"
        />

        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded border hover:bg-blue-200 text-sm">
          Save Changes
        </button>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-lg shadow bg-white border">
        <table className="min-w-full text-xs text-center border-collapse">
          <thead className="bg-blue-100 text-gray-700 text-[13px]">
            <tr>
              <th rowSpan="2" className="border px-2 py-2">Cable Code</th>
              <th rowSpan="2" className="border px-2 py-2">Battery No.</th>
              <th rowSpan="2" className="border px-2 py-2">Feeder Description</th>
              <th colSpan="4" className="border px-2 py-2">From</th>
              <th colSpan="4" className="border px-2 py-2">To</th>
              <th colSpan="6" className="border px-2 py-2">Cable</th>
              <th rowSpan="2" className="border px-2 py-2">Drawing No.</th>
              <th rowSpan="2" className="border px-2 py-2">Purpose</th>
            </tr>
            <tr>
              <th className="border px-2 py-1">Equipment</th>
              <th className="border px-2 py-1">Terminal Block</th>
              <th className="border px-2 py-1">Terminal No.</th>
              <th className="border px-2 py-1">Wire No.</th>
              <th className="border px-2 py-1">Equipment</th>
              <th className="border px-2 py-1">Terminal Block</th>
              <th className="border px-2 py-1">Terminal No.</th>
              <th className="border px-2 py-1">Wire No.</th>
              <th className="border px-2 py-1">Core</th>
              <th className="border px-2 py-1">No. of Runs</th>
              <th className="border px-2 py-1">Sq. mm</th>
              <th className="border px-2 py-1">Conductor</th>
              <th className="border px-2 py-1">Insulation</th>
              <th className="border px-2 py-1">Root Length (m)</th>
              <th className="border px-2 py-1">Total Length (m)</th>
            </tr>
          </thead>
          <tbody>
            {/* Section Header */}
            <tr>
              <td colSpan="19" className="border px-3 py-2 font-semibold bg-gray-100 text-left">
                {/* POWER CONVERSION SYSTEM TO BATTERY ENERGY STORAGE SYSTEM (BES1 TO BES2) */}
              </td>
            </tr>

            {/* Example Row - Uncomment for sample */}
            {/* <tr className="hover:bg-gray-50">
              <td className="border px-2 py-1">PDC</td>
              <td className="border px-2 py-1">BES1</td>
              <td className="border px-2 py-1">Feeder Description</td>
              <td className="border px-2 py-1">PCS 1</td>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">POSITIVE</td>
              <td className="border px-2 py-1">BESS 1</td>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">POSITIVE</td>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">5</td>
              <td className="border px-2 py-1">300</td>
              <td className="border px-2 py-1">Copper</td>
              <td className="border px-2 py-1">XLPE</td>
              <td className="border px-2 py-1">5.5</td>
              <td className="border px-2 py-1">55</td>
              <td className="border px-2 py-1">Drawing No</td>
              <td className="border px-2 py-1">DC Connection</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DCSideCableSchedule;
