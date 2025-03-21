import React from 'react'

const QuotesDashbord = () => {
  return (
    <>
  <div className="container py-4">
    {/* Navigation */}
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <i className="bi bi-house-door-fill text-secondary" />
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-decoration-none text-secondary">
              Finance
            </a>
          </li>
          <li className="breadcrumb-item active text-dark fw-medium">Quotes</li>
        </ol>
      </nav>
    </div>
    {/* Header */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 my-4">
      <h4 className="mb-0 fw-semibold text-dark">Quotes</h4>
      <div className="d-flex flex-wrap gap-2">
        <button
          className="btn btn-dark w-auto w-sm-auto"
          data-bs-toggle="modal"
          data-bs-target="#newQuoteModal"
        >
          <i className="bi bi-plus-lg me-2" />
          New Quote
        </button>
        <div className="dropdown d-md-none">
          <button
            className="btn btn-outline-dark dropdown-toggle w-auto"
            type="button"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-three-dots-vertical" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item">
                <i className="bi bi-person me-2" />
                Sync with Xero
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                <i className="bi bi-funnel me-2" />
                Advanced Filters
              </button>
            </li>
            <li>
              <button className="dropdown-item">
                <i className="bi bi-download me-2" />
                Export
              </button>
            </li>
          </ul>
        </div>
        <div className="d-none d-md-flex gap-2">
          <button className="btn btn-outline-dark">
            <i className="bi bi-person me-2" />
            Sync with Xero
          </button>
          <button className="btn btn-outline-dark">
            <i className="bi bi-funnel me-2" />
            Advanced Filters
          </button>
          <button className="btn btn-outline-dark">
            <i className="bi bi-download me-2" />
            Export
          </button>
        </div>
      </div>
    </div>
    {/* Stats Cards */}
    <div className="row g-4 mb-4">
      {/* Total Income */}
      <div className="col-md-6 col-xl-3">
        <div className="stats-card card" style={{ backgroundColor: "#EFF6FF" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <div className="text-secondary">Total Invoices (30 days)</div>
                <div className="stats-value">$45,289</div>
                <div className="stats-period">$17.5k from last month</div>
              </div>
              <div className="stats-trend text-success">
                <i className="bi bi-arrow-up" /> 12%
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Outstanding */}
      <div className="col-md-6 col-xl-3">
        <div className="stats-card card" style={{ backgroundColor: "#F0FDF4" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <div className="text-secondary">Outstanding</div>
                <div className="stats-value text-success">$12,450</div>
                <div className="stats-period">23 invoices pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Draft */}
      <div className="col-md-6 col-xl-3">
        <div className="stats-card card" style={{ backgroundColor: "#FEFCE8" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <div className="text-secondary">Draft</div>
                <div className="stats-value" style={{ color: "#92400e" }}>
                  $8,790
                </div>
                <div className="stats-period">15 drafts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overdue */}
      <div className="col-md-6 col-xl-3">
        <div className="stats-card card" style={{ backgroundColor: "#FEF2F2" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <div className="text-secondary">Total Overdue</div>
                <div className="stats-value text-danger">$3,240</div>
                <div className="stats-period">7 overdue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="quote-content bg-white p-4 shadow-sm rounded-3">
      {/* Filters Bar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div className="position-relative w-auto w-md-auto">
          <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3" />
          <input
            type="search"
            className="form-control ps-5"
            placeholder="Search all quotes..."
          />
        </div>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-outline-dark">Draft</button>
          <button className="btn btn-outline-dark">Paid</button>
          <button className="btn btn-outline-dark">Overdue</button>
        </div>
      </div>
      {/* Table */}
      <div className="card border-0">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                  </th>
                  <th className="ps-4">Quotes</th>
                  <th>Client</th>
                  <th>Date</th>
                  <th>Due Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th className="pe-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                  </td>
                  <td className="ps-4 fw-medium">#INV-001</td>
                  <td>Acme Corp</td>
                  <td>Jan 15, 2024</td>
                  <td>Jan 29, 2024</td>
                  <td className="fw-medium">$2,400.00</td>
                  <td>
                    <span className="badge badge-paid rounded-pill px-3 py-2">
                      Paid
                    </span>
                  </td>
                  <td>
                    <i className="bi bi-circle-fill text-success fs-6" />
                  </td>
                  <td className="pe-4">
                    <div className="d-flex gap-2">
                      <i className="bi bi-three-dots-vertical action-icon" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                  </td>
                  <td className="ps-4 fw-medium">#INV-002</td>
                  <td>Golden Corp</td>
                  <td>Jan 15, 2024</td>
                  <td>Jan 30, 2024</td>
                  <td className="fw-medium">$1,800.00</td>
                  <td>
                    <span className="badge badge-pending rounded-pill px-3 py-2">
                      Pending
                    </span>
                  </td>
                  <td>
                    <i className="bi bi-circle-fill text-warning fs-6" />
                  </td>
                  <td className="pe-4">
                    <div className="d-flex gap-2">
                      <i className="bi bi-three-dots-vertical action-icon" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="text-secondary small">
          Showing 1 to 10 of 97 results
        </div>
        <nav>
          <ul className="pagination mb-0">
            <li className="page-item">
              <a className="page-link text-dark" href="#">
                <i className="bi bi-chevron-left" />
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link bg-dark" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-dark" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-dark" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-dark" href="#">
                <i className="bi bi-chevron-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/* New Quote Modal */}
  <div className="modal fade" id="newQuoteModal" tabIndex={-1}>
    <div className="modal-dialog" style={{ maxWidth: 600 }}>
      <div className="modal-content border-0 rounded-2 shadow-sm">
        {/* Modal Header */}
        <div className="modal-header border-bottom py-3 px-4">
          <h5 className="modal-title fw-semibold text-dark">
            Create New Quote
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        {/* Modal Body */}
        <div className="modal-body p-4">
          <form id="newQuoteForm">
            {/* Client Info */}
            <div className="mb-4">
              <label className="form-label fw-medium text-dark">
                Client <span className="text-danger">*</span>
              </label>
              <select className="form-select" required="">
                <option value="">Select client</option>
                <option value={1}>Acme Corp</option>
                <option value={2}>Golden Corp</option>
              </select>
            </div>
            {/* Quote Details */}
            <div className="mb-4">
              <label className="form-label fw-medium text-dark">
                Quote Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="QT-0003"
                readOnly=""
              />
              <div className="form-text text-secondary">
                Auto-generated quote number
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-medium text-dark">
                  Issue Date <span className="text-danger">*</span>
                </label>
                <input type="date" className="form-control" required="" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium text-dark">
                  Due Date <span className="text-danger">*</span>
                </label>
                <input type="date" className="form-control" required="" />
              </div>
            </div>
            {/* Items */}
            <div className="mb-4">
              <label className="form-label fw-medium text-dark d-flex justify-content-between">
                <span>
                  Items <span className="text-danger">*</span>
                </span>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none p-0"
                  style={{ color: "#2563eb" }}
                >
                  <i className="bi bi-plus-lg" /> Add Item
                </button>
              </label>
              <div className="border rounded-2 p-3">
                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Item description"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="number"
                      className="form-control item-qty"
                      placeholder="Qty"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="number"
                      className="form-control item-rate"
                      placeholder="Rate"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="number"
                      className="form-control bg-light item-amount"
                      placeholder="Amount"
                      readOnly=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Totals */}
            <div className="border-top mt-4 pt-4">
              <div className="row justify-content-end">
                <div className="col-md-6">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">Subtotal:</span>
                    <span className="fw-medium text-dark">
                      $<span id="subtotal">0.00</span>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">Tax (10%):</span>
                    <span className="fw-medium text-dark">
                      $<span id="tax">0.00</span>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-secondary">Discount:</span>
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="number"
                        className="form-control form-control-sm w-75"
                        id="discountInput"
                        placeholder={0}
                      />
                      <select
                        className="form-select form-select-sm w-auto"
                        id="discountType"
                      >
                        <option value="percentage">%</option>
                        <option value="fixed">$</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between border-top pt-2 mt-2">
                    <span className="fw-medium text-dark">Total:</span>
                    <span className="fw-semibold fs-5 text-dark">
                      $<span id="total">0.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Notes */}
            <div className="mb-4">
              <label className="form-label fw-medium text-dark">Notes</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Add any notes or terms"
                defaultValue={""}
              />
            </div>
          </form>
        </div>
        {/* Modal Footer */}
        <div className="modal-footer border-top py-3 px-4">
          <button
            type="button"
            className="btn btn-outline-secondary px-4"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="newQuoteForm"
            className="btn btn-dark px-4"
          >
            Create Quote
          </button>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default QuotesDashbord