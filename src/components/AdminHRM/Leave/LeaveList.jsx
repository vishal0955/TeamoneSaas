import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers, FaCalendarCheck, FaCalendarTimes, FaClock, FaFileExport, FaPlus, FaPen, FaTrash } from 'react-icons/fa';

const Leave = () => {
  const [entries] = useState([
    {
      id: 1,
      employee: {
        name: 'Anthony Lewis',
        department: 'Finance',
        avatar: 'https://placeholderimage.jpg'
      },
      leaveType: 'Medical Leave',
      from: '14 Jan 2024',
      to: '15 Jan 2024',
      days: 2
    }
    // Add more entries as needed
  ]);

  const [selectedDate, setSelectedDate] = useState('2024-03-11');
  const [entriesPerPage] = useState(10);
  const [currentPage] = useState(1);

  const stats = {
    totalPresent: { current: 180, total: 200 },
    plannedLeaves: 10,
    unplannedLeaves: 10,
    pendingRequests: 15
  };

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">Employee</li>
            <li className="breadcrumb-item active">Leaves</li>
          </ol>
        </nav>
        <div>
          <button className="btn btn-outline-secondary me-2">
            <FaFileExport className="me-2" />
            Export
          </button>
          <button className="btn btn-dark">
            <FaPlus className="me-2" />
            Add Leave
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="rounded-circle p-3 bg-success bg-opacity-10 me-3">
                  <FaUsers className="text-success" size={24} />
                </div>
                <div>
                  <h6 className="card-subtitle mb-1 text-muted">Total Present</h6>
                  <h4 className="card-title mb-0">{stats.totalPresent.current}/{stats.totalPresent.total}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="rounded-circle p-3 bg-primary bg-opacity-10 me-3">
                  <FaCalendarCheck className="text-primary" size={24} />
                </div>
                <div>
                  <h6 className="card-subtitle mb-1 text-muted">Planned Leaves</h6>
                  <h4 className="card-title mb-0">{stats.plannedLeaves}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="rounded-circle p-3 bg-warning bg-opacity-10 me-3">
                  <FaCalendarTimes className="text-warning" size={24} />
                </div>
                <div>
                  <h6 className="card-subtitle mb-1 text-muted">Unplanned Leaves</h6>
                  <h4 className="card-title mb-0">{stats.unplannedLeaves}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="rounded-circle p-3 bg-info bg-opacity-10 me-3">
                  <FaClock className="text-info" size={24} />
                </div>
                <div>
                  <h6 className="card-subtitle mb-1 text-muted">Pending Requests</h6>
                  <h4 className="card-title mb-0">{stats.pendingRequests}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row g-3 mb-4 align-items-center">
        <div className="col-sm-6 col-md-2">
          <select className="form-select">
            <option>10 Entries</option>
            <option>25 Entries</option>
            <option>50 Entries</option>
          </select>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input type="text" className="form-control border-start-0" placeholder="Search..." />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 ms-md-auto">
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="col-sm-6 col-md-2">
          <select className="form-select">
            <option>All Leave Types</option>
            <option>Medical Leave</option>
            <option>Vacation</option>
            <option>Personal Leave</option>
          </select>
        </div>
        <div className="col-sm-6 col-md-2">
          <select className="form-select">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="bg-light">
              <tr>
                <th>
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Days</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={entry.employee.avatar}
                        alt={entry.employee.name}
                        className="rounded-circle me-2"
                        width="32"
                        height="32"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/32';
                        }}
                      />
                      <div>
                        <div className="fw-medium">{entry.employee.name}</div>
                        <small className="text-muted">{entry.employee.department}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      {entry.leaveType}
                    </span>
                  </td>
                  <td>{entry.from}</td>
                  <td>{entry.to}</td>
                  <td>{entry.days} Days</td>
                  <td>
                    <button className="btn btn-sm btn-link text-body p-0 me-2">
                      <FaPen />
                    </button>
                    <button className="btn btn-sm btn-link text-danger p-0">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="text-muted">
          Showing 1 to {entriesPerPage} of {entries.length} entries
        </div>
        <nav>
          <ul className="pagination mb-0">
            <li className="page-item disabled">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeavePage;
