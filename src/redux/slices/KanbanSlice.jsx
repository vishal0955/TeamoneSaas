// File: features/kanban/kanbanSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  columns: {},
  columnOrder: [],
  tasks: {},
  isDarkMode: false,
};

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    // Toggle theme between light and dark mode
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    
    // Set initial board data
    setBoard: (state, action) => {
      const { columns, columnOrder, tasks } = action.payload;
      state.columns = columns;
      state.columnOrder = columnOrder;
      state.tasks = tasks;
    },
    
    // Add a new column
    addColumn: (state, action) => {
      const { title, color } = action.payload;
      const id = `column-${nanoid()}`;
      
      state.columns[id] = {
        id,
        title: title.toUpperCase(),
        color,
        taskIds: []
      };
      
      state.columnOrder.push(id);
    },
    
    // Add a new task to a specific column
    addTask: (state, action) => {
      const { columnId, title, ...metadata } = action.payload;
      const taskId = `task-${nanoid()}`;
      
      // Create the new task
      state.tasks[taskId] = {
        id: taskId,
        title,
        ...metadata
      };
      
      // Add the task ID to the column's taskIds array
      state.columns[columnId].taskIds.push(taskId);
    },
    
    // Move task within the same column or between columns
    moveTask: (state, action) => {
      const { sourceId, destinationId, sourceIndex, destinationIndex } = action.payload;
      
      // Ensure taskIds arrays exist
      if (!state.columns[sourceId].taskIds) {
        state.columns[sourceId].taskIds = [];
      }
      if (!state.columns[destinationId].taskIds) {
        state.columns[destinationId].taskIds = [];
      }

      // Moving in the same column
      if (sourceId === destinationId) {
        const column = state.columns[sourceId];
        const newTaskIds = Array.from(column.taskIds || []);
        const [removed] = newTaskIds.splice(sourceIndex, 1);
        newTaskIds.splice(destinationIndex, 0, removed);
        
        state.columns[sourceId].taskIds = newTaskIds;
      } 
      // Moving between columns
      else {
        const sourceColumn = state.columns[sourceId];
        const destColumn = state.columns[destinationId];
        const sourceTaskIds = Array.from(sourceColumn.taskIds || []);
        const destTaskIds = Array.from(destColumn.taskIds || []);
        
        const [removed] = sourceTaskIds.splice(sourceIndex, 1);
        destTaskIds.splice(destinationIndex, 0, removed);
        
        state.columns[sourceId].taskIds = sourceTaskIds;
        state.columns[destinationId].taskIds = destTaskIds;
      }
    },
    
    // Move column position in the columnOrder array
    moveColumn: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const newColumnOrder = Array.from(state.columnOrder);
      const [removed] = newColumnOrder.splice(sourceIndex, 1);
      newColumnOrder.splice(destinationIndex, 0, removed);
      
      state.columnOrder = newColumnOrder;
    },
    
    // Update task details
    updateTask: (state, action) => {
      const { taskId, updates } = action.payload;
      state.tasks[taskId] = {
        ...state.tasks[taskId],
        ...updates
      };
    },
    
    // Update column details
    updateColumn: (state, action) => {
      const { columnId, updates } = action.payload;
      state.columns[columnId] = {
        ...state.columns[columnId],
        ...updates
      };
    },
    
    // Delete a task
    deleteTask: (state, action) => {
      const { taskId, columnId } = action.payload;
      
      // Remove task from column's taskIds
      state.columns[columnId].taskIds = state.columns[columnId].taskIds.filter(id => id !== taskId);
      
      // Delete the task from tasks object
      delete state.tasks[taskId];
    },
    
    // Delete a column
    deleteColumn: (state, action) => {
      const { columnId } = action.payload;
      
      // Get all task IDs from the column
      const taskIds = state.columns[columnId].taskIds;
      
      // Delete all tasks in the column
      taskIds.forEach(taskId => {
        delete state.tasks[taskId];
      });
      
      // Delete the column
      delete state.columns[columnId];
      
      // Remove from columnOrder
      state.columnOrder = state.columnOrder.filter(id => id !== columnId);
    }
  }
});

export const { 
  toggleTheme,
  setBoard,
  addColumn,
  addTask,
  moveTask,
  moveColumn,
  updateTask,
  updateColumn,
  deleteTask,
  deleteColumn
} = kanbanSlice.actions;

export default kanbanSlice.reducer;
