import React, { useState } from "react";
import { Table, Button, Form, Dropdown, Pagination, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CompanyForm from "./CompanyForm";

const Company = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [companies] = useState([
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCompanyClick = () => {
    console.log("Company clicked:");
    navigate("/crm/contactdetails");
  };

  return (
    <div className="container mt-4">
      <Row className="mb-3 ">
        <div className="d-flex justify-content-between">
        <div >
          <h4>
            Companies <span className="text-muted">12,453</span>
          </h4>
        </div>
        <div className="text-md-end mt-2 mt-md-0">
          <Button className="inv-new-button" onClick={handleOpenModal}>
            <i className="bi bi-plus-lg"></i> Add New
          </Button>
        </div>
        </div>
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
                    <div className="inv-stat-label">All Amount Companies</div>
                    <p className="inv-stat-value">14</p>
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
                    <div className="inv-stat-label">Recently Added</div>
                    <p className="inv-stat-value">15</p>
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
                    <div className="inv-stat-label">Active Companies</div>
                    <p className="inv-stat-value">10</p>
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

      <Row className="mb-3">
        <Col xs={12}>
          <div className="d-flex flex-wrap gap-2 align-items-center">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="inv-filter-button">
                Company owner
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#michael">Michael Chen</Dropdown.Item>
                <Dropdown.Item href="#sarah">Sarah Johnson</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>
              <Dropdown.Toggle variant="light" className="inv-filter-button">
                Create date
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#today">Today</Dropdown.Item>
                <Dropdown.Item href="#yesterday">Yesterday</Dropdown.Item>
                <Dropdown.Item href="#last7">Last 7 days</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>
              <Dropdown.Toggle variant="light" className="inv-filter-button">
                Last activity date
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#today">Today</Dropdown.Item>
                <Dropdown.Item href="#yesterday">Yesterday</Dropdown.Item>
                <Dropdown.Item href="#last7">Last 7 days</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>
              <Dropdown.Toggle variant="light" className="inv-filter-button">
                Lead status
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#new">New</Dropdown.Item>
                <Dropdown.Item href="#open">Open</Dropdown.Item>
                <Dropdown.Item href="#contacted">Contacted</Dropdown.Item>
                <Dropdown.Item href="#unqualified">Unqualified</Dropdown.Item>
                <Dropdown.Item href="#closed">Closed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>

      <div className="inv-main-card">
        <div className="inv-card-header">
          <Row className="align-items-center">
            <Col xs={12} md={8} className="mb-3 mb-md-0">
              <div className="inv-search-wrapper">
                <i className="bi bi-search inv-search-icon" />
                <input
                  type="text"
                  className="inv-search-input"
                  placeholder="Search companies..."
                  aria-label="Search companies"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </Col>
            <Col xs={12} md={4} className="text-md-end">
              <Button variant="light" className="inv-filter-button">
                <i className="bi bi-funnel me-2" /> Filters
              </Button>
            </Col>
          </Row>
        </div>
        
        <div className="table-responsive">
          <Table hover className="mb-0">
            <thead>
              <tr>
                <th>
                  <Form.Check type="checkbox" />
                </th>
                <th>Company Name</th>
                <th>Owner</th>
                <th className="d-none d-md-table-cell">Created Date</th>
                <th className="d-none d-sm-table-cell">Phone</th>
                <th className="d-none d-sm-table-cell">Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {companies
                .filter((c) =>
                  c.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((company, index) => (
                  <tr key={index}>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td onClick={handleCompanyClick}>
                      {company.logo} {company.name} <br />
                      <small className="text-muted">{company.website}</small>
                    </td>
                    <td>{company.owner}</td>
                    <td className="d-none d-md-table-cell">{company.date}</td>
                    <td className="d-none d-sm-table-cell">{company.phone}</td>
                    <td className="d-none d-sm-table-cell">{company.activity}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Row className="mt-3">
        <Col xs={12} className="d-flex justify-content-end">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>

      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <CompanyForm handleClose={handleCloseModal} />
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
    </div>
  );
};

export default Company;