import React, { useState } from 'react'
import Addactivities from './Addactivities';

const Activity = () => {
    
      const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    
      const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove("modal-open"); // Remove modal-open class
      };
  return (
    <>
    <div className="container-fluid py-4">
  <div className="activity-container">
    <div className="activity-header d-flex justify-content-between align-items-center">
      <h5 className="mb-0" style={{ color: "#111827", fontWeight: 600 }}>
        Activity List
      </h5>
      <div className="d-flex gap-3">
        <button className="btn btn-export">
          <i className="bi bi-download me-2" />
          Export
        </button>
        <button className="btn btn-add" onClick={handleOpenModal}>
          <i className="bi bi-plus me-2" />
          Add Activity
        </button>
      </div>
    </div>
    <div className="search-container d-flex mb-4">
      <div className="flex-grow-1">
        <div className="input-group">
          <span className="input-group-text border-end-0 bg-white">
            <i className="bi bi-search text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search activities..."
          />
        </div>
      </div>
      <div className="input-group" style={{ width: 200 }}>
        <input type="date" className="form-control" />
      </div>
      <div className="input-group" style={{ width: 200 }}>
        <select className="form-select">
          <option selected="">All Activity Types</option>
          <option>Meeting</option>
          <option>Call</option>
          <option>Email</option>
        </select>
      </div>
      <div className="input-group" style={{ width: 200 }}>
        <select className="form-select">
          <option selected="">Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>Custom Range</option>
        </select>
      </div>
    </div>
    <div className="table-responsive">
      <table className="table activity-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Due Date</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Client Meeting - Project Review</td>
            <td>
              <span className="type-badge type-meeting">Meeting</span>
            </td>
            <td>Dec 15, 2023</td>
            <td>
              <div className="d-flex align-items-center gap-2">
                <div className="avatar">JD</div>
                <span>John Doe</span>
              </div>
            </td>
            <td>Dec 10, 2023</td>
            <td>
              <div className="d-flex gap-2">
                <i className="bi bi-pencil action-icon" />
                <i className="bi bi-trash action-icon" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Follow-up Call with Vendor</td>
            <td>
              <span className="type-badge type-call">Call</span>
            </td>
            <td>Dec 16, 2023</td>
            <td>
              <div className="d-flex align-items-center gap-2">
                <div className="avatar">AS</div>
                <span>Alice Smith</span>
              </div>
            </td>
            <td>Dec 11, 2023</td>
            <td>
              <div className="d-flex gap-2">
                <i className="bi bi-pencil action-icon" />
                <i className="bi bi-trash action-icon" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Send Project Proposal</td>
            <td>
              <span className="type-badge type-email">Email</span>
            </td>
            <td>Dec 17, 2023</td>
            <td>
              <div className="d-flex align-items-center gap-2">
                <div className="avatar">RJ</div>
                <span>Robert Johnson</span>
              </div>
            </td>
            <td>Dec 12, 2023</td>
            <td>
              <div className="d-flex gap-2">
                <i className="bi bi-pencil action-icon" />
                <i className="bi bi-trash action-icon" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="d-flex justify-content-between align-items-center mt-4">
      <div className="text-muted">Showing 1 to 3 of 12 results</div>
      <nav>
        <ul className="pagination mb-0">
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="bi bi-chevron-left" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="bi bi-chevron-right" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
      {/* Modal for Add activities */}
            {isModalOpen && (
              <>
                <div className="modal fade show d-block" role="dialog">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Add New Activities</h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={handleCloseModal}
                        />
                      </div>
                      <div className="modal-body">
                        <Addactivities />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal backdrop */}
                <div
                  className="modal-backdrop fade show"
                  onClick={handleCloseModal}
                ></div>
              </>
            )}
    </>

  )
}

export default Activity