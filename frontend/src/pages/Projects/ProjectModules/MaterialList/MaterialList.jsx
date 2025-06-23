// src/pages/Materialmanagementmodule/MaterialList.jsx

import React from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MaterialList = () => {
  const navigate = useNavigate();

  const bomData = [
    {
      materialName: "test",
      location: "AP-1/0",
      vendor: "test",
      originalScopeQty: 23,
      cummStock: 33,
      issuedQty: 3,
      inOut: "NO",
      balanceStore: 3,
      balanceSupply: 4,
      stage: "EARTHING",
    },
  ];

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">  
        <h5 className="fw-bold">
          <Button variant="light" className="me-2">←</Button>
          Material for 2-Core Cable Schedule Line K...
        </h5>
        <Button variant="primary" onClick={() => navigate("/add-new-bom")}>
          + Add New
        </Button>
      </div>

      <Row className="mb-3">
        {/* <Col md={6}>
          <Form.Group>
            <Form.Label>Filter by Location</Form.Label>
            <Form.Select>
              <option>Select locations</option>
            </Form.Select>
          </Form.Group>
        </Col> */}
        {/* <Col md={6}>
          <Form.Group>
            <Form.Label>Filter by Stage</Form.Label>
            <Form.Select>
              <option>Select stages</option>
            </Form.Select>
          </Form.Group>
        </Col> */}
      </Row>

      <Table bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>Material Name</th>
            <th>Location</th>
            <th>Vendor</th>
            <th>Original Scope Qty</th>
            <th>Cumm. Stock</th>
            <th>Issued Qty</th>
            <th>In/Out</th>
            <th>Balance Store</th>
            <th>Balance Supply</th>
            <th>Stage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bomData.map((item, index) => (
            <tr key={index}>
              <td>{item.materialName}</td>
              <td>{item.location}</td>
              <td>{item.vendor}</td>
              <td>{item.originalScopeQty}</td>
              <td>{item.cummStock}</td>
              <td>{item.issuedQty}</td>
              <td>{item.inOut}</td>
              <td>{item.balanceStore}</td>
              <td>{item.balanceSupply}</td>
              <td>{item.stage}</td>
              <td className="d-flex gap-2 justify-content-center">
                <Button size="sm" variant="primary">View Details</Button>
                <Button size="sm" variant="outline-dark"><FaEdit /></Button>
                <Button size="sm" variant="danger"><FaTrash /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MaterialList;
