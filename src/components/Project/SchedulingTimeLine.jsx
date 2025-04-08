import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Search, Filter, Download, Share } from 'lucide-react';

const TeamAvailabilityCalendar = () => {
  // Sample team members data
  const [teamMembers, setTeamMembers] = useState([
    { 
      id: 1, 
      name: 'Alex/Designer', 
      role: 'UX/UI Designer',
      avatar: '/api/placeholder/40/40',
      allocated: '40h/week'
    },
    { 
      id: 2, 
      name: 'Samantha Price', 
      role: 'Product Manager',
      avatar: '/api/placeholder/40/40',
      allocated: '35h/week'
    },
    { 
      id: 3, 
      name: 'Jessica coach', 
      role: 'UX Coach',
      avatar: '/api/placeholder/40/40',
      allocated: '20h/week'
    }
  ]);

  // Sample allocations data
  const [allocations, setAllocations] = useState([
    { 
      memberId: 2, 
      startDate: new Date(2025, 2, 28), 
      endDate: new Date(2025, 3, 1), 
      percentage: 80, 
      label: '80% (32h)',
      color: '#3366CC'
    },
    { 
      memberId: 2, 
      startDate: new Date(2025, 3, 8), 
      endDate: new Date(2025, 3, 10), 
      percentage: 40, 
      label: '40% (16h)',
      color: '#77DD77'
    }
  ]);

  // State for date range display
  const [displayDates, setDisplayDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date(2025, 2, 25)); // Start with March 25, 2025
  const [searchQuery, setSearchQuery] = useState('');
  const [filterActive, setFilterActive] = useState(false);

  // Generate date range for display
  useEffect(() => {
    const dates = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 16; i++) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    setDisplayDates(dates);
  }, [startDate]);

  // Navigate date range
  const navigateDates = (direction) => {
    const newDate = new Date(startDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setStartDate(newDate);
  };

  // Format date for display
  const formatDate = (date) => {
    return date.getDate();
  };

  // Format month for display
  const formatMonth = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
  };

  // Format day for display
  const formatDay = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  };

  // Check if allocation falls on a specific date
  const getAllocationForDate = (memberId, date) => {
    const dateTime = date.getTime();
    return allocations.find(a => 
      a.memberId === memberId && 
      dateTime >= a.startDate.getTime() && 
      dateTime <= a.endDate.getTime()
    );
  };

  // Set today as current date
  const goToToday = () => {
    setStartDate(new Date());
  };

  // Add a new allocation 
  const addAllocation = (memberId, startDate, days, percentage, color) => {
    const start = new Date(startDate);
    const end = new Date(startDate);
    end.setDate(end.getDate() + days - 1);
    
    const hoursPerWeek = teamMembers.find(m => m.id === memberId)?.allocated.split('/')[0] || '40h';
    const hours = Math.round((parseInt(hoursPerWeek) * percentage) / 100);
    
    const newAllocation = {
      memberId,
      startDate: start,
      endDate: end,
      percentage,
      label: `${percentage}% (${hours}h)`,
      color: color || '#3366CC'
    };
    
    setAllocations([...allocations, newAllocation]);
  };

  // For demonstration purposes - let users add allocations by clicking on cells
  const handleCellClick = (memberId, date) => {
    const existingAllocation = getAllocationForDate(memberId, date);
    
    if (!existingAllocation) {
      const randomPercentage = Math.floor(Math.random() * 4 + 1) * 20; // 20%, 40%, 60%, 80%
      const colors = ['#3366CC', '#77DD77', '#FFB347', '#FF6961'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      addAllocation(memberId, date, 3, randomPercentage, randomColor);
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-2 bg-white border-b">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="All users..."
              className="pl-8 pr-2 py-1 text-sm border rounded w-32"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={14} className="absolute left-2 top-2 text-gray-400" />
          </div>
          
          <button 
            className={`flex items-center p-1 text-sm border rounded ${filterActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setFilterActive(!filterActive)}
          >
            <Filter size={14} className="mr-1" />
            Filter
          </button>
          
          <button className="flex items-center p-1 text-sm border rounded text-gray-600 hover:bg-gray-100">
            Find availability
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
            <Search size={16} />
          </button>
          
          <button
            className="flex items-center py-1 px-2 text-sm border rounded hover:bg-gray-100"
            onClick={goToToday}
          >
            Today
          </button>
          
          <button 
            className="p-1 text-gray-500 hover:bg-gray-100 rounded"
            onClick={() => navigateDates('prev')}
          >
            <ChevronLeft size={16} />
          </button>
          
          <button 
            className="p-1 text-gray-500 hover:bg-gray-100 rounded"
            onClick={() => navigateDates('next')}
          >
            <ChevronRight size={16} />
          </button>
          
          <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
            <Calendar size={16} />
          </button>
          
          <button className="p-1 text-gray-500 hover:bg-gray-100 rounded">
            <Share size={16} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow overflow-auto">
        {/* Team members column */}
        <div className="min-w-64 bg-white border-r">
          <div className="sticky top-0 p-3 font-medium text-gray-700 bg-gray-100 border-b">
            Team members
          </div>
          <div className="sticky top-10 p-3 font-medium text-gray-700 bg-gray-50 border-b">
            Allocated
          </div>
          
          {teamMembers.map(member => (
            <div key={member.id} className="flex items-center p-3 border-b hover:bg-gray-50">
              <input type="checkbox" className="mr-3" />
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-8 h-8 rounded-full mr-3" 
              />
              <div className="flex-grow">
                <div className="font-medium text-sm">{member.name}</div>
                <div className="text-xs text-gray-500">{member.role}</div>
              </div>
              <div className="text-sm font-medium">
                {member.allocated}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex-grow overflow-x-auto">
          {/* Month headers */}
          <div className="flex sticky top-0 bg-gray-100 border-b z-10">
            {displayDates.length > 0 && (
              <>
                <div className="flex px-2">
                  {displayDates.slice(0, 8).map((date, i) => (
                    <div key={`month-1-${i}`} className="w-12 text-center">
                      {i === 0 || date.getDate() === 1 ? (
                        <div className="text-xs font-medium py-1">
                          {formatMonth(date)} '{date.getFullYear().toString().substr(-2)}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="flex px-2">
                  {displayDates.slice(8).map((date, i) => (
                    <div key={`month-2-${i}`} className="w-12 text-center">
                      {i === 0 || date.getDate() === 1 ? (
                        <div className="text-xs font-medium py-1">
                          {formatMonth(date)} '{date.getFullYear().toString().substr(-2)}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Date headers */}
          <div className="flex sticky top-10 bg-gray-50 border-b">
            {displayDates.map((date, index) => (
              <div key={`date-${index}`} className="w-12 text-center">
                <div className="text-xs text-gray-500">
                  {formatDay(date)}
                </div>
                <div className="text-xs font-medium pb-1">
                  {formatDate(date)}
                </div>
              </div>
            ))}
          </div>

          {/* Team member rows */}
          {teamMembers.map(member => (
            <div key={`row-${member.id}`} className="flex border-b hover:bg-gray-50">
              {displayDates.map((date, dateIndex) => {
                const allocation = getAllocationForDate(member.id, date);
                const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                
                return (
                  <div 
                    key={`cell-${member.id}-${dateIndex}`} 
                    className={`w-12 h-20 ${isWeekend ? 'bg-gray-50' : ''}`}
                    onClick={() => handleCellClick(member.id, date)}
                    style={{ cursor: 'pointer' }}
                  >
                    {allocation && (
                      <div 
                        className="h-full flex items-center justify-center text-xs text-white font-medium"
                        style={{ 
                          backgroundColor: allocation.color,
                          borderRadius: '2px',
                          opacity: 0.9,
                          margin: '2px'
                        }}
                      >
                        {date.getTime() === allocation.startDate.getTime() && allocation.label}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamAvailabilityCalendar;