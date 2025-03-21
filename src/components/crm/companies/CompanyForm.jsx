import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const CompanyForm = (handleclose) => {
  const [formData, setFormData] = useState({
    // domain: "",
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
    description: ""
  });
  const [domainError, setDomainError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateDomain = () => {
    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(formData.domain)) {
      setDomainError("Not a valid domain");
    } else {
      setDomainError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateDomain();
    if (!domainError) {
      console.log("Form submitted", formData);
    }
    handleclose();
  };

  return (
    <Container className="">
      {/* <h4 className="text-primary text-center">Edit this Form</h4> */}
      <Form onSubmit={handleSubmit} className="">
        {/* <Form.Group className="mb-3">
          <Form.Label>Company domain name</Form.Label>
          <Form.Control
            type="text"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            onBlur={validateDomain}
            isInvalid={!!domainError}
          />
          <Form.Control.Feedback type="invalid">{domainError}</Form.Control.Feedback>
        </Form.Group> */}

        <Form.Group className="mb-3">
          <Form.Label>Company name</Form.Label>
          <Form.Control type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Company owner</Form.Label>
              <Form.Select name="owner" value={formData.owner} onChange={handleChange}>
                <option>Select owner</option>
                <option>Vishal Solanki</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Industry</Form.Label>
              <Form.Select name="industry" value={formData.industry} onChange={handleChange}>
                <option>Select industry</option>
                <option>Technology</option>
                <option>Finance</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleChange}>
            <option>Select type</option>
            <option>Startup</option>
            <option>Enterprise</option>
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

        <Row>
          <Col md={6}><Form.Group className="mb-3"><Form.Label>Annual Revenue</Form.Label><Form.Control type="text" name="revenue" value={formData.revenue} onChange={handleChange} /></Form.Group></Col>
          <Col md={6}><Form.Group className="mb-3"><Form.Label>Time Zone</Form.Label><Form.Control type="text" name="timeZone" value={formData.timeZone} onChange={handleChange} /></Form.Group></Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} rows={3} />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="dark" >Create</Button>
          <Button variant="dark">Create and add another</Button>
          <Button variant="danger" onClick={() => handleclose()}>Cancel</Button>
        </div>
      </Form>
    </Container>
  );
};

export default CompanyForm;
