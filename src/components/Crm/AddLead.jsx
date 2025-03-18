import React from 'react'

const AddLead = () => {
  return (
    <>
    <div className="container">
  <div className="form-container">

    <form>
      {/* Lead Name & Type */}
      <div className="mb-3">
        <label className="form-label required">Lead Name</label>
        <input type="text" className="form-control" />
        <div className="radio-group mt-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="leadType"
              id="personType"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="personType">
              Person
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="leadType"
              id="organizationType"
            />
            <label className="form-check-label" htmlFor="organizationType">
              Organization
            </label>
          </div>
        </div>
      </div>
      {/* Company */}
      <div className="mb-3">
        <label className="form-label required">Company</label>
        <select className="form-select">
          <option value="">Select company</option>
        </select>
        <a href="#" className="add-new-btn">
          <i className="bi bi-plus-circle" />
          Add New
        </a>
      </div>
      {/* Value & Currency */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label required">Value</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label required">Currency</label>
          <select className="form-select">
            <option value="">Select currency</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>
        </div>
      </div>
      {/* Phone & Type */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label required">Phone Number</label>
          <input type="tel" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Type</label>
          <select className="form-select">
            <option value="work">Work</option>
            <option value="mobile">Mobile</option>
            <option value="home">Home</option>
          </select>
        </div>
      </div>
      {/* Email & Type */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Type</label>
          <select className="form-select">
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </div>
      {/* Source & Industry */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label required">Source</label>
          <select className="form-select">
            <option value="">Select source</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label required">Industry</label>
          <select className="form-select">
            <option value="">Select industry</option>
          </select>
        </div>
      </div>
      {/* Owner & Tags */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label required">Owner</label>
          <select className="form-select">
            <option value="">Select owner</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Tags</label>
          <div className="input-group">
            <input type="text" className="form-control" />
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-plus" />
            </button>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Description</label>
        <div className="rich-text-toolbar">
          <button type="button">
            <i className="bi bi-type-bold" />
          </button>
          <button type="button">
            <i className="bi bi-type-italic" />
          </button>
          <button type="button">
            <i className="bi bi-type-underline" />
          </button>
          <button type="button">
            <i className="bi bi-list-ul" />
          </button>
          <button type="button">
            <i className="bi bi-link-45deg" />
          </button>
        </div>
        <textarea
          className="form-control description-field"
          rows={4}
          placeholder="Enter description..."
          defaultValue={""}
        />
      </div>
      {/* Visibility */}
      <div className="mb-3">
        <label className="form-label">Visibility</label>
        <div className="visibility-options">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="visibility"
              id="publicVisibility"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="publicVisibility">
              Public
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="visibility"
              id="privateVisibility"
            />
            <label className="form-check-label" htmlFor="privateVisibility">
              Private
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="visibility"
              id="selectPeopleVisibility"
            />
            <label
              className="form-check-label"
              htmlFor="selectPeopleVisibility"
            >
              Select People
            </label>
          </div>
        </div>
      </div>
      {/* Status */}
      <div className="mb-3">
        <label className="form-label">Status</label>
        <select className="form-select">
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="lost">Lost</option>
        </select>
      </div>
      {/* Form Footer */}
      <div className="form-footer">
        <button type="button" className="btn btn-outline-secondary">
          Cancel
        </button>
        <button type="submit" className="btn btn-dark">
          Add Lead
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default AddLead