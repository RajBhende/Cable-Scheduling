// src/pages/Materialmanagementmodule/MaterialList.jsx

import React from "react";
import { Table, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const MaterialList = () => {
  const navigate = useNavigate();

  const bomData = [
    {
      materialName: "2 Core Copper Cable",
      location: "AP-1/0",
      vendor: "Universal Cables Ltd.",
      originalScopeQty: 100,
      cummStock: 80,
      issuedQty: 50,
      inOut: "IN",
      balanceStore: 30,
      balanceSupply: 20,
      stage: "EARTHING",
    },
  ];

  return (
    <div className="">
      {/* Back Button */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <Button
          variant="light"
          className=""
          onClick={() => navigate(-1)}
        >
          <HiArrowLeft className="w-7 h-5" />
        </Button>
        <h5 className="mb-0 text-dark fw-bold">Material Management</h5>
      </div>
      <br></br>

      {/* Page Title */}
      <h4 className="text-primary mb-4">Two-core Multipurpose Power Cable</h4>

      {/* Add Button */}
      <div className="d-flex justify-content-end mb-4">
        <Button variant="primary" onClick={() => navigate("/add-new-bom")}>
          {/* < className="me-3" /> */}
         + Add New
        </Button>
      </div>

      {/* Table */}
      <div className="table-responsive shadow-sm border rounded bg-white p-3">
        <Table bordered hover responsive className="align-middle mb-0 text-center">
          <thead className="table-light">
            <tr>
              <th>Material Name</th>
              <th>Location</th>
              <th>Vendor</th>
              <th>Original Scope</th>
              <th>Cumm. Stock</th>
              <th>Issued Qty</th>
              <th>In/Out</th>
              <th>Balance at Store</th>
              <th>Balance Supply</th>
              <th>Stage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bomData.length === 0 ? (
              <tr>
                <td colSpan="11" className="text-center text-muted py-4">
                  No material records found.
                </td>
              </tr>
            ) : (
              bomData.map((item, index) => (
                <tr key={index}>
                  <td>{item.materialName}</td>
                  <td>{item.location}</td>
                  <td>{item.vendor}</td>
                  <td>{item.originalScopeQty}</td>
                  <td>{item.cummStock}</td>
                  <td>{item.issuedQty}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.inOut === "IN"
                          ? "bg-success"
                          : item.inOut === "OUT"
                          ? "bg-danger"
                          : "bg-secondary"
                      }`}
                    >
                      {item.inOut}
                    </span>
                  </td>
                  <td>{item.balanceStore}</td>
                  <td>{item.balanceSupply}</td>
                  <td>{item.stage}</td>
                  <td className="d-flex justify-content-center gap-2">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>View Details</Tooltip>}
                    >
                      <Button size="sm" variant="info">
                        <FaEye />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Edit</Tooltip>}
                    >
                      <Button size="sm" variant="secondary">
                        <FaEdit />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Delete</Tooltip>}
                    >
                      <Button size="sm" variant="danger">
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
