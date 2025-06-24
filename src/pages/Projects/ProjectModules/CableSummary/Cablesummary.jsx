import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

// Dummy data structure
const cableData = [
  { no: "CBL-01", values: [2, "Copper", "2C x 2.5 sqmm", 150], total: 150 },
  { no: "CBL-02", values: [4, "Aluminium", "3.5C x 35 sqmm", 200], total: 200 },
];

function Cablesummary() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ACSIDE Summary");

  // Calculate totals for numeric columns (assuming last column is total)
  const totals = cableData.reduce(
    (acc, row) => {
      row.values.forEach((val, idx) => {
        if (typeof val === "number") acc[idx] += val;
      });
      acc[3] += row.total;
      return acc;
    },
    [0, 0, 0, 0]
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-700 text-lg hover:underline flex items-center"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800">Cable Summary</h3>
      </div>

      {/* Page Title */}
      <h3 className="text-2xl text-gray-800 font-semibold mb-6">
        Two-core Multipurpose Power Cable
      </h3>

      <br></br>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["ACSIDE Summary", "ACDB Summary", "DCSIDE Summary"].map((tab) => {
          const route =
            tab === "ACSIDE Summary"
              ? "#"
              : tab === "ACDB Summary"
              ? "/ACDBSummary"
              : "/DCSideSummary";

          return (
            <Link key={tab} to={route}>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </Link>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border">
        <table className="min-w-full text-sm text-center border-collapse">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="border px-4 py-2">Sr. No.</th>
              <th className="border px-4 py-2">Cable No.</th>
              <th className="border px-4 py-2">Cable Core</th>
              <th className="border px-4 py-2">Cable Type</th>
              <th className="border px-4 py-2">Cable Size</th>
              <th className="border px-4 py-2">Cable Length</th>
              <th className="border px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {cableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{row.no}</td>
                {row.values.map((val, idx) => (
                  <td key={idx} className="border px-4 py-2">
                    {val}
                  </td>
                ))}
                <td className="border px-4 py-2 font-semibold">{row.total}</td>
              </tr>
            ))}

            {/* Totals Row */}
            <tr className="bg-blue-100 font-semibold">
              <td colSpan={2} className="border px-4 py-2 text-center">
                Total
              </td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">{totals[3]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cablesummary;
