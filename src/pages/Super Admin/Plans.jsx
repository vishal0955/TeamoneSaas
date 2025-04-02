import React, {useState} from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./Plans.css"

function Plans() {
  const [currentStep, setCurrentStep] = useState(1);
  const [customizePlanModalShow, setCustomizePlanModalShow] = useState(false);
  const [addPlanModalShow, setAddPlanModalShow] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0); // Default to Free plan (index 0)
  const [newEmployee, setNewEmployee] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: 'Engineering',
    business: '',
    startDate: '',
    companyname:''
  });

  const plans = [
    {
      planName: 'Free Plan',
      price: '$0',
      trialDays: 0,
      features: [
        'John',
        '3 Month',
        '1 Establishment',
        '14 trial ',
        '1 establishment',
        '49$ Price',
      ],
      badgeColor: 'success',
    },
    {
      planName: 'Platinum',
      price: '$500',
      trialDays: 5,
      features: [
        'John',
        '3 Month',
        '1 Establishment',
        '14 trial ',
        '1 establishment',
        '49$ Price',
      ],
      badgeColor: 'primary',
    },
    {
      planName: 'Gold',
      price: '$400',
      trialDays: 7,
      features: [
        'John',
        '3 Month',
        '1 Establishment',
        '14 trial ',
        '1 establishment',
        '49$ Price',
      ],
      badgeColor: 'warning',
    },
  ];

  const planFeatures = [
    {
      name: "HRM",
      description: "Complete Human Resource Management system with employee profiles, attendance, and payroll"
    },
    {
      name: "CRM",
      description: "Customer Relationship Management with lead tracking and sales pipeline"
    },
    {
      name: "Recruitment",
      description: "End-to-end recruitment solution with job posting and candidate tracking"
    },
    {
      name: "Project Management",
      description: "Comprehensive project planning and tracking with team collaboration"
    },
    {
      name: "Accounting",
      description: "Financial management with invoicing and expense tracking"
    },
    {
      name: "Inventory Management",
      description: "Stock management with real-time tracking and alerts"
    }
  ];

  const handleClose = () => {
    setCustomizePlanModalShow(false);
    setCurrentStep(1);
  };

  const handleShow = () => setCustomizePlanModalShow(true);
  const handleAddPlanClose = () => setAddPlanModalShow(false);
  const handleAddPlanShow = () => setAddPlanModalShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log(newEmployee);
    handleClose();
    setCurrentStep(1);
  };

  return (
    <Container className="" style={{ marginTop: '60px' }}>
      <div className='d-flex gap-3'>
        <button className='btn btn-warning mb-2' onClick={handleAddPlanShow}>Add Plan</button>
        <button className='btn btn-danger mb-2' onClick={handleShow}>Customize Plan</button>
      </div>

      {/* Step 1: Basic Information */}
      <Modal show={customizePlanModalShow && currentStep === 1} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Basic Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <Form onSubmit={handleSubmit} className="custom-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={newEmployee.fullName}
                    onChange={(e) => setNewEmployee({...newEmployee, fullName: e.target.value})}
                    className="form-control-custom"
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                    className="form-control-custom"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Phone</Form.Label>
                  <Form.Control 
                    type="tel" 
                    value={newEmployee.phone}
                    onChange={(e) => setNewEmployee({...newEmployee, phone: e.target.value})}
                    className="form-control-custom"
                    placeholder="Enter your phone number"
                    required
                  />
                </Form.Group>
              </Col>
           
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Company name</Form.Label>
                  <Form.Control 
                    type="tel" 
                    value={newEmployee.companyname}
                    onChange={(e) => setNewEmployee({...newEmployee, companyname: e.target.value})}
                    className="form-control-custom"
                    placeholder="Enter your Company name"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="form-label-custom">Company Size</Form.Label>
                  <Form.Select 
                    value={newEmployee.department}
                    onChange={(e) => setNewEmployee({...newEmployee, department: e.target.value})}
                    className="form-select-custom"
                    required
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="10-50">10-50 employees</option>
                    <option value="50-150">50-150 employees</option>
                    <option value="100+">100+ employees</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-end mt-4">
              <Button variant="outline-secondary" className="me-3 btn-custom-secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit" className="btn-custom-primary">
                Next
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      
      {/* Step 2: Features */}
      <Modal show={customizePlanModalShow && currentStep === 2} onHide={handleClose} className="custom-modal feature-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Customize Your Plan Features</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <Form onSubmit={handleFinalSubmit} className="feature-form">
            <Form.Group className="mb-4">
              <Form.Label className="form-label-custom feature-label">Select the features you need</Form.Label>
              <Row className="g-4">
                {planFeatures.map((feature, index) => (
                  <Col md={6} key={index}>
                    <Card className="h-100 feature-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <Form.Check
                            type="checkbox"
                            id={`feature-${index}`}
                            className="feature-checkbox me-3"
                          />
                          <h5 className="mb-0">{feature.name}</h5>
                        </div>
                        <Card.Text className="text-muted">
                          {feature.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Form.Group>
            {/* <div className="d-flex gap-3 justify-content-end mt-4">
              <Button variant="secondary" onClick={() => setCurrentStep(1)}>
                Back
              </Button>
              <Button variant="primary" onClick={() => setCurrentStep(3)}>
                Next
              </Button>
            </div> */}
             <div className="d-flex gap-3 justify-content-end mt-4">
            <Button variant="secondary" onClick={() => setCurrentStep(1)}>
              Back
            </Button>
            <Button variant="primary" onClick={handleFinalSubmit}>
              Submit
            </Button>
          </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Step 3: Plans List */}
      {/* <Modal show={customizePlanModalShow && currentStep === 3} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Select Your Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <Row>
            {plans.map((plan, index) => (
              <Col key={index} md={4}>
                <Card className={`plan-card ${selectedPlan === index ? 'selected' : ''}`} onClick={() => setSelectedPlan(index)}>
                  <Card.Body>
                    <Badge bg={plan.badgeColor} className="mb-2">{plan.planName}</Badge>
                    <Card.Title className="price">{plan.price}<span>/month</span></Card.Title>
                    <Card.Text>Trial Days: {plan.trialDays}</Card.Text>
                    <ListGroup variant="flush" className="features-list">
                      {plan.features.map((feature, idx) => (
                        <ListGroup.Item key={idx}>{feature}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="d-flex gap-3 justify-content-end mt-4">
            <Button variant="secondary" onClick={() => setCurrentStep(2)}>
              Back
            </Button>
            <Button variant="primary" onClick={handleFinalSubmit}>
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal> */}

      {/* Plans Display */}
      <Row>
        {plans.map((plan, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card 
              className={`h-100 plan-card ${selectedPlan === index ? 'selected-plan' : ''}`}
              onClick={() => setSelectedPlan(index)}
              style={{ cursor: 'pointer' }}
            >
              <Card.Body>
                <div className="badge">{plan.planName}</div>
                <h2>{plan.price} <span>/Per Year</span></h2>
                <p>Free Trial Days: {plan.trialDays}</p>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✅ {feature}</li>
                  ))}
                </ul>
                <div className='d-flex justify-content-end gap-2'>
                  <Button variant="primary">
                    <FaEdit />
                  </Button>
                  <Button variant="danger">
                    <MdDeleteOutline />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Plans;
