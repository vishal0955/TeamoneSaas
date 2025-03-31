


// import React, { useState, useRef, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { Menu, X, Plus, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

// const CalendarApp = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [showEventModal, setShowEventModal] = useState(false);
//   const [currentView, setCurrentView] = useState('timeGridWeek');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
//   const [newEvent, setNewEvent] = useState({
//     title: '',
//     start: null,
//     end: null,
//     color: '#3788d8'
//   });
  
//   // Date picker state
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedDates, setSelectedDates] = useState([new Date()]);
  
//   const calendarRef = useRef(null);
  
//   // Sample events
//   const [events, setEvents] = useState([
//     {
//       id: '1',
//       title: 'Breakfast & Walk',
//       start: '2025-03-31T08:00:00',
//       end: '2025-03-31T08:30:00',
//       color: '#FFEB3B',
//       recurrence: {
//         daysOfWeek: [1, 2, 3, 4, 5, 6, 7]
//       }
//     },
//     {
//       id: '2',
//       title: 'Deep Work Focus Time',
//       start: '2025-03-31T13:00:00',
//       end: '2025-03-31T15:00:00',
//       color: '#F44336',
//       recurrence: {
//         daysOfWeek: [1, 2, 3, 4, 5]
//       }
//     },
//     {
//       id: '3',
//       title: 'GYM',
//       start: '2025-03-31T18:00:00',
//       end: '2025-03-31T19:00:00',
//       color: '#FFEB3B',
//       recurrence: {
//         daysOfWeek: [1, 2, 3, 4, 5]
//       }
//     },
//     {
//       id: '4',
//       title: 'Marketing Weekly Team Meeting',
//       start: '2025-03-31T12:00:00',
//       end: '2025-03-31T13:00:00',
//       color: '#4CAF50'
//     },
//     {
//       id: '5',
//       title: 'Prospecting new business',
//       start: '2025-03-31T10:00:00',
//       end: '2025-03-31T11:00:00',
//       color: '#FF9800'
//     }
//   ]);

//   // Window resize handler
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobileView(mobile);
//       if (mobile && sidebarOpen) {
//         setSidebarOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [sidebarOpen]);

//   // Date handling
//   const handleDateClick = (info) => {
//     setNewEvent({
//       ...newEvent,
//       start: info.dateStr,
//       end: info.dateStr
//     });
//     setShowEventModal(true);
//   };

//   // Navigation functions
//   const handleViewChange = (viewName) => {
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.changeView(viewName);
//     setCurrentView(viewName);
//   };

//   const goToToday = () => {
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.today();
//     setSelectedDate(new Date());
//   };

//   const goToPrev = () => {
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.prev();
//     setSelectedDate(calendarApi.getDate());
//   };

//   const goToNext = () => {
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.next();
//     setSelectedDate(calendarApi.getDate());
//   };

//   // Event handlers
//   const handleAddEvent = (e) => {
//     e.preventDefault();
//     if (newEvent.title && newEvent.start) {
//       const newEventObj = {
//         id: Date.now().toString(),
//         title: newEvent.title,
//         start: newEvent.start,
//         end: newEvent.end || new Date(new Date(newEvent.start).getTime() + 60*60*1000).toISOString(),
//         color: newEvent.color
//       };
//       setEvents([...events, newEventObj]);
//       setShowEventModal(false);
//       setNewEvent({
//         title: '',
//         start: null,
//         end: null,
//         color: '#3788d8'
//       });
//     }
//   };

//   // Filtered events for sidebar
//   const getUpcomingEvents = () => {
//     const now = new Date();
//     return events
//       .filter(event => {
//         const eventDate = new Date(event.start);
//         return eventDate >= now;
//       })
//       .sort((a, b) => new Date(a.start) - new Date(b.start))
//       .slice(0, 5);
//   };

//   // Color options
//   const colorOptions = [
//     '#3788d8', // Blue
//     '#4CAF50', // Green
//     '#F44336', // Red
//     '#FFEB3B', // Yellow
//     '#9C27B0'  // Purple
//   ];

//   // Mini calendar functions
//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (year, month) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const handlePrevMonth = () => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
//   };

//   const handleDateSelect = (date) => {
//     const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
//     setSelectedDates([newDate]);
    
//     // Update the main calendar
//     const calendarApi = calendarRef.current.getApi();
//     calendarApi.gotoDate(newDate);
//     setSelectedDate(newDate);
//   };

//   const isDateSelected = (date) => {
//     return selectedDates.some(selectedDate => 
//       selectedDate.getDate() === date && 
//       selectedDate.getMonth() === currentMonth.getMonth() && 
//       selectedDate.getFullYear() === currentMonth.getFullYear()
//     );
//   };

//   const hasEventOnDate = (date) => {
//     const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
//     const dateStr = checkDate.toISOString().split('T')[0];
//     return events.some(event => new Date(event.start).toISOString().split('T')[0] === dateStr);
//   };

//   const renderMiniCalendar = () => {
//     const year = currentMonth.getFullYear();
//     const month = currentMonth.getMonth();
//     const daysInMonth = getDaysInMonth(year, month);
//     const firstDay = getFirstDayOfMonth(year, month) || 7; // Adjust for Sunday (0) to be treated as 7
//     const dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

//     const weeks = [];
//     let days = [];

//     // Add day names
//     const dayNamesRow = (
//       <div key="daynames" className="grid grid-cols-7 mb-1">
//         {dayNames.map((name, index) => (
//           <div key={index} className="text-center text-xs text-gray-500 py-1">
//             {name}
//           </div>
//         ))}
//       </div>
//     );
//     weeks.push(dayNamesRow);

//     // Add empty cells for days before first day of month
//     for (let i = 1; i < firstDay; i++) {
//       days.push(
//         <div key={`empty-${i}`} className="text-center py-1"></div>
//       );
//     }

//     // Add days of the month
//     for (let day = 1; day <= daysInMonth; day++) {
//       const isSelected = isDateSelected(day);
//       const hasEvent = hasEventOnDate(day);
      
//       days.push(
//         <div 
//           key={day} 
//           className={`text-center py-1 text-xs cursor-pointer ${
//             isSelected ? 
//               'bg-blue-600 text-white rounded-full' : 
//               hasEvent ? 'text-white font-bold relative' : 'hover:bg-blue-700'
//           }`}
//           onClick={() => handleDateSelect(day)}
//         >
//           {hasEvent && !isSelected && (
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
//           )}
//           {day}
//         </div>
//       );

//       // Start a new row after Saturday
//       if ((firstDay - 1 + day) % 7 === 0 || day === daysInMonth) {
//         // If it's the last day and doesn't end on Saturday, add empty cells
//         if (day === daysInMonth && (firstDay - 1 + day) % 7 !== 0) {
//           const remainingCells = 7 - ((firstDay - 1 + day) % 7);
//           for (let i = 0; i < remainingCells; i++) {
//             days.push(
//               <div key={`end-empty-${i}`} className="text-center py-1"></div>
//             );
//           }
//         }
        
//         weeks.push(
//           <div key={`week-${day}`} className="grid grid-cols-7">
//             {days}
//           </div>
//         );
//         days = [];
//       }
//     }

//     return (
//       <div className="mb-4 p-4 border-t border-gray-700">
//         <div className="flex items-center justify-between mb-3">
//           <h3 className="text-sm font-semibold">
//             {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
//           </h3>
//           <div className="flex space-x-1">
//             <button 
//               onClick={handlePrevMonth} 
//               className="p-1 rounded-full hover:bg-blue-700"
//             >
//               <ChevronLeft size={14} />
//             </button>
//             <button 
//               onClick={handleNextMonth} 
//               className="p-1 rounded-full hover:bg-blue-700"
//             >
//               <ChevronRight size={14} />
//             </button>
//           </div>
//         </div>
//         <div className="text-sm">{weeks}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Mobile Menu Toggle */}
//       <button
//         className={`md:hidden fixed top-4 left-4 z-20 p-2 rounded-md ${sidebarOpen ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
//       </button>

//       {/* Sidebar */}
//       <div 
//         className={`bg-white-50 text-black ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out fixed md:static z-10 h-full w-64 `}
//       >
//         {/* <div className="p-4 border-b border-gray-700">
//           <div className="flex justify-between items-center">
//             <h2 className="font-bold text-xl flex items-center">
//               <CalendarIcon className="mr-2" size={20} />
//               Calendar
//             </h2>
//             <button 
//               className="md:hidden text-gray-400 hover:text-white"
//               onClick={() => setSidebarOpen(false)}
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div> */}
        
//         {/* Mini Calendar DatePicker */}
//         {renderMiniCalendar()}
        
//         {/* View Selectors */}
//         {/* <div className="p-4 flex justify-between">
//           <button 
//             className={`px-2 py-1 rounded ${currentView === 'timeGridDay' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
//             onClick={() => handleViewChange('timeGridDay')}
//           >
//             Day
//           </button>
//           <button 
//             className={`px-2 py-1 rounded ${currentView === 'timeGridWeek' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
//             onClick={() => handleViewChange('timeGridWeek')}
//           >
//             Week
//           </button>
//           <button 
//             className={`px-2 py-1 rounded ${currentView === 'dayGridMonth' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
//             onClick={() => handleViewChange('dayGridMonth')}
//           >
//             Month
//           </button>
//         </div> */}
        
//         {/* Upcoming Events */}
//         <div className="p-4 border-t border-gray-700 ">
//           <h3 className="font-bold mb-3 flex items-center">
//             Upcoming Events
//             <span className="ml-2 text-xs bg-blue-500 text-white rounded-full px-2 py-0.5">
//               {getUpcomingEvents().length}
//             </span>
//           </h3>
          
//           <div className="space-y-3 overflow-y-auto">
//             {getUpcomingEvents().map(event => (
//               <div key={event.id} className=" p-2 rounded">
//                 <div 
//                   className="w-2 h-2 rounded-full float-left mt-1.5 mr-2" 
//                   style={{ backgroundColor: event.color }}
//                 ></div>
//                 <div className="text-sm font-medium">{event.title}</div>
//                 <div className="text-xs text-gray-400">
//                   {new Date(event.start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • 
//                   {new Date(event.start).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
//                 </div>
//               </div>
//             ))}
            
//             {getUpcomingEvents().length === 0 && (
//               <div className="text-sm text-gray-500 italic">No upcoming events</div>
//             )}
//           </div>
//         </div>
        
//         {/* Add Event Button */}
//         <div className="p-4">
//           <button 
//             onClick={() => {
//               setNewEvent({
//                 ...newEvent,
//                 start: new Date().toISOString()
//               });
//               setShowEventModal(true);
//             }}
//             className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center"
//           >
//             <Plus size={18} className="mr-1" />
//             Add Event
//           </button>
//         </div>
//       </div>
      
//       {/* Main Calendar Content */}
//       <div className="flex-1 p-4 overflow-hidden">
//         <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
//           {/* Calendar Header */}
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center">
//               <h2 className="text-xl font-bold">
//                 {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
//               </h2>
//               <div className="ml-4 flex space-x-2">
//                 <button 
//                   onClick={goToPrev} 
//                   className="p-1 rounded-full hover:bg-gray-100"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button 
//                   onClick={goToNext} 
//                   className="p-1 rounded-full hover:bg-gray-100"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex space-x-2">
           
//           <button 
//             className={`px-2 py-1 rounded ${currentView === 'timeGridDay' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
//             onClick={() => handleViewChange('timeGridDay')}
//           >
//             Day
//           </button>
//           <button 
//             className={`px-2 py-1 rounded ${currentView === 'timeGridWeek' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
//             onClick={() => handleViewChange('timeGridWeek')}
//           >
//             Week
//           </button>
//           <button 
//             className={`px-2 py-1 rounded ${currentView === 'dayGridMonth' ? 'bg-blue-600' : 'hover:bg-blue-700'}`}
//             onClick={() => handleViewChange('dayGridMonth')}
//           >
//             Month
//           </button>
   
//               <button 
//                 onClick={goToToday}
//                 className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//               >
//                 Today
//               </button>
//               <button 
//                 onClick={() => {
//                   setNewEvent({
//                     ...newEvent,
//                     start: new Date().toISOString()
//                   });
//                   setShowEventModal(true);
//                 }}
//                 className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 ml-2"
//               >
//                 <Plus size={20} />
//               </button>
//             </div>
//           </div>
          
//           {/* FullCalendar */}
//           <div className="flex-1 overflow-y-auto">
//             <FullCalendar
//               ref={calendarRef}
//               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//               initialView={currentView}
//               headerToolbar={false}
//               events={events}
//               dateClick={handleDateClick}
//               eventClick={(info) => {
//                 console.log('Event clicked:', info.event);
//                 // Add event editing functionality here
//               }}
//               height="100%"
//               slotMinTime="06:00:00"
//               slotMaxTime="22:00:00"
//               allDaySlot={false}
//               firstDay={1} // Start week on Monday
//               slotDuration="00:30:00"
//               businessHours={{
//                 daysOfWeek: [1, 2, 3, 4, 5], // Monday - Friday
//                 startTime: '08:00',
//                 endTime: '18:00',
//               }}
//               eventTimeFormat={{
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 meridiem: false
//               }}
//             />
//           </div>
//         </div>
//       </div>
      
//       {/* Event Modal */}
//       {showEventModal && (
//         <div className="fixed inset-0  flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
//             <h3 className="text-lg font-bold mb-4">Add Event</h3>
//             <form onSubmit={handleAddEvent}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Title</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded"
//                   value={newEvent.title}
//                   onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
//                   required
//                   placeholder="Enter event title"
//                 />
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Start</label>
//                   <input
//                     type="datetime-local"
//                     className="w-full p-2 border rounded"
//                     value={newEvent.start ? new Date(newEvent.start).toISOString().slice(0, 16) : ''}
//                     onChange={(e) => setNewEvent({...newEvent, start: e.target.value})}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">End</label>
//                   <input
//                     type="datetime-local"
//                     className="w-full p-2 border rounded"
//                     value={newEvent.end ? new Date(newEvent.end).toISOString().slice(0, 16) : ''}
//                     onChange={(e) => setNewEvent({...newEvent, end: e.target.value})}
//                   />
//                 </div>
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Color</label>
//                 <div className="flex space-x-2">
//                   {colorOptions.map((color, index) => (
//                     <div
//                       key={index}
//                       className={`w-8 h-8 rounded-full cursor-pointer ${
//                         newEvent.color === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
//                       }`}
//                       style={{ backgroundColor: color }}
//                       onClick={() => setNewEvent({...newEvent, color})}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//                   onClick={() => setShowEventModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 >
//                   Save Event
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarApp;


import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import Modal from 'react-modal';

const CalendarApp = () => {
  const [events, setEvents] = useState([
    { id: '1', title: 'Breakfast & Walk 1', start: '2025-01-13T08:00:00', end: '2025-01-13T09:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '2', title: 'WEEKLY TEAM ALL HANDS', start: '2025-01-13T10:00:00', end: '2025-01-13T11:00:00', backgroundColor: '#36AE7C', textColor: '#000', extendedProps: { category: 'meeting' } },
    { id: '3', title: 'Weekly sales pipeline progress meeting', start: '2025-01-13T11:00:00', end: '2025-01-13T12:00:00', backgroundColor: '#36AE7C', textColor: '#000', extendedProps: { category: 'meeting' } },
    { id: '4', title: 'Marketing Weekly Team Meeting', start: '2025-01-13T12:00:00', end: '2025-01-13T13:30:00', backgroundColor: '#36AE7C', textColor: '#000', extendedProps: { category: 'meeting' } },
    { id: '5', title: 'Accounts Meeting', start: '2025-01-13T14:00:00', end: '2025-01-13T15:00:00', backgroundColor: '#36AE7C', textColor: '#000', extendedProps: { category: 'meeting' } },
    { id: '6', title: 'Check Check', start: '2025-01-13T15:00:00', end: '2025-01-13T15:30:00', backgroundColor: '#36AE7C', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '7', title: 'Deep Work Focus Time', start: '2025-01-13T15:30:00', end: '2025-01-13T17:30:00', backgroundColor: '#EB6440', textColor: '#fff', extendedProps: { category: 'focus' } },
    { id: '8', title: 'Dinner & Walk 4', start: '2025-01-13T18:00:00', end: '2025-01-13T19:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '9', title: 'GYM', start: '2025-01-13T19:00:00', end: '2025-01-13T20:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '10', title: 'STRETCH / YOGA', start: '2025-01-13T20:00:00', end: '2025-01-13T21:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    
    // Adding breakfast events for the rest of the week
    { id: '11', title: 'Breakfast & Walk 1', start: '2025-01-14T08:00:00', end: '2025-01-14T09:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '12', title: 'Breakfast & Walk 1', start: '2025-01-15T08:00:00', end: '2025-01-15T09:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '13', title: 'Breakfast & Walk 1', start: '2025-01-16T08:00:00', end: '2025-01-16T09:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '14', title: 'Breakfast & Walk 1', start: '2025-01-17T08:00:00', end: '2025-01-17T09:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '15', title: 'Breakfast & Walk 1', start: '2025-01-18T08:00:00', end: '2025-01-18T09:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '16', title: 'Breakfast & Walk 1', start: '2025-01-19T08:00:00', end: '2025-01-19T09:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    
    // Prospecting events
    { id: '17', title: 'Prospecting new business', start: '2025-01-13T09:30:00', end: '2025-01-13T10:30:00', backgroundColor: '#FF9494', textColor: '#000', extendedProps: { category: 'business' } },
    { id: '18', title: 'Prospecting new business', start: '2025-01-14T11:00:00', end: '2025-01-14T12:00:00', backgroundColor: '#FF9494', textColor: '#000', extendedProps: { category: 'business' } },
    { id: '19', title: 'Prospecting new business', start: '2025-01-15T11:00:00', end: '2025-01-15T12:00:00', backgroundColor: '#FF9494', textColor: '#000', extendedProps: { category: 'business' } },
    { id: '20', title: 'Prospecting new business', start: '2025-01-16T11:00:00', end: '2025-01-16T12:00:00', backgroundColor: '#FF9494', textColor: '#000', extendedProps: { category: 'business' } },
    
    // Deep work sessions
    { id: '21', title: 'Deep Work Focus Time', start: '2025-01-14T13:00:00', end: '2025-01-14T15:00:00', backgroundColor: '#EB6440', textColor: '#fff', extendedProps: { category: 'focus' } },
    { id: '22', title: 'Deep Work Focus Time', start: '2025-01-15T13:00:00', end: '2025-01-15T15:00:00', backgroundColor: '#EB6440', textColor: '#fff', extendedProps: { category: 'focus' } },
    { id: '23', title: 'Deep Work Focus Time', start: '2025-01-16T13:00:00', end: '2025-01-16T15:00:00', backgroundColor: '#EB6440', textColor: '#fff', extendedProps: { category: 'focus' } },
    { id: '24', title: 'Deep Work Focus Time', start: '2025-01-17T13:00:00', end: '2025-01-17T15:00:00', backgroundColor: '#EB6440', textColor: '#fff', extendedProps: { category: 'focus' } },
    { id: '25', title: 'Deep Work Focus Time', start: '2025-01-18T13:00:00', end: '2025-01-18T15:00:00', backgroundColor: '#EB6440', textColor: '#fff', extendedProps: { category: 'focus' } },
    { id: '26', title: 'Deep Work Focus Time', start: '2025-01-19T13:00:00', end: '2025-01-19T15:00:00', backgroundColor: '#EB6440', textColor: '#fff', extendedProps: { category: 'focus' } },
    
    // Special events
    { id: '27', title: 'PHYSIO (Sports Massage) 1hr', start: '2025-01-14T11:00:00', end: '2025-01-14T12:00:00', backgroundColor: '#ccc', textColor: '#000', extendedProps: { category: 'personal' } },
    { id: '28', title: 'Sky lead campaign', start: '2025-01-17T11:00:00', end: '2025-01-17T12:00:00', backgroundColor: '#FF9494', textColor: '#000', extendedProps: { category: 'business' } },
    { id: '29', title: 'Mahmoud Gamal', start: '2025-01-18T08:30:00', end: '2025-01-18T09:30:00', backgroundColor: '#36AE7C', textColor: '#000', extendedProps: { category: 'meeting' } },
    { id: '30', title: 'Invoices / Quotes Xero weekly', start: '2025-01-17T17:00:00', end: '2025-01-17T18:00:00', backgroundColor: '#36AE7C', textColor: '#000', extendedProps: { category: 'admin' } },
    
    // Snack & Walk events
    { id: '31', title: 'Snack & Walk 3', start: '2025-01-14T15:00:00', end: '2025-01-14T15:30:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '32', title: 'Snack & Walk 3', start: '2025-01-15T15:00:00', end: '2025-01-15T15:30:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '33', title: 'Snack & Walk 3', start: '2025-01-16T15:00:00', end: '2025-01-16T15:30:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '34', title: 'Snack & Walk 3', start: '2025-01-17T15:00:00', end: '2025-01-17T15:30:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '35', title: 'Snack & Walk 3', start: '2025-01-18T15:00:00', end: '2025-01-18T15:30:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '36', title: 'Snack & Walk 3', start: '2025-01-19T15:00:00', end: '2025-01-19T15:30:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    
    // Dinner & Walk events
    { id: '37', title: 'Dinner & Walk 4', start: '2025-01-14T18:00:00', end: '2025-01-14T19:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '38', title: 'Dinner & Walk 4', start: '2025-01-15T18:00:00', end: '2025-01-15T19:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '39', title: 'Dinner & Walk 4', start: '2025-01-16T18:00:00', end: '2025-01-16T19:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '40', title: 'Dinner & Walk 4', start: '2025-01-17T18:00:00', end: '2025-01-17T19:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '41', title: 'Dinner & Walk 4', start: '2025-01-18T18:00:00', end: '2025-01-18T19:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '42', title: 'Dinner & Walk 4', start: '2025-01-19T18:00:00', end: '2025-01-19T19:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    
    // Gym events
    { id: '43', title: 'GYM', start: '2025-01-14T19:00:00', end: '2025-01-14T20:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '44', title: 'GYM', start: '2025-01-15T19:00:00', end: '2025-01-15T20:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '45', title: 'GYM', start: '2025-01-16T19:00:00', end: '2025-01-16T20:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '46', title: 'GYM', start: '2025-01-17T19:00:00', end: '2025-01-17T20:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    
    // Stretch/Yoga events
    { id: '47', title: 'STRETCH / YOGA', start: '2025-01-14T20:00:00', end: '2025-01-14T21:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '48', title: 'STRETCH / YOGA', start: '2025-01-15T20:00:00', end: '2025-01-15T21:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '49', title: 'STRETCH / YOGA', start: '2025-01-16T20:00:00', end: '2025-01-16T21:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
    { id: '50', title: 'STRETCH / YOGA', start: '2025-01-17T20:00:00', end: '2025-01-17T21:00:00', backgroundColor: '#F9D923', textColor: '#000', extendedProps: { category: 'routine' } },
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    category: 'meeting',
  });
  
  const calendarRef = useRef(null);
  
  const categoryColors = {
    meeting: '#36AE7C',
    routine: '#F9D923',
    focus: '#EB6440',
    business: '#FF9494',
    personal: '#ccc',
    admin: '#36AE7C'
  };
  
  const handleDateClick = (arg) => {
    setNewEvent({
      title: '',
      start: arg.dateStr,
      end: arg.dateStr,
      category: 'meeting'
    });
    setIsModalOpen(true);
  };
  
  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
      setEvents(events.filter(event => event.id !== clickInfo.event.id));
    }
  };
  
  const handleEventDrop = (eventDropInfo) => {
    const { event } = eventDropInfo;
    setEvents(prevEvents => {
      return prevEvents.map(prevEvent => {
        if (prevEvent.id === event.id) {
          return {
            ...prevEvent,
            start: event.startStr,
            end: event.endStr
          };
        }
        return prevEvent;
      });
    });
    
    alert(`${event.title} was moved to ${event.startStr.split('T')[0]}`);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Input validation
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert('Please fill all required fields');
      return;
    }
    
    const newEventObj = {
      id: (events.length + 1).toString(),
      title: newEvent.title,
      start: newEvent.start,
      end: newEvent.end,
      backgroundColor: categoryColors[newEvent.category],
      textColor: newEvent.category === 'focus' ? '#fff' : '#000',
      extendedProps: { category: newEvent.category }
    };
    
    setEvents([...events, newEventObj]);
    setIsModalOpen(false);
    
    // Reset form
    setNewEvent({
      title: '',
      start: '',
      end: '',
      category: 'meeting'
    });
  };
  
  const renderEventContent = (eventInfo) => {
    const { event } = eventInfo;
    const timeText = event.allDay 
      ? 'All Day'
      : `${new Date(event.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    
    return (
      <div className="event-content" style={{fontSize: '0.8em', padding: '2px 4px'}}>
        <b>{event.title}</b>
        <div>{timeText}</div>
      </div>
    );
  };
  
  const handleViewChange = (view) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
  };
  
  const goToToday = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  };
  
  const changeMonth = (direction) => {
    const calendarApi = calendarRef.current.getApi();
    direction === 'prev' ? calendarApi.prev() : calendarApi.next();
  };
  
  return (
    <div className="calendar-app">
      <div className="calendar-header" style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <button onClick={() => changeMonth('prev')} className="btn">←</button>
          <button onClick={goToToday} className="btn">Today</button>
          <button onClick={() => changeMonth('next')} className="btn">→</button>
        </div>
        
        <div>
          <button onClick={() => handleViewChange('dayGridMonth')} className="btn">Month</button>
          <button onClick={() => handleViewChange('timeGridWeek')} className="btn">Week</button>
          <button onClick={() => handleViewChange('timeGridDay')} className="btn">Day</button>
          <button onClick={() => handleViewChange('listWeek')} className="btn">Schedule</button>
        </div>
        
        <div>
          <button onClick={() => setIsModalOpen(true)} className="btn add-event">+ Add Event</button>
        </div>
      </div>
      
      <div className="calendar-container">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, bootstrapPlugin]}
          initialView="timeGridWeek"
          headerToolbar={false}
          navLinks={true}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          initialDate="2025-01-13"
          events={events}
          slotMinTime="08:00:00"
          slotMaxTime="21:00:00"
          height="auto"
          allDaySlot={false}
          slotDuration="00:30:00"
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          eventDrop={handleEventDrop}
          eventResize={handleEventDrop}
          nowIndicator={true}
        />
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add New Event"
        style={{
          content: {
            width: '400px',
            height: 'fit-content',
            margin: 'auto',
            padding: '20px',
            borderRadius: '8px'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom: '15px'}}>
            <label htmlFor="title">Event Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
              style={{width: '100%', padding: '8px', marginTop: '5px'}}
            />
          </div>
          
          <div style={{marginBottom: '15px'}}>
            <label htmlFor="start">Start Time:</label>
            <input
              type="datetime-local"
              id="start"
              name="start"
              value={newEvent.start}
              onChange={handleInputChange}
              required
              style={{width: '100%', padding: '8px', marginTop: '5px'}}
            />
          </div>
          
          <div style={{marginBottom: '15px'}}>
            <label htmlFor="end">End Time:</label>
            <input
              type="datetime-local"
              id="end"
              name="end"
              value={newEvent.end}
              onChange={handleInputChange}
              required
              style={{width: '100%', padding: '8px', marginTop: '5px'}}
            />
          </div>
          
          <div style={{marginBottom: '15px'}}>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={newEvent.category}
              onChange={handleInputChange}
              style={{width: '100%', padding: '8px', marginTop: '5px'}}
            >
              <option value="meeting">Meeting</option>
              <option value="routine">Routine</option>
              <option value="focus">Focus Time</option>
              <option value="business">Business</option>
              <option value="personal">Personal</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
            <button 
              type="button" 
              onClick={() => setIsModalOpen(false)}
              style={{padding: '8px 16px'}}
            >
              Cancel
            </button>
            <button 
              type="submit"
              style={{padding: '8px 16px', backgroundColor: '#36AE7C', color: 'white', border: 'none'}}
            >
              Add Event
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CalendarApp;