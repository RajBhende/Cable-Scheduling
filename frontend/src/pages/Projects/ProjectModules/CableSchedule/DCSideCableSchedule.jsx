import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const DCSideCableSchedule = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("DC SIDE");
  const navigate = useNavigate();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6">
       <Link to="/ProjectDashboard">
          <button className="text-blue-600 font-semibold mb-4"
         onClick={() => navigate(-1)}>
            &larr; Cable Schedule {id}
          </button>
           </Link>

      <h2 className="text-2xl font-semibold mb-2">Two-core Multipurpose Power Cable</h2>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        <Link to={`/cableschedule`}>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "AC SIDE"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabChange("AC SIDE")}
          >
            AC SIDE
          </button>
        </Link>

        <Link to={`/ACDBCableSchedule`}>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "ACDB"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabChange("ACDB")}
          >
            ACDB
          </button>
        </Link>

        <Link to={`/DCSideCableSchedule`}>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "DC SIDE"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabChange("DC SIDE")}
          >
            DC SIDE
          </button>
        </Link>
      </div>

      {/* Top Actions */}
      {/* <div className="flex justify-end space-x-2 mb-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Download Template
        </button>
        <input type="file" className="border px-3 py-2 rounded-md" />
        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded border hover:bg-blue-200">
          Save Changes
        </button>
      </div> */}

      {/* Table */}
      <div className="overflow-x-auto p-6">
        <table className="table-auto border border-black w-full text-sm text-center">
          <thead>
            <tr>
              <th rowSpan="2" className="border border-black px-2 py-1">Cable Code</th>
              <th rowSpan="2" className="border border-black px-2 py-1">Battery No.</th>
              <th rowSpan="2" className="border border-black px-2 py-1">FEEDER DESCRIPTION</th>
              <th colSpan="4" className="border border-black px-2 py-1">FROM</th>
              <th colSpan="4" className="border border-black px-2 py-1">TO</th>
              <th colSpan="6" className="border border-black px-2 py-1">CABLE</th>
              <th rowSpan="2" className="border border-black px-2 py-1">DRAWING NO.</th>
              <th rowSpan="2" className="border border-black px-2 py-1">PURPOSE</th>
            </tr>
            <tr>
              <th className="border border-black px-2 py-1">EQUIPMENT</th>
              <th className="border border-black px-2 py-1">TERMINAL BLOCK</th>
              <th className="border border-black px-2 py-1">TERMINAL NO</th>
              <th className="border border-black px-2 py-1">WIRE NO.</th>
              <th className="border border-black px-2 py-1">EQUIPMENT</th>
              <th className="border border-black px-2 py-1">TERMINAL BLOCK</th>
              <th className="border border-black px-2 py-1">TERMINAL NO</th>
              <th className="border border-black px-2 py-1">WIRE NO.</th>
              <th className="border border-black px-2 py-1">CORE</th>
              <th className="border border-black px-2 py-1">NO. OF RUNS</th>
              <th className="border border-black px-2 py-1">Sq.mm</th>
              <th className="border border-black px-2 py-1">CONDUCTOR</th>
              <th className="border border-black px-2 py-1">INSULATION</th>
              <th className="border border-black px-2 py-1">ROOT LENGTH (MTRS)</th>
              <th className="border border-black px-2 py-1">TOTAL LENGTH (MTRS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="19" className="border border-black text-left font-semibold bg-gray-100 px-2">
                {/* POWER CONVERSION SYSTEM TO BATTERY ENERGY STORAGE SYSTEM (BES1 TO BES2) */}
              </td> 
            </tr>

            {/* <tr>
              <td className="border border-black px-2 py-1">PDC</td>
              <td className="border border-black px-2 py-1">BES1</td>
              <td className="border border-black px-2 py-1">66/33kV BESS SUBSTATION AT BHACHUNDA</td>
              <td className="border border-black px-2 py-1" rowSpan="2">POWER CONVERSION SYSTEM 1</td>
              <td className="border border-black px-2 py-1">1</td>
              <td className="border border-black px-2 py-1">1</td>
              <td className="border border-black px-2 py-1">POSITIVE</td>
              <td className="border border-black px-2 py-1" rowSpan="2">BATTERY ENERGY STORAGE SYSTEM 1</td>
              <td className="border border-black px-2 py-1">1</td>
              <td className="border border-black px-2 py-1">1</td>
              <td className="border border-black px-2 py-1">POSITIVE</td>
              <td className="border border-black px-2 py-1" rowSpan="2">1</td>
              <td className="border border-black px-2 py-1" rowSpan="2">5</td>
              <td className="border border-black px-2 py-1" rowSpan="2">300</td>
              <td className="border border-black px-2 py-1" rowSpan="2">COPPER</td>
              <td className="border border-black px-2 py-1" rowSpan="2">XLPE</td>
              <td className="border border-black px-2 py-1" rowSpan="2">5.5</td>
              <td className="border border-black px-2 py-1" rowSpan="2">55</td>
              <td className="border border-black px-2 py-1" rowSpan="2">NPPMTL-2024-BHD-SUBSTATION LAYOUT-PLAN-E006</td>
              <td className="border border-black px-2 py-1" rowSpan="2">DC CONNECTION FOR BATTERY ENERGY STORAGE SYSTEM 1</td>
            </tr> */}

            {/* <tr>
              <td className="border border-black px-2 py-1">PDC</td>
              <td className="border border-black px-2 py-1">BES1</td>
              <td className="border border-black px-2 py-1">66/33kV BESS SUBSTATION AT BHACHUNDA</td>
              <td className="border border-black px-2 py-1">2</td>
              <td className="border border-black px-2 py-1">2</td>
              <td className="border border-black px-2 py-1">NEGATIVE</td>
              <td className="border border-black px-2 py-1">2</td>
              <td className="border border-black px-2 py-1">2</td>
              <td className="border border-black px-2 py-1">NEGATIVE</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DCSideCableSchedule;
