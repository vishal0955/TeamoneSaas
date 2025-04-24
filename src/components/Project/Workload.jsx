import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import {  useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';


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
  // const [resources, setResources] = useState([
  //   { id: '3d', role: '3D CAD', avatar: '3D', color: 'bg-purple-500' },
  //   { id: '2d', role: '2D CAD', avatar: '2D', color: 'bg-pink-500' },
  //   { id: 'admin', role: 'Administration', avatar: 'A', color: 'bg-red-500' },
  //   { id: 'audioc', role: 'Audio Consultant', avatar: 'AC', color: 'bg-red-500' },
  //   { id: 'avc', role: 'AV Consultant', avatar: 'AV', color: 'bg-red-500' },
  //   { id: 'avsm', role: 'AV Subject Matter Expert', avatar: 'AV', color: 'bg-red-500' },
  //   { id: 'avse', role: 'AV Support Engineer', avatar: 'AV', color: 'bg-red-500' },
  //   { id: 'ceo', role: 'CEO', avatar: 'C', color: 'bg-blue-500' },
  // ]);

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

    const [allEvents, setAllEvents] = useState([
      { id: '1', resourceId: 'r1', title: 'xYZ - SHURE P300', start: '2024-04-18T10:00:00', end: '2024-04-18T12:00:00', backgroundColor: '#4e86f0', project: 'AlphA Networks', description: 'Complete setup for ALPHA', assignedTo: 'John Doe' },
      { id: '2', resourceId: 'r2', title: 'TECH-X - RCM L2', start: '2024-04-19T14:00:00', end: '2024-04-22T16:00:00', backgroundColor: '#4e86f0', project: 'Tech-DOM', description: 'Professional services', assignedTo: 'Jane Smith' },
      { id: '3', resourceId: 'r3', title: 'TECH-Y - RCM L3', start: '2024-04-19T09:00:00', end: '2024-04-19T17:00:00', backgroundColor: '#4e86f0', project: 'Tech-y', description: 'Professional services', assignedTo: 'Bob Johnson' },
      { id: '4', resourceId: 'r4', title: 'TECHR - RCM L1', start: '2024-04-19T13:00:00', end: '2024-04-21T15:00:00', backgroundColor: '#4e86f0', project: 'Tech-R', description: 'Professional services', assignedTo: 'Alice Brown' },
      { id: '5', resourceId: 'r5', title: 'TEST TEST', start: '2024-04-19T11:00:00', end: '2024-04-19T13:00:00', backgroundColor: '#4e86f0', project: 'TEST ', description: 'Testing project', assignedTo: 'John Doe' },
      { id: '6', resourceId: 'r6', title: 'SCC - ROYAL Dom', start: '2024-04-20T09:00:00', end: '2024-04-20T17:00:00', backgroundColor: '#4e86f0', project: 'SCC', description: 'Classic Courts Of Justice', assignedTo: 'Jane Smith' },
      { id: '7', resourceId: 'r7', title: 'Knock - RCM ADDITIONAL', start: '2024-04-21T10:00:00', end: '2024-04-21T12:00:00', backgroundColor: '#4e86f0', project: 'knock', description: 'Additional services', assignedTo: 'Bob Johnson' },
      { id: '8', resourceId: 'r8', title: 'Kingston - RCM TOWN', start: '2024-04-22T14:00:00', end: '2024-04-22T16:00:00', backgroundColor: '#4e86f0', project: 'Kingston', description: 'Town hall setup', assignedTo: 'Alice Brown' },
      { id: '9', resourceId: 'r9', title: 'SCC - 1', start: '2024-04-20T13:00:00', end: '2024-04-20T15:00:00', backgroundColor: '#4e86f0', project: 'SCC', description: 'UCI Guide implementation', assignedTo: 'John Doe' },
      { id: '10', resourceId: 'r10', title: 'SPC - BA AIRWAYS', start: '2024-04-23T10:00:00', end: '2024-04-23T12:00:00', backgroundColor: '#4e86f0', project: 'SPC Group', description: 'BA tech services', assignedTo: 'Jane Smith' },
    ]);
    
    // Displayed events (filtered)
    const [events, setEvents] = useState([...allEvents]);
    
    // Search state
    const [searchTerm, setSearchTerm] = useState('');
  
    // State for showing weekends
    const [showWeekends, setShowWeekends] = useState(true);
  
    // Resources with allocated time and percentage info
    const resources = [
      { id: 'r1', title: 'xYZ - SHURE P300', allocated: '0h 0%' },
      { id: 'r2', title: 'TECH-X - RCM L2, Professional Services', allocated: '96h 0%' },
      { id: 'r3', title: 'TECH-Y - RCM L3, Professional Services', allocated: '0h 0%' },
      { id: 'r4', title: 'TECH-Z - RCM, L1 professional services', allocated: '64h 0%' },
      { id: 'r5', title: 'Test test', allocated: '0h 0%' },
      { id: 'r6', title: 'SCC - Claasic courts ', allocated: '0h 0%' },
      { id: 'r7', title: 'TECH-X - RCM - additional', allocated: '0h 0%' },
      { id: 'r8', title: 'TECH-Y - RCM - Town hall', allocated: '0h 0%' },
      { id: 'r9', title: 'SCC - CCJ UCI GUIDE', allocated: '0h 0%' },
      { id: 'r10', title: 'SPC - BA GLA', allocated: '0h 0%' },
    ];
  
    // Projects for select dropdown
    const projects = [
      { id: 'Lambda', name: 'Lambda Networks' },
      { id: 'Techary', name: 'Techary' },
      { id: 'XYz', name: 'XYz' },
      { id: 'SCC', name: 'SCC' },
      { id: 'SPC', name: 'SSC Group' },
    ];
  
    const employees = [
      { id: 'e1', name: 'John Doe' },
      { id: 'e2', name: 'Jane Smith' },
      { id: 'e3', name: 'Bob Johnson' },
      { id: 'e4', name: 'Alice Brown' },
    ];
  
    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
      id: '',
      title: '',
      resourceId: '',
      start: '',
      end: '',
      project: '',
      description: '',
      assignedTo: '',
      isEdit: false
    });
  
    // Filter events based on search term
    useEffect(() => {
      if (!searchTerm.trim()) {
        setEvents([...allEvents]);
        return;
      }
      
      const lowerCaseSearch = searchTerm.toLowerCase();
      const filtered = allEvents.filter(event => {
        return (
          event.title.toLowerCase().includes(lowerCaseSearch) ||
          (event.project && event.project.toLowerCase().includes(lowerCaseSearch)) ||
          resources.find(r => r.id === event.resourceId)?.title.toLowerCase().includes(lowerCaseSearch) ||
          (event.assignedTo && event.assignedTo.toLowerCase().includes(lowerCaseSearch)) ||
          (event.description && event.description.toLowerCase().includes(lowerCaseSearch))
        );
      });
      
      setEvents(filtered);
    }, [searchTerm, allEvents]);
  
    const formatDateTime = (date) => {
      if (!date) return '';
      const d = new Date(date);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    };
  
    const handleEventAdd = (selectInfo) => {
      setFormData({
        id: '',
        title: '',
        resourceId: selectInfo.resource.id,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        project: "",
        description: "",
        assignedTo: "",
        isEdit: false
      });
      setShowModal(true);
    };
  
    const handleEventChange = (changeInfo) => {
      const updatedEvents = allEvents.map(event =>
        event.id === changeInfo.event.id
          ? {
              ...event,
              resourceId: changeInfo.event.getResources()[0].id,
              start: changeInfo.event.startStr,
              end: changeInfo.event.endStr
            }
          : event
      );
      
      setAllEvents(updatedEvents);
    };
  
    const handleEventClick = (clickInfo) => {
      const event = clickInfo.event;
      setFormData({
        id: event.id,
        title: event.title,
        resourceId: event.getResources()[0].id,
        start: formatDateTime(event.start),
        end: formatDateTime(event.end),
        project: event.extendedProps.project || '',
        description: event.extendedProps.description || '',
        assignedTo: event.extendedProps.assignedTo || '',
        isEdit: true
      });
      setShowModal(true);
    };
  
    const handleAddTaskClick = () => {
      const now = new Date();
      setFormData({
        id: '',
        title: '',
        resourceId: '',
        start: formatDateTime(now),
        end: formatDateTime(new Date(now.getTime() + 2 * 60 * 60 * 1000)),
        project: '',
        description: '',
        assignedTo: '',
        isEdit: false
      });
      setShowModal(true);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      
      const newEvent = {
        id: formData.isEdit ? formData.id : String(Date.now()),
        resourceId: formData.resourceId,
        title: formData.title,
        start: formData.start,
        end: formData.end,
        backgroundColor: '#4e86f0',
        project: formData.project,
        description: formData.description,
        assignedTo: formData.assignedTo
      };
  
      if (formData.isEdit) {
        const updated = allEvents.map(event => event.id === formData.id ? newEvent : event);
        setAllEvents(updated);
      } else {
        setAllEvents([...allEvents, newEvent]);
      }
  
      setShowModal(false);
    };
  
    const handleDeleteEvent = () => {
      if (window.confirm('Are you sure you want to delete this task?')) {
        setAllEvents(allEvents.filter(event => event.id !== formData.id));
        setShowModal(false);
      }
    };
  
    const toggleWeekends = () => {
      setShowWeekends(!showWeekends);
    };
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const clearSearch = () => {
      setSearchTerm('');
    };
  
    const darkMode = useSelector((state) => state.theme.isDarkMode);
  

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Chart section */}
      <div className={`${darkMode ? "card-dark" : null }  p-4 shadow-sm mb-4`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Allocations (demand) vs Capacity (supply)</h2>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-0.5  mr-1"></div>
              <span className="text-sm ">Total capacity</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
              <span className="text-sm ">Holidays</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-300 mr-1"></div>
              <span className="text-sm ">Available capacity</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-200 mr-1"></div>
              <span className="text-sm ">Unassigned allocations</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-teal-500 mr-1"></div>
              <span className="text-sm ">Assigned allocations</span>
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
     <div className={`${darkMode ? "dark-mode" : ""} h-screen p-2 md:p-4`}>
          <div className={`${darkMode ? "dark-mode" : ""} rounded-lg shadow-lg p-3 md:p-6 h-full`}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="flex items-center space-x-2 w-full md:w-1/2 mb-2 md:mb-0">
                <div className="flex items-center w-full">
                  <input 
                    type="text" 
                    placeholder="Search by title, project, person..." 
                    className={`${darkMode ? "card-dark" : null} w-full px-3 py-1 border rounded-md pr-8`} 
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  {searchTerm && (
                    <>
                      <button  
                        className="px-1 py-1 border rounded-md bg-gray-100 ml-1"
                        onClick={clearSearch}
                      >
                        ✕
                      </button>
                      <span className="text-sm text-gray-500 ml-1">
                        Found: {events.length} of {allEvents.length}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center w-full md:w-auto justify-end">
                <button 
                  className={`px-1 py-1 border rounded-md me-2 ${showWeekends ? null : null }`}
                  onClick={toggleWeekends}
                >
                  {showWeekends ? 'Hide Weekends' : 'Show Weekends'}
                </button>
                <button 
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handleAddTaskClick}
                >
                  Add Task
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <FullCalendar
                plugins={[resourceTimelinePlugin, interactionPlugin]}
                initialView="resourceTimelineWeek"
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
                }}
                customButtons={{
                  today: {
                    text: 'today',
                    click: function() {
                      const calendarApi = this.calendar;
                      calendarApi.today();
                    }
                  }
                }}
                buttonText={{
                  today: 'today',
                  day: 'day',
                  week: 'week',
                  month: 'month'
                }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                resources={resources.map(resource => ({
                  id: resource.id,
                  title: resource.title,
                  allocated: resource.allocated
                }))}
                resourceAreaColumns={[
                  {
                    field: 'title',
                    headerContent: 'Role'
                  },
                  {
                    field: 'allocated',
                    headerContent: 'Allocated'
                  }
                ]}
                events={events}
                select={handleEventAdd}
                eventClick={handleEventClick}
                eventChange={handleEventChange}
                height="calc(100vh - 160px)"
                resourceAreaWidth="40%"
                slotDuration={{ days: 1 }}
                initialDate="2024-04-19"
                views={{
                  resourceTimelineDay: {
                    slotDuration: '00:30:00',
                    slotLabelFormat: {
                      hour: 'numeric',
                      minute: '2-digit',
                      // omitZeroMinute: true,
                      hour12: false
                    }
                  },
                  resourceTimelineWeek: {
                    slotLabelFormat: [
                      { weekday: 'short', day: '2-digit' },
                      // { hour: 'numeric', minute: '2-digit',  }
                    ]
                  }
                }}
                weekends={showWeekends}
                eventContent={(eventInfo) => {
                  const eventDate = new Date(eventInfo.event.start);
                  const day = eventDate.getDate();
                  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(eventDate);
                  
                  return (
                    <div className="p-1 text-xs bg-blue-500 text-white border rounded">
                      <div className="font-semibold">Project dates: {day} {month}</div>
                    </div>
                  );
                }}
                resourceLabelDidMount={({ el, resource }) => {
                  el.querySelector('.fc-datagrid-cell-main').style.display = 'flex';
                  el.querySelector('.fc-datagrid-cell-main').style.justifyContent = 'space-between';
                  el.querySelector('.fc-datagrid-cell-main').style.width = '100%';
                  
                  // Extract the resource's title and allocated values
                  const title = resource.title;
                  // const allocated = resource.extendedProps.allocated;
                  
                  // Create and append the title element
                  const titleEl = document.createElement('div');
                  titleEl.textContent = title;
                  titleEl.style.overflow = 'hidden';
                  titleEl.style.textOverflow = 'ellipsis';
                  titleEl.style.whiteSpace = 'nowrap';
                  titleEl.style.maxWidth = '70%';
                  
                  // Create and append the allocated element
                  const allocatedEl = document.createElement('div');
                  // allocatedEl.textContent = allocated;
                  // allocatedEl.style.textAlign = 'right';
                  
                  // Replace the content
                  const mainEl = el.querySelector('.fc-datagrid-cell-main');
                  mainEl.innerHTML = '';
                  mainEl.appendChild(titleEl);
                  // mainEl.appendChild(allocatedEl);
                }}
                dayHeaderDidMount={({ el }) => {
                  // Remove the 00:00 time display
                  const timeElements = el.querySelectorAll('.fc-col-header-cell-cushion div:nth-child(2)');
                  timeElements.forEach(timeEl => {
                    if (timeEl) {
                      timeEl.remove();
                    }
                  });
                }}
                dayHeaderContent={(args) => {
                  const date = args.date;
                  const day = date.getDate();
                  const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date);
                  return (
                    `<div class="fc-col-header-cell-cushion">
                      <div>${day} ${weekday}</div>
                    </div>`
                  );
                }}
                nowIndicator={true}
                weekNumbers={false}
                expandRows={true}
                navLinks={true}
                resourceAreaHeaderContent={
                  <div class="flex justify-between w-full px-2">
                    <div>Roles</div>
               
                  </div>
                }
                resourcesInitiallyExpanded={true}
              />
            </div>
          </div>
    
          {/* Task Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className={`${darkMode ? "card-dark" : null} bg-white rounded-lg p-4 md:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto`}>
                <h2 className="text-xl font-bold mb-4">
                  {formData.isEdit ? 'Edit Task' : 'Create New Task'}
                </h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input 
                      type="text" 
                      className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea 
                      className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows="3"
                      placeholder="Enter task description..."
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Project</label>
                    <select 
                      className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                      value={formData.resourceId}
                      onChange={(e) => setFormData({...formData, resourceId: e.target.value})}
                      required
                    >
                      <option value="">Select Project</option>
                      {resources.map(resource => (
                        <option key={resource.id} value={resource.id}>
                          {resource.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Company</label>
                      <select 
                        className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                        value={formData.project}
                        onChange={(e) => setFormData({...formData, project: e.target.value})}
                        required
                      >
                        <option value="">Select Company</option>
                        {projects.map(project => (
                          <option key={project.id} value={project.name}>
                            {project.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Assigned To</label>
                      <select 
                        className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`} 
                        value={formData.assignedTo}
                        onChange={(e) => setFormData({...formData, assignedTo: e.target.value})}
                        required
                      >
                        <option value="">Select Employee</option>
                        {employees.map(employee => (
                          <option key={employee.id} value={employee.name}>
                            {employee.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Start Date & Time</label>
                      <input 
                        type="datetime-local" 
                        className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                        value={formData.start}
                        onChange={(e) => setFormData({...formData, start: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">End Date & Time</label>
                      <input 
                        type="datetime-local" 
                        className={`${darkMode ? "card-dark" : null} w-full px-3 py-2 border rounded-md`}
                        value={formData.end}
                        onChange={(e) => setFormData({...formData, end: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-2 md:mb-0">
                      {formData.isEdit && (
                        <button 
                          type="button"
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2"
                          onClick={handleDeleteEvent}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        type="button"
                        className="px-4 py-2 border rounded-md"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        {formData.isEdit ? 'Update' : 'Create'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      {/* Edit button in corner */}
      <button className="fixed bottom-6 right-6 w-12 h-12  rounded-full shadow-lg flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
  );
}

export default Workload;