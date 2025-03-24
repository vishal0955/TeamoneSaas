import React, { useState } from 'react';
import InsideFormModal from '../modals/InsideFormModal';


const ContactForm = ({ handleclose }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    contactOwner: '',
    jobTitle: '',
    phoneNumber: '',
    lifecycleStage: 'Lead',
    leadStatus: '',
    source: ''
  });


  
  // Modal states
  const [sourceModalOpen, setSourceModalOpen] = useState(false);
  const [lifecycleModalOpen, setLifecycleModalOpen] = useState(false);
  const [leadStatusModalOpen, setLeadStatusModalOpen] = useState(false);

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
    handleclose();
  };

  const handleCreateAndAdd = () => {
    console.log('Create and add another:', formData);
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      contactOwner: '',
      phoneNumber: '',
      lifecycleStage: 'Lead',
      leadStatus: '',
      source: ''
    });
  };

  // Source Modal Configuration
  const handleSourceSubmit = (data) => {
    console.log('New source:', data);
    // Add the new source to your sources list
    setFormData(prev => ({
      ...prev,
      source: data.sourceName // Update the source in the main form
    }));
    setSourceModalOpen(false);
  };

  const sourceFormFields = [
    {
      label: 'Source Name',
      name: 'sourceName',
      type: 'text',
      required: true,
      placeholder: 'Enter source name'
    }
  ];

  // Lifecycle Stage Modal Configuration
  const handleLifecycleSubmit = (data) => {
    console.log('New lifecycle stage:', data);
    setFormData(prev => ({
      ...prev,
      lifecycleStage: data.stageName
    }));
    setLifecycleModalOpen(false);
  };

  const lifecycleFormFields = [
    {
      label: 'Stage Name',
      name: 'stageName',
      type: 'text',
      required: true,
      placeholder: 'Enter stage name'
    },
   
  ];

  // Lead Status Modal Configuration
  const leadStatusFormFields = [
    {
      label: 'Status Name',
      name: 'statusName',
      type: 'text',
      required: true,
      placeholder: 'Enter status name',
      value: "",
      onChange: (e) => console.log(e.target.value)
    },
   
  ];

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
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
                    {formData.contactOwner || 'Select contact owner'} 
                  </button>
                  <ul className="dropdown-menu w-100" aria-labelledby="contactOwnerDropdown">
                    {/* <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, contactOwner: 'Vishal Salanki'})}>Vishal Salanki</a></li> */}
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, contactOwner: 'John Doe'})}>John Doe</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, contactOwner: 'Jane Smith'})}>Jane Smith</a></li>
                  </ul>
                </div>
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
            
            {/* ... other form fields ... */}
            
            <div className="mb-3">
              <label htmlFor="source" className="form-label">Source</label>
              <div className='d-flex align-items-center justify-content-between'>
                <div className="dropdown flex-grow-1">
                  <button className="form-control text-start dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="sourceDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    {formData.source || 'Select source'}
                  </button>
                  <ul className="dropdown-menu w-100" aria-labelledby="sourceDropdown">
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, source: 'LinkedIn'})}>LinkedIn</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, source: 'Email'})}>Email</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, source: 'Facebook'})}>Facebook</a></li>
                  </ul>
                </div>
                <button 
                  className="btn btn-outline-dark" 
                  type="button" 
                  onClick={() => setSourceModalOpen(true)}
                >
                  <i className="bi bi-plus-lg" />
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="lifecycleStage" className="form-label">Lifecycle stage</label>
              <div className='d-flex align-items-center justify-content-between'>
                <div className="dropdown flex-grow-1">
                  <button className="form-control text-start dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="lifecycleStageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    {formData.lifecycleStage}
                  </button>
                  <ul className="dropdown-menu w-100" aria-labelledby="lifecycleStageDropdown">
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, lifecycleStage: 'Lead'})}>Lead</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, lifecycleStage: 'Customer'})}>Customer</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => setFormData({...formData, lifecycleStage: 'Opportunity'})}>Opportunity</a></li>
                  </ul>
                </div>
                <button 
                  className="btn btn-outline-dark" 
                  type="button" 
                  onClick={() => setLifecycleModalOpen(true)}
                >
                  <i className="bi bi-plus-lg" />
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="leadStatus" className="form-label">Lead status</label>
              <div className='d-flex align-items-center justify-content-between'>
                <div className="dropdown flex-grow-1">
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
                <button 
                  className="btn btn-outline-dark" 
                  type="button" 
                  onClick={() => setLeadStatusModalOpen(true)}
                >
                  <i className="bi bi-plus-lg" />
                </button>
              </div>
            </div>

            <hr className="my-4" />
            
            <div className="d-flex flex-wrap gap-2">
              <button type="submit" className="btn btn-danger">Create</button>
              <button type="button" className="btn btn-outline-secondary" onClick={handleCreateAndAdd}>Create and add another</button>
              <button type="button" className="btn btn-outline-secondary" onClick={handleclose}>Cancel</button>
            </div>
          </form>

          {/* Source Modal */}
          <InsideFormModal
            title="Add Source"
            isOpen={sourceModalOpen}
            onClose={() => setSourceModalOpen(false)}
            onSubmit={handleSourceSubmit}
            formFields={sourceFormFields}
            submitButtonText="Add Source"
          />

          {/* Lifecycle Stage Modal */}
          <InsideFormModal
            title="Add Lifecycle Stage"
            isOpen={lifecycleModalOpen}
            onClose={() => setLifecycleModalOpen(false)}
            onSubmit={handleLifecycleSubmit}
            formFields={lifecycleFormFields}
            submitButtonText="Add Stage"
          />

          {/* Lead Status Modal */}
          <InsideFormModal
            title="Add Lead Status"
            isOpen={leadStatusModalOpen}
            onClose={() => setLeadStatusModalOpen(false)}
            onSubmit={(e) => {
              e.preventDefault();
              // Handle lead status form submission
              setLeadStatusModalOpen(false);
            }}
            formFields={leadStatusFormFields}
            submitButtonText="Add Status"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
