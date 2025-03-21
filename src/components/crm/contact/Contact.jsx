import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ContactsList.css';

const ContactsList = () => {
  const [contacts] = useState([
    {
      id: 1,
      name: 'Nikurj Kumar',
      initials: 'NK',
      email: 'nikurj@example.com',
      jobTitle: '—',
      phoneNumber: '+91 ',
      companyName: '—'
    }
  ]);

  const [selectedView, setSelectedView] = useState('all-contacts');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const views = [
    { id: 'all-contacts', name: 'All contacts', count: 0 },
    { id: 'open-opportunities', name: 'Open opportunities', count: 0 },
    { id: 'need-followup', name: 'Need follow up', count: 0 },
    { id: 'in-progress', name: 'In progress', count: 0 },
    { id: 'recently-assigned', name: 'My recently assigned contacts', count: 0 }
  ];

  const handleFilterChange = (filterId) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter(id => id !== filterId));
    } else {
      setSelectedFilters([...selectedFilters, filterId]);
    }
  };

  return (
    <div className="container-fluid px-4 py-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <h4 className="mb-0 me-2">Contacts</h4>
          <span className="text-muted small">24700 records</span>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            Data Quality <span className="badge bg-success ms-1">98%</span>
          </button>
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Actions
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#import">Import</a></li>
              <li><a className="dropdown-item" href="#export">Export</a></li>
            </ul>
          </div>
          <button className="btn btn-dark">Create contact</button>
        </div>
      </div>

      {/* Views */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {views.map(view => (
          <button
            key={view.id}
            className={`btn btn-sm ${selectedView === view.id ? 'btn-light active' : 'btn-outline-light text-dark'}`}
            onClick={() => setSelectedView(view.id)}
          >
            {view.name}
          </button>
        ))}
        <button className="btn btn-sm btn-outline-secondary">
          + Add view (5/50)
        </button>
        <button className="btn btn-sm btn-outline-secondary">
          All Views
        </button>
      </div>

      {/* Filters */}
      <div className="d-flex flex-wrap gap-2 mb-4 align-items-center">
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Contact owner
          </button>
        </div>
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Create date
          </button>
        </div>
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Last activity date
          </button>
        </div>
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Lead status
          </button>
        </div>
        <button className="btn btn-outline-secondary">+ More</button>
        <button className="btn btn-outline-secondary">
          <i className="fas fa-sliders-h"></i> Advanced filters
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="fas fa-search text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search name, phone, email..."
          />
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="contact-avatar me-2">{contact.initials}</div>
                    {contact.name}
                  </div>
                </td>
                <td>{contact.jobTitle}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.companyName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Actions Footer */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <i className="fas fa-file-export"></i> Create report
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fas fa-download"></i> Export
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fas fa-columns"></i> Edit columns
          </button>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <i className="fas fa-sync"></i>
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fas fa-list"></i>
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fas fa-th"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactsList;
