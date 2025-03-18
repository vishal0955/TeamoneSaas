import React from 'react'

const AddDeal = () => {
  return (
    <>
    <div className="container">
  <div className="modal-container">
    <div className="modal-body">
      <form>
        <div className="row g-4">
          {/* Deal Name */}
          <div className="col-12">
            <label className="form-label required">Deal Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter deal name"
            />
          </div>
          {/* Pipeline & Status */}
          <div className="col-md-6">
            <label className="form-label required">Pipeline</label>
            <select className="form-select">
              <option value="">Select Pipeline</option>
              <option value="sales">Sales Pipeline</option>
              <option value="marketing">Marketing Pipeline</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label required">Status</label>
            <select className="form-select">
              <option value="">Select Status</option>
              <option value="new">New</option>
              <option value="prospect">Prospect</option>
              <option value="proposal">Proposal</option>
              <option value="won">Won</option>
            </select>
          </div>
          {/* Deal Value & Currency */}
          <div className="col-md-6">
            <label className="form-label required">Deal Value</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter value"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Currency</label>
            <select className="form-select">
              <option value="">Select Currency</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
          {/* Period & Period Value */}
          <div className="col-md-6">
            <label className="form-label">Period</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter period"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Period Value</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter period value"
            />
          </div>
          {/* Contact */}
          <div className="col-12">
            <label className="form-label">Contact</label>
            <div className="d-flex align-items-center flex-wrap mb-2">
              <div className="contact-chip">
                <img src="https://i.pravatar.cc/150?img=1" alt="John Doe" />
                <span>John Doe</span>
                <i className="bi bi-x" />
              </div>
            </div>
            <a className="add-more">
              <i className="bi bi-plus-circle" />
              Add more
            </a>
          </div>
          {/* Project */}
          <div className="col-12">
            <label className="form-label">Project</label>
            <select className="form-select">
              <option value="">Select Project</option>
              <option value="website">Website Redesign</option>
              <option value="app">Mobile App Development</option>
            </select>
          </div>
          {/* Due Date & Expected Closing */}
          <div className="col-md-6">
            <label className="form-label">Due Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Expected Closing Date</label>
            <input type="date" className="form-control" />
          </div>
          {/* Assignee */}
          <div className="col-12">
            <label className="form-label">Assignee</label>
            <div className="d-flex align-items-center flex-wrap mb-2">
              <div className="contact-chip">
                <img src="https://i.pravatar.cc/150?img=2" alt="Sarah Wilson" />
                <span>Sarah Wilson</span>
                <i className="bi bi-x" />
              </div>
            </div>
            <a className="add-more">
              <i className="bi bi-plus-circle" />
              Add more
            </a>
          </div>
          {/* Tags */}
          <div className="col-12">
            <label className="form-label">Tags</label>
            <div className="d-flex align-items-center flex-wrap mb-2">
              <div className="tag-badge">
                High Priority
                <i className="bi bi-x" />
              </div>
              <div className="tag-badge">
                Q4
                <i className="bi bi-x" />
              </div>
            </div>
            <a className="add-more">
              <i className="bi bi-plus-circle" />
              Add more
            </a>
          </div>
          {/* Source & Priority */}
          <div className="col-md-6">
            <label className="form-label">Source</label>
            <select className="form-select">
              <option value="">Select Source</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="social">Social Media</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Priority</label>
            <select className="form-select">
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          {/* Description */}
          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Enter description"
              defaultValue={""}
            />
          </div>
          {/* Follow-up Date */}
          <div className="col-12">
            <label className="form-label">Follow-up Date</label>
            <input type="date" className="form-control" />
          </div>
        </div>
      </form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-outline-secondary">
        Cancel
      </button>
      <button type="submit" className="btn btn-dark">
        Add Deal
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default AddDeal