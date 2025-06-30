import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import EditStatutory from "./EditStatutory";

const statutoryItems = [
//   "GRID CONNECTIVITY",
//   "REVISED CONNECTIVITY",
//   "CONNECTIVITY AGREEMENT",
//   "BG SUBMISSION",
//   "BAY ALLOTMENT",
//   "LTA AGREEMENT",
//   "SUBMISSION OF LTA BG",
//   "MODELLING AND DATA",
//   "CON 4 APPLICATION",
//   "CON 5 APPROVAL",
];

const Statutoryclearancelist = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="mb-6 flex items-center gap-3">
                   <button
                     onClick={() => navigate(-1)}
                     className="text-blue-700 text-lg hover:underline flex items-center"
                   >
                     <HiArrowLeft className="w-6 h-6" />
                   </button>
                   <h3 className="text-xl font-semibold text-gray-800">Statutory Clearance for Two-core Multipurpose Power Cable Line </h3>
                 </div>

        <button
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => navigate("/editstatutory")}
        >
          + Edit Statutory Clearance
        </button>
      </div>

      {/* Section Title */}
      <h4 className="text-lg font-semibold mb-4">Statutory Clearance List</h4>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100 text-sm text-left">
            <tr>
              <th className="border p-2">Sr. No</th>
              <th className="border p-2">Approvals</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Submission Plan</th>
              <th className="border p-2">Submission Actual</th>
              <th className="border p-2">Approval Plan</th>
              <th className="border p-2">Approval Actual</th>
              <th className="border p-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {statutoryItems.map((item, index) => (
              <tr key={index} className="text-sm">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2 font-medium">{item}</td>
                <td className="border p-2 text-center">-</td>
                <td className="border p-2 text-center">-</td>
                <td className="border p-2 text-center">-</td>
                <td className="border p-2 text-center">-</td>
                <td className="border p-2 text-center">-</td>
                <td className="border p-2 text-center">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statutoryclearancelist;
