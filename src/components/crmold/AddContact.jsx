import React, { useState, useRef } from "react";
import "./Crm.css";

const AddContact = () => {

    const [previewImage, setPreviewImage] = useState(null);
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const maxSize = 4 * 1024 * 1024; // 4MB in bytes
  
      if (file) {
        if (file.size > maxSize) {
          alert('File size should not exceed 4MB');
          return;
        }
  
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleClick = () => {
      fileInputRef.current.click();
    };


  // State for profile image preview
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  // State for star rating
  const [rating, setRating] = useState(3);

  // State for tags
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  // Handle Profile Image Upload
  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Handle Rating Selection
  const handleRating = (index) => {
    setRating(index + 1);
  };

  // Handle Tag Input
  const handleTagInput = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Remove Tag
  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-4">
      <div className="bg-white shadow-sm rounded-3 p-4">

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#basic">
              Basic Information
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#address">
              Address
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#social">
              Social Profiles
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#access">
              Access
            </button>
          </li>
        </ul>

        {/* Form */}
        <>
  {/* Form */}
  <form>
    <div className="tab-content" id="contactTabContent">
      {/* Basic Information Tab */}
      <div
        className="tab-pane fade show active"
        id="basic"
        role="tabpanel"
        aria-labelledby="basic-tab"
      >
        {/* Profile Upload */}
        <div className="upload-profile mb-4" onClick={handleClick}>
        {!previewImage && <i className="bi bi-person" />}
        <input
          type="file"
          ref={fileInputRef}
          hidden
          accept="image/*"
          onChange={handleImageUpload}
        />
        {!previewImage && (
          <div className="upload-text">
            Upload Profile<br />
            Image
            <div className="text-muted">Max 4 MB</div>
          </div>
        )}
        {previewImage && (
          <img
            src={previewImage}
            alt="Profile Preview"
            className="preview-image"
          />
        )}
      </div>
      {/* ///////////// */}
        <div className="row g-4">
          {/* First Name */}
          <div className="col-md-4">
            <label className="form-label required">First Name</label>
            <input type="text" className="form-control" />
          </div>
          {/* Last Name */}
          <div className="col-md-4">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" />
          </div>
          {/* Job Title */}
          <div className="col-md-4">
            <label className="form-label required">Job Title</label>
            <input type="text" className="form-control" />
          </div>
          {/* Company Name */}
          <div className="col-md-4">
            <label className="form-label required">Company Name</label>
            <select className="form-select">
              <option value="">Select</option>
            </select>
          </div>
          {/* Email */}
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          {/* Phone Number */}
          <div className="col-md-4">
            <label className="form-label required">Phone Number</label>
            <input type="tel" className="form-control" />
          </div>
          {/* Phone Number 2 */}
          <div className="col-md-4">
            <label className="form-label required">Phone Number 2</label>
            <input type="tel" className="form-control" />
          </div>
          {/* Fax */}
          <div className="col-md-4">
            <label className="form-label">Fax</label>
            <input type="text" className="form-control" />
          </div>
          {/* Deals */}
          <div className="col-md-4">
            <label className="form-label required">Deals</label>
            <div className="input-group">
              <select className="form-select">
                <option value="">Select</option>
              </select>
              <button className="btn btn-dark" type="button">
                <i className="bi bi-plus" />
              </button>
            </div>
          </div>
          {/* Date of Birth */}
          <div className="col-md-4">
            <label className="form-label required">Date of Birth</label>
            <input type="date" className="form-control" />
          </div>
          {/* Ratings */}
          <div className="col-md-4">
            <label className="form-label required">Ratings</label>
            <div className="rating">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star" />
              <i className="bi bi-star" />
            </div>
          </div>
          {/* Owner */}
          <div className="col-md-4">
            <label className="form-label required">Owner</label>
            <select className="form-select">
              <option value="">Select</option>
            </select>
          </div>
          {/* Industry */}
          <div className="col-md-4">
            <label className="form-label required">Industry</label>
            <select className="form-select">
              <option value="">Select</option>
            </select>
          </div>
          {/* Currency */}
          <div className="col-md-4">
            <label className="form-label required">Currency</label>
            <select className="form-select">
              <option value="">Select</option>
            </select>
          </div>
          {/* Language */}
          <div className="col-md-4">
            <label className="form-label required">Language</label>
            <select className="form-select">
              <option value="">Select</option>
            </select>
          </div>
          {/* Tags */}
          <div className="col-12">
            <label className="form-label required">Tags</label>
            <div className="tags-input">
              <div className="tag">
                Sales <i className="bi bi-x" />
              </div>
              <input type="text" placeholder="Add new" />
            </div>
          </div>
          {/* Source */}
          <div className="col-12">
            <label className="form-label required">Source</label>
            <select className="form-select">
              <option value="">Select</option>
            </select>
          </div>
        </div>
      </div>
      {/* Address Tab */}
      <div
        className="tab-pane fade"
        id="address"
        role="tabpanel"
        aria-labelledby="address-tab"
      >
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
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label required">State</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter state"
            />
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
      </div>
      {/* Social Profiles Tab */}
      <div
        className="tab-pane fade"
        id="social"
        role="tabpanel"
        aria-labelledby="social-tab"
      >
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
      {/* Visibility Tab */}
      <div
        className="tab-pane fade"
        id="access"
        role="tabpanel"
        aria-labelledby="access-tab"
      >
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
            <div className="contact-item d-flex align-items-center justify-content-between">
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
            <div className="contact-item d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="profile-circle me-3">
                  <img
                    src="https://i.ibb.co/DHsHQGLj/Vector-3.png"
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
            <div className="contact-item d-flex align-items-center justify-content-between">
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
    {/* Action Buttons */}
    <div className="d-flex justify-content-end gap-2 mt-4">
      <button type="button" className="btn btn-light">
        Cancel
      </button>
      <button type="submit" className="btn btn-dark">
        Save
      </button>
    </div>
  </form>
</>
      </div>
    </div>
  );
};

export default AddContact;
