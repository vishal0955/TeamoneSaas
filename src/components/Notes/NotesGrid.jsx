import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaTrash, FaEllipsisV, FaPlus } from 'react-icons/fa';

const NotesApp = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Project Planning Meeting',
      description: 'Review project timeline and assign tasks to team members...',
      priority: 'Medium',
      category: 'Personal',
      starred: false
    },
    {
      id: 2,
      title: 'Client Presentation',
      description: 'Prepare slides for tomorrow\'s client meeting...',
      priority: 'High',
      category: 'Work',
      starred: false
    },
    {
      id: 3,
      title: 'Weekly Review',
      description: 'Document progress and plan next week\'s objectives...',
      priority: 'Low',
      category: 'Personal',
      starred: false
    }
  ]);

  const [categories] = useState([
    { id: 'all', name: 'All Notes', count: 24, icon: 'bi-sticky' },
    { id: 'important', name: 'Important', icon: 'bi-star-fill', color: '#FFD700' },
    { id: 'trash', name: 'Trash', icon: 'bi-trash' }
  ]);

  const [tags] = useState([
    { id: 'pending', name: 'Pending', color: '#0d6efd' },
    { id: 'on-hold', name: 'On Hold', color: '#dc3545' },
    { id: 'in-progress', name: 'In Progress', color: '#ffc107' },
    { id: 'done', name: 'Done', color: '#198754' }
  ]);

  const [priorities] = useState([
    { id: 'medium', name: 'Medium', color: '#ffc107' },
    { id: 'high', name: 'High', color: '#dc3545' },
    { id: 'low', name: 'Low', color: '#198754' }
  ]);

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-danger bg-opacity-25 text-danger';
      case 'Medium':
        return 'bg-warning bg-opacity-25 text-warning';
      case 'Low':
        return 'bg-success bg-opacity-25 text-success';
      default:
        return 'bg-secondary bg-opacity-25 text-secondary';
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-light border-end vh-100 p-0">
          <div className="d-flex align-items-center p-3">
            <div className="bg-primary bg-opacity-25 rounded p-2 me-2">
              <span className="text-primary fw-bold">GD</span>
            </div>
            <h5 className="mb-0">Notes</h5>
          </div>
          
          <div className="px-3 py-2">
            <h6 className="text-muted small mb-2">Notes List</h6>
            <ul className="list-group list-group-flush">
              {categories.map(category => (
                <li key={category.id} className={`list-group-item border-0 px-2 py-1 ${category.id === 'all' ? 'bg-dark text-white rounded' : ''}`}>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      {category.id === 'all' ? (
                        <i className="bi bi-sticky"></i>
                      ) : category.id === 'important' ? (
                        <i className="bi bi-star-fill" style={{ color: category.color }}></i>
                      ) : (
                        <i className="bi bi-trash"></i>
                      )}
                    </div>
                    <div className="flex-grow-1">{category.name}</div>
                    {category.id === 'all' && <div className="badge bg-dark text-white">{category.count}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="px-3 py-2">
            <h6 className="text-muted small mb-2">Tags</h6>
            <ul className="list-group list-group-flush">
              {tags.map(tag => (
                <li key={tag.id} className="list-group-item border-0 px-2 py-1">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <span className="dot" style={{ backgroundColor: tag.color, width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
                    </div>
                    <div>{tag.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="px-3 py-2">
            <h6 className="text-muted small mb-2">Priority</h6>
            <ul className="list-group list-group-flush">
              {priorities.map(priority => (
                <li key={priority.id} className="list-group-item border-0 px-2 py-1">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <span className="dot" style={{ backgroundColor: priority.color, width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
                    </div>
                    <div>{priority.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 vh-100 bg-body-tertiary">
          <div className="container-fluid p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="bulkActions" data-bs-toggle="dropdown" aria-expanded="false">
                  Bulk Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="bulkActions">
                  <li><a className="dropdown-item" href="#">Mark as Read</a></li>
                  <li><a className="dropdown-item" href="#">Delete Selected</a></li>
                </ul>
              </div>
              <button className="btn btn-light ms-2">Apply</button>
              <div className="ms-auto">
                <button className="btn btn-light me-2">
                  <i className="bi bi-download"></i> Export
                </button>
                <button className="btn btn-dark">
                  <i className="bi bi-plus"></i> Add Note
                </button>
              </div>
            </div>

            <h4 className="mb-3">Important Notes</h4>
            
            <div className="row g-3">
              {notes.map(note => (
                <div key={note.id} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-2">
                        <span className={`badge rounded-pill ${getPriorityClass(note.priority)}`}>{note.priority}</span>
                        <button className="btn btn-sm btn-light">
                          <FaEllipsisV />
                        </button>
                      </div>
                      <h5 className="card-title">{note.title}</h5>
                      <p className="card-text text-muted">{note.description}</p>
                      <div className="d-flex align-items-center mt-3">
                        <div className="me-2">
                          <div className="bg-secondary bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '30px', height: '30px' }}>
                            <span className="text-secondary small">JP</span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="small">{note.category}</div>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-light me-1">
                            <FaStar />
                          </button>
                          <button className="btn btn-sm btn-light">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;