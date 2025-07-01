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
  "Municipal / Panchayat Approval",
];

const Statutoryclearancelist = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState(
    statutoryItems.map((item) => ({
      approval: item,
      submissionPlan: "",
      submissionActual: "",
      approvalPlan: "",
      approvalActual: "",
      assignedTo: "",
      assignedDate: "",
      attachFile: null,
      remarks: "",
    }))
  );

  const handleChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };


  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-700 text-lg hover:underline flex items-center"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-semibold text-gray-800">
          Statutory Clearance – Two-core Multipurpose Power Cable Line
        </h3>
      </div>

      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Statutory Clearance List</h4>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded shadow-md">
          <thead className="bg-gray-100 text-sm text-left">
            <tr>
              <th className="border p-3">Sr. No</th>
              <th className="border p-3">Approvals</th>
              <th className="border p-3">Submission Plan</th>
              <th className="border p-3">Submission Actual</th>
              <th className="border p-3">Approval Plan</th>
              <th className="border p-3">Approval Actual</th>
              <th className="border p-3">Assigned To</th>
              <th className="border p-3">Assigned Date</th>
              <th className="border p-3">Attach File</th>
              <th className="border p-3">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2 font-medium">{row.approval}</td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.submissionPlan}
                    onChange={(e) =>
                      handleChange(index, "submissionPlan", e.target.value)
                    }
                    className="border p-1 w-full rounded hover:border-blue-400"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.submissionActual}
                    onChange={(e) =>
                      handleChange(index, "submissionActual", e.target.value)
                    }
                    className="border p-1 w-full rounded hover:border-blue-400"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.approvalPlan}
                    onChange={(e) =>
                      handleChange(index, "approvalPlan", e.target.value)
                    }
                    className="border p-1 w-full rounded hover:border-blue-400"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.approvalActual}
                    onChange={(e) =>
                      handleChange(index, "approvalActual", e.target.value)
                    }
                    className="border p-1 w-full rounded hover:border-blue-400"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={row.assignedTo}
                    onChange={(e) =>
                      handleChange(index, "assignedTo", e.target.value)
                    }
                    className="border p-1 w-full rounded hover:border-blue-400"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={row.assignedDate}
                    onChange={(e) =>
                      handleChange(index, "assignedDate", e.target.value)
                    }
                    className="border p-1 w-full rounded hover:border-blue-400"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="file"
                    onChange={(e) =>
                      handleChange(index, "attachFile", e.target.files[0])
                    }
                    className="border p-1 w-full rounded hover:border-blue-400"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={row.remarks}
                    onChange={(e) =>
                      handleChange(index, "remarks", e.target.value)
                    }
                    placeholder="Remarks"
                    className="border p-1 w-full rounded hover:border-blue-400"
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

export default Statutoryclearancelist;
