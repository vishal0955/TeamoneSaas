import React, { useState, useEffect } from "react";
import { Chips } from "primereact/chips";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./Plans.css";

function Plans({ show, handleClose, plan }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [value, setValue] = useState([]);
  const [customizePlanModalShow, setCustomizePlanModalShow] = useState(false);
  const [addPlanModalShow, setAddPlanModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);

  const [customizeModalShow, setCustomizeModalShow] = useState(false);
  const [customizePlanData, setCustomizePlanData] = useState(null);

  const [newEmployee, setNewEmployee] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "Engineering",
    business: "",
    startDate: "",
    companyname: "",
  });

  const [plans, setPlans] = useState([
    {
      planName: "Free Plan",
      price: "$0",
      trialDays: 0,
      features: ["3 Month", "1 Establishment", "14 trial ", "49$ Price"],
      badgeColor: "success",
    },
    {
      planName: "Platinum",
      price: "$500",
      trialDays: 5,
      features: ["3 Month", "1 Establishment", "14 trial ", "49$ Price"],
      badgeColor: "primary",
    },
    {
      planName: "Gold",
      price: "$400",
      trialDays: 7,
      features: ["3 Month", "1 Establishment", "14 trial ", "49$ Price"],
      badgeColor: "warning",
    },
  ]);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [editedPlan, setEditedPlan] = useState({
    planName: "",
    price: "",
    trialDays: 0,
    features: [],
  });

  // 🔁 update when plan prop changes
  useEffect(() => {
    if (plan) {
      setEditedPlan({ ...plan, features: plan.features || [] });
    }
  }, [plan]);

  const planFeatures = [
    {
      name: "HRM",
      description:
        "Complete Human Resource Management system with employee profiles, attendance, and payroll",
    },
    {
      name: "CRM",
      description:
        "Customer Relationship Management with lead tracking and sales pipeline",
    },
    {
      name: "Recruitment",
      description:
        "End-to-end recruitment solution with job posting and candidate tracking",
    },
    {
      name: "Project Management",
      description:
        "Comprehensive project planning and tracking with team collaboration",
    },
    {
      name: "Accounting",
      description: "Financial management with invoicing and expense tracking",
    },
    {
      name: "Inventory Management",
      description: "Stock management with real-time tracking and alerts",
    },
  ];

  const handleDelete = (indexToDelete) => {
    const updatedPlans = plans.filter((_, idx) => idx !== indexToDelete);
    setPlans(updatedPlans);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log(newEmployee);
    setCustomizePlanModalShow(false);
    setCurrentStep(1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPlan((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedPlans = [...plans];
    const index = plans.findIndex((p) => p.planName === editedPlan.planName);
    if (index !== -1) {
      updatedPlans[index] = editedPlan;
      setPlans(updatedPlans);
    }
    setEditModalShow(false);
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...editedPlan.features];
    updatedFeatures[index] = value;
    setEditedPlan({ ...editedPlan, features: updatedFeatures });
  };

  const addFeatureField = () => {
    setEditedPlan({
      ...editedPlan,
      features: [...(editedPlan.features || []), ""],
    });
  };

  // ✅ Define handleEditClick
  const handleEditClick = (index) => {
    const selected = plans[index];
    setEditedPlan({ ...selected });
    setEditModalShow(true);
  };

  const handleCustomizeClick = (plan) => {
    setCustomizePlanData(plan);
    setCurrentStep(1);
    setCustomizeModalShow(true);
  };

  return (
    <Container style={{ marginTop: "60px" }}>
      <div className="d-flex gap-3">
        <button
          className="btn btn-warning mb-2"
          onClick={() => setCustomizePlanModalShow(true)}
        >
          Add Plan
        </button>
        <Button variant="primary" onClick={() => handleCustomizeClick(plan)} style={{height:"40px"}}>
          Customize Plan
        </Button>
      </div>

      {/* Step 1 Modal */}
      <Modal
        show={customizePlanModalShow && currentStep === 1}
        onHide={() => setCustomizePlanModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Basic Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Plan Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newEmployee.fullName}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        fullName: e.target.value,
                      })
                    }
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={newEmployee.email}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, email: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Trial Day</Form.Label>
                  <Form.Control
                    type="number"
                    value={newEmployee.phone}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, phone: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Col>
              {/* <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Feature</Form.Label>
                  <Form.Control
                    type="text"
                    value={newEmployee.companyname}
                    onChange={(e) => setNewEmployee({ ...newEmployee, companyname: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col> */}
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Feature</Form.Label>
              <Form.Select
                value={newEmployee.department}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, department: e.target.value })
                }
                required
              >
                <option value="">Select</option>
                <option value="1-10">3 Month</option>
                <option value="10-50">6 Month</option>
                <option value="50-150">9 Month</option>
                <option value="100+">12 Month</option>
              </Form.Select>
            </Form.Group>

            <div className="card p-fluid p-2 mb-3">
              <Chips value={value} onChange={(e) => setValue(e.value)} />
            </div>

            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                onClick={() => setCustomizePlanModalShow(false)}
              >
                Cancel
              </Button>
              <Button className="ms-3" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={customizeModalShow && currentStep === 1}
        onHide={() => setCustomizeModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Customize Plan – Step 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control
                type="text"
                value={customizePlanData?.planName || ""}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={customizePlanData?.price || ""}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Trial Days</Form.Label>
              <Form.Control
                type="number"
                value={customizePlanData?.trialDays || 0}
                readOnly
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" onClick={() => setCurrentStep(2)}>
                Next
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Step 2 Modal */}

      <Modal
        show={customizeModalShow && currentStep === 2}
        onHide={() => setCustomizeModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose Features – Step 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              // You can handle final submission here
              setCustomizeModalShow(false);
            }}
          >
            <Row>
              {planFeatures.map((feature, index) => (
                <Col md={6} key={index}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Form.Check
                        type="checkbox"
                        id={`feature-${index}`}
                        label={feature.name}
                        className="mb-2"
                      />
                      <Card.Text>{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={() => setCurrentStep(1)}>
                Back
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Plans Display */}
      <Row>
        {plans.map((plan, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card
              className={`h-100 plan-card ${
                selectedPlan === index ? "selected-plan" : ""
              }`}
              onClick={() => setSelectedPlan(index)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <div className="badge">{plan.planName}</div>
                <h2>
                  {plan.price} <span>/Per Year</span>
                </h2>
                <p>Free Trial Days: {plan.trialDays}</p>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✅ {feature}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-end gap-2">
                  <Button
                    variant="primary"
                    onClick={() => handleEditClick(index)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(index);
                    }}
                  >
                    <MdDeleteOutline />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Edit Modal */}
      <Modal show={editModalShow} onHide={() => setEditModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Plan Name</Form.Label>
              <Form.Control
                type="text"
                name="planName"
                value={editedPlan.planName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={editedPlan.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Trial Days</Form.Label>
              <Form.Control
                type="number"
                name="trialDays"
                value={editedPlan.trialDays}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Label>Features</Form.Label>
            {(editedPlan.features || []).map((f, i) => (
              <Form.Group key={i} className="mb-2">
                <Form.Control
                  type="text"
                  value={f}
                  onChange={(e) => handleFeatureChange(i, e.target.value)}
                />
              </Form.Group>
            ))}

            <Button variant="secondary" onClick={addFeatureField}>
              + Add Feature
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModalShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Plans;
