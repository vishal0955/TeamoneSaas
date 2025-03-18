import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddLeaveForm = ({ show, handleClose }) => {
  return (
    <>
    <div className="leave-form-policy-">
    <Form>
          {/* Leave Type */}
          <Form.Group className="mb-3">
            <Form.Label>Leave Type</Form.Label>
            <Form.Select>
              <option>Select</option>
              <option>Annual Leave</option>
              <option>Sick Leave</option>
              <option>Unpaid Leave</option>
            </Form.Select>
          </Form.Group>

          {/* Policy Name & No of Days */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <Form.Group>
                <Form.Label>Policy Name</Form.Label>
                <Form.Control type="text" placeholder="Enter policy name" />
              </Form.Group>
            </div>
            <div className="col-md-6 mb-3">
              <Form.Group>
                <Form.Label>No of Days</Form.Label>
                <Form.Control type="number" placeholder="Enter number of days" />
              </Form.Group>
            </div>
          </div>

          {/* Add Employee */}
          <Form.Group className="mb-3">
            <Form.Label>Add Employee</Form.Label>
            <Form.Select>
              <option>Sophie</option>
              <option>John</option>
              <option>Michael</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <div className="policy-form-btn d-flex justify-content-end">
        <Button variant="light" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary ms-3">Add Leaves</Button>
        </div>
    </div>
    </>
  );
};

export default AddLeaveForm;
