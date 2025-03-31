import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router-dom";

const ContactsList = () => {
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleCLick = () => {
    console.log("clicked");
    navigate("/crm/contactdetails");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open"); //Remove modal-open class
  };
  const [contacts] = useState([
    {
      id: 1,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
  ]);

  const [selectedView, setSelectedView] = useState("all-contacts");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const views = [
    { id: "all-contacts", name: "All contacts", count: 0 },
    { id: "open-opportunities", name: "Open opportunities", count: 0 },
    { id: "need-followup", name: "Need follow up", count: 0 },
    { id: "in-progress", name: "In progress", count: 0 },
    {
      id: "recently-assigned",
      name: "My recently assigned contacts",
      count: 0,
    },
  ];

  const handleFilterChange = (filterId) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId));
    } else {
      setSelectedFilters([...selectedFilters, filterId]);
    }
  };

  return (
    <div className="container-fluid px-4 py-3">
     <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <h4 className="mb-0 me-2">Contacts</h4>
          {/* <span className="text-muted small">24700 records</span> */}
        </div>
        <div className="d-flex gap-2">
          {/* <button className="btn btn-outline-secondary">
             Data Quality <span className="badge bg-success ms-1">98%</span>
           </button> */}
          <div className="dropdown">
            <button
              className="inv-filter-button  dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Actions
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#import">
                  Import
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#export">
                  Export
                </a>
              </li>
            </ul>
          </div>
          <button className="inv-new-button " onClick={handleOpenModal}>
            {" "}
            Create contact
          </button>
        </div>
      </div>
      {/* Metrics Cards */}
      <div className="grid grid-row-1 md:grid-row-5 gap-4 ">
        <div className="inv-stats-grid">
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-primary">
              <i class="fa-solid fa-address-book"></i>
              </div>
              <div>
                <div className="inv-stat-label">Total Number Of Contact</div>
                <p className="inv-stat-value">2.18M</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-warning">
              <i class="fa-solid fa-address-card"></i>
              </div>
              <div>
                <div className="inv-stat-label">Not Contacted</div>
                <p className="inv-stat-value">618.02K</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-danger">
              <i class="fa-solid fa-id-card-clip"></i>
              </div>
              <div>
                <div className="inv-stat-label">New Contact This Month</div>
                <p className="inv-stat-value">990.58K</p>
              </div>
            </div>
          </div>
          <div className="inv-stat-box">
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-neutral">
              <i class="fa-solid fa-id-card"></i>
              </div>
              <div>
                <div className="inv-stat-label">New Recurring Contact</div>
                <p className="inv-stat-value">201.02K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
    

      {/* Views */}
      <div className="d-flex flex-wrap gap-2 ">
        {views.map((view) => (
          <button
            key={view.id}
            className={`btn btn-sm ${
              selectedView === view.id
                ? "inv-new-button text-white  active"
                : "inv-filter-button  text-dark"
            }`}
            onClick={() => setSelectedView(view.id)}
          >
            {view.name}
          </button>
        ))}
        {/* <button className="btn btn-sm btn-outline-secondary">
           + Add view (5/50)
         </button> */}
        <button className="btn btn-sm btn-outline-primary rounded-3 px-4">
          All Views
        </button>
      </div>

      {/* Filters */}
      <div className="inv-main-card">
        <div className="inv-card-header">
          <div className="row">
            <div className="col-md-3">
              <div className="inv-search-wrapper">
                <i className="bi bi-search inv-search-icon" />
                <input
                  type="text"
                  className="inv-search-input"
                  placeholder="Search Contacts..."
                  aria-label="Search Contacts"
                />
              </div>
            </div>
            <div className="col-md-2 me-2">
              <div className="dropdown">
                <button
                  className="inv-filter-button  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Contact owner
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#michael">
                      John Doe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Jane Smith
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 text-md-center me-2">
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
            </div>
            <div className="col-md-2">
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
            </div>
            <div className="col-md-2 text-md-end ms-2">
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
            </div>
          </div>
        </div>

        {/* Table */}
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
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Company Name</th>
                <th>Lead Status</th>
                <th>Lifecycle Stage</th>
                <th>Source</th>
                <th>Contact Owner</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} onClick={handleCLick}>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="contact-avatar me-2">
                        {contact.initials}
                      </div>
                      {contact.name}
                    </div>
                  </td>
                  <td>{contact.email}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.companyName}</td>
                  <td>{contact.leadStatus}</td>
                  <td>{contact.lifecycleStage}</td>
                  <td>{contact.source}</td>
                  <td>{contact.contactOwner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
                  <ContactForm handleclose={handleCloseModal} />
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

export default ContactsList;
