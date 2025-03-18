import React, { useState } from "react";

const AddLeave = ({ onClose }) => {
  const [formData, setFormData] = useState({
    employee: "",
    leaveType: "Medical Leave",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave Request Submitted:", formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h5>Add Leave</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Employee Name</label>
            <input type="text" name="employee" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Leave Type</label>
            <select name="leaveType" className="form-control" onChange={handleChange}>
              <option>Medical Leave</option>
              <option>Vacation</option>
              <option>Personal Leave</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">From</label>
            <input type="date" name="from" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">To</label>
            <input type="date" name="to" className="form-control" onChange={handleChange} required />
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLeave;
