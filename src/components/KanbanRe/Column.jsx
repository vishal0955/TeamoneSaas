// File: components/KanbanBoard/Column.jsx
import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, MoreVertical } from 'lucide-react';
import { addTask } from '../../redux/slices/KanbanSlice';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import { getThemeStyles } from './Kanbanboard';
import { columnIcons } from './ProjectKanban';

const Column = ({ column, index, columnId, TaskComponent = Task }) => {
  const tasks = useSelector(state => state.kanban.tasks);
  const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
  const dispatch = useDispatch();
  
  const [isAddingTask, setIsAddingTask] = useState(false);
  const ColumnIcon = columnIcons[columnId];
  
  const handleAddTask = (taskData) => {
    dispatch(addTask({
      columnId,
      ...taskData
    }));
    setIsAddingTask(false);
  };

  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="w-64 flex-shrink-0"
        >
          <div 
            className="flex items-center mb-2" 
            {...provided.dragHandleProps}
          >
            <div className={`w-6 h-6 mr-2 rounded-full ${column.color} flex items-center justify-center text-white`}>
              {ColumnIcon && <ColumnIcon className="w-4 h-4" />}
            </div>
            <span className="font-bold">{column.title}</span>
            <span className={`ml-2 ${themeStyles.secondaryText}`}>
              {column.taskIds?.length || 0}
            </span>
            <div className="flex-1"></div>
            <button className={`p-1 ${themeStyles.secondaryText} hover:${themeStyles.text}`}>
              <MoreVertical className="w-5 h-5" />
            </button>
            <button 
              className={`p-1 ${themeStyles.secondaryText} hover:${themeStyles.text}`}
              onClick={() => setIsAddingTask(true)}
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <Droppable droppableId={columnId} type="task">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="min-h-[200px]"
              >
                {column.taskIds?.map((taskId, taskIndex) => (
                  tasks[taskId] ? (
                    <TaskComponent 
                      key={taskId} 
                      task={tasks[taskId]} 
                      index={taskIndex} 
                      columnId={columnId}
                    />
                  ) : null
                ))}
                {provided.placeholder}
                
                {isAddingTask ? (
                  <AddTaskForm 
                    onAdd={handleAddTask}
                    onCancel={() => setIsAddingTask(false)}
                  />
                ) : (
                  <button
                    onClick={() => setIsAddingTask(true)}
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
      )}
    </Draggable>
  );
};

export default Column;
