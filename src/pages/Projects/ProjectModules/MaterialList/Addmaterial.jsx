// src/pages/Materialmanagementmodule/Addmaterial.jsx

import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Addmaterial.css";

const Addmaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-4 p-4 border rounded bg-white shadow-sm">
      <h4 className="fw-bold mb-4 text-primary">Add New Material</h4>

      <Form>
        <Row className="mb-3">
          {/* Left Column */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="projectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control type="text" placeholder="220kV Single Circuit EHV Line KA Aland" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="materialName">
              <Form.Label>Material Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Material Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="unit">
              <Form.Label>Unit</Form.Label>
              <Form.Control type="text" placeholder="Enter Unit" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="originalScopeQty">
              <Form.Label>Original Scope Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter Original Scope Quantity" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="plannedSupply">
              <Form.Label>Planned Supply in</Form.Label>
              <Form.Control type="text" placeholder="Enter Planned Supply in" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="receivedFTM">
              <Form.Label>Received at Store FTM</Form.Label>
              <Form.Control type="text" placeholder="Enter Received at Store FTM" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="issuedQty">
              <Form.Label>Issued Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter Issued Quantity" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="balanceStore">
              <Form.Label>Balance at Store</Form.Label>
              <Form.Control type="text" placeholder="Enter Balance at Store" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="percentReceipt">
              <Form.Label>Percent Receipt (%)</Form.Label>
              <Form.Control type="text" placeholder="Enter Percent Receipt" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Date and Time</Form.Label>
              <Row className="g-2">
                <Col>
                  <Form.Control type="date" />
                </Col>
                <Col>
                  <Form.Select defaultValue="12">
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select defaultValue="00">
                    {["00", "15", "30", "45"].map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select defaultValue="AM">
                    <option>AM</option>
                    <option>PM</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="remarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Enter any remarks" />
            </Form.Group>
          </Col>

          {/* Right Column */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location/Tower</Form.Label>
              <Form.Select>
                <option>Select location</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="vendorName">
              <Form.Label>Vendor Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Vendor Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="scheduledSupply">
              <Form.Label>Scheduled Supply as per</Form.Label>
              <Form.Control type="text" placeholder="Enter Scheduled Supply" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="releasedQty">
              <Form.Label>Released Quantity for Supply</Form.Label>
              <Form.Control type="text" placeholder="Enter Released Quantity" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cummulativeStock">
              <Form.Label>Cummulative Stock</Form.Label>
              <Form.Control type="text" placeholder="Enter Cummulative Stock" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inout">
              <Form.Label>In/Out to Other Stores</Form.Label>
              <div>
                <Form.Check inline type="radio" label="YES" name="inout" id="inout-yes" />
                <Form.Check inline type="radio" label="NO" name="inout" id="inout-no" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="balanceSupply">
              <Form.Label>Balance to Supply</Form.Label>
              <Form.Control type="text" placeholder="Enter Balance to Supply" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="stage">
              <Form.Label>Stage</Form.Label>
              <Form.Select>
                <option>Select stage</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value="Shreyas K" disabled />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default Addmaterial;
