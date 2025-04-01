import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from './slices/KanbanSlice';
const store = configureStore({
    reducer: {
          kanban: kanbanReducer,
    }
       
})
export default store;