
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddPricingPlan = () => {
  const [numEstablishments, setNumEstablishments] = useState(1);
  const [pricing, setPricing] = useState({
    planFor1: "",
    priceFor1: "",
    planFor2To6: "",
    priceFor2To6: "",
    planFor7To14: "",
    priceFor7To14: "",
    planFor15Plus: "",
    priceFor15Plus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPricing({ ...pricing, [name]: value });
  };

  return (
    <div className="mt-5">
      <Link to="/plan" style={{ marginRight: "10px", height: "40px" }}>
        <button className="btn btn-warning">Back</button>
      </Link>
      <Container className="mt-5 d-flex justify-content-center">
        <Card className="p-4 w-100" style={{ maxWidth: "1000px" }}>
          <h3 className="mb-3">Add New Pricing Plan</h3>
          <p>Create a new pricing plan with custom features and limits.</p>

          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Plan Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter plan name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Month</Form.Label>
                  <Form.Select>
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>9 Months</option>
                    <option>12 Months</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Number of Establishments</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={numEstablishments}
                    onChange={(e) => setNumEstablishments(parseInt(e.target.value))}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Free Trial Days</Form.Label>
                  <Form.Control type="number" placeholder="0" />
                </Form.Group>
              </Col>
            </Row>

            {/* Number of Establishments Selection */}
        

            {/* Dynamic Pricing Based on Establishments */}
            {numEstablishments === 1 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Plan Package for 1 Establishment</Form.Label>
                  <Form.Control
                    type="text"
                    name="planFor1"
                    value={pricing.planFor1}
                    onChange={handleInputChange}
                    placeholder="Enter plan details"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price for 1 Establishment ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="priceFor1"
                    value={pricing.priceFor1}
                    onChange={handleInputChange}
                    placeholder="Enter price"
                  />
                </Form.Group>
              </>
            )}

            {numEstablishments >= 2 && numEstablishments <= 6 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Plan Package for 2-6 Establishments</Form.Label>
                  <Form.Control
                    type="text"
                    name="planFor2To6"
                    value={pricing.planFor2To6}
                    onChange={handleInputChange}
                    placeholder="Enter plan details"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price for 2-6 Establishments ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="priceFor2To6"
                    value={pricing.priceFor2To6}
                    onChange={handleInputChange}
                    placeholder="Enter price"
                  />
                </Form.Group>
              </>
            )}

            {numEstablishments >= 7 && numEstablishments <= 14 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Plan Package for 7-14 Establishments</Form.Label>
                  <Form.Control
                    type="text"
                    name="planFor7To14"
                    value={pricing.planFor7To14}
                    onChange={handleInputChange}
                    placeholder="Enter plan details"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price for 7-14 Establishments ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="priceFor7To14"
                    value={pricing.priceFor7To14}
                    onChange={handleInputChange}
                    placeholder="Enter price"
                  />
                </Form.Group>
              </>
            )}

            {numEstablishments >= 15 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Plan Package for 15+ Establishments</Form.Label>
                  <Form.Control
                    type="text"
                    name="planFor15Plus"
                    value={pricing.planFor15Plus}
                    onChange={handleInputChange}
                    placeholder="Enter plan details"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price for 15+ Establishments ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="priceFor15Plus"
                    value={pricing.priceFor15Plus}
                    onChange={handleInputChange}
                    placeholder="Enter price"
                  />
                </Form.Group>
              </>
            )}

            <div className="d-flex justify-content-end mt-4">
              <Button variant="light" className="me-2">
                Cancel
              </Button>
              <Button variant="dark">Save Plan</Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default AddPricingPlan;
