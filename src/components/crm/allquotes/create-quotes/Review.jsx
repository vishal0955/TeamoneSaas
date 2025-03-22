import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Review = () => {
  return (
    <>
        <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4} sm={12} className="text-center">
          <h3>Send Quote</h3>
          <p>How would you like to send this quote to your client?</p>

          {/* Button options for sending quote */}
          <div className="d-grid gap-2">
            <Button variant="dark" size="lg" className=" inv-new-button d-flex justify-content-center align-items-center">
              <i className="bi bi-send-fill me-2" />
              Auto Send Quote
            </Button>
            <Button variant="outline-dark" size="lg" className=" btn btn-outline-primary d-flex justify-content-center align-items-center">
              <i className="bi bi-envelope me-2" />
              Custom Email
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Review




