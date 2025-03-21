import React, { useState } from 'react'
import "./Quotes.css";
import CreateQuote from './CreateQuote';
const AllQuotes = () => {
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
      <div className="quotes-container container py-4">
    <div className="quotes-header d-flex justify-content-between align-items-center mb-4">
      <h2 className="quotes-title">All Quotes</h2>
      <div className="quotes-actions d-flex gap-3">
        <button className="quotes-import-btn btn d-flex align-items-center gap-2">
          <i className="bi bi-upload" /> Import
        </button>
        <button className="quotes-create-btn btn d-flex align-items-center gap-2" onClick={handleOpenModal}>
          <i className="bi bi-plus-lg" /> Create quote
        </button>
      </div>
    </div>
    <div className="quotes-card">
      <div className="quotes-card-body">
        <div className="quotes-filters row mb-4">
          <div className="col-md-6">
            <div className="quotes-search">
              <span className="quotes-search-icon">
                <i className="bi bi-search" />
              </span>
              <input
                type="text"
                className="quotes-search-input"
                placeholder="Search quotes..."
              />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end gap-3">
            <select className="quotes-status-select">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <select className="quotes-user-select">
              <option>All Users</option>
            </select>
          </div>
        </div>
        <div className="quotes-table-wrapper">
          <table className="quotes-table">
            <thead>
              <tr>
                <th>Quote</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Owner</th>
                <th>Created</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="quotes-id">#QT-2024-001</td>
                <td className="quotes-amount">$2,500.00</td>
                <td>
                  <span className="quotes-status-badge quotes-status-pending">
                    Pending
                  </span>
                </td>
                <td>
                  <div className="quotes-owner">
                    <div className="quotes-owner-avatar" />
                    <span className="quotes-owner-name">John Smith</span>
                  </div>
                </td>
                <td className="quotes-date">Jan 15, 2024</td>
                <td className="text-end">
                  <button className="quotes-action-btn">
                    <i className="bi bi-three-dots-vertical" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="quotes-id">#QT-2024-001</td>
                <td className="quotes-amount">$2,500.00</td>
                <td>
                  <span className="quotes-status-badge quotes-status-pending">
                    Pending
                  </span>
                </td>
                <td>
                  <div className="quotes-owner">
                    <div className="quotes-owner-avatar" />
                    <span className="quotes-owner-name">John Smith</span>
                  </div>
                </td>
                <td className="quotes-date">Jan 15, 2024</td>
                <td className="text-end">
                  <button className="quotes-action-btn">
                    <i className="bi bi-three-dots-vertical" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="quotes-footer d-flex justify-content-between align-items-center mt-4">
          <div className="quotes-results-info">
            Showing 1 to 10 of 97 results
          </div>
          <nav className="quotes-pagination">
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
  </div>
        {/* Modal for Add Quote */}
        {isModalOpen && (
              <>
                <div className="modal fade show d-block" role="dialog">
                  <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Add New Quotes</h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={handleCloseModal}
                        />
                      </div>
                      <div className="modal-body">
                        <CreateQuote />
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

export default AllQuotes