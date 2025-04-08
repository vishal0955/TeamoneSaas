

// import { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
// import interactionPlugin from '@fullcalendar/interaction';
// import { useSelector } from 'react-redux';

// const Workload = () => {
//   const [events, setEvents] = useState([
//     { id: '1', resourceId: 'r1', title: 'SALES - DO SALE', start: '2024-03-29T10:00:00', end: '2024-03-30T12:00:00', backgroundColor: '#e6e6fa', project: 'Sales' },
//     { id: '2', resourceId: 'r2', title: 'CLIENT - TRAINING', start: '2024-03-29T14:00:00', end: '2024-03-31T16:00:00', backgroundColor: '#e6e6fa', project: 'Training' },
//     { id: '3', resourceId: 'r1', title: 'SALES - DO SALE', start: '2024-04-05T09:00:00', end: '2024-04-06T17:00:00', backgroundColor: '#e6e6fa', project: 'Sales' },
//     { id: '4', resourceId: 'r3', title: 'FF 2024', start: '2024-04-10T13:00:00', end: '2024-04-12T15:00:00', backgroundColor: '#e6e6fa', project: 'Finance' },
//   ]);


//   const darkMode = useSelector((state) => state.theme.isDarkMode);

//   // State for showing weekends
//   const [showWeekends, setShowWeekends] = useState(true);

//   // Resources with unscheduled and overdue tasks sections
//   const resources = [
//     { id: 'r1', title: 'John Doe' },
//     { id: 'r2', title: 'chris Martin' },
//     { id: 'r3', title: 'Bob Marley' },
//     { id: 'r4', title: 'Ezzat Kiwan' },
//   ];

//   // Projects for select dropdown
//   const projects = [
//     { id: 'xyz', name: 'XYZ' },
//     { id: 'training', name: 'Training' },
//     { id: 'finance', name: 'Finance' },
//     { id: 'development', name: 'Development' },
//     { id: 'marketing', name: 'Marketing' },
//   ];

//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     id: '',
//     title: '',
//     resourceId: '',
//     start: '',
//     end: '',
//     project: '',
//     isEdit: false
//   });

//   const formatDateTime = (date) => {
//     if (!date) return '';
//     const d = new Date(date);
//     return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
//   };

//   // Function to check if the event is within the range of the 6th and 11th
//   const checkDateInRange = (startDate) => {
//     const date = new Date(startDate);
//     const dayOfMonth = date.getDate();
//     return dayOfMonth >= 6 && dayOfMonth <= 11;
//   };

//   const handleEventChange = (changeInfo) => {
//     setEvents(events.map(event =>
//       event.id === changeInfo.event.id
//         ? {
//             ...event,
//             resourceId: changeInfo.event.getResources()[0].id,
//             start: changeInfo.event.startStr,
//             end: changeInfo.event.endStr
//           }
//         : event
//     ));
//   };

//   const handleEventClick = (clickInfo) => {
//     const event = clickInfo.event;
//     setFormData({
//       id: event.id,
//       title: event.title,
//       resourceId: event.getResources()[0].id,
//       start: formatDateTime(event.start),
//       end: formatDateTime(event.end),
//       project: event.extendedProps.project || '',
//       isEdit: true
//     });
//     setShowModal(true);
//   };

//   const handleAddTaskClick = () => {
//     const now = new Date();
//     setFormData({
//       id: '',
//       title: '',
//       resourceId: '',
//       start: formatDateTime(now),
//       end: formatDateTime(new Date(now.getTime() + 2 * 60 * 60 * 1000)),
//       project: '',
//       isEdit: false
//     });
//     setShowModal(true);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
    
//     const newEvent = {
//       id: formData.isEdit ? formData.id : String(Date.now()),
//       resourceId: formData.resourceId,
//       title: formData.title,
//       start: formData.start,
//       end: formData.end,
//       backgroundColor: '#e6e6fa',
//       project: formData.project
//     };

//     if (formData.isEdit) {
//       setEvents(events.map(event => event.id === formData.id ? newEvent : event));
//     } else {
//       setEvents([...events, newEvent]);
//     }

//     setShowModal(false);
//   };

//   const handleDeleteEvent = () => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       setEvents(events.filter(event => event.id !== formData.id));
//       setShowModal(false);
//     }
//   };

//   const toggleWeekends = () => {
//     setShowWeekends(!showWeekends);
//   };

//   return (
//     <div className={` ${darkMode ? "dark-mode" : null } h-screen p-4`}>
//       <div className={` ${darkMode ? "dark-mode" : null } rounded-lg shadow-lg p-6 h-full`}>
//         <FullCalendar
//           plugins={[resourceTimelinePlugin, interactionPlugin]}
//           initialView="resourceTimelineMonth"
//           editable={true}
//           selectable={true}
//           selectMirror={true}
//           dayMaxEvents={true}
//           resources={resources}
//           events={events}
//           eventClick={handleEventClick}
//           eventChange={handleEventChange}
//           height="100%"
//           resourceAreaWidth={200}
//           slotDuration={{ days: 1 }}
//           views={{
//             resourceTimelineDay: {
//               slotDuration: '00:30:00',
//               slotLabelFormat: {
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 hour12: true
//               }
//             }
//           }}
//           weekends={showWeekends}
//           eventContent={(eventInfo) => {
//             const isInRange = checkDateInRange(eventInfo.event.start);
//             return (
//               <div className={`p-1 text-xs ${isInRange ? 'bg-red-100' : 'bg-purple-100'} border border-purple-200 rounded`}>
//                 <div className="font-semibold">{eventInfo.event.title}</div>
//                 {eventInfo.event.extendedProps.project && (
//                   <div className="text-gray-600">{eventInfo.event.extendedProps.project}</div>
//                 )}
//               </div>
//             );
//           }}
//           resourceLabelContent={(info) => {
//             const isChild = info.resource.parent;
//             if (isChild) {
//               return (
//                 <div className="text-xs text-gray-500 pl-4">
//                   {info.resource.title}
//                 </div>
//               )
//             }
            
//             return (
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                   {info.resource.title.substring(0, 1)}
//                 </div>
//                 <div>{info.resource.title}</div>
//               </div>
//             );
//           }}
//           resourceAreaHeaderContent="Assignees"
//           resourceGroupLabelClassNames="font-bold"
//           resourceLaneClassNames="border-b hover:bg-gray-50"
//           slotLaneClassNames="border-r"
//           nowIndicator={true}
//           weekNumbers={false}
//           weekText="W"
//           businessHours={false}
//           snapDuration={{ days: 1 }}
//           expandRows={true}
//           navLinks={true}
//         />
//       </div>

//       {/* Task Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <h2 className="text-xl font-bold mb-4">
//               {formData.isEdit ? 'Edit Task' : 'Create New Task'}
//             </h2>
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Title</label>
//                 <input 
//                   type="text" 
//                   className="w-full px-3 py-2 border rounded-md"
//                   value={formData.title}
//                   onChange={(e) => setFormData({...formData, title: e.target.value})}
//                   required
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Assigned To</label>
//                 <select 
//                   className="w-full px-3 py-2 border rounded-md"
//                   value={formData.resourceId}
//                   onChange={(e) => setFormData({...formData, resourceId: e.target.value})}
//                   required
//                 >
//                   <option value="">Select Assignee</option>
//                   {resources.map(resource => (
//                     <option key={resource.id} value={resource.id}>
//                       {resource.title}
//                     </option>
//                   ))}
//                 </select>
//               </div>
              
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Project</label>
//                 <select 
//                   className="w-full px-3 py-2 border rounded-md"
//                   value={formData.project}
//                   onChange={(e) => setFormData({...formData, project: e.target.value})}
//                   required
//                 >
//                   <option value="">Select Project</option>
//                   {projects.map(project => (
//                     <option key={project.id} value={project.name}>
//                       {project.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Start Date & Time</label>
//                   <input 
//                     type="datetime-local" 
//                     className="w-full px-3 py-2 border rounded-md"
//                     value={formData.start}
//                     onChange={(e) => setFormData({...formData, start: e.target.value})}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">End Date & Time</label>
//                   <input 
//                     type="datetime-local" 
//                     className="w-full px-3 py-2 border rounded-md"
//                     value={formData.end}
//                     onChange={(e) => setFormData({...formData, end: e.target.value})}
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="flex justify-between">
//                 <div>
//                   {formData.isEdit && (
//                     <button 
//                       type="button"
//                       className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2"
//                       onClick={handleDeleteEvent}
//                     >
//                       Delete
//                     </button>
//                   )}
//                 </div>
//                 <div className="flex space-x-2">
//                   <button 
//                     type="button"
//                     className="px-4 py-2 border rounded-md hover:bg-gray-100"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button 
//                     type="submit"
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                   >
//                     {formData.isEdit ? 'Update' : 'Create'}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Workload;



import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

const Workload = () => {
  // Sample data for the chart
  const [chartData, setChartData] = useState([
    { period: '01 Apr - 04 Apr', availableCapacity: 65, assignedAllocations: 20, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '07 Apr - 11 Apr', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '14 Apr - 18 Apr', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '21 Apr - 25 Apr', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '28 Apr - 02 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '05 May - 09 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '12 May - 16 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '19 May - 23 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '26 May - 30 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '02 Jun - 06 Jun', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '09 Jun - 13 Jun', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
  ]);

  // Sample data for the allocation table
  const [resources, setResources] = useState([
    { id: '3d', role: '3D CAD', avatar: '3D', color: 'bg-purple-500' },
    { id: '2d', role: '2D CAD', avatar: '2D', color: 'bg-pink-500' },
    { id: 'admin', role: 'Administration', avatar: 'A', color: 'bg-red-500' },
    { id: 'audioc', role: 'Audio Consultant', avatar: 'AC', color: 'bg-red-500' },
    { id: 'avc', role: 'AV Consultant', avatar: 'AV', color: 'bg-red-500' },
    { id: 'avsm', role: 'AV Subject Matter Expert', avatar: 'AV', color: 'bg-red-500' },
    { id: 'avse', role: 'AV Support Engineer', avatar: 'AV', color: 'bg-red-500' },
    { id: 'ceo', role: 'CEO', avatar: 'C', color: 'bg-blue-500' },
  ]);

  // Time periods for the table
  const timePeriods = [
    { id: 'apr1', label: '03-06', month: 'Apr \'25' },
    { id: 'apr2', label: '07-11', month: 'Apr \'25' },
    { id: 'apr3', label: '10-18', month: 'Apr \'25' },
    { id: 'apr4', label: '21-25', month: 'Apr \'25' },
    { id: 'apr5', label: '28-02', month: 'Apr \'25' },
    { id: 'may1', label: '05-09', month: 'May \'25' },
    { id: 'may2', label: '12-16', month: 'May \'25' },
    { id: 'may3', label: '19-23', month: 'May \'25' },
    { id: 'may4', label: '26-30', month: 'May \'25' },
    { id: 'jun1', label: '02-06', month: 'Jun \'25' },
    { id: 'jun2', label: '09-13', month: 'Jun \'25' },
  ];

  // Allocation data - this would typically come from a backend API
  const [allocations, setAllocations] = useState({
    '3d': { 'apr1': '75%', 'apr2': '0%', 'apr3': '0%', 'apr4': '0%', 'apr5': '0%', 'may1': '0%', 'may2': '0%', 'may3': '0%', 'may4': '0%', 'jun1': '0%', 'jun2': '0%' },
    '2d': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'admin': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'audioc': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'avc': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'avsm': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'avse': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'ceo': { 'apr1': '75%', 'apr2': '0%', 'apr3': '0%', 'apr4': '0%', 'apr5': '0%', 'may1': '0%', 'may2': '0%', 'may3': '0%', 'may4': '0%', 'jun1': '0%', 'jun2': '0%' },
  });

  // Function to update allocation
  const updateAllocation = (resourceId, periodId, value) => {
    const newValue = prompt(`Update allocation for ${resourceId} during ${periodId}:`, value);
    if (newValue) {
      setAllocations(prev => ({
        ...prev,
        [resourceId]: {
          ...prev[resourceId],
          [periodId]: newValue
        }
      }));
    }
  };

  // Group time periods by month for the table header
  const groupedPeriods = timePeriods.reduce((acc, period) => {
    if (!acc[period.month]) {
      acc[period.month] = [];
    }
    acc[period.month].push(period);
    return acc;
  }, {});

  // Get background color for allocation cells
  const getAllocationCellColor = (value) => {
    if (value === 'NA') return 'bg-purple-50 text-purple-500';
    if (value === '0%') return 'bg-green-50 text-green-800';
    if (value === '75%') return 'bg-blue-500 text-white';
    return 'bg-gray-50';
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Chart section */}
      <div className="bg-white p-4 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Allocations (demand) vs Capacity (supply)</h2>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-0.5 bg-gray-400 mr-1"></div>
              <span className="text-sm text-gray-600">Total capacity</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
              <span className="text-sm text-gray-600">Holidays</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-300 mr-1"></div>
              <span className="text-sm text-gray-600">Available capacity</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-200 mr-1"></div>
              <span className="text-sm text-gray-600">Unassigned allocations</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-teal-500 mr-1"></div>
              <span className="text-sm text-gray-600">Assigned allocations</span>
            </div>
          </div>
        </div>
        
        <div className="w-full h-64">
          <BarChart
            width={1000}
            height={250}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barSize={25}
            barGap={0}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="period" fontSize={10} />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <ReferenceLine y={75} stroke="#666" strokeDasharray="3 3" />
            <Bar dataKey="availableCapacity" fill="#63B3ED" name="Available capacity" />
            <Bar dataKey="assignedAllocations" fill="#38B2AC" name="Assigned allocations" stackId="a" />
            <Bar dataKey="unassignedAllocations" fill="#9AE6B4" name="Unassigned allocations" stackId="a" />
          </BarChart>
        </div>
      </div>

      {/* Table section */}
      <div className="bg-white overflow-x-auto flex-grow">
        <table className="min-w-full border-collapse">
          {/* Table header with month grouping */}
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b border-r font-medium text-gray-700 text-left w-48">Role</th>
              {Object.entries(groupedPeriods).map(([month, periods], monthIndex) => (
                <th key={month} colSpan={periods.length} className="py-2 px-4 border-b font-medium text-gray-700 text-center">
                  {month}
                </th>
              ))}
            </tr>
            <tr>
              <th className="py-2 px-4 border-b border-r font-medium text-gray-700 text-left"></th>
              {timePeriods.map(period => (
                <th key={period.id} className="py-2 px-2 border-b font-medium text-gray-700 text-center whitespace-nowrap w-16">
                  {period.label}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Table body */}
          <tbody>
            {resources.map(resource => (
              <tr key={resource.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-r">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full ${resource.color} text-white flex items-center justify-center mr-2 text-xs font-medium`}>
                      {resource.avatar}
                    </div>
                    <span>{resource.role}</span>
                  </div>
                </td>
                {timePeriods.map(period => (
                  <td 
                    key={`${resource.id}-${period.id}`} 
                    className={`py-2 px-2 border-b text-center cursor-pointer ${getAllocationCellColor(allocations[resource.id][period.id])}`}
                    onClick={() => updateAllocation(resource.id, period.id, allocations[resource.id][period.id])}
                  >
                    {allocations[resource.id][period.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Edit button in corner */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
  );
}

export default Workload;