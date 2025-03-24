// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";

// const CompanyForm = (handleclose) => {
//   const [formData, setFormData] = useState({
//     // domain: "",
//     companyName: "",
//     owner: "",
//     industry: "",
//     type: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     employees: "",
//     revenue: "",
//     timeZone: "",
//     description: ""
//   });
//   const [domainError, setDomainError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateDomain = () => {
//     const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!domainRegex.test(formData.domain)) {
//       setDomainError("Not a valid domain");
//     } else {
//       setDomainError("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateDomain();
//     if (!domainError) {
//       console.log("Form submitted", formData);
//     }
//     handleclose();
//   };

//   return (
//     <Container className="">
//       {/* <h4 className="text-primary text-center">Edit this Form</h4> */}
//       <Form onSubmit={handleSubmit} className="">

//         <Form.Group className="mb-3">
//           <Form.Label>Company name</Form.Label>
//           <Form.Control type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
//         </Form.Group>

//         <Row>
//           <Col md={6}>

//             <Form.Group className="mb-3">
//               <Form.Label>Company owner</Form.Label>
//               <Form.Select name="owner" value={formData.owner} onChange={handleChange}>
//                 <option>Select owner</option>
//                 <option>Sarah Johnson</option>
               
//               </Form.Select>
             
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group className="mb-3">
//               <Form.Label>Industry</Form.Label>
//               <Form.Select name="industry" value={formData.industry} onChange={handleChange}>
//                 <option>Select industry</option>
//                 <option>Technology</option>
//                 <option>Finance</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group className="mb-3">
//           <Form.Label>Type</Form.Label>
//           <Form.Select name="type" value={formData.type} onChange={handleChange}>
//             <option>Select type</option>
//             <option>Startup</option>
//             <option>Enterprise</option>
//           </Form.Select>
//         </Form.Group>

//         <Row>
//           <Col md={6}><Form.Group className="mb-3"><Form.Label>City</Form.Label><Form.Control type="text" name="city" value={formData.city} onChange={handleChange} /></Form.Group></Col>
//           <Col md={6}><Form.Group className="mb-3"><Form.Label>State/Region</Form.Label><Form.Control type="text" name="state" value={formData.state} onChange={handleChange} /></Form.Group></Col>
//         </Row>

//         <Row>
//           <Col md={6}><Form.Group className="mb-3"><Form.Label>Postal Code</Form.Label><Form.Control type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} /></Form.Group></Col>
//           <Col md={6}><Form.Group className="mb-3"><Form.Label>Number of Employees</Form.Label><Form.Control type="number" name="employees" value={formData.employees} onChange={handleChange} /></Form.Group></Col>
//         </Row>

//         <Row>
//           <Col md={6}><Form.Group className="mb-3"><Form.Label>Annual Revenue</Form.Label><Form.Control type="text" name="revenue" value={formData.revenue} onChange={handleChange} /></Form.Group></Col>
//           <Col md={6}><Form.Group className="mb-3"><Form.Label>Time Zone</Form.Label><Form.Control type="text" name="timeZone" value={formData.timeZone} onChange={handleChange} /></Form.Group></Col>
//         </Row>

//         <Form.Group className="mb-3">
//           <Form.Label>Description</Form.Label>
//           <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} rows={3} />
//         </Form.Group>

//         <div className="d-flex justify-content-end gap-2">
//           <Button className="inv-new-button" style={{height: "fit-content"}}>Create</Button>
//           <Button>Create and add another</Button>
//           <Button className="inv-filter-button" onClick={() => handleclose()} style={{height: "fit-content"}}>Cancel</Button>
//         </div>
//       </Form>
//     </Container>
//   );
// };

// export default CompanyForm;


import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";

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
    description: ""
  });

  const [domainError, setDomainError] = useState("");
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [showIndustryModal, setShowIndustryModal] = useState(false);

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
    handleClose();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Company name</Form.Label>
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
                  <option>Technology</option>
                  <option>Finance</option>
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
          <Button className="inv-new-button" style={{height: "fit-content"}}>Create</Button>
          <Button>Create and add another</Button>
          <Button className="inv-filter-button" onClick={handleClose} style={{height: "fit-content"}}>Cancel</Button>
        </div>
      </Form>

      {/* Owner Modal */}
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
          <Form.Group className="">
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
