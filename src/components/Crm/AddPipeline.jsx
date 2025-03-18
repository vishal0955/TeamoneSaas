import React from 'react'

const AddPipeline = () => {
  return (
    <>
    <div className="container my-2">
  <div className="modal-container">

    <div className="modal-body">
      <form>
        {/* Pipeline Name */}
        <div className="mb-4">
          <label className="form-label required">Pipeline Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter pipeline name"
          />
        </div>
        {/* Pipeline Stages */}
        <div className="mb-4">
          <label className="form-label required">Pipeline Stages</label>
          <div className="pipeline-stages">
            <div className="stage-item">
              <i className="bi bi-grip-vertical stage-grip" />
              <span className="stage-name">Inpipline</span>
              <div className="stage-actions">
                <i className="bi bi-pencil" />
                <i className="bi bi-trash" />
              </div>
            </div>
            <div className="stage-item">
              <i className="bi bi-grip-vertical stage-grip" />
              <span className="stage-name">Follow Up</span>
              <div className="stage-actions">
                <i className="bi bi-pencil" />
                <i className="bi bi-trash" />
              </div>
            </div>
            <div className="stage-item">
              <i className="bi bi-grip-vertical stage-grip" />
              <span className="stage-name">Schedule Service</span>
              <div className="stage-actions">
                <i className="bi bi-pencil" />
                <i className="bi bi-trash" />
              </div>
            </div>
          </div>
          <a href="#" className="add-stage-btn">
            <i className="bi bi-plus-circle" />
            Add New
          </a>
        </div>
        {/* Access */}
        <div className="mb-3">
          <label className="form-label">Access</label>
          <div className="access-options">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="access"
                id="allAccess"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="allAccess">
                All
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="access"
                id="selectPerson"
              />
              <label className="form-check-label" htmlFor="selectPerson">
                Select Person
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-outline-secondary">
        Cancel
      </button>
      <button type="submit" className="btn btn-dark">
        Add Pipeline
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default AddPipeline