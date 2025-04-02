import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faSearch, 
  faCog, 
  faPlus, 
  faCalendar, 
  faChevronDown, 
  faChevronRight, 
  faEllipsisV 
} from '@fortawesome/free-solid-svg-icons';

const PROJECTS = [
  { id: null, name: 'None' },
  { id: 1, name: 'Project Alpha' },
  { id: 2, name: 'Project Beta' },
  { id: 3, name: 'Project Gamma' },
];

const EMPLOYEES = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Mike Johnson' },
  { id: 4, name: 'Sarah Williams' }
];

const PRIORITY_OPTIONS = ['High', 'Medium', 'Low'];
const TAG_OPTIONS = ['Projects', 'Urgent', 'Internal', 'In progress', 'Reminder', 'Completed'];

const TaskFormPopup = ({ isOpen, onClose, onSubmit, editTask }) => {
  const [formData, setFormData] = useState({
    text: '',
    description: '',
    priority: PRIORITY_OPTIONS[0].toLowerCase(),
    dueDate: '',
    tags: [],
    assignees: [],
    project: null
  });

  useEffect(() => {
    if (editTask) {
      setFormData({
        ...editTask,
        tags: Array.isArray(editTask.tags) ? editTask.tags : [],
        assignees: Array.isArray(editTask.assignees) ? editTask.assignees : [],
        project: editTask.project || null
      });
    } else {
      setFormData({
        text: '',
        description: '',
        priority: PRIORITY_OPTIONS[0].toLowerCase(),
        dueDate: '',
        tags: [],
        assignees: [],
        project: null
      });
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      text: '',
      description: '',
      priority: PRIORITY_OPTIONS[0].toLowerCase(),
      dueDate: '',
      tags: [],
      assignees: [],
      project: null
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-indigo-600">
              {editTask ? 'Edit Task' : 'Add New Task'}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {/* Title */}
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="form-control"
                  required
                />
              </div>
              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="form-control"
                  rows="3"
                />
              </div>
              <div className="row">
                {/* Priority */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="form-select"
                  >
                    {PRIORITY_OPTIONS.map((priority) => (
                      <option key={priority} value={priority.toLowerCase()}>
                        {priority}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Due Date */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Due Date</label>
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                {/* Project */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Project</label>
                  <select
                    value={formData.project || ''}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value ? Number(e.target.value) : null })}
                    className="form-select"
                  >
                    {PROJECTS.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Tags */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tags</label>
                  <select
                    multiple
                    value={formData.tags}
                    onChange={(e) => {
                      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                      setFormData({ ...formData, tags: selectedOptions });
                    }}
                    className="form-select"
                  >
                    {TAG_OPTIONS.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                  <small className="form-text text-muted">
                    Hold Ctrl/Cmd to select multiple tags
                  </small>
                </div>
              </div>
              {/* Assignees */}
              <div className="mb-3">
                <label className="form-label">Assignees</label>
                <select
                  multiple
                  value={formData.assignees}
                  onChange={(e) => {
                    const selectedOptions = Array.from(e.target.selectedOptions, (option) => Number(option.value));
                    setFormData({ ...formData, assignees: selectedOptions });
                  }}
                  className="form-select"
                >
                  {EMPLOYEES.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
                <small className="form-text text-muted">
                  Hold Ctrl/Cmd to select multiple assignees
                </small>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={onClose} className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {editTask ? 'Update Task' : 'Add Task'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const TaskDropdown = ({ taskId, onEdit, onDelete, onView }) => {
  return (
    <div className="dropdown-menu show">
      <button
        onClick={onView}
        className="dropdown-item"
        type="button"
      >
        View Details
      </button>
      <button
        onClick={onEdit}
        className="dropdown-item"
        type="button"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="dropdown-item text-danger"
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Finalize project proposal',
      priority: 'high',
      completed: false,
      dueDate: '2025-01-15',
      tags: ['Projects', 'Urgent'],
      assignees: [1, 2],
    },
    {
      id: 2,
      text: 'Submit to supervisor by EOD',
      priority: 'high',
      completed: false,
      dueDate: '2024-05-23',
      tags: ['Internal', 'In progress'],
      assignees: [1],
    },
    {
      id: 3,
      text: 'Check and respond to emails',
      priority: 'medium',
      completed: true,
      dueDate: '2025-03-18',
      tags: ['Reminder', 'Completed'],
      assignees: [1, 2],
    },
  ]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [dueDateFilter, setDueDateFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [sortBy, setSortBy] = useState('createdDate');

  const filteredTasks = tasks
    .filter((task) => {
      if (activeFilter !== 'all' && task.priority !== activeFilter) return false;
      if (dueDateFilter && task.dueDate !== dueDateFilter) return false;
      if (tagFilter && !task.tags.includes(tagFilter)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'createdDate') return a.id - b.id;
      if (sortBy === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
      return 0;
    });

  const [newTask, setNewTask] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  const handleClose = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleCheckboxChange = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getTagColor = (tag) => {
    switch(tag) {
      case 'Projects': return 'badge bg-success text-light';
      case 'Urgent': return 'badge bg-danger text-light';
      case 'Internal': return 'badge bg-danger text-light';
      case 'In progress': return 'badge bg-primary text-light';
      case 'Reminder': return 'badge bg-info text-dark';
      case 'Completed': return 'badge bg-success text-light';
      default: return 'badge bg-secondary text-light';
    }
  };

  const highPriorityTasks = tasks.filter(task => task.priority === 'high');
  const mediumPriorityTasks = tasks.filter(task => task.priority === 'medium');

  const handleAddTask = (newTaskData) => {
    const newTaskObj = {
      id: tasks.length + 1,
      ...newTaskData,
      completed: false,
      tags: Array.isArray(newTaskData.tags) ? newTaskData.tags : [],
      assignees: Array.isArray(newTaskData.assignees) ? newTaskData.assignees : []
    };
    setTasks(prevTasks => [...prevTasks, newTaskObj]);
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
    setActiveDropdown(null);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setActiveDropdown(null);
  };

  const handleViewDetails = (task) => {
    console.log('View details:', task);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.position-relative')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  const getAssigneeName = (id) => {
    const employee = EMPLOYEES.find(emp => emp.id === id);
    return employee ? employee.name : '';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-2 max-w-8xl">
        {/* Header */}
        <header className="row align-items-center mb-4">
          <div className="col-md-6">
            <h1 className="h3 mb-0">Todo</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end">
            <div className="input-group me-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search Todo List" 
              />
            </div>
            <button className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faCog} />
            </button>
          </div>
        </header>

        {/* Stats */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h2 className="h5 mb-0">Total Todo <small className="text-muted">41</small></h2>
          </div>
          <div className="col-md-6 text-md-end">
            <span className="me-3">Total Tasks: <strong>55</strong></span>
            <span className="me-3">Pending: <strong>15</strong></span>
            <span>Completed: <strong>40</strong></span>
          </div>
        </div>

        {/* New Task Input */}
        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <FontAwesomeIcon icon={faPlus} className="text-muted" />
            </span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="New task" 
              value={newTask}
              onClick={() => setIsModalOpen(true)}
              readOnly
            />
          </div>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-6 mb-2 mb-md-0">
            <div className="btn-group" role="group">
              <button 
                className={`btn btn-sm ${activeFilter === 'all' ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`btn btn-sm ${activeFilter === 'high' ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setActiveFilter('high')}
              >
                High
              </button>
              <button 
                className={`btn btn-sm ${activeFilter === 'medium' ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setActiveFilter('medium')}
              >
                Medium
              </button>
              <button 
                className={`btn btn-sm ${activeFilter === 'low' ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setActiveFilter('low')}
              >
                Low
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-2">
              <div className="col-12 col-sm-4">
                <label className="form-label small">Due Date</label>
                <select
                  value={dueDateFilter}
                  onChange={(e) => setDueDateFilter(e.target.value)}
                  className="form-select form-select-sm"
                >
                  <option value="">All</option>
                  {Array.from(new Set(tasks.map((task) => task.dueDate))).map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-sm-4">
                <label className="form-label small">All Tags</label>
                <select
                  value={tagFilter}
                  onChange={(e) => setTagFilter(e.target.value)}
                  className="form-select form-select-sm"
                >
                  <option value="">All</option>
                  {TAG_OPTIONS.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-sm-4">
                <label className="form-label small">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-select form-select-sm"
                >
                  <option value="createdDate">Created Date</option>
                  <option value="dueDate">Due Date</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Task Sections */}
        {/* High Priority Section */}
        {(activeFilter === 'all' || activeFilter === 'high') && (
          <div className="mb-5">
            <div className="d-flex align-items-center mb-2">
              <FontAwesomeIcon icon={faChevronDown} className="me-2 text-muted" />
              <h3 className="h6 mb-0">High</h3>
              <span className="ms-2 text-muted small">{highPriorityTasks.length}</span>
              <div className="ms-auto">
                <button 
                  className="btn btn-link btn-sm text-decoration-none"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add New
                </button>
                <button className="btn btn-link btn-sm text-decoration-none text-muted">
                  See All
                </button>
              </div>
            </div>
            {highPriorityTasks.map((task, index) => (
              <div key={task.id} className="card mb-2">
                <div className="card-body d-flex align-items-center p-2">
                  <div className="form-check me-3">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <p className={`mb-0 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                      {task.text}
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted small">{task.dueDate}</span>
                    {task.tags.map(tag => (
                      <span key={tag} className={`${getTagColor(tag)} small px-2 py-1 rounded`}>
                        {tag}
                      </span>
                    ))}
                    <div className="d-flex">
                      {task.assignees.map(assigneeId => (
                        <div 
                          key={assigneeId}
                          className="rounded-circle border border-white bg-secondary text-white d-flex align-items-center justify-content-center me-n1"
                          style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                          title={getAssigneeName(assigneeId)}
                        >
                          {getAssigneeName(assigneeId).charAt(0)}
                        </div>
                      ))}
                    </div>
                    <div className="position-relative">
                      <button 
                        className="btn btn-sm btn-light"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === task.id ? null : task.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </button>
                      {activeDropdown === task.id && (
                        <div className="position-absolute mt-2" style={{left:"-120px"}}>
                          <TaskDropdown
                            taskId={task.id}
                            onEdit={() => handleEdit(task)}
                            onDelete={() => handleDelete(task.id)}
                            onView={() => handleViewDetails(task)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Medium Priority Section */}
        {(activeFilter === 'all' || activeFilter === 'medium') && (
          <div>
            <div className="d-flex align-items-center mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-2 text-muted" />
              <h3 className="h6 mb-0">Medium</h3>
              <span className="ms-2 text-muted small">{mediumPriorityTasks.length}</span>
              <div className="ms-auto">
                <button 
                  className="btn btn-link btn-sm text-decoration-none"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add New
                </button>
                <button className="btn btn-link btn-sm text-decoration-none text-muted">
                  See All
                </button>
              </div>
            </div>
            {mediumPriorityTasks.map(task => (
              <div key={task.id} className="card mb-2">
                <div className="card-body d-flex align-items-center p-2">
                  <div className="form-check me-3">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <p className={`mb-0 ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                      {task.text}
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted small">{task.dueDate}</span>
                    {task.tags.map(tag => (
                      <span key={tag} className={`${getTagColor(tag)} small px-2 py-1 rounded`}>
                        {tag}
                      </span>
                    ))}
                    <div className="d-flex">
                      {task.assignees.map(assigneeId => (
                        <div 
                          key={assigneeId}
                          className="rounded-circle border border-white bg-secondary text-white d-flex align-items-center justify-content-center me-n1"
                          style={{ width: '32px', height: '32px', fontSize: '0.75rem' }}
                          title={getAssigneeName(assigneeId)}
                        >
                          {getAssigneeName(assigneeId).charAt(0)}
                        </div>
                      ))}
                    </div>
                    <div className="position-relative">
                      <button 
                        className="btn btn-sm btn-light"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === task.id ? null : task.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </button>
                      {activeDropdown === task.id && (
                        <div className="position-absolute mt-2" style={{left:"-120px"}}>
                          <TaskDropdown 
                            taskId={task.id}
                            onEdit={() => handleEdit(task)}
                            onDelete={() => handleDelete(task.id)}
                            onView={() => handleViewDetails(task)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal for Task Form */}
      {isModalOpen && (
        <TaskFormPopup 
          isOpen={isModalOpen} 
          onClose={() => {
            setIsModalOpen(false);
            setEditingTask(null);
            setNewTask('');
          }} 
          onSubmit={handleAddTask}
          editTask={editingTask}
        />
      )}
    </div>
  );
};

export default TodoApp;
