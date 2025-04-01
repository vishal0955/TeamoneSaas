

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Plus, Search, Filter, SortAsc, Users, XCircle, Settings, ChevronDown, MoreVertical, FileText, Zap, Pause, Check, CreditCard, Calendar, Moon, Sun } from 'lucide-react';

const KanbanBoard = () => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Add task states
  const [newTaskText, setNewTaskText] = useState({});
  const [isAddingTask, setIsAddingTask] = useState({});

  // Add column state
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [newColumnColor, setNewColumnColor] = useState('bg-gray-500');

  // Initial board data
  const [columns, setColumns] = useState({
    'planning': {
      id: 'planning',
      title: 'PLANNING',
      color: 'bg-indigo-500',
      tasks: []
    },
    'in-progress': {
      id: 'in-progress',
      title: 'IN-PROGRESS',
      color: 'bg-yellow-500',
      tasks: []
    },
    'on-hold': {
      id: 'on-hold',
      title: 'ON-HOLD',
      color: 'bg-red-500',
      tasks: []
    },
    'completed': {
      id: 'completed',
      title: 'COMPLETED',
      color: 'bg-blue-500',
      tasks: []
    },
    'billing': {
      id: 'billing',
      title: 'BILLING',
      color: 'bg-green-500',
      tasks: [
        {
          id: '315317',
          title: '315317 - XYz tech ...',
          project: 'All Projects',
          priority: 'High',
          progress: 100,
          assignee: 'B'
        }
      ]
    }
  });

  // Start adding a task
  const startAddTask = (columnId) => {
    setIsAddingTask({...isAddingTask, [columnId]: true});
    setNewTaskText({...newTaskText, [columnId]: ''});
  };

  // Cancel adding a task
  const cancelAddTask = (columnId) => {
    setIsAddingTask({...isAddingTask, [columnId]: false});
  };

  // Handle adding a new task
  const handleAddTask = (columnId) => {
    if (!newTaskText[columnId] || newTaskText[columnId].trim() === '') {
      cancelAddTask(columnId);
      return;
    }

    const newTaskId = `task-${Date.now()}`;
    const newTask = {
      id: newTaskId,
      title: newTaskText[columnId],
      project: 'All Projects',
      priority: 'Medium',
      progress: 0,
      assignee: ''
    };

    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        tasks: [...columns[columnId].tasks, newTask]
      }
    });

    cancelAddTask(columnId);
  };

  // Start adding a column
  const startAddColumn = () => {
    setIsAddingColumn(true);
    setNewColumnTitle('');
  };

  // Cancel adding a column
  const cancelAddColumn = () => {
    setIsAddingColumn(false);
  };

  // Handle adding a new column
  const handleAddColumn = () => {
    if (!newColumnTitle || newColumnTitle.trim() === '') {
      cancelAddColumn();
      return;
    }

    const newColumnId = `column-${Date.now()}`;
    setColumns({
      ...columns,
      [newColumnId]: {
        id: newColumnId,
        title: newColumnTitle.toUpperCase(),
        color: newColumnColor,
        tasks: []
      }
    });

    cancelAddColumn();
  };

  // Handle drag and drop
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) return;

    // Moving in the same list
    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const newTasks = Array.from(column.tasks);
      const [removed] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          tasks: newTasks
        }
      });
    }
    // Moving from one list to another
    else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceTasks = Array.from(sourceColumn.tasks);
      const destTasks = Array.from(destColumn.tasks);
      const [removed] = sourceTasks.splice(source.index, 1);

      destTasks.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceTasks
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destTasks
        }
      });
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Theme-dependent styles
  const themeStyles = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
    text: isDarkMode ? 'text-white' : 'text-gray-800',
    navBorder: isDarkMode ? 'border-gray-700' : 'border-gray-300',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    buttonBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
    buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300',
    inputBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
    secondaryText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
  };

  return (
    <div className={`flex flex-col h-screen ${themeStyles.background} ${themeStyles.text}`}>
      {/* Top Navigation */}
      {/* <div className={`flex items-center p-4 border-b ${themeStyles.navBorder}`}>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Staff Scheduling
          </span>
          <span className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Billing Last Week
          </span>
          <span className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Board
          </span>
          <span>12 more...</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full ${themeStyles.buttonBg}`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="flex items-center">
            <Search className="w-5 h-5 mr-2" />
            <span>Search</span>
          </div>
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded`}>Hide · 1</button>
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center`}>
            <Settings className="w-4 h-4 mr-1" />
            Customize
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded flex items-center">
            Add Task
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div> */}

      {/* Filter Bar */}
      <div className={`flex items-center p-3 border-b ${themeStyles.navBorder}`}>
        <div className="flex items-center space-x-2">
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
            <span>Group: Status</span>
          </button>
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
            <span>Subtasks: Collapse all</span>
          </button>
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
            <Filter className="w-4 h-4 mr-1" />
            <span>Filter</span>
          </button>
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
            <SortAsc className="w-4 h-4 mr-1" />
            <span>Sort</span>
          </button>
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
            <Users className="w-4 h-4 mr-1" />
            <span>Me mode</span>
          </button>
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
            <span>Assignee</span>
          </button>
          <button className={`px-3 py-1 ${themeStyles.buttonBg} rounded flex items-center text-sm`}>
            <XCircle className="w-4 h-4 mr-1" />
            <span>Closed</span>
          </button>
        </div>
        <div className="flex-1 ml-4">
          <input
            type="text"
            placeholder="Search..."
            className={`px-3 py-1 ${themeStyles.inputBg} ${themeStyles.inputBorder} border rounded w-64`}
          />
        </div>
        <button className="px-2 py-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex p-4 space-x-4 overflow-x-auto flex-1">
          {Object.values(columns).map(column => (
            <div key={column.id} className="w-64 flex-shrink-0">
              <div className="flex items-center mb-2">
                <div className={`w-6 h-6 mr-2 rounded-full ${column.color} flex items-center justify-center text-white`}>
                  {column.id === 'planning' && <FileText className="w-4 h-4" />}
                  {column.id === 'in-progress' && <Zap className="w-4 h-4" />}
                  {column.id === 'on-hold' && <Pause className="w-4 h-4" />}
                  {column.id === 'completed' && <Check className="w-4 h-4" />}
                  {column.id === 'billing' && <CreditCard className="w-4 h-4" />}
                </div>
                <span className="font-bold">{column.title}</span>
                <span className={`ml-2 ${themeStyles.secondaryText}`}>{column.tasks.length}</span>
                <div className="flex-1"></div>
                <button className={`p-1 ${themeStyles.secondaryText} hover:${themeStyles.text}`}>
                  <MoreVertical className="w-5 h-5" />
                </button>
                <button 
                  className={`p-1 ${themeStyles.secondaryText} hover:${themeStyles.text}`}
                  onClick={() => startAddTask(column.id)}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="min-h-[200px]"
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow`}
                          >
                            <div className="text-sm">{task.title}</div>
                            <div className={`mt-2 text-xs ${themeStyles.secondaryText}`}>
                              <span>In </span>
                              <span className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-1 rounded`}>
                                {task.project}
                              </span>
                            </div>
                            <div className="mt-2 flex items-center">
                              {task.assignee && (
                                <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
                                  {task.assignee}
                                </div>
                              )}
                              <div className="flex items-center">
                                <Calendar className={`w-4 h-4 mr-1 ${themeStyles.secondaryText}`} />
                              </div>
                              {task.priority === 'High' && (
                                <div className="ml-2 flex items-center">
                                  <span className="text-yellow-500 mr-1">⚑</span>
                                  <span className="text-yellow-500 text-xs">{task.priority}</span>
                                </div>
                              )}
                            </div>
                            {task.progress > 0 && (
                              <div className="mt-2">
                                <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1`}>
                                  <div
                                    className="bg-green-500 h-1 rounded-full"
                                    style={{ width: `${task.progress}%` }}
                                  ></div>
                                </div>
                                <div className="text-xs text-right mt-1 text-green-500">{task.progress}%</div>
                              </div>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    
                    {/* Inline Task Adding */}
                    {isAddingTask[column.id] ? (
                      <div className={`${themeStyles.cardBg} p-3 mb-2 rounded shadow`}>
                        <input
                          type="text"
                          className={`w-full p-2 mb-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
                          placeholder="Enter task title..."
                          value={newTaskText[column.id] || ''}
                          onChange={(e) => setNewTaskText({...newTaskText, [column.id]: e.target.value})}
                          autoFocus
                        />
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => cancelAddTask(column.id)}
                            className={`px-2 py-1 text-xs ${themeStyles.secondaryText}`}
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleAddTask(column.id)}
                            className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => startAddTask(column.id)}
                        className={`w-full py-2 ${themeStyles.secondaryText} hover:${themeStyles.text} text-sm flex items-center justify-center`}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add Task
                      </button>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          ))}

          {/* Add New Column */}
          {isAddingColumn ? (
            <div className="w-64 flex-shrink-0">
              <div className={`${themeStyles.cardBg} p-3 rounded shadow`}>
                <input
                  type="text"
                  className={`w-full p-2 mb-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
                  placeholder="Enter column title..."
                  value={newColumnTitle}
                  onChange={(e) => setNewColumnTitle(e.target.value)}
                  autoFocus
                />
                <div className="mb-3">
                  <label className="block text-sm mb-1">Color</label>
                  <select
                    value={newColumnColor}
                    onChange={(e) => setNewColumnColor(e.target.value)}
                    className={`w-full p-2 text-sm border ${themeStyles.inputBorder} rounded ${themeStyles.inputBg}`}
                  >
                    <option value="bg-indigo-500">Indigo</option>
                    <option value="bg-blue-500">Blue</option>
                    <option value="bg-green-500">Green</option>
                    <option value="bg-yellow-500">Yellow</option>
                    <option value="bg-red-500">Red</option>
                    <option value="bg-purple-500">Purple</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={cancelAddColumn}
                    className={`px-2 py-1 text-xs ${themeStyles.secondaryText}`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddColumn}
                    className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={startAddColumn}
              className={`w-64 h-10 flex-shrink-0 flex items-center justify-center rounded ${themeStyles.cardBg} ${themeStyles.secondaryText} hover:${themeStyles.text}`}
            >
              <Plus className="w-5 h-5 mr-1" />
              Add group
            </button>
          )}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;