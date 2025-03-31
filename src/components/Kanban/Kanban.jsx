// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { PlusIcon, SearchIcon, FilterIcon, SortAscendingIcon, UserGroupIcon, XCircleIcon, CogIcon } from '@heroicons/react/outline';

// const KanbanBoard = () => {
//   // Initial board data
//   const [columns, setColumns] = useState({
//     'planning': {
//       id: 'planning',
//       title: 'PLANNING',
//       color: 'bg-indigo-500',
//       tasks: []
//     },
//     'in-progress': {
//       id: 'in-progress',
//       title: 'IN-PROGRESS',
//       color: 'bg-yellow-500',
//       tasks: []
//     },
//     'on-hold': {
//       id: 'on-hold',
//       title: 'ON-HOLD',
//       color: 'bg-red-500',
//       tasks: []
//     },
//     'completed': {
//       id: 'completed',
//       title: 'COMPLETED',
//       color: 'bg-blue-500',
//       tasks: []
//     },
//     'billing': {
//       id: 'billing',
//       title: 'BILLING',
//       color: 'bg-green-500',
//       tasks: [
//         {
//           id: '315317',
//           title: '315317 - Triton Partners - EU & NYC - RFP for...',
//           project: 'All Projects',
//           priority: 'High',
//           progress: 100,
//           assignee: 'B'
//         }
//       ]
//     }
//   });

//   // Handle adding a new task
//   const handleAddTask = (columnId) => {
//     const newTaskId = `task-${Date.now()}`;
//     const newTask = {
//       id: newTaskId,
//       title: `New Task`,
//       project: 'All Projects',
//       priority: 'Medium',
//       progress: 0,
//       assignee: ''
//     };

//     setColumns({
//       ...columns,
//       [columnId]: {
//         ...columns[columnId],
//         tasks: [...columns[columnId].tasks, newTask]
//       }
//     });
//   };

//   // Handle adding a new column
//   const handleAddColumn = () => {
//     const newColumnId = `column-${Date.now()}`;
//     setColumns({
//       ...columns,
//       [newColumnId]: {
//         id: newColumnId,
//         title: 'NEW COLUMN',
//         color: 'bg-gray-500',
//         tasks: []
//       }
//     });
//   };

//   // Handle drag and drop
//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     // Dropped outside the list
//     if (!destination) return;

//     // Moving in the same list
//     if (source.droppableId === destination.droppableId) {
//       const column = columns[source.droppableId];
//       const newTasks = Array.from(column.tasks);
//       const [removed] = newTasks.splice(source.index, 1);
//       newTasks.splice(destination.index, 0, removed);

//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...column,
//           tasks: newTasks
//         }
//       });
//     }
//     // Moving from one list to another
//     else {
//       const sourceColumn = columns[source.droppableId];
//       const destColumn = columns[destination.droppableId];
//       const sourceTasks = Array.from(sourceColumn.tasks);
//       const destTasks = Array.from(destColumn.tasks);
//       const [removed] = sourceTasks.splice(source.index, 1);

//       destTasks.splice(destination.index, 0, removed);

//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...sourceColumn,
//           tasks: sourceTasks
//         },
//         [destination.droppableId]: {
//           ...destColumn,
//           tasks: destTasks
//         }
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-900 text-white">
//       {/* Top Navigation */}
//       <div className="flex items-center p-4 border-b border-gray-700">
//         <div className="flex items-center space-x-4">
//           <span className="flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//             </svg>
//             Staff Scheduling
//           </span>
//           <span className="flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             Billing Last Week
//           </span>
//           <span className="flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
//             </svg>
//             Board
//           </span>
//           <span>12 more...</span>
//         </div>
//         <div className="flex-1"></div>
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center">
//             <SearchIcon className="w-5 h-5 mr-2" />
//             <span>Search</span>
//           </div>
//           <button className="px-3 py-1 bg-gray-700 rounded">Hide · 1</button>
//           <button className="px-3 py-1 bg-gray-700 rounded flex items-center">
//             <CogIcon className="w-4 h-4 mr-1" />
//             Customize
//           </button>
//           <button className="px-3 py-1 bg-blue-500 rounded flex items-center">
//             Add Task
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Filter Bar */}
//       <div className="flex items-center p-3 border-b border-gray-700">
//         <div className="flex items-center space-x-2">
//           <button className="px-3 py-1 bg-gray-800 rounded flex items-center text-sm">
//             <span>Group: Status</span>
//           </button>
//           <button className="px-3 py-1 bg-gray-800 rounded flex items-center text-sm">
//             <span>Subtasks: Collapse all</span>
//           </button>
//           <button className="px-3 py-1 bg-gray-800 rounded flex items-center text-sm">
//             <FilterIcon className="w-4 h-4 mr-1" />
//             <span>Filter</span>
//           </button>
//           <button className="px-3 py-1 bg-gray-800 rounded flex items-center text-sm">
//             <SortAscendingIcon className="w-4 h-4 mr-1" />
//             <span>Sort</span>
//           </button>
//           <button className="px-3 py-1 bg-gray-800 rounded flex items-center text-sm">
//             <UserGroupIcon className="w-4 h-4 mr-1" />
//             <span>Me mode</span>
//           </button>
//           <button className="px-3 py-1 bg-gray-800 rounded flex items-center text-sm">
//             <span>Assignee</span>
//           </button>
//           <button className="px-3 py-1 bg-gray-800 rounded flex items-center text-sm">
//             <XCircleIcon className="w-4 h-4 mr-1" />
//             <span>Closed</span>
//           </button>
//         </div>
//         <div className="flex-1 ml-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-3 py-1 bg-gray-800 rounded w-64"
//           />
//         </div>
//         <button className="px-2 py-1">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//           </svg>
//         </button>
//       </div>

//       {/* Kanban Board */}
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="flex p-4 space-x-4 overflow-x-auto flex-1">
//           {Object.values(columns).map(column => (
//             <div key={column.id} className="w-64 flex-shrink-0">
//               <div className="flex items-center mb-2">
//                 <div className={`w-6 h-6 mr-2 rounded-full ${column.color} flex items-center justify-center text-white`}>
//                   {column.id === 'planning' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
//                   {column.id === 'in-progress' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
//                   {column.id === 'on-hold' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
//                   {column.id === 'completed' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
//                   {column.id === 'billing' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>}
//                 </div>
//                 <span className="font-bold">{column.title}</span>
//                 <span className="ml-2 text-gray-400">{column.tasks.length}</span>
//                 <div className="flex-1"></div>
//                 <button className="p-1 text-gray-400 hover:text-white">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                   </svg>
//                 </button>
//                 <button className="p-1 text-gray-400 hover:text-white">
//                   <PlusIcon className="w-5 h-5" />
//                 </button>
//               </div>

//               <Droppable droppableId={column.id}>
//                 {(provided) => (
//                   <div
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                     className="min-h-[200px]"
//                   >
//                     {column.tasks.map((task, index) => (
//                       <Draggable key={task.id} draggableId={task.id} index={index}>
//                         {(provided) => (
//                           <div
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className="bg-gray-800 p-3 mb-2 rounded shadow"
//                           >
//                             <div className="text-sm">{task.title}</div>
//                             <div className="mt-2 text-xs text-gray-400">
//                               <span>In </span>
//                               <span className="bg-gray-700 px-1 rounded">
//                                 {task.project}
//                               </span>
//                             </div>
//                             <div className="mt-2 flex items-center">
//                               {task.assignee && (
//                                 <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
//                                   {task.assignee}
//                                 </div>
//                               )}
//                               <div className="flex items-center">
//                                 <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                               </div>
//                               {task.priority === 'High' && (
//                                 <div className="ml-2 flex items-center">
//                                   <span className="text-yellow-500 mr-1">⚑</span>
//                                   <span className="text-yellow-500 text-xs">{task.priority}</span>
//                                 </div>
//                               )}
//                             </div>
//                             {task.progress > 0 && (
//                               <div className="mt-2">
//                                 <div className="w-full bg-gray-700 rounded-full h-1">
//                                   <div
//                                     className="bg-green-500 h-1 rounded-full"
//                                     style={{ width: `${task.progress}%` }}
//                                   ></div>
//                                 </div>
//                                 <div className="text-xs text-right mt-1 text-green-500">{task.progress}%</div>
//                               </div>
//                             )}
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                     <button
//                       onClick={() => handleAddTask(column.id)}
//                       className="w-full py-2 text-gray-400 hover:text-white text-sm flex items-center justify-center"
//                     >
//                       <PlusIcon className="w-4 h-4 mr-1" />
//                       Add Task
//                     </button>
//                   </div>
//                 )}
//               </Droppable>
//             </div>
//           ))}

//           {/* Add New Column */}
//           <button
//             onClick={handleAddColumn}
//             className="w-64 h-10 flex-shrink-0 flex items-center justify-center rounded bg-gray-800 text-gray-400 hover:text-white"
//           >
//             <PlusIcon className="w-5 h-5 mr-1" />
//             Add group
//           </button>
//         </div>
//       </DragDropContext>
//     </div>
//   );
// };

// export default KanbanBoard;
import React from 'react'

const Kanban = () => {
  return (
    <div>Kanban</div>
  )
}

export default Kanban