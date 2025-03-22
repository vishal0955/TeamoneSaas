import React from 'react'

const PaymentList = () => {
  return (
    <>
        <div className="container py-4">
  {/* Header */}
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h4 className="mb-0 text-gray-900">Payment Links</h4>
    <div className="d-flex gap-3">
      <a href="#" className="btn btn-outline-secondary">
        Go to Commerce
      </a>
      <a href="#" className="btn btn-dark">
        <i className="bi bi-plus-lg me-2" />
        Create Payment Link
      </a>
    </div>
  </div>
  <div className="shadow-sm ">
    {/* Search and Filter Bar */}
    <div className="card mb-4">
      <div className="card-body p-4">
        <div className="row g-3">
          <div className="col-lg-8">
            <div className="input-group">
              <span className="input-group-text border-end-0 bg-white">
                <i className="bi bi-search text-gray-500" />
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                placeholder="Search payment links..."
              />
            </div>
          </div>
          <div className="col-lg-4 d-flex gap-3">
            <div className="dropdown flex-grow-1">
              <button
                className="btn btn-outline-secondary w-100 d-flex justify-content-between align-items-center"
                data-bs-toggle="dropdown"
              >
                <span>Status: All</span>
                <i className="bi bi-chevron-down" />
              </button>
              <ul className="dropdown-menu w-100">
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Active
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Inactive
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-outline-secondary">Clear Filters</button>
          </div>
        </div>
      </div>
    </div>
    {/* Payment Links Table */}
    <div className="card">
      <div className="table-responsive">
        <table className="table mb-0">
          <thead className="bg-light">
            <tr>
              <th className="ps-4">Link Name</th>
              <th>Line Items</th>
              <th>Total</th>
              <th>Last Modified</th>
              <th>Views</th>
              <th>Checkouts</th>
              <th className="pe-4">Conversion Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ps-4">Premium Package</td>
              <td>3 items</td>
              <td>$199.99</td>
              <td>2024-01-15</td>
              <td>245</td>
              <td>89</td>
              <td className="pe-4">36.3%</td>
            </tr>
            <tr>
              <td className="ps-4">Basic Plan</td>
              <td>1 item</td>
              <td>$49.99</td>
              <td>2024-01-14</td>
              <td>189</td>
              <td>67</td>
              <td className="pe-4">35.4%</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="card-footer bg-white border-0 py-3">
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="text-gray-600">Showing 1 to 10 of 97 results</span>
          <nav>
            <ul className="pagination mb-0">
              <li className="page-item disabled">
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
</div>
    </>
  )
}

export default PaymentList