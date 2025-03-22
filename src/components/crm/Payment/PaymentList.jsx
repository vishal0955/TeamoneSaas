import React, { useState } from "react";
import CreatePayment from "./CreatePayment";

const PaymentList = () => {
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
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0 text-gray-900">Payment Links</h4>
          <div className="d-flex gap-3">
            <a href="#" className="btn inv-filter-button">
              Go to Commerce
            </a>
            <button
              type="button"
              className="inv-new-button"
              onClick={handleOpenModal}
            >
              <i className="bi bi-plus-lg me-2" />
              Create Payment Link
            </button>
          </div>
        </div>
        <div className="shadow-sm ">
          {/* Search and Filter Bar */}
          {/* <div className="card mb-4">
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
                  <button className="btn btn-outline-secondary">
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* Payment Links Table */}
          <div className="inv-main-card">
            <div className="inv-card-header">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" id="invoicesTitle">
                  Payment List
                </h5>
              </div>

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
                <div className="col-md-2 d-flex justify-content-end">
                  <div className="dropdown flex-grow-1">
                    <button
                      className="btn inv-filter-button w-100 d-flex justify-content-between align-items-center"
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
                </div>
                <div className="col-md-2 text-md-end mt-3 mt-md-0">
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
                    <th>Link Name</th>
                    <th>Line Items</th>
                    <th>Total</th>
                    <th>Last Modified</th>
                    <th>Views</th>
                    <th>Checkouts</th>
                    <th>Conversion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" className="inv-checkbox" />
                    </td>
                    <td>Premium Package</td>
                    <td>
                      <div className="inv-client-wrapper">
                        <div className="inv-client-info">
                          <div className="inv-client-name">3 Items</div>
                        </div>
                      </div>
                    </td>
                    <td>$199.99</td>
                    <td>2024-01-15</td>
                    <td>295</td>
                    <td>89</td>
                    <td>36.3%</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" className="inv-checkbox" />
                    </td>
                    <td>Basic Plan</td>
                    <td>
                      <div className="inv-client-wrapper">
                        <div className="inv-client-info">
                          <div className="inv-client-name">1 item</div>
                        </div>
                      </div>
                    </td>
                    <td>$49.99</td>
                    <td>2024-01-14</td>
                    <td>189</td>
                    <td>67</td>
                    <td>35.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Add payment */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Payment</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <CreatePayment />
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

export default PaymentList;
