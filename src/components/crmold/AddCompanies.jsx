import React, { useState, useRef, useEffect } from 'react';
import './Crm.css';

const AddCompanies = ({ onClose }) => {
  const [imagePreview, setImagePreview] = useState('');
  const [hasImage, setHasImage] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    location: '',
    rating: '',
    teamMembers: []
  });
  const fileInputRef = useRef(null);
  const uploadAreaRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setHasImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setImagePreview('');
    setHasImage(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (uploadAreaRef.current) {
      uploadAreaRef.current.style.borderColor = '#000';
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (uploadAreaRef.current) {
      uploadAreaRef.current.style.borderColor = '#dee2e6';
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (uploadAreaRef.current) {
      uploadAreaRef.current.style.borderColor = '#dee2e6';
    }

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setHasImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container py-4">
      <div className="form-container bg-white shadow-sm rounded-3 p-4">
        {/* Header */}

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="basic-tab" data-bs-toggle="tab" data-bs-target="#basic" type="button">
              Basic Information
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button">
              Address
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="social-tab" data-bs-toggle="tab" data-bs-target="#social" type="button">
              Social Profiles
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="access-tab" data-bs-toggle="tab" data-bs-target="#access" type="button">
              Access
            </button>
          </li>
        </ul>

        {/* Form Content */}
        <div className="tab-content">
          {/* Basic Information Tab */}
          <div className="tab-pane fade show active" id="basic" role="tabpanel">
            <div 
              ref={uploadAreaRef}
              className={`upload-image ${hasImage ? 'has-image' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <i className="bi bi-camera" />
              {imagePreview && <img src={imagePreview} alt="Preview" className="preview-image" />}
              <input
                type="file"
                ref={fileInputRef}
                className="file-input"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <div className="d-flex gap-2 justify-content-center mb-4">
              <button
                className="btn btn-dark btn-sm"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload
              </button>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={resetImage}
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Rating</label>
                  <select
                    className="form-select"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>
              </div>

              {/* Footer */}
              <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                <div>
                 
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary" onClick={onClose}>Cancel</button>
                  <button className="btn btn-dark" type="submit">Save</button>
                </div>
              </div>
            </form>
          </div>

          {/* Address Tab */}
          <div className="tab-pane fade" id="address" role="tabpanel">
          <div className="row g-4">
      <div className="col-md-12">
        <label className="form-label required">Street Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter street address"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label required">City</label>
        <input type="text" className="form-control" placeholder="Enter city" />
      </div>
      <div className="col-md-6">
        <label className="form-label required">State</label>
        <input type="text" className="form-control" placeholder="Enter state" />
      </div>
      <div className="col-md-6">
        <label className="form-label required">Country</label>
        <select className="form-select">
          <option value="">Select country</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label required">Zip Code</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter zip code"
        />
      </div>
    </div>
    <div className="d-flex gap-2 mt-3 d-flex justify-content-end">
      <button className="btn btn-outline-secondary">Cancel</button>
      <button className="btn btn-dark">Save</button>
    </div>
          </div>

          {/* Social Profiles Tab */}
          <div className="tab-pane fade" id="social" role="tabpanel">
          <div className="row g-4">
      <div className="col-md-6">
        <label className="form-label">Facebook</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-facebook" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Facebook profile URL"
          />
        </div>
      </div>
      <div className="col-md-6">
        <label className="form-label">Twitter</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-twitter" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Twitter profile URL"
          />
        </div>
      </div>
      <div className="col-md-6">
        <label className="form-label">LinkedIn</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-linkedin" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="LinkedIn profile URL"
          />
        </div>
      </div>
      <div className="col-md-6">
        <label className="form-label">Instagram</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-instagram" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Instagram profile URL"
          />
        </div>
      </div>
    </div>
          </div>

          {/* Access Tab */}
          <div className="tab-pane fade" id="access" role="tabpanel">
          <div className="mb-4">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="visibility"
          id="public"
          defaultValue="public"
        />
        <label className="form-check-label" htmlFor="public">
          Public
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="visibility"
          id="private"
          defaultValue="private"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="private">
          Private
        </label>
      </div>
    </div>
    <div className="mb-3">
      <label className="form-label">Select People</label>
      <div className="contact-list">
        <div className="contact-item d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <div className="profile-circle me-3">
              <img
                src="https://i.ibb.co/GSmprKx/Ellipse-5-6.png"
                alt="Michael Walker"
              />
            </div>
            <span>Michael Walker</span>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked=""
            />
          </div>
        </div>
        <div className="contact-item d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <div className="profile-circle me-3">
              <img
                src="https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png"
                alt="Sophie Headrick"
              />
            </div>
            <span>Sophie Headrick</span>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked=""
            />
          </div>
        </div>
        <div className="contact-item d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <div className="profile-circle me-3">
              <img
                src="https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png"
                alt="Cameron Drake"
              />
            </div>
            <span>Cameron Drake</span>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
          </div>
        </div>
      </div>
    </div>
    <button className="btn btn-dark w-auto">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCompanies;
