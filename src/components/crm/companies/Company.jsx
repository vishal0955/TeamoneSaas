import React, { useState } from "react";
import { Table, Button, Form, Dropdown, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CompanyForm from "./CompanyForm";
// import "bootstrap/dist/css/bootstrap.min.css";

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
    // document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // document.body.classList.remove("modal-open");  //Remove modal-open class
  };

  const handleCompanyClick = () => {
    console.log("Company clicked:");
    navigate("/crm/companydetails");
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>
          Companies <span className="text-muted">12,453</span>
        </h4>
        <Button className="inv-new-button" onClick={handleOpenModal}>
          <i class="bi bi-plus-lg"></i> Add New
        </Button>
      </div>

      {/* <div className="d-flex gap-2 mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="light">Company owner</Dropdown.Toggle>
        </Dropdown>
        <Button variant="light">Create alert</Button>
        <Dropdown>
          <Dropdown.Toggle variant="light">Last activity date</Dropdown.Toggle>
        </Dropdown>
        <Button variant="light">More filters</Button>
        <Form.Control
          type="text"
          placeholder="Search companies..."
          className="w-25"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}

      <div className="d-flex flex-wrap gap-2 mb-4 align-items-center">
        <div className="dropdown">
          <button
            className="inv-filter-button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Company owner
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#michael">
                Michael Chen
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Sarah Johnson
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="inv-filter-button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Create date
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#michael">
                Today
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Yesterday
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Last 7 days
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="inv-filter-button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Last activity date
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#michael">
                Today
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Yesterday
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Last 7 days
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="inv-filter-button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Lead status
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#michael">
                New
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Open
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Contacted
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Unqualified
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#sarah">
                Closed
              </a>
            </li>
          </ul>
        </div>
        {/* <button className="btn btn-outline-secondary">+ More</button> */}
        {/* <button className="btn btn-outline-secondary">
           <i className="fas fa-sliders-h"></i> Advanced filters
         </button> */}
      </div>

      <div className="inv-main-card">
        <div className="inv-card-header">
          <div className="d-flex align-items-center">
            <h5 className="mb-0" id="invoicesTitle">
            Companies
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
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <button className="inv-filter-button">
                <i className="bi bi-funnel me-2" /> Filters
              </button>
            </div>
          </div>
        </div>
        <Table hover>
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Company Name</th>
              <th>Owner</th>
              <th>Created Date</th>
              <th>Phone</th>
              <th>Last Activity</th>
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
                    <small>{company.website}</small>
                  </td>
                  <td>{company.owner}</td>
                  <td>{company.date}</td>
                  <td>{company.phone}</td>
                  <td>{company.activity}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      {/* 
      <Pagination className="justify-content-end mt-3">
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
      </Pagination> */}

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
                  <CompanyForm handleclose={handleCloseModal} />
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
    </div>
  );
};

export default Company;
