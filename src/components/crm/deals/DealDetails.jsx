// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const DealDetails = () => {
//   const [activeTab, setActiveTab] = useState('Activity');
//   const [filterDate, setFilterDate] = useState('1/5/26');
//   const [activities, setActivities] = useState([
//     {
//       id: 1,
//       type: 'status_change',
//       content: 'Deal moved to Qualified by Integration.',
//       date: '16 Dec 2024 at 13:10 GMT'
//     },
//     {
//       id: 2,
//       type: 'creation',
//       content: 'This deal was created',
//       date: '16 Dec 2024 at 13:10 GMT'
//     }
//   ]);

//   const dealData = {
//     name: 'StraightIn Lead - Turning Point Management Group',
//     amount: '£25,000',
//     closeDate: '-/-',
//     stage: 'Qualified',
//     pipeline: 'Sales pipeline'
//   };

//   const tabs = ['Activity', 'Notes', 'Emails', 'Calls', 'Tasks', 'Meetings'];
  
//   const sidebarItems = [
//     { label: 'Contacts', count: 0 },
//     { label: 'Companies', count: 0 },
//     { label: 'Leads', count: 0 },
//     { label: 'Deals', count: 0 },
//     { label: 'Quotes', count: 0 },
//     { label: 'Invoice Stack', count: 0 },
//     { label: 'Tickets', count: 0 },
//     { label: 'Line items', count: 0 },
//     { label: 'Attachments', count: undefined },
//     { label: 'Portant - Document Automation', count: 1 },
//     { label: 'Portant | Latest Document', count: undefined }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <div className="bg-white border-b">
//         <div className="px-4 py-2">
//           <Link to="/deals" className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Deals
//           </Link>
//           <h1 className="text-xl font-semibold mt-2">{dealData.name}</h1>
          
//           {/* Deal Info Grid */}
//           <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
//             <div>
//               <div className="text-gray-600">Amount:</div>
//               <div>{dealData.amount}</div>
//             </div>
//             <div>
//               <div className="text-gray-600">Close Date:</div>
//               <div>{dealData.closeDate}</div>
//             </div>
//             <div>
//               <div className="text-gray-600">Stage:</div>
//               <div className="text-green-600">{dealData.stage}</div>
//             </div>
//             <div>
//               <div className="text-gray-600">Pipeline:</div>
//               <div>{dealData.pipeline}</div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-2 mt-4">
//             <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//               </svg>
//             </button>
//             <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//             </button>
//             <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//             </button>
//             <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
//               </svg>
//             </button>
//             <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex">
//         {/* Left Content */}
//         <div className="flex-1 bg-white m-4 rounded-lg shadow">
//           {/* Tabs */}
//           <div className="border-b">
//             <div className="flex">
//               {tabs.map(tab => (
//                 <button
//                   key={tab}
//                   className={`px-4 py-2 text-sm font-medium ${
//                     activeTab === tab
//                       ? 'text-blue-600 border-b-2 border-blue-600'
//                       : 'text-gray-500 hover:text-gray-700'
//                   }`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Search and Filter */}
//           <div className="p-4 border-b">
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <input
//                   type="text"
//                   placeholder="Search activities"
//                   className="w-full px-3 py-2 border rounded-lg"
//                 />
//               </div>
//               <div className="flex gap-2">
//                 <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
//                   Filter activity ({filterDate})
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
//                   All users
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
//                   All teams
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Activity List */}
//           <div className="p-4">
//             {activities.map(activity => (
//               <div key={activity.id} className="flex gap-4 mb-4">
//                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-sm">{activity.content}</div>
//                   <div className="text-xs text-gray-500">{activity.date}</div>
//                 </div>
//                 <button className="ml-auto text-sm text-gray-600 hover:text-gray-800">View details</button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="w-64 bg-white m-4 ml-0 rounded-lg shadow">
//           <div className="p-4">
//             {sidebarItems.map((item, index) => (
//               <div key={index} className="flex justify-between items-center py-2">
//                 <span className="text-sm">{item.label}</span>
//                 <div className="flex items-center gap-2">
//                   {item.count !== undefined && (
//                     <span className="text-sm text-gray-500">({item.count})</span>
//                   )}
//                   <button className="text-blue-600 text-sm">Add</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DealDetails;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivityTab from './tabs/ActivityTab';
import NotesTab from './tabs/NotesTab';
import EmailsTab from './tabs/EmailsTab';
import CallsTab from './tabs/CallsTab';
import TasksTab from './tabs/TasksTab';
import MeetingsTab from './tabs/MeetingsTab';

const DealDetails = () => {
  const [activeTab, setActiveTab] = useState('Activity');
  const [filterDate, setFilterDate] = useState('1/5/26');
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: 'status_change',
      content: 'Deal moved to Qualified by Integration.',
      date: '16 Dec 2024 at 13:10 GMT'
    },
    {
      id: 2,
      type: 'creation',
      content: 'This deal was created',
      date: '16 Dec 2024 at 13:10 GMT'
    }
  ]);

  const dealData = {
    name: 'StraightIn Lead - Turning Point Management Group',
    amount: '£25,000',
    closeDate: '-/-',
    stage: 'Qualified',
    pipeline: 'Sales pipeline'
  };

  const tabs = ['Activity', 'Notes', 'Emails', 'Calls', 'Tasks', 'Meetings'];
  
  const tabComponents = {
    'Activity': ActivityTab,
    'Notes': NotesTab,
    'Emails': EmailsTab,
    'Calls': CallsTab,
    'Tasks': TasksTab,
    'Meetings': MeetingsTab
  };

  const CurrentTabComponent = tabComponents[activeTab];

  const sidebarItems = [
    { label: 'Contacts', count: 0 },
    { label: 'Companies', count: 0 },
    { label: 'Leads', count: 0 },
    { label: 'Deals', count: 0 },
    { label: 'Quotes', count: 0 },
    { label: 'Invoice Stack', count: 0 },
    { label: 'Tickets', count: 0 },
    { label: 'Line items', count: 0 },
    { label: 'Attachments', count: undefined },
    { label: 'Portant - Document Automation', count: 1 },
    { label: 'Portant | Latest Document', count: undefined }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="px-4 py-2">
          <Link to="/deals" className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Deals
          </Link>
          <h1 className="text-xl font-semibold mt-2">{dealData.name}</h1>
          
          {/* Deal Info Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <div className="text-gray-600">Amount:</div>
              <div>{dealData.amount}</div>
            </div>
            <div>
              <div className="text-gray-600">Close Date:</div>
              <div>{dealData.closeDate}</div>
            </div>
            <div>
              <div className="text-gray-600">Stage:</div>
              <div className="text-green-600">{dealData.stage}</div>
            </div>
            <div>
              <div className="text-gray-600">Pipeline:</div>
              <div>{dealData.pipeline}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Content */}
        <div className="flex-1 bg-white m-4 rounded-lg shadow">
          {/* Tabs */}
          <div className="border-b">
            <div className="flex">
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="p-4 border-b">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search activities"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                  Filter activity ({filterDate})
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                  All users
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                  All teams
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <CurrentTabComponent activities={activities} />
        </div>

        {/* Right Sidebar */}
        <div className="w-64 bg-white m-4 ml-0 rounded-lg shadow">
          <div className="p-4">
            {sidebarItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <span className="text-sm">{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.count !== undefined && (
                    <span className="text-sm text-gray-500">({item.count})</span>
                  )}
                  <button className="text-blue-600 text-sm">Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetails;

