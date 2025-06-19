import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function CableSchedule() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("AC SIDE");
  const navigate = useNavigate();

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="mb-4">
        <button
          className="text-blue-600 hover:underline text-sm font-medium flex items-center"
          onClick={() => navigate(-1)}
        >
          &larr; Back to Project Dashboard
        </button>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Two-core Multipurpose Power Cable  {id}
      </h2>
      <br></br>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
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

      {/* Top Actions */}
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
      <div className="overflow-x-auto p-4  rounded">
        <table className="min-w-[1500px] border text-xs text-center">
          <thead className="bg-gray-200">
            <tr>
              <th rowSpan="2" className="border px-2 py-1">SL. NO</th>
              <th rowSpan="2" className="border px-2 py-1">CABLE NO.</th>
              <th colSpan="2" className="border px-2 py-1">EQUIPMENT DESIGNATION</th>
              <th rowSpan="2" className="border px-2 py-1">SIZE</th>
              <th rowSpan="2" className="border px-2 py-1">NO. OF RUNS</th>
              <th colSpan="4" className="border px-2 py-1">Estimated length</th>
              <th rowSpan="2" className="border px-2 py-1">ESTIMATED LENGTH</th>
              <th colSpan="3" className="border px-2 py-1">INTERCONNECTION</th>
              <th colSpan="2" className="border px-2 py-1">Wire Nos.</th>
              <th colSpan="2" className="border px-2 py-1">Ferrule Nos.</th>
              <th rowSpan="2" className="border px-2 py-1">APPLICATION</th>
              <th rowSpan="2" className="border px-2 py-1">REMARK</th>
              <th colSpan="2" className="border px-2 py-1">REF. DRAWING. NO :</th>
            </tr>
            <tr>
              <th className="border px-2 py-1">FROM</th>
              <th className="border px-2 py-1">TO</th>
              <th className="border px-2 py-1">HL</th>
              <th className="border px-2 py-1">VL</th>
              <th className="border px-2 py-1">LL</th>
              <th className="border px-2 py-1">D</th>
              <th className="border px-2 py-1">CORE</th>
              <th className="border px-2 py-1">FROM</th>
              <th className="border px-2 py-1">TO</th>
              <th className="border px-2 py-1">FROM</th>
              <th className="border px-2 py-1">TO</th>
              <th className="border px-2 py-1">FROM</th>
              <th className="border px-2 py-1">TO</th>
              <th className="border px-2 py-1">SHEET NO.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 font-semibold">
              <td colSpan="22" className="border px-2 py-1 text-left">
                {/* BUS A VT INTERPOLE CABLING */}
              </td>
            </tr>

            {/* <tr>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">4</td>
              <td className="border px-2 py-1">1001</td>
              <td className="border px-2 py-1">4Cx4</td>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">4</td>
              <td className="border px-2 py-1">5</td>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">10</td>
              <td className="border px-2 py-1">1a</td>
              <td className="border px-2 py-1">RTB-1</td>
              <td className="border px-2 py-1">R</td>
              <td className="border px-2 py-1">R</td>
              <td className="border px-2 py-1">204-VT MB-RTB-1 / 1a</td>
              <td className="border px-2 py-1">204-VT R-1a / RTB-1</td>
              <td className="border px-2 py-1">Core -1</td>
              <td className="border px-2 py-1">CVT - CVT JB</td>
              <td className="border px-2 py-1">FROM: 1HYT902474</td>
              <td className="border px-2 py-1 text-red-600">TO : Nill</td>
            </tr> */}

            {/* <tr>
              <td colSpan="10" className="border px-2 py-1"></td>
              <td className="border px-2 py-1">1n</td>
              <td className="border px-2 py-1">RTB-2</td>
              <td className="border px-2 py-1">R</td>
              <td className="border px-2 py-1">R</td>
              <td className="border px-2 py-1">204-VT MB-RTB-2 / 1n</td>
              <td className="border px-2 py-1">204-VT R-1n / RTB-2</td>x
              <td colSpan="6" className="border px-2 py-1"></td>
            </tr> */}

            {/* <tr>
              <td colSpan="10" className="border px-2 py-1"></td>
              <td className="border px-2 py-1">3</td>
              <td colSpan="11" className="border px-2 py-1 text-red-600 font-semibold text-left">
                SPARE
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CableSchedule;
