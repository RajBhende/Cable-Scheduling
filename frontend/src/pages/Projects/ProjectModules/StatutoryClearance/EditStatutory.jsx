import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const statutoryItems = [
 "Route Alignment & Survey Approval",
 "Electricity Board NOC",
 "Land Acquisition / ROU NOC",
 "Electrical Inspectorate Approval",
  "Forest Clearance",
  "Railway Crossing Clearance",
  "National Highway (NHAI) Clearance",
  "Utility Clearance (Underground)",
  "Environmental Clearance",
  "State Highway / PWD Clearance",
//   "Municipal / Panchayat Approval",
];

const EditStatutory = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState(
    statutoryItems.map((item) => ({
      approval: item,
      total: "",
      submissionPlan: "",
      submissionActual: "",
      approvalPlan: "",
      approvalActual: "",
      remarks: "",
    }))
  );

  const handleChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  const handleSubmit = () => {
    console.log("Saved Data:", tableData);
    navigate(-1); // Go back
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-700 text-lg hover:underline flex items-center"
          >
            <HiArrowLeft className="w-6 h-6" />
          </button>
          <h3 className="text-xl font-semibold text-gray-800">Edit Statutory Clearance</h3>
        </div>
       
        <div className="flex gap-4">
  <button
    onClick={() => navigate(-1)}
    className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
  >
    Cancel
  </button> 
  <button
    onClick={handleSubmit}
    className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
  >
    Save Changes
  </button>
</div>


      </div>
      <br></br>

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
            {tableData.map((row, index) => (
              <tr key={index} className="text-sm">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2 font-medium">{row.approval}</td>
                <td className="border p-2 text-center">-</td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.submissionPlan}
                    onChange={(e) =>
                      handleChange(index, "submissionPlan", e.target.value)
                    }
                    className="border p-1 w-full"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.submissionActual}
                    onChange={(e) =>
                      handleChange(index, "submissionActual", e.target.value)
                    }
                    className="border p-1 w-full"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.approvalPlan}
                    onChange={(e) =>
                      handleChange(index, "approvalPlan", e.target.value)
                    }
                    className="border p-1 w-full"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.approvalActual}
                    onChange={(e) =>
                      handleChange(index, "approvalActual", e.target.value)
                    }
                    className="border p-1 w-full"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={row.remarks}
                    onChange={(e) =>
                      handleChange(index, "remarks", e.target.value)
                    }
                    className="border p-1 w-full"
                    placeholder="Remarks"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditStatutory;
