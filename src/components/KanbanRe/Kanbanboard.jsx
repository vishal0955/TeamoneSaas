import React, { useState } from 'react';
import { DragDropContext, Droppable,Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Search, Filter, SortAsc, Users, XCircle, Moon, Sun } from 'lucide-react';
import { moveTask, moveColumn, addColumn, toggleTheme } from '../../redux/slices/KanbanSlice';
import Column from './Column';
import AddColumnForm from './AddColumnform';


// Utility function to get theme styles
export const getThemeStyles = (isDarkMode) => ({
  background: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
  text: isDarkMode ? 'text-white' : 'text-gray-800',
  navBorder: isDarkMode ? 'border-gray-700' : 'border-gray-300',
  cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
  buttonBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-200',
  buttonHover: isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300',
  inputBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
  inputBorder: isDarkMode ? 'border-gray-600' : 'border-gray-300',
  secondaryText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
});

const KanbanBoard = ({ 
  ColumnComponent = Column,
  customFilterBar,
  customHeader,
  boardTitle = "Kanban Board"
}) => {
  const dispatch = useDispatch();
  const { columns, columnOrder, isDarkMode } = useSelector(state => state.kanban);
  const themeStyles = useSelector(state => getThemeStyles(state.kanban.isDarkMode));
  
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Handle drag end events
  const onDragEnd = (result) => {
    const { source, destination, type } = result;
    
    // If dropped outside a droppable area
    if (!destination) return;
    
    // Handle column reordering
    if (type === 'column') {
      if (source.index !== destination.index) {
        dispatch(moveColumn({
          sourceIndex: source.index,
          destinationIndex: destination.index
        }));
      }
      return;
    }
    
    // Handle task movement
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }
    
    dispatch(moveTask({
      sourceId: source.droppableId,
      destinationId: destination.droppableId,
      sourceIndex: source.index,
      destinationIndex: destination.index
    }));
  };
  
  const handleAddColumn = (columnData) => {
    dispatch(addColumn(columnData));
    setIsAddingColumn(false);
  };
  
  return (
    <div className={`flex flex-col h-screen ${themeStyles.background} ${themeStyles.text}`}>
      {/* Custom Header or Default */}
      {customHeader || (
        <div className={`flex items-center justify-between p-3 border-b ${themeStyles.navBorder}`}>
          <h1 className="text-xl font-bold">{boardTitle}</h1>
          <button 
            onClick={() => dispatch(toggleTheme())} 
            className={`p-2 rounded-full ${themeStyles.buttonBg}`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      )}

      {/* Custom Filter Bar or Default */}
      {customFilterBar || (
        <div className={`flex items-center p-3 border-b ${themeStyles.navBorder}`}>
          <div className="flex items-center space-x-2">
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
              <span>Assignee</span>
            </button>
          </div>
          <div className="flex-1 ml-4">
            <input
              type="text"
              placeholder="Search..."
              className={`px-3 py-1 ${themeStyles.inputBg} ${themeStyles.inputBorder} border rounded w-64`}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <div 
              className="flex p-4 space-x-4 overflow-x-auto flex-1"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnOrder.map((columnId, index) => (
                <ColumnComponent
                  key={columnId}
                  columnId={columnId}
                  column={columns[columnId]}
                  index={index}
                />
              ))}
              {provided.placeholder}

              {/* Add New Column */}
              {isAddingColumn ? (
                <AddColumnForm
                  onAdd={handleAddColumn}
                  onCancel={() => setIsAddingColumn(false)}
                />
              ) : (
                <button
                  onClick={() => setIsAddingColumn(true)}
                  className={`w-64 h-10 flex-shrink-0 flex items-center justify-center rounded ${themeStyles.cardBg} ${themeStyles.secondaryText} hover:${themeStyles.text}`}
                >
                  <Plus className="w-5 h-5 mr-1" />
                  Add Column
                </button>
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;