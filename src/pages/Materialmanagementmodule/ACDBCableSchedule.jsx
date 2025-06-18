import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DCSideCableSchedule from "./DCSideCableSchedule";

const ACDBCableSchedule = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("ACDB");
  const navigate = useNavigate();
  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="p-6">
        <Link to="/ProjectDashboard">
           <button className="text-blue-600 font-semibold mb-4"
          onClick={() => navigate(-1)}  >
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

      {/* ACDB Cable Schedule Table */}
      <div className="p-4 overflow-x-auto">

        <table className="min-w-full border border-black text-sm text-center">
          <thead className="bg-gray-200">
            <tr>
              <th rowSpan="2" className="border border-black">CABLE NO.</th>
              <th rowSpan="2" className="border border-black">FEEDER DESCRIPTION</th>
              <th colSpan="4" className="border border-black">FROM</th>
              <th colSpan="4" className="border border-black">TO</th>
              <th colSpan="6" className="border border-black">CABLE</th>
              <th rowSpan="2" className="border border-black">DRAWING NO.</th>
              <th rowSpan="2" className="border border-black">PURPOSE</th>
              <th rowSpan="2" className="border border-black">REMARKS</th>
            </tr>
            <tr>
              <th className="border border-black">EQUIPMENT</th>
              <th className="border border-black">TERMINAL BLOCK</th>
              <th className="border border-black">TERMINAL NO.</th>
              <th className="border border-black">WIRE NO.</th>
              <th className="border border-black">EQUIPMENT</th>
              <th className="border border-black">TERMINAL BLOCK</th>
              <th className="border border-black">TERMINAL NO.</th>
              <th className="border border-black">WIRE NO.</th>
              <th className="border border-black">CORE</th>
              <th className="border border-black">NO. OF RUNS</th>
              <th className="border border-black">SQ. MM</th>
              <th className="border border-black">CONDUCTOR</th>
              <th className="border border-black">INSULATION</th>
              <th className="border border-black">ROOT LENGTH (MTRS)</th>
              <th className="border border-black">TOTAL R-Y-B LENGTH (MTRS)</th>
            </tr>
          </thead>
          <tbody>
            {/* Section Header */}
            <tr>
              <td colSpan="19" className="border border-black font-semibold bg-gray-100 text-left pl-2">
                {/* POWER TRAFO LV TO AUX TRAFO (AUX1 TO AUX2) */}
              </td>
            </tr>

            {/* Data Rows */}
            {/* <tr>
              <td className="border border-black">PAC</td>
              <td className="border border-black">66/33kV BESS SUBSTATION AT BHACHUNDA</td>
              <td className="border border-black">33 KV SWITCHGEAR FDR 9</td>
              <td className="border border-black">1<br />2<br />3</td>
              <td className="border border-black">1<br />2<br />3</td>
              <td className="border border-black">R<br />Y<br />B</td>
              <td className="border border-black">AUX TRAFO (33kV HV SIDE)</td>
              <td className="border border-black">1<br />2<br />3</td>
              <td className="border border-black">1<br />2<br />3</td>
              <td className="border border-black">R<br />Y<br />B</td>
              <td className="border border-black">1</td>
              <td className="border border-black">1</td>
              <td className="border border-black">300</td>
              <td className="border border-black">AL</td>
              <td className="border border-black">PVC</td>
              <td className="border border-black">68</td>
              <td className="border border-black">204</td>
              <td className="border border-black text-blue-600 underline cursor-pointer">LINK</td>
              <td className="border border-black"></td>
              <td className="border border-black"></td>
            </tr> */}

            {/* Repeat with more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ACDBCableSchedule;
