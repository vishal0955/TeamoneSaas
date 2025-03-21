import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    contactOwner: 'Vishal Salanki',
    jobTitle: '',
    phoneNumber: '',
    lifecycleStage: 'Lead',
    leadStatus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
  };

  const handleCreateAndAdd = () => {
    console.log('Create and add another:', formData);
    // Handle submission and reset form for another entry
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      contactOwner: 'Vishal Salanki',
      jobTitle: '',
      phoneNumber: '',
      lifecycleStage: 'Lead',
      leadStatus: ''
    });
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          {/* Header */}
          <div className="bg-info text-white p-3 d-flex justify-content-between align-items-center">
            <h5 className="m-0">Create Contact</h5>
            <button className="btn-close btn-close-white" aria-label="Close"></button>
          </div>
          
          {/* Form */}
          <div className="p-3">
            <div className="d-flex justify-content-end mb-3">
              <a href="#" className="text-info text-decoration-none">
                <small>Edit this form</small>
                <i className="ms-1 bi bi-box-arrow-up-right"></i>
              </a>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="contactOwner" className="form-label">Contact owner</label>
                <div className="dropdown">
                  <button className="form-control text-start dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="contactOwnerDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    {formData.contactOwner}
                  </button>
                  <ul className="dropdown-menu w-100" aria-labelledby="contactOwnerDropdown">
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, contactOwner: 'Vishal Salanki'})}>Vishal Salanki</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, contactOwner: 'John Doe'})}>John Doe</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, contactOwner: 'Jane Smith'})}>Jane Smith</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="jobTitle" className="form-label">Job title</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="lifecycleStage" className="form-label">Lifecycle stage</label>
                <div className="dropdown">
                  <button className="form-control text-start dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="lifecycleStageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    {formData.lifecycleStage}
                  </button>
                  <ul className="dropdown-menu w-100" aria-labelledby="lifecycleStageDropdown">
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, lifecycleStage: 'Lead'})}>Lead</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, lifecycleStage: 'Customer'})}>Customer</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, lifecycleStage: 'Opportunity'})}>Opportunity</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="leadStatus" className="form-label">Lead status</label>
                <div className="dropdown">
                  <button className="form-control text-start dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="leadStatusDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    {formData.leadStatus || 'Select lead status'}
                  </button>
                  <ul className="dropdown-menu w-100" aria-labelledby="leadStatusDropdown">
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, leadStatus: 'New'})}>New</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, leadStatus: 'Open'})}>Open</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, leadStatus: 'In Progress'})}>In Progress</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, leadStatus: 'Closed'})}>Closed</a></li>
                  </ul>
                </div>
              </div>
              
              <hr className="my-4" />
              
              <div className="d-flex flex-wrap gap-2">
                <button type="submit" className="btn btn-danger">Create</button>
                <button type="button" className="btn btn-outline-secondary" onClick={handleCreateAndAdd}>Create and add another</button>
                <button type="button" className="btn btn-outline-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;