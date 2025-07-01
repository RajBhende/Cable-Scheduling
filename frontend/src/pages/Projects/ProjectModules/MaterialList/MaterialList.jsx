import React, { useState } from "react";
import { Table, Button, OverlayTrigger, Tooltip, Badge } from "react-bootstrap";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const MaterialList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const bomData = [
    {
      materialName: "",
      location: "",
      vendor: "",
      originalScopeQty: "",
      cummStock: "",
      issuedQty: "",
      inOut: "",
      balanceStore: "",
      balanceSupply: "",
      stage: "",
    },
  ];

  // Optional: Add search filter logic
  const filteredData = bomData.filter((item) =>
    item.materialName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-700 text-lg hover:underline flex items-center"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-semibold text-gray-800">Material Management</h3>
      </div>

      {/* Project Title */}
      <h4 className="text-lg font-semibold mb-4">
        Project:{" "}
        <span className="text-gray-700 font-normal">
          Two-core Multipurpose Power Cable Line
        </span>
      </h4>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search material..."
          className="w-full md:w-1/3 p-2 border rounded shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-100 border text-sm text-blue-700 rounded hover:bg-blue-200">
            Export CSV
          </button>
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => navigate("/add-new-bom")}
          >
            + Add New
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive shadow-sm border rounded bg-blue p-3">
        <Table bordered hover responsive className="align-middle text-center mb-0">
          <thead className="table-light">
            <tr>
              <th>Sl. No.</th>
              <th>Material Name</th>
              <th>Location</th>
              <th>Vendor</th>
              <th>Original Scope</th>
              <th>Cumm. Stock</th>
              <th>Issued Qty</th>
              <th>In/Out</th>
              <th>Store Balance</th>
              <th>Supply Balance</th>
              <th>Stage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="11" className="text-muted py-4">
                  No material records found.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.slno}</td>
                  <td>{item.materialName}</td>
                  <td>{item.location}</td>
                  <td>{item.vendor}</td>
                  <td>{item.originalScopeQty}</td>
                  <td>{item.cummStock}</td>
                  <td>{item.issuedQty}</td>
                  <td>
                    <Badge
                      bg={
                        item.inOut === "IN"
                          ? "success"
                          : item.inOut === "OUT"
                          ? "danger"
                          : "secondary"
                      }
                      className="px-3 py-1"
                    >
                      {item.inOut}
                    </Badge>
                  </td>
                  <td>{item.balanceStore}</td>
                  <td>{item.balanceSupply}</td>
                  <td>{item.stage}</td>
                  <td className="d-flex justify-content-center gap-2">
                    <OverlayTrigger placement="top" overlay={<Tooltip>View Details</Tooltip>}>
                      <Button size="sm" variant="white" className="" >
                        <FaEye />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                      <Button size="sm" variant="white">
                        <FaEdit />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                      <Button size="sm" variant="white">
                        <FaTrash />
                      </Button>
                    </OverlayTrigger>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MaterialList;
