import React, { useState } from "react";
import CreatePayment from "./CreatePayment";

const PaymentList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      <div className="container py-4">
        {/* Header - Improved responsive layout */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3 gap-md-0">
          <h4 className="mb-0 text-gray-900">Payment Links</h4>
          <div className="d-flex flex-column flex-sm-row gap-3 w-100 w-md-auto">
            <a href="#" className="btn inv-filter-button">
              Go to Commerce
            </a>
            <button
              type="button"
              className="btn inv-new-button"
              onClick={handleOpenModal}
            >
              <i className="bi bi-plus-lg me-2" />
              Create Payment Link
            </button>
          </div>
        </div>

        <div className="shadow-sm">
          {/* Payment Links Card */}
          <div className="inv-main-card">
            <div className="inv-card-header">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Payment List</h5>
              </div>

              {/* Search and Filter - Improved responsive layout */}
              <div className="row mt-4">
                <div className="col-12 col-md-8 mb-3 mb-md-0">
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
                <div className="col-6 col-md-2">
                  <div className="dropdown w-100">
                    <button
                      className="btn inv-filter-button w-100 d-flex justify-content-between align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      <span className="text-truncate">Status: All</span>
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
                <div className="col-6 col-md-2 text-end">
                  <button className="btn inv-filter-button w-100">
                    <i className="bi bi-funnel me-2" /> 
                    <span className="d-none d-md-inline">Filters</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Table - Made more responsive */}
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
                    <th>Link Name</th>
                    <th className="d-none d-md-table-cell">Line Items</th>
                    <th>Total</th>
                    <th className="d-none d-lg-table-cell">Last Modified</th>
                    <th>Views</th>
                    <th className="d-none d-sm-table-cell">Checkouts</th>
                    <th className="d-none d-xl-table-cell">Conversion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" className="inv-checkbox" />
                    </td>
                    <td>Premium Package</td>
                    <td className="d-none d-md-table-cell">
                      <div className="inv-client-wrapper">
                        <div className="inv-client-info">
                          <div className="inv-client-name">3 Items</div>
                        </div>
                      </div>
                    </td>
                    <td>$199.99</td>
                    <td className="d-none d-lg-table-cell">2024-01-15</td>
                    <td>295</td>
                    <td className="d-none d-sm-table-cell">89</td>
                    <td className="d-none d-xl-table-cell">36.3%</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" className="inv-checkbox" />
                    </td>
                    <td>Basic Plan</td>
                    <td className="d-none d-md-table-cell">
                      <div className="inv-client-wrapper">
                        <div className="inv-client-info">
                          <div className="inv-client-name">1 item</div>
                        </div>
                      </div>
                    </td>
                    <td>$49.99</td>
                    <td className="d-none d-lg-table-cell">2024-01-14</td>
                    <td>189</td>
                    <td className="d-none d-sm-table-cell">67</td>
                    <td className="d-none d-xl-table-cell">35.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
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