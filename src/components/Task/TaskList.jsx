import React, { useState } from 'react';
import "./task.css";
import AddTask from './AddTask'; // Import the AddTask component

const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container py-5">
        <div className="tasks-container">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">Tasks List</h4>
            <button className="btn new-task-btn" onClick={handleOpenModal}>
              <i className="bi bi-plus" /> New Task
            </button>
          </div>
          {/* Search and Filters */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="search-container">
              <input
                type="text"
                className="search-box"
                placeholder="Search tasks..."
              />
            </div>
            <div className="d-flex gap-2">
              <select className="form-select filter-select">
                <option>All Status</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
              <select className="form-select filter-select">
                <option>All Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          {/* Tasks Table */}
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th style={{ width: 40 }}>
                    <input type="checkbox" className="form-check-input" />
                  </th>
                  <th>Task</th>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Assigned To</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Task Rows */}
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>Design System Update</td>
                  <td>Brand Refresh Project</td>
                  <td>
                    <span className="status-badge status-in-progress">
                      In Progress
                    </span>
                  </td>
                  <td>
                    <i className="bi bi-arrow-up priority-high" /> High
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://ui-avatars.com/api/?name=Sarah+Chen"
                        className="avatar"
                      />
                      <span>Sarah Chen</span>
                    </div>
                  </td>
                  <td>Dec 25, 2023</td>
                  <td>
                    <a href="#" className="action-btn">
                      <i className="bi bi-pencil" />
                    </a>
                    <a href="#" className="action-btn text-danger">
                      <i className="bi bi-trash" />
                    </a>
                  </td>
                </tr>
                {/* Add more task rows as needed */}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="text-muted">Showing 1 to 3 of 12 results</div>
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
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

      {/* Modal for AddTask */}
      {isModalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Task</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <AddTask />
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default TaskList;