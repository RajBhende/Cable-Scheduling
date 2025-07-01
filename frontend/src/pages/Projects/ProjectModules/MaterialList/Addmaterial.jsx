
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi"; 

const Addmaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-4">
      <Card className="p-4 shadow-sm">
        {/* Header */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <Button
            variant=""
            className="d-flex align-items-center"
            onClick={() => navigate(-1)}
          >
            <HiArrowLeft className="" />
          </Button>
          <h4 className="mb-0 fw-semibold text-dark">Add Material</h4>
        </div>

        <Form>
          <Row className="g-4">
            {/* Left Column */}
            <Col md={6}>
              <Form.Group controlId="projectName">
                <Form.Label>Project Name</Form.Label>
                <Form.Control placeholder="Enter Project Name" />
              </Form.Group>

              <Form.Group controlId="materialName" className="mt-3">
                <Form.Label>Material Name</Form.Label>
                <Form.Control placeholder="Enter Material Name" />
              </Form.Group>

              <Form.Group controlId="unit" className="mt-3">
                <Form.Label>Unit</Form.Label>
                <Form.Control placeholder="Enter Unit" />
              </Form.Group>

              <Form.Group controlId="originalScopeQty" className="mt-3">
                <Form.Label>Original Scope Quantity</Form.Label>
                <Form.Control placeholder="Enter Quantity" />
              </Form.Group>

              <Form.Group controlId="plannedSupply" className="mt-3">
                <Form.Label>Planned Supply In</Form.Label>
                <Form.Control placeholder="Enter Planned Supply" />
              </Form.Group>

              <Form.Group controlId="receivedFTM" className="mt-3">
                <Form.Label>Received at Store FTM</Form.Label>
                <Form.Control placeholder="Enter Received Qty" />
              </Form.Group>

              <Form.Group controlId="issuedQty" className="mt-3">
                <Form.Label>Issued Quantity</Form.Label>
                <Form.Control placeholder="Enter Issued Quantity" />
              </Form.Group>

              <Form.Group controlId="balanceStore" className="mt-3">
                <Form.Label>Balance at Store</Form.Label>
                <Form.Control placeholder="Enter Balance" />
              </Form.Group>

              <Form.Group controlId="percentReceipt" className="mt-3">
                <Form.Label>Percent Receipt (%)</Form.Label>
                <Form.Control placeholder="Enter %" />
              </Form.Group>

              <Form.Group controlId="datetime" className="mt-3">
                <Form.Label>Date and Time</Form.Label>
                <Row className="g-2">
                  <Col>
                    <Form.Control type="date" />
                  </Col>
                  <Col>
                    <Form.Select defaultValue="12">
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i}>{String(i + 1).padStart(2, "0")}</option>
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

              <Form.Group controlId="remarks" className="mt-3">
                <Form.Label>Remarks</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Enter remarks" />
              </Form.Group>
            </Col>

            {/* Right Column */}
            <Col md={6}>
              <Form.Group controlId="location">
                <Form.Label>Location / Tower</Form.Label>
                <Form.Select>
                  <option>Select location</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="description" className="mt-3">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter Description" />
              </Form.Group>

              <Form.Group controlId="vendorName" className="mt-3">
                <Form.Label>Vendor Name</Form.Label>
                <Form.Control placeholder="Enter Vendor Name" />
              </Form.Group>

              <Form.Group controlId="scheduledSupply" className="mt-3">
                <Form.Label>Scheduled Supply as per</Form.Label>
                <Form.Control placeholder="Enter Scheduled Supply" />
              </Form.Group>

              <Form.Group controlId="releasedQty" className="mt-3">
                <Form.Label>Released Quantity for Supply</Form.Label>
                <Form.Control placeholder="Enter Released Quantity" />
              </Form.Group>

              <Form.Group controlId="cummulativeStock" className="mt-3">
                <Form.Label>Cumulative Stock</Form.Label>
                <Form.Control placeholder="Enter Cumulative Stock" />
              </Form.Group>

              <Form.Group controlId="inout" className="mt-3">
                <Form.Label>In/Out to Other Stores</Form.Label>
                <div className="d-flex gap-3 mt-2">
                  <Form.Check type="radio" label="Yes" name="inout" id="yes" />
                  <Form.Check type="radio" label="No" name="inout" id="no" />
                </div>
              </Form.Group>

              <Form.Group controlId="balanceSupply" className="mt-3">
                <Form.Label>Balance to Supply</Form.Label>
                <Form.Control placeholder="Enter Balance to Supply" />
              </Form.Group>

              <Form.Group controlId="stage" className="mt-3">
                <Form.Label>Stage</Form.Label>
                <Form.Select>
                  <option>Select stage</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="username" className="mt-3">
                <Form.Label>Username</Form.Label>
                <Form.Control value="Shreyas K" disabled />
              </Form.Group>
            </Col>
          </Row>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Addmaterial;
