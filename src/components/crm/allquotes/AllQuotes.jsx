import React, { useState } from "react";
import "./Quotes.css";
import { Table, Button, Form, Dropdown, Pagination, Row, Col } from "react-bootstrap";
import CreateQuote from "./CreateQuote";
import { FaRegEye } from "react-icons/fa6";
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
        <Row className="mb-3">
                <Col xs={12} md={6}>
                  <h4>
                  All Quotes <span className="text-muted">12,453</span>
                  </h4>
                </Col>
                <Col xs={12} md={6} className="text-md-end mt-2 mt-md-0">
                <Button className="inv-new-button gap-1">
                <i className="bi bi-upload" />Import
                  </Button>
                  <Button className="inv-new-button" onClick={handleOpenModal}>
                    <i className="bi bi-plus-lg"></i> Add New
                  </Button>
                </Col>
              </Row>
        
             

        <Row className="mb-4">
        <Col xs={12}>
          <Row>
            <Col xs={12} sm={3}  className="mb-3 mb-sm-0">
              <div className="inv-stat-box">
                <div className="inv-stat-content">
                  <div className="inv-stat-icon inv-stat-icon-primary">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <div className="inv-stat-label">Total Amount Of Quotes</div>
                    <p className="inv-stat-value">£1.18M</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="mb-3 mb-sm-0">
              <div className="inv-stat-box">
                <div className="inv-stat-content">
                  <div className="inv-stat-icon inv-stat-icon-warning">
                    <i className="fa-regular fa-building"></i>
                  </div>
                  <div>
                    <div className="inv-stat-label">Quotes Per Status</div>
                    <p className="inv-stat-value">£616.62K</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="mb-3 mb-sm-0">
              <div className="inv-stat-box">
                <div className="inv-stat-content">
                  <div className="inv-stat-icon inv-stat-icon-danger">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <div className="inv-stat-label">Open Deal Amount</div>
                    <p className="inv-stat-value">£590.58K</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className="inv-stat-box">
                <div className="inv-stat-content">
                  <div className="inv-stat-icon inv-stat-icon-neutral">
                    <i className="fa-regular fa-building"></i>
                  </div>
                  <div>
                    <div className="inv-stat-label">Inactive Companies</div>
                    <p className="inv-stat-value">12</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>


      <div className="quotes-card">
  <div className="quotes-card-body">
    <div className="quotes-filters row mb-4">
      <div className="col-md-6 col-12 mb-3 mb-md-0">
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
      <div className="col-md-6 col-12 flex-wrap justify-content-md-end gap-3">
        <select className="inv-filter-button quotes-status-select">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
        <select className="inv-filter-button quotes-user-select">
          <option>All Users</option>
        </select>
      </div>
    </div>
  
    <div className="table-responsive">
      <table className="inv-table w-100">
        <thead>
          <tr>
            <th style={{ width: "20px" }}>
              <input
                type="checkbox"
                className="inv-checkbox"
                id="selectAll"
              />
            </th>
            <th>Quote</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" className="inv-checkbox" />
            </td>
            <td>#QT-2024-001</td>
            <td>
              <div className="inv-client-info">
                <div className="inv-client-name"> $2,500.00</div>
              </div>
            </td>
            <td>
              <div className="inv-status inv-status-pending">
                Pending
              </div>
            </td>
            <td>
              <div className="inv-client-info">John Smith</div>
            </td>
            <td>
              <span>Jan 15, 2024</span>
            </td>
            <td>
              <button className="inv-action-button">
                <FaRegEye />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" className="inv-checkbox" />
            </td>
            <td>#QT-2024-001</td>
            <td>
              <div className="inv-client-wrapper">
                <div className="inv-client-info">
                  <div className="inv-client-name">$2,500.00</div>
                </div>
              </div>
            </td>
            <td>
              <div className="inv-status inv-status-pending">
                Pending
              </div>
            </td>
            <td>John Smith</td>
            <td>Jan 15, 2024</td>
            <td>
              <button className="inv-action-button">
                <FaRegEye />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="quotes-footer d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
      <div className="quotes-results-info mb-3 mb-md-0">
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
  );
};

export default AllQuotes;
