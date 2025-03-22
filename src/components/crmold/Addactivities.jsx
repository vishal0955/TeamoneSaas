import React from 'react'

const Addactivities = () => {
  return (
    <>
    <div className="container py-4">
  <div className="form-container">
    
    <form className="form-body">
      <div className="row g-4">
        <div className="col-md-8">
          <label className="form-label required">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter activity name"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label required">Activity Type</label>
          <select className="form-select">
            <option selected="" disabled="">
              Select type
            </option>
            <option>Meeting</option>
            <option>Call</option>
            <option>Email</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label required">Due Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label required">Time</label>
          <input type="time" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label required">Owner</label>
          <select className="form-select">
            <option selected="" disabled="">
              Select owner
            </option>
            <option>John Doe</option>
            <option>Alice Smith</option>
            <option>Robert Johnson</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Reminder</label>
          <select className="form-select">
            <option selected="">No reminder</option>
            <option>15 minutes before</option>
            <option>30 minutes before</option>
            <option>1 hour before</option>
            <option>1 day before</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Before use</label>
          <select className="form-select">
            <option selected="" disabled="">
              Select location
            </option>
            <option>Meeting Room 1</option>
            <option>Meeting Room 2</option>
            <option>Conference Hall</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Guests</label>
          <div className="guests-container">
            <div className="guest-item">
              <div className="guest-avatar">EW</div>
              <span>Emma Wilson</span>
            </div>
            <div className="guest-item">
              <div className="guest-avatar">JA</div>
              <span>James Anderson</span>
            </div>
            <div className="guest-item">
              <div className="guest-avatar">LT</div>
              <span>Lisa Taylor</span>
            </div>
            <div className="guest-item">
              <div className="guest-avatar">DC</div>
              <span>David Clark</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">Related Deal</label>
          <div className="d-flex align-items-center gap-2">
            <select className="form-select">
              <option selected="" disabled="">
                Select deal
              </option>
            </select>
            <a href="#" className="add-item-btn">
              <i className="bi bi-plus-circle" />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">Related Contact</label>
          <div className="d-flex align-items-center gap-2">
            <select className="form-select">
              <option selected="" disabled="">
                Select contact
              </option>
            </select>
            <a href="#" className="add-item-btn">
              <i className="bi bi-plus-circle" />
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">Related Company</label>
          <div className="d-flex align-items-center gap-2">
            <select className="form-select">
              <option selected="" disabled="">
                Select company
              </option>
            </select>
            <a href="#" className="add-item-btn">
              <i className="bi bi-plus-circle" />
            </a>
          </div>
        </div>
        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={4}
            placeholder="Enter activity details..."
            defaultValue={""}
          />
        </div>
      </div>
    </form>
    <div className="form-footer">
      <button type="button" className="btn btn-cancel">
        Cancel
      </button>
      <button type="button" className="btn btn-add">
        Add Activity
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default Addactivities