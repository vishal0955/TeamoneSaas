import React, { useState } from 'react';
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

// import { useHistory } from 'react-router-dom';
const PROJECTS = [
  { id: null, name: 'None' }, // Option for no project
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
    project: null // Default to none
  });

  React.useEffect(() => {
    if (editTask) {
      setFormData({
        ...editTask,
        tags: Array.isArray(editTask.tags) ? editTask.tags : [],
        assignees: Array.isArray(editTask.assignees) ? editTask.assignees : [],
        project: editTask.project || null // Set project if exists
      });
    } else {
      setFormData({
        text: '',
        description: '',
        priority: PRIORITY_OPTIONS[0].toLowerCase(),
        dueDate: '',
        tags: [],
        assignees: [],
        project: null // Default to none
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
      project: null // Reset to none
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{editTask ? 'Edit Task' : 'Add New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                {PRIORITY_OPTIONS.map((priority) => (
                  <option key={priority} value={priority.toLowerCase()}>
                    {priority}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project</label>
              <select
                value={formData.project || ''} // Set to empty string if project is null
                onChange={(e) => setFormData({ ...formData, project: e.target.value ? Number(e.target.value) : null })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                {PROJECTS.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <select
              
                value={formData.tags}
                onChange={(e) => {
                  const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                  setFormData({ ...formData, tags: selectedOptions });
                }}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                {TAG_OPTIONS.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple tags</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Assignees</label>
              <select
            
                value={formData.assignees}
                onChange={(e) => {
                  const selectedOptions = Array.from(e.target.selectedOptions, (option) => Number(option.value));
                  setFormData({ ...formData, assignees: selectedOptions });
                }}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                {EMPLOYEES.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple assignees</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700"
            >
              {editTask ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



const TaskDropdown = ({ taskId, onEdit, onDelete, onView }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <div className="py-1" role="menu">
        <button
          onClick={onView}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          View Details
        </button>
        <button
          onClick={onEdit}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          role="menuitem"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const TodoApp = () => {

 

  // Inside your TodoApp component
  // const history = useHistory();
  
  // const handleViewDetails = (task) => {
  //   history.push(`/task/${task.id}`, { task }); // Pass the task data as state
  // };

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
  const [showPopup, setShowPopup] = useState(false);
  const [newTaskForm, setNewTaskForm] = useState({
    text: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    tags: [],
    assignees: []
  });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  const handleCheckboxChange = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getTagColor = (tag) => {
    switch(tag) {
      case 'Projects': return 'bg-green-100 text-green-600';
      case 'Urgent': return 'bg-red-100 text-red-600';
      case 'Internal': return 'bg-red-100 text-red-600';
      case 'In progress': return 'bg-purple-100 text-purple-600';
      case 'Reminder': return 'bg-blue-100 text-blue-600';
      case 'Completed': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const highPriorityTasks = tasks.filter(task => task.priority === 'high');
  const mediumPriorityTasks = tasks.filter(task => task.priority === 'medium');

  // Add this function with other handlers in TodoApp
  const handleAddTask = (newTaskData) => {
    const newTask = {
      id: tasks.length + 1,
      ...newTaskData,
      completed: false,
      // Ensure tags and assignees are arrays
      tags: Array.isArray(newTaskData.tags) ? newTaskData.tags : [],
      assignees: Array.isArray(newTaskData.assignees) ? newTaskData.assignees : []
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
    setShowPopup(false);
    setEditingTask(null);
  };

  // Add these handlers in TodoApp component
  const handleEdit = (task) => {
    setEditingTask(task);
    setShowPopup(true);
    setActiveDropdown(null);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setActiveDropdown(null);
  };

  const handleViewDetails = (task) => {
    // Implement view details functionality
    console.log('View details:', task);
    setActiveDropdown(null);
  };

  // Add this useEffect in TodoApp component
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.relative')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  // Add this helper function in TodoApp component
  const getAssigneeName = (id) => {
    const employee = EMPLOYEES.find(emp => emp.id === id);
    return employee ? employee.name : '';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 max-w-6xl">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <div className="bg-purple-600 w-8 h-8 rounded-md flex items-center justify-center mr-2">
              <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
            </div>
            <div className="flex text-gray-700 text-sm">
              <span>Application</span>
              <span className="mx-1">/</span>
              <span className="font-medium">Todo</span>
            </div>
          </div>
          <div className="md:ml-auto flex items-center">
            <div className="relative flex-grow md:flex-grow-0 justify-between">
              <input 
                type="text" 
                placeholder="Search Todo List" 
                className="w-full bg-white border border-gray-200 rounded-md py-1 px-3 pl-8 text-sm"
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="text-gray-400 absolute left-2 top-2 " 
              />
            </div>
            <button className="ml-2 bg-white border border-gray-200 rounded-md p-1">
              <FontAwesomeIcon icon={faCog} className="text-gray-500" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Total Todo Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 space-y-4 md:space-y-0">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold">Total Todo</h1>
              <span className="ml-2 text-gray-500 text-sm">41</span>
            </div>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <div>
                <span>Total Tasks:</span>
                <span className="font-medium ml-1">55</span>
              </div>
              <div>
                <span>Pending:</span>
                <span className="font-medium ml-1">15</span>
              </div>
              <div>
                <span>Completed:</span>
                <span className="font-medium ml-1">40</span>
              </div>
            </div>
          </div>

          {/* New Task Input */}
          <div className="mb-4 relative">
            <div className="flex items-center border border-gray-200 rounded-md bg-white pr-2">
              <div className="p-2">
                <FontAwesomeIcon icon={faPlus} className="text-gray-400 text-xs" />
              </div>
              <input 
                type="text" 
                placeholder="New task" 
                className="flex-grow py-2 px-1 text-sm border-none outline-none cursor-pointer"
                value={newTask}
                onClick={() => setShowPopup(true)}
                readOnly
              />
            </div>
          </div>

          {/* Priority Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-500">Priority</span>
              <button 
                className={`px-3 py-1 text-xs rounded-md ${activeFilter === 'all' ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-3 py-1 text-xs rounded-md ${activeFilter === 'high' ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setActiveFilter('high')}
              >
                High
              </button>
              <button 
                className={`px-3 py-1 text-xs rounded-md ${activeFilter === 'medium' ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setActiveFilter('medium')}
              >
                Medium
              </button>
              <button 
                className={`px-3 py-1 text-xs rounded-md ${activeFilter === 'low' ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setActiveFilter('low')}
              >
                Low
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-wrap items-center gap-2">
  {/* Due Date Filter */}
  <div>
    <label className="text-xs text-gray-500">Due Date</label>
    <select
      value={dueDateFilter}
      onChange={(e) => setDueDateFilter(e.target.value)}
      className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-xs mt-1"
    >
      <option value="">All</option>
      {Array.from(new Set(tasks.map((task) => task.dueDate))).map((date) => (
        <option key={date} value={date}>
          {new Date(date).toLocaleDateString()}
        </option>
      ))}
    </select>
  </div>

  {/* All Tags Filter */}
  <div>
    <label className="text-xs text-gray-500">All Tags</label>
    <select
      value={tagFilter}
      onChange={(e) => setTagFilter(e.target.value)}
      className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-xs mt-1"
    >
      <option value="">All</option>
      {TAG_OPTIONS.map((tag) => (
        <option key={tag} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  </div>

  {/* Sort By Filter */}
  <div>
    <label className="text-xs text-gray-500">Sort By</label>
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-xs mt-1"
    >
      <option value="createdDate">Created Date</option>
      <option value="dueDate">Due Date</option>
    </select>
  </div>
</div>

            </div>
          </div>

          {/* High Priority Section */}
          {(activeFilter === 'all' || activeFilter === 'high') && (
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faChevronDown} className="text-xs mr-2 text-gray-500" />
                <h2 className="text-sm font-semibold">High</h2>
                <span className="ml-2 text-xs text-gray-500">{highPriorityTasks.length}</span>
                <div className="ml-auto">
                  <button 
                    className="text-xs text-blue-600 mr-2"
                    onClick={() => setShowPopup(true)}
                  >
                    Add New
                  </button>
                  <button className="text-xs text-gray-500">See All</button>
                </div>
              </div>

              {/* High Priority Tasks */}
              {highPriorityTasks.map((task, index) => (
                <div key={task.id} className={`border border-gray-200 rounded-md bg-white ${index < highPriorityTasks.length - 1 ? 'mb-2' : ''}`}>
                  <div className="flex items-center p-3">
                    <div className="mr-3">
                      <input 
                        type="checkbox" 
                        checked={task.completed}
                        onChange={() => handleCheckboxChange(task.id)}
                        className="w-4 h-4 rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className={`font-medium text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.text}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-gray-500">{task.dueDate}</span>
                      {task.tags.map(tag => (
                        <span key={tag} className={`px-2 py-1 ${getTagColor(tag)} text-xs rounded`}>
                          {tag}
                        </span>
                      ))}
                      <div className="flex -space-x-2">
                        {task.assignees.map(assigneeId => (
                          <div 
                            key={assigneeId}
                            className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium"
                            title={getAssigneeName(assigneeId)}
                          >
                            {getAssigneeName(assigneeId).charAt(0)}
                          </div>
                        ))}
                      </div>
                      <div className="relative">
                        <button 
                          className="text-gray-400 p-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === task.id ? null : task.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                        {activeDropdown === task.id && (
                          <TaskDropdown
                            taskId={task.id}
                            onEdit={() => handleEdit(task)}
                            onDelete={() => handleDelete(task.id)}
                            onView={() => handleViewDetails(task)}
                          />
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
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 text-gray-500" />
                <h2 className="text-sm font-semibold">Medium</h2>
                <span className="ml-2 text-xs text-gray-500">{mediumPriorityTasks.length}</span>
                <div className="ml-auto">
                  <button 
                    className="text-xs text-blue-600 mr-2"
                    onClick={() => setShowPopup(true)}
                  >
                    Add New
                  </button>
                  <button className="text-xs text-gray-500">See All</button>
                </div>
              </div>

              {/* Medium Priority Tasks */}
              {mediumPriorityTasks.map(task => (
                <div key={task.id} className="border border-gray-200 rounded-md bg-white">
                  <div className="flex items-center p-3">
                    <div className="mr-3">
                      <input 
                        type="checkbox" 
                        checked={task.completed}
                        onChange={() => handleCheckboxChange(task.id)}
                        className="w-4 h-4 rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className={`font-medium text-sm ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.text}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-gray-500">{task.dueDate}</span>
                      {task.tags.map(tag => (
                        <span key={tag} className={`px-2 py-1 ${getTagColor(tag)} text-xs rounded`}>
                          {tag}
                        </span>
                      ))}
                      <div className="flex -space-x-2">
                        {task.assignees.map(assigneeId => (
                          <div 
                            key={assigneeId}
                            className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium"
                            title={getAssigneeName(assigneeId)}
                          >
                            {getAssigneeName(assigneeId).charAt(0)}
                          </div>
                        ))}
                      </div>
                      <div className="relative">
                        <button 
                          className="text-gray-400 p-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === task.id ? null : task.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                        {activeDropdown === task.id && (
                          <TaskDropdown 
                            taskId={task.id}
                            onEdit={() => handleEdit(task)}
                            onDelete={() => handleDelete(task.id)}
                            onView={() => handleViewDetails(task)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <TaskFormPopup 
        isOpen={showPopup} 
        onClose={() => {
          setShowPopup(false);
          setEditingTask(null);
          setNewTask('');
        }} 
        onSubmit={handleAddTask}
        editTask={editingTask}
      />
    </div>
  );
};

export default TodoApp;