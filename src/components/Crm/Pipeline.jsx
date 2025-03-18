import React, { useState } from "react";
import AddPipeline from "./AddPipeline";

const Pipeline = () => {
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
      <div className="container py-5">
        <h4>Pipeline List</h4>
        <div className="top-header d-flex justify-content-between">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">CRM</a>
              </li>
              <li className="breadcrumb-item active">Pipeline List</li>
            </ol>
          </nav>
          {/* Header Actions */}
          <div className="d-flex justify-content-end gap-2 mb-4">
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <i className="bi bi-download" /> Export
            </button>
            <button
              className="btn btn-dark d-flex align-items-center gap-2"
              onClick={handleOpenModal}>
              <i className="bi bi-plus-lg" /> Add Pipeline
            </button>
          </div>
        </div>
        {/* Filters */}
        <div className="filter-table bg-white p-3 rounded-3 shadow-sm">
          <div className="filter-row">
            <div className="filter-group d-flex justify-content-between">
              <select className="form-select filter-select w-auto">
                <option>03/12/2024 - 03/18/2024</option>
              </select>
              <select className="form-select filter-select w-auto">
                <option>All Stages</option>
              </select>
              <select className="form-select filter-select w-auto">
                <option>$0.00 - $0.00</option>
              </select>
              <select className="form-select filter-select w-auto">
                <option>Select Status</option>
              </select>
              <select className="form-select filter-select w-auto">
                <option>Sort By: Last 7 Days</option>
              </select>
            </div>
          </div>
          {/* Table Controls */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <select className="form-select" style={{ width: "auto" }}>
              <option>10 Entries</option>
              <option>25 Entries</option>
              <option>50 Entries</option>
            </select>
            <div className="search-box">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="table-container">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th className="checkbox-col">
                    <input type="checkbox" className="form-check-input" />
                  </th>
                  <th>Pipeline Name</th>
                  <th>Total Deal Value</th>
                  <th>No of Deals</th>
                  <th>Stages</th>
                  <th>Created Date</th>
                  <th>Status</th>
                  <th className="actions-col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>Sales</td>
                  <td>$4,50,000</td>
                  <td>315</td>
                  <td>
                    <div className="pipeline-stage">
                      <div className="stage-bar stage-won" />
                      <span>Won</span>
                    </div>
                  </td>
                  <td>14 Jan 2024</td>
                  <td>
                    <span className="status-badge">Active</span>
                  </td>
                  <td>
                    <div className="action-icons">
                      <i className="bi bi-pencil" />
                      <i className="bi bi-trash" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>Marketing</td>
                  <td>$3,15,000</td>
                  <td>447</td>
                  <td>
                    <div className="pipeline-stage">
                      <div className="stage-bar stage-pipeline" />
                      <span>In Pipeline</span>
                    </div>
                  </td>
                  <td>21 Jan 2024</td>
                  <td>
                    <span className="status-badge">Active</span>
                  </td>
                  <td>
                    <div className="action-icons">
                      <i className="bi bi-pencil" />
                      <i className="bi bi-trash" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal for Add pipeline */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Contact</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <AddPipeline />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}></div>
        </>
      )}
    </>
  );
};

export default Pipeline;
