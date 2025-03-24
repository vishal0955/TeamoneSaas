

import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";

// List of time zones
const timeZones = [
  { value: "UTC-12:00", label: "(UTC-12:00) Baker Island Time" },
  { value: "UTC-11:00", label: "(UTC-11:00) Samoa Standard Time" },
  { value: "UTC-10:00", label: "(UTC-10:00) Hawaii-Aleutian Standard Time" },
  { value: "UTC-09:00", label: "(UTC-09:00) Alaska Standard Time" },
  { value: "UTC-08:00", label: "(UTC-08:00) Pacific Standard Time (PST)" },
  { value: "UTC-07:00", label: "(UTC-07:00) Mountain Standard Time (MST)" },
  { value: "UTC-06:00", label: "(UTC-06:00) Central Standard Time (CST)" },
  { value: "UTC-05:00", label: "(UTC-05:00) Eastern Standard Time (EST)" },
  { value: "UTC+00:00", label: "(UTC+00:00) Greenwich Mean Time (GMT)" },
  { value: "UTC+01:00", label: "(UTC+01:00) Central European Time (CET)" },
  { value: "UTC+02:00", label: "(UTC+02:00) Eastern European Time (EET)" },
  { value: "UTC+05:30", label: "(UTC+05:30) Indian Standard Time (IST)" },
  { value: "UTC+08:00", label: "(UTC+08:00) China Standard Time (CST)" },
  { value: "UTC+09:00", label: "(UTC+09:00) Japan Standard Time (JST)" },
  { value: "UTC+10:00", label: "(UTC+10:00) Australian Eastern Standard Time (AEST)" },
  { value: "UTC+12:00", label: "(UTC+12:00) New Zealand Standard Time (NZST)" }
];

const industries = [
  "Technology",
  "Finance",
  "Manufacturing",
  "Healthcare",
  "Retail",
  "Education",
  "Real Estate",
  "Logistics",
  "Telecommunications",
  "Construction",
  "Hospitality",
  "Energy",
  "Automotive",
  "Aerospace",
  "Agriculture",
  "Pharmaceuticals",
  "Media & Entertainment",
  "Legal Services",
  "Food & Beverage",
  "Consumer Goods"
];

const companyTypes = [
  "Startup",
  "Small Business",
  "Medium Business",
  "Large Corporation",
  "Enterprise",
  "Non-Profit",
  "Government Agency",
  "Public Company",
  "Private Company",
  "Sole Proprietorship",
  "Partnership",
  "Cooperative",
  "Limited Liability Company (LLC)",
  "Joint Venture",
  "Holding Company"
];


const CompanyForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    owner: "",
    industry: "",
    type: "",
    city: "",
    state: "",
    postalCode: "",
    employees: "",
    revenue: "",
    timeZone: "",
    workingHours: "",
    description: ""
  });

  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [showIndustryModal, setShowIndustryModal] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    handleClose();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {/* Company Name */}
        <Form.Group className="mb-3">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Company owner</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Select name="owner" value={formData.owner} onChange={handleChange}>
                  <option>Select owner</option>
                  <option>Sarah Johnson</option>
                </Form.Select>
                <Button variant="link" onClick={() => setShowOwnerModal(true)}>+</Button>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Industry</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Select name="industry" value={formData.industry} onChange={handleChange}>
                  <option>Select industry</option>
                  {industries.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
                </Form.Select>
                <Button variant="link" onClick={() => setShowIndustryModal(true)}>+</Button>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleChange}>
            <option>Select type</option>
            {timeZones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
          </Form.Select>
        </Form.Group>

        <Row>
          <Col md={6}><Form.Group className="mb-3"><Form.Label>City</Form.Label><Form.Control type="text" name="city" value={formData.city} onChange={handleChange} /></Form.Group></Col>
          <Col md={6}><Form.Group className="mb-3"><Form.Label>State/Region</Form.Label><Form.Control type="text" name="state" value={formData.state} onChange={handleChange} /></Form.Group></Col>
        </Row>

        <Row>
          <Col md={6}><Form.Group className="mb-3"><Form.Label>Postal Code</Form.Label><Form.Control type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} /></Form.Group></Col>
          <Col md={6}><Form.Group className="mb-3"><Form.Label>Number of Employees</Form.Label><Form.Control type="number" name="employees" value={formData.employees} onChange={handleChange} /></Form.Group></Col>
        </Row>

        {/* Time Zone Selection */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Time Zone</Form.Label>
              <Form.Select name="timeZone" value={formData.timeZone} onChange={handleChange}>
                <option value="">Select time zone</option>
                {timeZones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          
          {/* Working Hours */}
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Working Hours</Form.Label>
              <Form.Control
                type="text"
                name="workingHours"
                value={formData.workingHours}
                onChange={handleChange}
                placeholder="e.g., 9 AM - 5 PM"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} rows={3} />
        </Form.Group>

        {/* Submit Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <Button type="submit" className="inv-new-button">Create</Button>
          <Button>Create and add another</Button>
          <Button className="inv-filter-button" onClick={handleClose}>Cancel</Button>
        </div>
      </Form>

      <Modal show={showOwnerModal} onHide={() => setShowOwnerModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control type="text" placeholder="Enter owner name" />
          </Form.Group>
          <Button onClick={() => setShowOwnerModal(false)}>Add</Button>
        </Modal.Body>
      </Modal>

      {/* Industry Modal */}
      <Modal show={showIndustryModal} onHide={() => setShowIndustryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Industry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Industry Name</Form.Label>
            <Form.Control type="text" placeholder="Enter industry name" />
          </Form.Group>
          <Button onClick={() => setShowIndustryModal(false)}>Add</Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CompanyForm;

