
import React, { useState } from 'react';
import ActivityTab from '../deals/tabs/ActivityTab';
import NotesTab from '../deals/tabs/NotesTab';
import EmailsTab from '../deals/tabs/EmailsTab';
import CallsTab from '../deals/tabs/CallsTab';
import TasksTab from '../deals/tabs/TasksTab';
import MeetingsTab from '../deals/tabs/MeetingsTab';
import AboutContactForm from './AboutContactForm';
import ContactForm from './ContactForm';
import CreateDealModal from '../deals/ADdDealForm';

const ContactDetailPage = () => {
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

  const tabs = ['Activity', 'Notes', 'Emails', 'Tasks', 'Meetings'];
  
  const tabComponents = {
    'Activity': ActivityTab,
    'Notes': NotesTab,
    'Emails': EmailsTab,
    // 'Calls': CallsTab,
    'Tasks': TasksTab,
    'Meetings': MeetingsTab
  };

  const CurrentTabComponent = tabComponents[activeTab];

  const contactData = {
    name: 'Nikunj',
    company: 'zoho.com',
    email: 'message-service@sender.zoho.com',
    formData: {
      email: 'nikunj.zoho@gmail.com',
      phone: '',
      company: '',
      leadStatus: '',
      lifecycleStage: 'Lead',
      buyingRole: '',
      contactOwner: ''
    }
  };


  const [isContactModalOpen, setIsModalContactOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalContactOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalContactOpen(false);
    document.body.classList.remove("modal-open");  //Remove modal-open class
  };

  const [isCreateDealModalOpen, setIsCreateDealModalOpen] = useState(false);

  // Function to handle the creation of a new deal
  const handleCreateDeal = (dealData) => {
    // Handle the new deal data here
    console.log('New deal:', dealData);
    setIsCreateDealModalOpen(false);
  };

  // Function to add a new deal
  const addNewDeal = () => {
    setIsCreateDealModalOpen(true);
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
              <span className="text-2xl">{contactData.name[0]}</span>
            </div>
            <h5 className="font-medium">{contactData.name}</h5>
            <p className="text-sm text-gray-500">{contactData.company}</p>
            <p className="text-sm text-gray-500 mb-4">{contactData.email}</p>
            
            <div className="flex justify-center gap-3 mb-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* About Contact Form */}
          <div className="border rounded-lg mb-4">
            <AboutContactForm data={contactData.formData} />
          </div>
        </div>

        {/* Middle Section - Activities */}
        <div className="flex-1 bg-white rounded-lg shadow">
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
                  Filter activity 
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
        <div className="w-full md:w-1/4 p-4 border-l">
          <div className="flex justify-between items-center mb-4">
            <h6 className="font-medium text-sm">Companies (1)</h6>
            <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
          </div>

          <div className="bg-white border rounded-md p-4 mb-6">
            <p className="text-xs text-gray-500">Primary</p>
            <h6 className="font-medium mb-1">zoho.com</h6>
            <p className="text-sm text-gray-600 mb-1">sender.zoho.com</p>
            <p className="text-sm text-gray-600">Phone: +1 (123) 456-7890</p>
          </div>

          <h6 className="font-medium text-sm mb-4">Quick Links</h6>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Contacts (0)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm" onClick={handleOpenModal}>+ Add</button>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Leads (0)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm">+ Add</button>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm">Deals (0)</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm" onClick={addNewDeal}>+ Add</button>
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

      {isContactModalOpen && (
         <>
           <div className="modal fade show d-block" role="dialog">
             <div className="modal-dialog modal-md" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                
                   <button
                     type="button"
                     className="btn-close"
                     aria-label="Close"
                     onClick={handleCloseModal}
                   />
                 </div>
                 <div className="modal-body">
                   <ContactForm  handleclose={handleCloseModal}/>
                 </div>
               </div>
             </div>
           </div>
           {/* Modal backdrop */}
           <div
             className="modal-backdrop fade show"
             onClick={handleCloseModal}
           ></div>
         </>
       )}

<CreateDealModal
        isOpen={isCreateDealModalOpen}
        onClose={() => setIsCreateDealModalOpen(false)}
        onSubmit={handleCreateDeal}
      />
    </div>
  );
};

export default ContactDetailPage;
