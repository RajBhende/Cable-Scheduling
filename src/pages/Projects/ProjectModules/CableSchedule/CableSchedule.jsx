
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function CableSchedule() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("AC SIDE");
  const navigate = useNavigate();
  const handleTabChange = (tab) => setActiveTab(tab);

  // Inside your CableSchedule component:
const handleDownload = () => {
 const tableData = [
  [
    "SL. NO", "CABLE NO.",
    "EQUIPMENT DESIGNATION", "", 
    "SIZE", "NO. OF RUNS",
    "Estimated length", "", "", 
    "ESTIMATED LENGTH",
    "INTERCONNECTION", "", "", 
    "Wire Nos.", "", 
    "Ferrule Nos.", "", 
    "APPLICATION", "REMARK",
    "REF. DRAWING. NO", ""
  ],
  [
    "", "", 
    "FROM", "TO",
    "", "", 
    "HL", "VL", "LL",
    "",
    "CORE", "FROM", "TO",
    "FROM", "TO",
    "FROM", "TO",
    "", "",
    "SHEET NO", 
  ],
 
];


  const worksheet = XLSX.utils.aoa_to_sheet(tableData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Cable Schedule");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(dataBlob, `CableSchedule_${id || "template"}.xlsx`);
};





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


      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Two-core Multipurpose Power Cable <span className="text-blue-600 font-semibold">{id}</span>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 my-6">
        {["AC SIDE", "ACDB", "DC SIDE"].map((tab) => {
          const route =
            tab === "AC SIDE"
              ? "#"
              : tab === "ACDB"
              ? "/ACDBCableSchedule"
              : "/DCSideCableSchedule";

          return (
            <Link key={tab} to={route}>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            </Link>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-end items-center gap-3 mb-4">
       <button
  onClick={handleDownload}
  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 text-sm transition"
>
  Download Template
</button>

        <label className="cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={(e) => console.log("File uploaded:", e.target.files[0])}
          />
          <div className="border border-gray-300 px-4 py-2 rounded-md text-sm bg-white hover:bg-gray-100 shadow-sm">
            Upload File
          </div>
        </label>

        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md border hover:bg-blue-200 text-sm transition">
          Save Changes
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow bg-white border">
        <table className="min-w-[2000px] text-xs text-center border-collapse">
          <thead className="bg-blue-100 text-gray-700 text-[13px]">
            <tr>
              <th rowSpan="2" className="border px-2 py-1">SL. NO</th>
              <th rowSpan="2" className="border px-2 py-1">CABLE NO.</th>
              <th colSpan="2" className="border px-2 py-1">EQUIPMENT DESIGNATION</th>
              <th rowSpan="2" className="border px-2 py-1">SIZE</th>
              <th rowSpan="2" className="border px-2 py-1">NO. OF RUNS</th>
              <th colSpan="3" className="border px-2 py-1">Estimated length</th>
              <th rowSpan="2" className="border px-2 py-1">ESTIMATED LENGTH</th>
              <th colSpan="3" className="border px-2 py-1">INTERCONNECTION</th>
              <th colSpan="2" className="border px-2 py-1">Wire Nos.</th>
              <th colSpan="2" className="border px-2 py-1">Ferrule Nos.</th>
              <th rowSpan="2" className="border px-2 py-1">APPLICATION</th>
              <th rowSpan="2" className="border px-2 py-1">REMARKS</th>
              <th colSpan="2" className="border px-2 py-1">REF. DRAWING. NO</th>
            </tr>
            <tr>
              <th className="border px-2 py-1">FROM</th>
              <th className="border px-2 py-1">TO</th>
              <th className="border px-2 py-1">HL</th>
              <th className="border px-2 py-1">VL</th>
              <th className="border px-2 py-1">LL</th>
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
            {/* Section Row */}
            <tr className="bg-gray-50 font-semibold text-left">
              <td colSpan="22" className="border px-2 py-2">
                {/* Example Section Name */}
                {/* BUS A VT INTERPOLE CABLING */}
              </td>
            </tr>

            {/* Sample Data Row (can be repeated or dynamically generated) */}
            {/* <tr className="hover:bg-blue-50">
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">204-VT R</td>
              <td className="border px-2 py-1">204-VT MB</td>
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
              <td className="border px-2 py-1 ">TO: Nill</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CableSchedule;
