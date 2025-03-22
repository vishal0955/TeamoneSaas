// import React, { useState } from 'react';

// const ContactDetailPage = () => {
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [activeSection, setActiveSection] = useState('Activity');

//   return (
//     <div className="container-fluid p-0">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
//         <div>
//           <a href="#" className="text-decoration-none text-dark">
//             <i className="bi bi-arrow-left me-2"></i>
//             Back to Contacts
//           </a>
//         </div>
//         <div className="d-flex gap-2">
//           <button className="btn btn-outline-secondary">Actions</button>
//           <button className="btn btn-dark">Customize record</button>
//         </div>
//       </div>

//       <div className="row m-0">
//         {/* Left Sidebar */}
//         <div className="col-12 col-md-3 p-3 border-end">
//           <div className="card border-0 mb-4">
//             <div className="card-body text-center">
//               <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
//                 <span className="fs-3">N</span>
//               </div>
//               <h5 className="card-title mb-0">Nikunj</h5>
//               <p className="text-muted small mb-3">zoho.com</p>
//               <p className="text-muted small mb-3">message-service@sender.zoho.com</p>
              
//               <div className="d-flex justify-content-center gap-3 mb-3">
//                 <button className="btn btn-light btn-sm rounded-circle">
//                   <i className="bi bi-pencil"></i>
//                 </button>
//                 <button className="btn btn-light btn-sm rounded-circle">
//                   <i className="bi bi-envelope"></i>
//                 </button>
//                 <button className="btn btn-light btn-sm rounded-circle">
//                   <i className="bi bi-telephone"></i>
//                 </button>
//                 <button className="btn btn-light btn-sm rounded-circle">
//                   <i className="bi bi-calendar"></i>
//                 </button>
//                 <button className="btn btn-light btn-sm rounded-circle">
//                   <i className="bi bi-three-dots"></i>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="card border-0 mb-3">
//             <div className="card-body">
//               <h6 className="card-title">About this contact</h6>
//             </div>
//           </div>

//           <div className="card border-0 mb-2">
//             <div className="card-body">
//               <p className="card-text">Communication subscriptions</p>
//             </div>
//           </div>

//           <div className="card border-0">
//             <div className="card-body">
//               <p className="card-text">Website activity</p>
//             </div>
//           </div>
//         </div>

//         {/* Middle Section - Activities */}
//         <div className="col-12 col-md-6 p-3">
//           <ul className="nav nav-tabs mb-4">
//             <li className="nav-item">
//               <button 
//                 className={`nav-link ${activeTab === 'Overview' ? 'active border-bottom border-2 border-primary' : ''}`} 
//                 onClick={() => setActiveTab('Overview')}
//               >
//                 Overview
//               </button>
//             </li>
//             <li className="nav-item">
//               <button 
//                 className={`nav-link ${activeTab === 'Activities' ? 'active' : ''}`} 
//                 onClick={() => setActiveTab('Activities')}
//               >
//                 Activities
//               </button>
//             </li>
//           </ul>

//           <div className="mb-4">
//             <div className="input-group">
//               <span className="input-group-text bg-white border-end-0">
//                 <i className="bi bi-search"></i>
//               </span>
//               <input 
//                 type="text" 
//                 className="form-control border-start-0" 
//                 placeholder="Search activities" 
//               />
//             </div>
//           </div>

//           <ul className="nav nav-underline mb-4">
//             <li className="nav-item">
//               <button 
//                 className={`nav-link ${activeSection === 'Activity' ? 'active' : ''}`} 
//                 onClick={() => setActiveSection('Activity')}
//               >
//                 Activity
//               </button>
//             </li>
//             <li className="nav-item">
//               <button 
//                 className={`nav-link ${activeSection === 'Notes' ? 'active' : ''}`} 
//                 onClick={() => setActiveSection('Notes')}
//               >
//                 Notes
//               </button>
//             </li>
//             <li className="nav-item">
//               <button 
//                 className={`nav-link ${activeSection === 'Emails' ? 'active' : ''}`} 
//                 onClick={() => setActiveSection('Emails')}
//               >
//                 Emails
//               </button>
//             </li>
//             <li className="nav-item">
//               <button 
//                 className={`nav-link ${activeSection === 'Calls' ? 'active' : ''}`} 
//                 onClick={() => setActiveSection('Calls')}
//               >
//                 Calls
//               </button>
//             </li>
//             <li className="nav-item">
//               <button 
//                 className={`nav-link ${activeSection === 'Tasks' ? 'active' : ''}`} 
//                 onClick={() => setActiveSection('Tasks')}
//               >
//                 Tasks
//               </button>
//             </li>
//             <li className="nav-item">
//               <button 
//                 className={`nav-link ${activeSection === 'Meetings' ? 'active' : ''}`} 
//                 onClick={() => setActiveSection('Meetings')}
//               >
//                 Meetings
//               </button>
//             </li>
//           </ul>

//           <div className="d-flex gap-2 mb-4">
//             <button className="btn btn-sm btn-light">Filter activity (26/39)</button>
//             <button className="btn btn-sm btn-light">All users</button>
//             <button className="btn btn-sm btn-light">All teams</button>
//           </div>

//           {/* Activity Items */}
//           <div className="card mb-3">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center mb-2">
//                 <h6 className="mb-0">Ticket activity</h6>
//                 <small className="text-muted">24 Dec 2024 at 11:48 GMT</small>
//               </div>
//               <p className="mb-0">
//                 <span className="fw-medium">Andrew Ashraf</span> moved ticket <a href="#" className="text-decoration-none">Invoice - INV-0000214</a>
//               </p>
//             </div>
//           </div>

//           <div className="card mb-3">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-center mb-2">
//                 <h6 className="mb-0">Ticket activity</h6>
//                 <small className="text-muted">23 Dec 2024 at 17:40 GMT</small>
//               </div>
//               <p className="mb-0">
//                 <span className="fw-medium">Andrew Ashraf</span> moved ticket <a href="#" className="text-decoration-none">Invoice - INV-0000215</a>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="col-12 col-md-3 p-3 border-start">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h6 className="mb-0">Companies (1)</h6>
//             <button className="btn btn-sm btn-link text-decoration-none">+ Add</button>
//           </div>

//           <div className="card mb-4">
//             <div className="card-body">
//               <small className="text-muted">Primary</small>
//               <h6 className="mb-1">zoho.com</h6>
//               <p className="small text-muted mb-1">sender.zoho.com</p>
//               <p className="small text-muted mb-0">Phone: —</p>
//             </div>
//           </div>

//           <h6 className="mb-3">Quick Links</h6>

//           <div className="list-group list-group-flush mb-4">
//             <div className="list-group-item d-flex justify-content-between align-items-center px-0">
//               <span>Contacts (0)</span>
//               <button className="btn btn-sm btn-link text-decoration-none">+ Add</button>
//             </div>
//             <div className="list-group-item d-flex justify-content-between align-items-center px-0">
//               <span>Leads (0)</span>
//               <button className="btn btn-sm btn-link text-decoration-none">+ Add</button>
//             </div>
//             <div className="list-group-item d-flex justify-content-between align-items-center px-0">
//               <span>Deals (0)</span>
//               <button className="btn btn-sm btn-link text-decoration-none">+ Add</button>
//             </div>
//             <div className="list-group-item d-flex justify-content-between align-items-center px-0">
//               <span>Tickets (2)</span>
//               <button className="btn btn-sm btn-link text-decoration-none">+ Add</button>
//             </div>
//             <div className="list-group-item d-flex justify-content-between align-items-center px-0">
//               <span>Invoices (0)</span>
//               <button className="btn btn-sm btn-link text-decoration-none">Add</button>
//             </div>
//             <div className="list-group-item d-flex justify-content-between align-items-center px-0">
//               <span>Payments (0)</span>
//               <button className="btn btn-sm btn-link text-decoration-none">+ Add</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDetailPage;


// import React, { useState } from 'react';

// const ContactDetailPage = () => {


//   const [activeTab, setActiveTab] = useState('Overview');
//   const [activeSection, setActiveSection] = useState('Activity');

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 border-b">
//         <div>
//           <a href="#" className="text-gray-800 hover:text-gray-600 flex items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//             </svg>
//             Back to Contacts
//           </a>
//         </div>
//         <div className="flex gap-2">
//           <button className="px-4 py-2 border border-gray-300 rounded text-sm">Actions</button>
//           <button className="px-4 py-2 bg-gray-900 text-white rounded text-sm">Customize record</button>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row">
//         {/* Left Sidebar */}
//         <div className="w-full md:w-1/4 p-4 border-r">
//           <div className="mb-6 text-center">
//             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
//               <span className="text-2xl">N</span>
//             </div>
//             <h5 className="font-medium">Nikunj</h5>
//             <p className="text-sm text-gray-500">zoho.com</p>
//             <p className="text-sm text-gray-500 mb-4">message-service@sender.zoho.com</p>
            
//             <div className="flex justify-center gap-3 mb-4">
//               <button className="p-2 rounded-full hover:bg-gray-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                 </svg>
//               </button>
//               <button className="p-2 rounded-full hover:bg-gray-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </button>
//               <button className="p-2 rounded-full hover:bg-gray-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//               </button>
//               <button className="p-2 rounded-full hover:bg-gray-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//               </button>
//               <button className="p-2 rounded-full hover:bg-gray-100">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           <div className="mb-4 border-b pb-3">
//             <h6 className="font-medium text-sm">About this contact</h6>
//           </div>

//           <div className="py-2 border-b">
//             <p className="text-sm">Communication subscriptions</p>
//           </div>

//           <div className="py-2">
//             <p className="text-sm">Website activity</p>
//           </div>
//         </div>

//         {/* Middle Section - Activities */}
//         <div className="w-full md:w-2/4 p-4">
//           <div className="border-b mb-6">
//             <nav className="flex">
//               <button 
//                 className={`pb-3 px-4 text-sm font-medium ${activeTab === 'Overview' 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveTab('Overview')}
//               >
//                 Overview
//               </button>
//               <button 
//                 className={`pb-3 px-4 text-sm font-medium ${activeTab === 'Activities' 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveTab('Activities')}
//               >
//                 Activities
//               </button>
//             </nav>
//           </div>

//           <div className="mb-6">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <input 
//                 type="text" 
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
//                 placeholder="Search activities" 
//               />
//             </div>
//           </div>

//           <div className="border-b mb-6">
//             <nav className="flex space-x-4 overflow-x-auto pb-1">
//               <button 
//                 className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Activity' 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveSection('Activity')}
//               >
//                 Activity
//               </button>
//               <button 
//                 className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Notes' 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveSection('Notes')}
//               >
//                 Notes
//               </button>
//               <button 
//                 className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Emails' 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveSection('Emails')}
//               >
//                 Emails
//               </button>
//               <button 
//                 className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Calls' 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveSection('Calls')}
//               >
//                 Calls
//               </button>
//               <button 
//                 className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Tasks' 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveSection('Tasks')}
//               >
//                 Tasks
//               </button>
//               <button 
//                 className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Meetings' 
//                   ? 'text-blue-600 border-b-2 border-blue-600' 
//                   : 'text-gray-500 hover:text-gray-700'}`}
//                 onClick={() => setActiveSection('Meetings')}
//               >
//                 Meetings
//               </button>
//             </nav>
//           </div>

//           <div className="flex flex-wrap gap-2 mb-6">
//             <button className="px-3 py-1 bg-gray-100 text-sm rounded-md">Filter activity (26/39)</button>
//             <button className="px-3 py-1 bg-gray-100 text-sm rounded-md">All users</button>
//             <button className="px-3 py-1 bg-gray-100 text-sm rounded-md">All teams</button>
//           </div>

//           {/* Activity Items */}
//           <div className="mb-4 bg-white border rounded-md shadow-sm">
//             <div className="p-4">
//               <div className="flex justify-between items-center mb-2">
//                 <h6 className="font-medium text-sm">Ticket activity</h6>
//                 <span className="text-xs text-gray-500">24 Dec 2024 at 11:48 GMT</span>
//               </div>
//               <p className="text-sm">
//                 <span className="font-medium">Andrew Ashraf</span> moved ticket <a href="#" className="text-blue-600 hover:underline">Invoice - INV-0000214</a>
//               </p>
//             </div>
//           </div>

//           <div className="mb-4 bg-white border rounded-md shadow-sm">
//             <div className="p-4">
//               <div className="flex justify-between items-center mb-2">
//                 <h6 className="font-medium text-sm">Ticket activity</h6>
//                 <span className="text-xs text-gray-500">23 Dec 2024 at 17:40 GMT</span>
//               </div>
//               <p className="text-sm">
//                 <span className="font-medium">Andrew Ashraf</span> moved ticket <a href="#" className="text-blue-600 hover:underline">Invoice - INV-0000215</a>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="w-full md:w-1/4 p-4 border-l">
//           <div className="flex justify-between items-center mb-4">
//             <h6 className="font-medium text-sm">Companies (1)</h6>
//             <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
//           </div>

//           <div className="bg-white border rounded-md p-4 mb-6 ">
//             <p className="text-xs text-gray-500">Primary</p>
//             <h6 className="font-medium mb-1">zoho.com</h6>
//             <p className="text-sm text-gray-600 mb-1">sender.zoho.com</p>
//             <p className="text-sm text-gray-600">Phone: —</p>
//           </div>

//           <h6 className="font-medium text-sm mb-4">Quick Links</h6>

//           <div className="space-y-4">
//             <div className="flex justify-between items-center py-2 border-b">
//               <span className="text-sm">Contacts (0)</span>
//               <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b">
//               <span className="text-sm">Leads (0)</span>
//               <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b">
//               <span className="text-sm">Deals (0)</span>
//               <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b">
//               <span className="text-sm">Tickets (2)</span>
//               <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b">
//               <span className="text-sm">Invoices (0)</span>
//               <button className="text-blue-600 hover:text-blue-800 text-sm">Add</button>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b">
//               <span className="text-sm">Payments (0)</span>
//               <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDetailPage;


import React, { useState } from 'react';

const ContactDetailPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeSection, setActiveSection] = useState('Activity');

  // Sample data for different tabs and sections
  const contentByTab = {
    Overview: {
      Activity: [
        {
          type: 'Ticket activity',
          date: '24 Dec 2024 at 11:48 GMT',
          content: <p className="text-sm"><span className="font-medium">Andrew Ashraf</span> moved ticket <a href="#" className="text-blue-600 hover:underline">Invoice - INV-0000214</a></p>
        },
        {
          type: 'Ticket activity',
          date: '23 Dec 2024 at 17:40 GMT',
          content: <p className="text-sm"><span className="font-medium">Andrew Ashraf</span> moved ticket <a href="#" className="text-blue-600 hover:underline">Invoice - INV-0000215</a></p>
        }
      ],
      Notes: [
        {
          type: 'Note',
          date: '22 Dec 2024 at 09:15 GMT',
          content: <p className="text-sm">Customer requested information about new service packages.</p>
        }
      ],
      Emails: [
        {
          type: 'Email',
          date: '20 Dec 2024 at 14:30 GMT',
          content: <p className="text-sm"><span className="font-medium">Subject:</span> Follow-up on recent inquiry</p>
        }
      ],
      Calls: [
        {
          type: 'Phone call',
          date: '19 Dec 2024 at 10:20 GMT',
          content: <p className="text-sm">Discussed upcoming renewal - Call duration: 15 minutes</p>
        }
      ],
      Tasks: [
        {
          type: 'Task',
          date: '25 Dec 2024 at 12:00 GMT',
          content: <p className="text-sm"><span className="font-medium">Send proposal</span> - Due in 2 days</p>
        }
      ],
      Meetings: [
        {
          type: 'Meeting',
          date: '26 Dec 2024 at 15:00 GMT',
          content: <p className="text-sm">Quarterly review meeting - <span className="text-green-600">Confirmed</span></p>
        }
      ]
    },
    Activities: {
      Activity: [
        {
          type: 'All activities',
          date: '24 Dec 2024 at 11:48 GMT',
          content: <p className="text-sm"><span className="font-medium">Andrew Ashraf</span> moved ticket <a href="#" className="text-blue-600 hover:underline">Invoice - INV-0000214</a></p>
        },
        {
          type: 'All activities',
          date: '23 Dec 2024 at 17:40 GMT',
          content: <p className="text-sm"><span className="font-medium">Andrew Ashraf</span> moved ticket <a href="#" className="text-blue-600 hover:underline">Invoice - INV-0000215</a></p>
        },
        {
          type: 'All activities',
          date: '22 Dec 2024 at 09:15 GMT',
          content: <p className="text-sm">Customer requested information about new service packages.</p>
        },
        {
          type: 'All activities',
          date: '20 Dec 2024 at 14:30 GMT',
          content: <p className="text-sm"><span className="font-medium">Email sent:</span> Follow-up on recent inquiry</p>
        }
      ],
      Notes: [
        {
          type: 'Note',
          date: '22 Dec 2024 at 09:15 GMT',
          content: <p className="text-sm">Customer requested information about new service packages.</p>
        },
        {
          type: 'Note',
          date: '18 Dec 2024 at 11:30 GMT',
          content: <p className="text-sm">Initial contact made, customer showed interest in our premium plan.</p>
        }
      ],
      Emails: [
        {
          type: 'Email',
          date: '20 Dec 2024 at 14:30 GMT',
          content: <p className="text-sm"><span className="font-medium">Subject:</span> Follow-up on recent inquiry</p>
        },
        {
          type: 'Email',
          date: '15 Dec 2024 at 09:45 GMT',
          content: <p className="text-sm"><span className="font-medium">Subject:</span> Welcome to our services</p>
        }
      ],
      Calls: [
        {
          type: 'Phone call',
          date: '19 Dec 2024 at 10:20 GMT',
          content: <p className="text-sm">Discussed upcoming renewal - Call duration: 15 minutes</p>
        }
      ],
      Tasks: [
        {
          type: 'Task',
          date: '25 Dec 2024 at 12:00 GMT',
          content: <p className="text-sm"><span className="font-medium">Send proposal</span> - Due in 2 days</p>
        },
        {
          type: 'Task',
          date: '28 Dec 2024 at 09:00 GMT',
          content: <p className="text-sm"><span className="font-medium">Schedule follow-up call</span> - Due in 5 days</p>
        }
      ],
      Meetings: [
        {
          type: 'Meeting',
          date: '26 Dec 2024 at 15:00 GMT',
          content: <p className="text-sm">Quarterly review meeting - <span className="text-green-600">Confirmed</span></p>
        }
      ]
    }
  };

  // Get current content based on activeTab and activeSection
  const currentContent = contentByTab[activeTab][activeSection] || [];

  // Render activity items
  const renderActivityItems = () => {
    if (currentContent.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-8 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-sm">No {activeSection.toLowerCase()} found</p>
        </div>
      );
    }

    return currentContent.map((item, index) => (
      <div key={index} className="mb-4 bg-white border rounded-md shadow-sm">
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h6 className="font-medium text-sm">{item.type}</h6>
            <span className="text-xs text-gray-500">{item.date}</span>
          </div>
          {item.content}
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div>
          <a href="#" className="text-gray-800 hover:text-gray-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Contacts
          </a>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded text-sm">Actions</button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded text-sm">Customize record</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 p-4 border-r">
          <div className="mb-6 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">N</span>
            </div>
            <h5 className="font-medium">Nikunj</h5>
            <p className="text-sm text-gray-500">zoho.com</p>
            <p className="text-sm text-gray-500 mb-4">message-service@sender.zoho.com</p>
            
            <div className="flex justify-center gap-3 mb-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mb-4 border-b pb-3">
            <h6 className="font-medium text-sm">About this contact</h6>
          </div>

          {/* <div className="py-2 border-b">
            <p className="text-sm">Communication subscriptions</p>
          </div>

          <div className="py-2">
            <p className="text-sm">Website activity</p>
          </div> */}
        </div>

        {/* Middle Section - Activities */}
        <div className="w-full md:w-2/4 p-4">
          <div className="border-b mb-6">
            <nav className="flex">
              <button 
                className={`pb-3 px-4 text-sm font-medium ${activeTab === 'Overview' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Overview')}
              >
                Overview
              </button>
              <button 
                className={`pb-3 px-4 text-sm font-medium ${activeTab === 'Activities' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Activities')}
              >
                Activities
              </button>
            </nav>
          </div>

          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Search activities" 
              />
            </div>
          </div>

          <div className="border-b mb-6">
            <nav className="flex space-x-4 overflow-x-auto pb-1">
              <button 
                className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Activity' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveSection('Activity')}
              >
                Activity
              </button>
              <button 
                className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Notes' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveSection('Notes')}
              >
                Notes
              </button>
              <button 
                className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Emails' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveSection('Emails')}
              >
                Emails
              </button>
              <button 
                className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Calls' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveSection('Calls')}
              >
                Calls
              </button>
              <button 
                className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Tasks' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveSection('Tasks')}
              >
                Tasks
              </button>
              <button 
                className={`pb-2 text-sm font-medium whitespace-nowrap ${activeSection === 'Meetings' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveSection('Meetings')}
              >
                Meetings
              </button>
            </nav>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <button className="px-3 py-1 bg-gray-100 text-sm rounded-md">Filter activity (26/39)</button>
            <button className="px-3 py-1 bg-gray-100 text-sm rounded-md">All users</button>
            <button className="px-3 py-1 bg-gray-100 text-sm rounded-md">All teams</button>
          </div>

          {/* Dynamic Activity Items */}
          {renderActivityItems()}
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/4 p-4 border-l">
          <div className="flex justify-between items-center mb-4">
            <h6 className="font-medium text-sm">Companies (1)</h6>
            <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
          </div>

          <div className="bg-white border rounded-md p-4 mb-6">
            <p className="text-xs text-gray-500">Primary</p>
            <h6 className="font-medium mb-1">zoho.com</h6>
            <p className="text-sm text-gray-600 mb-1">sender.zoho.com</p>
            <p className="text-sm text-gray-600">Phone: —</p>
          </div>

          <h6 className="font-medium text-sm mb-4">Quick Links</h6>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Contacts (0)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Leads (0)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Deals (0)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Tickets (2)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Invoices (0)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm">Add</button>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Payments (0)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;