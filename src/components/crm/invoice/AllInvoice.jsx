import React from 'react'
import  "./invoice.module.css"
const AllInvoice = () => {
  return (
    <div className="container py-4">
  {/* Stats Section */}
  <div className="row g-3 mb-4">
    <div className="col-md-3">
      <div className="stats-card">
        <div className="stats-icon blue">
          <i className="bi bi-arrow-left-right" />
        </div>
        <div>
          <div className="stats-title">Monthly Total</div>
          <p className="stats-value">$24,500</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="stats-card">
        <div className="stats-icon yellow">
          <i className="bi bi-clock" />
        </div>
        <div>
          <div className="stats-title">Outstanding</div>
          <p className="stats-value">$8,250</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="stats-card">
        <div className="stats-icon gray">
          <i className="bi bi-file-text" />
        </div>
        <div>
          <div className="stats-title">Draft</div>
          <p className="stats-value">$3,800</p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="stats-card">
        <div className="stats-icon red">
          <i className="bi bi-exclamation-circle" />
        </div>
        <div>
          <div className="stats-title">Overdue</div>
          <p className="stats-value">$2,150</p>
        </div>
      </div>
    </div>
  </div>
  {/* Invoices Section */}
  <div className="card border-0 shadow-sm">
    <div className="card-body p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="card-title mb-0" id="invoicesTitle">
          Invoices
        </h5>
        <button className="btn btn-dark" aria-label="Create new invoice">
          <i className="bi bi-plus" aria-hidden="true" /> New Invoice
        </button>
      </div>
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="position-relative">
            <i className="bi bi-search search-icon" aria-hidden="true" />
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search invoices..."
              aria-label="Search invoices"
              role="searchbox"
            />
          </div>
        </div>
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <button
            className="btn btn-outline-secondary"
            aria-label="Show filters"
          >
            <i className="bi bi-funnel" aria-hidden="true" /> Filters
          </button>
        </div>
      </div>
      <div className="table-responsive invoice-table">
        <table className="table mb-0" aria-labelledby="invoicesTitle">
          <thead>
            <tr>
              <th style={{ width: 20 }}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="selectAll"
                    aria-label="Select all invoices"
                  />
                  <label
                    className="form-check-label visually-hidden"
                    htmlFor="selectAll"
                  >
                    Select all invoices
                  </label>
                </div>
              </th>
              <th scope="col">Invoice</th>
              <th scope="col">Client</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Due Date</th>
              <th scope="col">
                <span className="visually-hidden">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="invoice1"
                    aria-label="Select invoice INV-2024001"
                  />
                  <label
                    className="form-check-label visually-hidden"
                    htmlFor="invoice1"
                  >
                    Select invoice INV-2024001
                  </label>
                </div>
              </td>
              <td>#INV-2024001</td>
              <td>
                <div className="client-info">
                  <div className="client-avatar" aria-hidden="true">
                    A
                  </div>
                  <div className="client-details">
                    <div className="client-name">Acme Corp</div>
                    <div
                      className="client-email"
                      aria-label="Email: john@example.com"
                    >
                      john@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td aria-label="Amount: $2,000.00">$2,000.00</td>
              <td>
                <span className="status-badge paid" role="status">
                  Paid
                </span>
              </td>
              <td aria-label="Due date: January 25, 2024">Jan 25, 2024</td>
              <td className="text-end">
                <button
                  className="btn btn-sm btn-light"
                  aria-label="View invoice INV-2024001"
                >
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="invoice2"
                    aria-label="Select invoice INV-2024002"
                  />
                  <label
                    className="form-check-label visually-hidden"
                    htmlFor="invoice2"
                  >
                    Select invoice INV-2024002
                  </label>
                </div>
              </td>
              <td>#INV-2024002</td>
              <td>
                <div className="client-info">
                  <div className="client-avatar" aria-hidden="true">
                    T
                  </div>
                  <div className="client-details">
                    <div className="client-name">TechStart Inc</div>
                    <div
                      className="client-email"
                      aria-label="Email: sarah@example.com"
                    >
                      sarah@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td aria-label="Amount: $3,500.00">$3,500.00</td>
              <td>
                <span className="status-badge pending" role="status">
                  Pending
                </span>
              </td>
              <td aria-label="Due date: January 30, 2024">Jan 30, 2024</td>
              <td className="text-end">
                <button
                  className="btn btn-sm btn-light"
                  aria-label="View invoice INV-2024002"
                >
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="invoice3"
                    aria-label="Select invoice INV-2024003"
                  />
                  <label
                    className="form-check-label visually-hidden"
                    htmlFor="invoice3"
                  >
                    Select invoice INV-2024003
                  </label>
                </div>
              </td>
              <td>#INV-2024003</td>
              <td>
                <div className="client-info">
                  <div className="client-avatar" aria-hidden="true">
                    G
                  </div>
                  <div className="client-details">
                    <div className="client-name">Global Solutions</div>
                    <div
                      className="client-email"
                      aria-label="Email: mike@example.com"
                    >
                      mike@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td aria-label="Amount: $1,750.00">$1,750.00</td>
              <td>
                <span className="status-badge draft" role="status">
                  Draft
                </span>
              </td>
              <td aria-label="Due date: February 5, 2024">Feb 5, 2024</td>
              <td className="text-end">
                <button
                  className="btn btn-sm btn-light"
                  aria-label="View invoice INV-2024003"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default AllInvoice