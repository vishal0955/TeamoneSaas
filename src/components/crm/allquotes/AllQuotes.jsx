import React, { useState } from "react";
import {
  Table,
  Button,
  Form,
  Pagination,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import CreateQuote from "./CreateQuote";
import { FaRegEye } from "react-icons/fa6";

const AllQuotes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open"); // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      <div className=" container py-4">
        {/* Header */}
        <Row className="mb-3 align-items-center justify-content-end d-flex">
          <Col xs={12} className="mb-2 mb-md-0">
            <h4 className="text-center text-md-start">All Quotes</h4>
          </Col>
          <Col
            xs={12}
            md="auto"
            className="d-flex justify-content-center justify-content-md-end gap-2"
          >
            <Button className="inv-new-button" size="sm">
              <i className="bi bi-upload" /> Import
            </Button>
            <Button className="inv-new-button" size="sm" onClick={handleOpenModal}>
              <i className="bi bi-plus-lg" /> Create quote
            </Button>
          </Col>
        </Row>

        {/* Statistics */}
        <Row className="mb-4">
          <Col xs={12}>
            <Row className="g-3">
              <Col xs={12} sm={6} md={3}>
                <div className="inv-stat-box p-3 border rounded text-center">
                  <div className="inv-stat-icon inv-stat-icon-primary mb-2">
                    <i className="bi bi-currency-pound" style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className="inv-stat-label">Total Amount Of Quotes</div>
                  <p className="inv-stat-value mb-0">£1.18M</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="inv-stat-box p-3 border rounded text-center">
                  <div className="inv-stat-icon inv-stat-icon-warning mb-2">
                    <i className="bi bi-clock" style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className="inv-stat-label">Quotes Per Status</div>
                  <p className="inv-stat-value mb-0">£616.62K</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="inv-stat-box p-3 border rounded text-center">
                  <div className="inv-stat-icon inv-stat-icon-danger mb-2">
                    <i className="bi bi-x-circle-fill" style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className="inv-stat-label">Open Deal Amount</div>
                  <p className="inv-stat-value mb-0">£590.58K</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="inv-stat-box p-3 border rounded text-center">
                  <div className="inv-stat-icon inv-stat-icon-neutral mb-2">
                    <i className="bi bi-plus-circle-fill" style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className="inv-stat-label">All Amount of Quotes</div>
                  <p className="inv-stat-value mb-0">£201.02K</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Quotes Card */}
        <div className="quotes-card border rounded shadow-sm">
          <div className="quotes-card-body p-3">
            {/* Search & Filters */}
            <Row className="mb-3">
              <Col xs={12} md={6} className="mb-2 mb-md-0">
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-search" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search invoices..."
                    aria-label="Search invoices"
                  />
                </InputGroup>
              </Col>
              <Col
                xs={12}
                md={6}
                className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2"
              >
                <Form.Select className="inv-filter-button quotes-status-select" size="sm">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </Form.Select>
                <Form.Select className="inv-filter-button quotes-user-select" size="sm">
                  <option>All Users</option>
                </Form.Select>
              </Col>
            </Row>

            {/* Table */}
            <div className="table-responsive">
              <Table bordered hover className="inv-table quotes-table mb-0" size="sm">
                <thead>
                  <tr>
                    <th style={{ width: "20px" }}>
                      <input type="checkbox" className="inv-checkbox" id="selectAll" />
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
                        <div className="inv-client-name">$2,500.00</div>
                      </div>
                    </td>
                    <td>
                      <div className="inv-status inv-status-pending">Pending</div>
                    </td>
                    <td>
                      <div className="inv-client-info">John Smith</div>
                    </td>
                    <td>
                      <span>Jan 15, 2024</span>
                    </td>
                    <td>
                      <Button variant="outline-secondary" className="inv-action-button" size="sm">
                        <FaRegEye />
                      </Button>
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
                      <div className="inv-status inv-status-pending">Pending</div>
                    </td>
                    <td>John Smith</td>
                    <td>Jan 15, 2024</td>
                    <td>
                      <Button variant="outline-secondary" className="inv-action-button" size="sm">
                        <FaRegEye />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            {/* Footer */}
            <Row className="mt-3">
              <Col
                xs={12}
                className="d-flex flex-column flex-md-row justify-content-between align-items-center"
              >
                <div className="quotes-results-info mb-2 mb-md-0">
                  Showing 1 to 10 of 97 results
                </div>
                <Pagination className="mb-0">
                  <Pagination.Prev>
                    <i className="bi bi-chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <i className="bi bi-chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </Col>
            </Row>
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
                  <CreateQuote close={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>
        </>
      )}
    </>
  );
};

export default AllQuotes;
