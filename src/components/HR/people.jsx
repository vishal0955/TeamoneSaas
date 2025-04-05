import React from "react";
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';

const People = () => {
    const [events, setEvents] = useState([
      { id: '1', resourceId: 'r1', title: 'SALES - DO SALE', start: '2024-03-29T10:00:00', end: '2024-03-30T12:00:00', backgroundColor: '#e6e6fa', project: 'Sales', attendanceStatus: 'Present' },
      { id: '2', resourceId: 'r2', title: 'CLIENT - TRAINING', start: '2024-03-29T14:00:00', end: '2024-03-31T16:00:00', backgroundColor: '#e6e6fa', project: 'Training', attendanceStatus: 'Present' },
      { id: '3', resourceId: 'r1', title: 'SALES - DO SALE', start: '2024-04-05T09:00:00', end: '2024-04-06T17:00:00', backgroundColor: '#e6e6fa', project: 'Sales', attendanceStatus: 'Present' },
      { id: '4', resourceId: 'r3', title: 'FF 2024', start: '2024-04-10T13:00:00', end: '2024-04-12T15:00:00', backgroundColor: '#e6e6fa', project: 'Finance', attendanceStatus: 'Present' },
    ]);
  
    // State for showing weekends
    const [showWeekends, setShowWeekends] = useState(true);
    
    // State for selected date
    const [selectedDate, setSelectedDate] = useState(null);
  
    // Resources with unscheduled and overdue tasks sections
    const resources = [
      { id: 'r1', title: 'John Doe' },
      { id: 'r2', title: 'chris Martin' },
      { id: 'r3', title: 'Bob Marley' },
      { id: 'r4', title: 'Ezzat Kiwan' },
    ];
  
    // Projects for select dropdown
    const projects = [
      { id: 'xyz', name: 'XYZ' },
      { id: 'training', name: 'Training' },
      { id: 'finance', name: 'Finance' },
      { id: 'development', name: 'Development' },
      { id: 'marketing', name: 'Marketing' },
    ];
    
    // Simplified attendance status options
    const attendanceStatuses = ['Present', 'Absent'];
  
    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
      id: '',
      title: '',
      resourceId: '',
      start: '',
      end: '',
      project: '',
      attendanceStatus: 'Present',
      isEdit: false
    });

    // Function to get today's date in YYYY-MM-DD format for min attribute
    const getTodayDate = () => {
      const today = new Date();
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    };
  
    // Modified to format date with time or just time based on the parameter
    const formatDateTime = (date, timeOnly = false) => {
      if (!date) return '';
      const d = new Date(date);
      
      if (timeOnly) {
        return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      }
      
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    };
  
    const handleEventAdd = (selectInfo) => {
      // Set selected date
      setSelectedDate(selectInfo.start);
      
      // Format end time (only time part)
      const endTime = formatDateTime(selectInfo.end, true);
      
      setFormData({
        id: '',
        title: '',
        resourceId: selectInfo.resource.id, // This will be set and remain constant
        start: selectInfo.startStr,
        end: endTime,
        project: '',
        attendanceStatus: 'Present',
        isEdit: false
      });
      setShowModal(true);
    };
    
    // Handle date click
    const handleDateClick = (info) => {
      // Check if selected date is in the past
      const selectedDate = new Date(info.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        alert("Cannot select past dates!");
        return;
      }
      
      setSelectedDate(info.date);
      
      // Open modal with the selected date
      const endDate = new Date(info.date);
      endDate.setHours(endDate.getHours() + 2); // Default 2 hour duration
      
      setFormData({
        id: '',
        title: '',
        resourceId: '',
        start: formatDateTime(info.date),
        end: formatDateTime(endDate, true), // Only time for end
        project: '',
        attendanceStatus: 'Present',
        isEdit: false
      });
      setShowModal(true);
    };
  
    const handleEventChange = (changeInfo) => {
      // Check if the new start date is in the past
      const newStartDate = new Date(changeInfo.event.start);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (newStartDate < today) {
        alert("Cannot move events to past dates!");
        changeInfo.revert();
        return;
      }
      
      setEvents(events.map(event =>
        event.id === changeInfo.event.id
          ? {
              ...event,
              resourceId: changeInfo.event.getResources()[0].id,
              start: changeInfo.event.startStr,
              end: changeInfo.event.endStr
            }
          : event
      ));
    };
  
    const handleEventClick = (clickInfo) => {
      const event = clickInfo.event;
      setSelectedDate(event.start);
      
      // For editing existing events, get just the time part for end time
      const endTime = formatDateTime(event.end, true);
      
      setFormData({
        id: event.id,
        title: event.title,
        resourceId: event.getResources()[0].id, // Will remain constant during edit
        start: formatDateTime(event.start),
        end: endTime,
        project: event.extendedProps.project || '',
        attendanceStatus: event.extendedProps.attendanceStatus || 'Present',
        isEdit: true
      });
      setShowModal(true);
    };
  
    const handleAddTaskClick = () => {
      const now = selectedDate || new Date();
      
      // Check if now is in the past
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const dateToUse = now < today ? today : now;
      
      setSelectedDate(dateToUse);
      
      // For end time, get only the time part
      const endTime = formatDateTime(new Date(dateToUse.getTime() + 2 * 60 * 60 * 1000), true);
      
      setFormData({
        id: '',
        title: '',
        resourceId: '',
        start: formatDateTime(dateToUse),
        end: endTime,
        project: '',
        attendanceStatus: 'Present',
        isEdit: false
      });
      setShowModal(true);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      
      // Set background color based on attendance status
      const backgroundColor = formData.attendanceStatus === 'Present' ? '#e6e6fa' : '#ffcccc';
      
      // Convert end time to full datetime by combining start date with end time
      const startDate = new Date(formData.start);
      const [hours, minutes] = formData.end.split(':');
      const endDate = new Date(startDate);
      endDate.setHours(parseInt(hours, 10), parseInt(minutes, 10));
      
      const newEvent = {
        id: formData.isEdit ? formData.id : String(Date.now()),
        resourceId: formData.resourceId,
        title: formData.title,
        start: formData.start,
        end: formatDateTime(endDate),
        backgroundColor: backgroundColor,
        project: formData.project,
        attendanceStatus: formData.attendanceStatus
      };
  
      if (formData.isEdit) {
        setEvents(events.map(event => event.id === formData.id ? newEvent : event));
      } else {
        setEvents([...events, newEvent]);
      }
  
      setShowModal(false);
    };
  
    const handleDeleteEvent = () => {
      if (window.confirm('Are you sure you want to delete this task?')) {
        setEvents(events.filter(event => event.id !== formData.id));
        setShowModal(false);
      }
    };
  
    const toggleWeekends = () => {
      setShowWeekends(!showWeekends);
    };
  
  return (
    <>
     
      <div className="bg-white text-gray-900 min-h-screen">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navbar */}
          {/* <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-semibold">People</h1>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="fas fa-users"></i>
                  <span>Employees</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="far fa-clock"></i>
                  <span>Time management</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="far fa-file-alt"></i>
                  <span>Documents</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="fas fa-money-bill"></i>
                  <span>Payroll</span>
                </a>
              </div>
            </div>
          </nav> */}

          {/* Requests Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Showing 3 requests</h2>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                View all
              </a>
            </div>
            <div className="mt-4 bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a person"
                    alt="Harry"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">8 - 12 Aug 2024 · Annual Leave</h3>
                    <p className="text-sm text-gray-600">
                      Harry Peter · <span className="text-yellow-500">Pending</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 flex items-center space-x-2">
                    <i className="fas fa-check"></i>
                    <span>Approve</span>
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 flex items-center space-x-2">
                    <i className="fas fa-times"></i>
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="h-screen p-4 bg-white">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <input type="text" placeholder="Search" className="px-3 py-1 border rounded-md" />
                      <button 
                        className={`px-3 py-1 border rounded-md ${showWeekends ? 'bg-gray-100' : 'bg-blue-100'}`}
                        onClick={toggleWeekends}
                      >
                        {showWeekends ? 'Hide Weekends' : 'Show Weekends'}
                      </button>
                      {selectedDate && (
                        <div className="px-3 py-1 bg-blue-100 border rounded-md">
                          Selected: {new Date(selectedDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    {/* <button 
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      onClick={handleAddTaskClick}
                    >
                      Add Task
                    </button> */}
                  </div>
                  
                  <FullCalendar
                    plugins={[resourceTimelinePlugin, interactionPlugin]}
                    initialView="resourceTimelineMonth"
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
                    }}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    resources={resources}
                    events={events}
                    select={handleEventAdd}
                    eventClick={handleEventClick}
                    eventChange={handleEventChange}
                    dateClick={handleDateClick}
                    height="100%"
                    resourceAreaWidth={200}
                    slotDuration={{ days: 1 }}
                    views={{
                      resourceTimelineDay: {
                        slotDuration: '00:30:00',
                        slotLabelFormat: {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        }
                      }
                    }}
                    weekends={showWeekends}
                    eventContent={(eventInfo) => {
                      return (
                        <div className={`p-1 text-xs ${eventInfo.event.extendedProps.attendanceStatus === 'Absent' ? 'bg-red-100 border-red-200' : 'bg-green-100 border-purple-200'} border rounded`}>
                          <div className="font-semibold">{eventInfo.event.title}</div>
                          <div className="text-gray-600">
                            {eventInfo.event.extendedProps.project}
                            {eventInfo.event.extendedProps.attendanceStatus === 'Absent' && 
                              <span className="ml-1 text-red-600">• Absent</span>
                            }
                          </div>
                        </div>
                      )
                    }}
                    resourceLabelContent={(info) => {
                      // Check if this is a main resource or a child
                      const isChild = info.resource.parent;
                      
                      if (isChild) {
                        return (
                          <div className="text-xs text-gray-500 pl-4">
                            {info.resource.title}
                          </div>
                        )
                      }
                      
                      return (
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            {info.resource.title.substring(0, 1)}
                          </div>
                          <div>{info.resource.title}</div>
                        </div>
                      )
                    }}
                    resourceAreaHeaderContent="Assignees"
                    resourceGroupLabelClassNames="font-bold"
                    resourceLaneClassNames="border-b hover:bg-gray-50"
                    slotLaneClassNames="border-r"
                    nowIndicator={true}
                    weekNumbers={false}
                    weekText="W"
                    businessHours={false}
                    snapDuration={{ days: 1 }}
                    expandRows={true}
                    navLinks={true}
                  />
                </div>
          
                {/* Task Modal */}
                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                      <h2 className="text-xl font-bold mb-4">
                        {formData.isEdit ? 'Edit Attendance' : 'Attendance'}
                      </h2>
                      <form onSubmit={handleFormSubmit}>
                        
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Assigned To</label>
                          <select 
                            className="w-full px-3 py-2 border rounded-md"
                            value={formData.resourceId}
                            onChange={(e) => setFormData({...formData, resourceId: e.target.value})}
                            required
                            disabled={formData.isEdit} // Disable selection on edit
                          >
                            <option value="">Select Assignee</option>
                            {resources.map(resource => (
                              <option key={resource.id} value={resource.id}>
                                {resource.title}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Attendance Status</label>
                          <select 
                            className="w-full px-3 py-2 border rounded-md"
                            value={formData.attendanceStatus}
                            onChange={(e) => setFormData({...formData, attendanceStatus: e.target.value})}
                            required
                          >
                            {attendanceStatuses.map(status => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Start Date & Time</label>
                            <input 
                              type="datetime-local" 
                              className="w-full px-3 py-2 border rounded-md"
                              value={formData.start}
                              onChange={(e) => setFormData({...formData, start: e.target.value})}
                              min={getTodayDate() + "T00:00"} // Prevents selecting past dates
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">End Time</label>
                            <input 
                              type="time" 
                              className="w-full px-3 py-2 border rounded-md"
                              value={formData.end}
                              onChange={(e) => setFormData({...formData, end: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div>
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
                              className="px-4 py-2 border rounded-md hover:bg-gray-100"
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
        </div>
      </div>
    </>
  );
};

export default People;