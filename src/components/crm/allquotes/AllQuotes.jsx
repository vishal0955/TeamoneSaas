import React from 'react'
import "./Quotes.css";
const AllQuotes = () => {
  return (
    <>
    <div className="container">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2>All Quotes</h2>
    <div className="d-flex gap-3">
      <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
        <i className="bi bi-upload" /> Import
      </button>
      <button className="btn btn-primary d-flex align-items-center gap-2">
        <i className="bi bi-plus-lg" /> Create quote
      </button>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-search" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search quotes..."
            />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end gap-3">
          <select className="form-select w-auto">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
          <select className="form-select w-auto">
            <option>All Users</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
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
              <td className="quote-id">#QT-2024-001</td>
              <td className="amount">$2,500.00</td>
              <td>
                <span className="badge bg-warning">Pending</span>
              </td>
              <td>
                <div className="owner-info">
                  <div className="avatar" />
                  John Smith
                </div>
              </td>
              <td className="created-date">Jan 15, 2024</td>
              <td className="text-end">
                <button className="btn btn-link">
                  <i className="bi bi-three-dots-vertical" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="text-muted">Showing 1 to 10 of 97 results</div>
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
</div>
    </>
  )
}

export default AllQuotes