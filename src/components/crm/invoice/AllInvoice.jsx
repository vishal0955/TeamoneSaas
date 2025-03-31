import React, { useState } from "react";
import "./invoice.css";
import NewInvoice from "./NewInvoice";

const AllInvoice = () => {
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
      <div className="inv-dashboard-container">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0" id="invoicesTitle">
            Invoices
          </h5>
          <button className="inv-new-button" onClick={handleOpenModal}>
            <i className="bi bi-plus me-2" /> New Invoice
          </button>
        </div>
        {/* Stats Section */}
        <div className="inv-stats-grid">
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-primary">
                <i className="bi bi-arrow-left-right" />
              </div>
              <div>
                <div className="inv-stat-label">Monthly Total</div>
                <p className="inv-stat-value">$24,500</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-warning">
                <i className="bi bi-clock" />
              </div>
              <div>
                <div className="inv-stat-label">Outstanding</div>
                <p className="inv-stat-value">$8,250</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-neutral">
                <i className="bi bi-file-text" />
              </div>
              <div>
                <div className="inv-stat-label">Draft</div>
                <p className="inv-stat-value">$3,800</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-danger">
                <i className="bi bi-exclamation-circle" />
              </div>
              <div>
                <div className="inv-stat-label">Overdue</div>
                <p className="inv-stat-value">$2,150</p>
              </div>
            </div>
          </div>
        </div>

        {/* Invoices Section */}
        <div className="inv-main-card">
          <div className="inv-card-header">
            <div className="row mt-4">
              <div className="col-md-8">
                <div className="inv-search-wrapper">
                  <i className="bi bi-search inv-search-icon" />
                  <input
                    type="text"
                    className="inv-search-input"
                    placeholder="Search invoices..."
                    aria-label="Search invoices"
                  />
                </div>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <button className="inv-filter-button">
                  <i className="bi bi-funnel me-2" /> Filters
                </button>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="inv-table">
              <thead>
                <tr>
                  <th style={{ width: "20px" }}>
                    <input
                      type="checkbox"
                      className="inv-checkbox"
                      id="selectAll"
                    />
                  </th>
                  <th>Invoice</th>
                  <th>Client</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" className="inv-checkbox" />
                  </td>
                  <td>#INV-2024001</td>
                  <td>
                    <div className="inv-client-wrapper">
                      <div className="inv-client-avatar">A</div>
                      <div className="inv-client-info">
                        <div className="inv-client-name">Acme Corp</div>
                        <div className="inv-client-email">john@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td>$2,000.00</td>
                  <td>
                    <span className="inv-status inv-status-paid">Paid</span>
                  </td>
                  <td>Jan 25, 2024</td>
                  <td>
                    <button className="inv-action-button">View</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="inv-checkbox" />
                  </td>
                  <td>#INV-2024002</td>
                  <td>
                    <div className="inv-client-wrapper">
                      <div className="inv-client-avatar">T</div>
                      <div className="inv-client-info">
                        <div className="inv-client-name">TechStart Inc</div>
                        <div className="inv-client-email">
                          sarah@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$3,500.00</td>
                  <td>
                    <span className="inv-status inv-status-pending">
                      Pending
                    </span>
                  </td>
                  <td>Jan 30, 2024</td>
                  <td>
                    <button className="inv-action-button">View</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="inv-checkbox" />
                  </td>
                  <td>#INV-2024003</td>
                  <td>
                    <div className="inv-client-wrapper">
                      <div className="inv-client-avatar">G</div>
                      <div className="inv-client-info">
                        <div className="inv-client-name">Global Solutions</div>
                        <div className="inv-client-email">mike@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td>$1,750.00</td>
                  <td>
                    <span className="inv-status inv-status-draft">Draft</span>
                  </td>
                  <td>Feb 5, 2024</td>
                  <td>
                    <button className="inv-action-button">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal for Add contact */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Invoice</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <NewInvoice />
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
  );
};

export default AllInvoice;
