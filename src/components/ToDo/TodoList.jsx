import React, { useState } from 'react';
import { Search, Plus, MoreVertical } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Design the payment process', assignees: ['JD', 'AK'], status: 'In Progress' },
    { id: 2, text: 'Write test cases for API', assignees: ['AK'], status: 'Todo' },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-4 bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Todo Task</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search task..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap">
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">All Tasks</span>
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
              {todos.length}
            </span>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 break-words">
                    {todo.text}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="flex -space-x-2">
                      {todo.assignees.map((assignee, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                        >
                          {assignee}
                        </div>
                      ))}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      todo.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {todo.status}
                    </span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 self-start">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
          Load More Tasks
        </button>
      </div>

      {/* Empty State */}
      {todos.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500">No tasks found. Create a new task to get started.</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;