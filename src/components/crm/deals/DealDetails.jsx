import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActivityTab from "./tabs/ActivityTab";
import NotesTab from "./tabs/NotesTab";
import EmailsTab from "./tabs/EmailsTab";
import CallsTab from "./tabs/CallsTab";
import TasksTab from "./tabs/TasksTab";
import MeetingsTab from "./tabs/MeetingsTab";
import AiTab from "./tabs/AiTab";
import CreateDealModal from "./ADdDealForm";
import ContactForm from "../contact/ContactForm";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import {
  FaChevronRight,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import AboutDealsForm from "./AboutDealsForm";
import { useSelector } from "react-redux";
import DealsData from "./DealsData";
import DealsCompany from "./DealsCompany";

const DealDetails = () => {
  const [activeTab, setActiveTab] = useState("Activity");
  const [activeMainTab, setActiveMainTab] = useState("Profile");
  const [filterDate, setFilterDate] = useState("1/5/26");
  const [isOpen, setIsOpen] = useState(false);
  const [dealDatas, setDealDatas] = useState();
  const [activeKey, setActiveKey] = useState("0"); // Default open first menu

  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "status_change",
      content: "Deal moved to Qualified by Integration.",
      date: "16 Dec 2024 at 13:10 GMT",
    },
    {
      id: 2,
      type: "creation",
      content: "This deal was created",
      date: "16 Dec 2024 at 13:10 GMT",
    },
  ]);

  const dealData = {
    name: "Wade Wilson",
    title: "Designer (Product)",
    department: "Product",
    team: "People Product",
    location: "UK – Remote",
    status: "Active",
    amount: "£25,000",
    closeDate: "-/-",
    stage: "Qualified",
    pipeline: "Sales pipeline",
    performance: {
      quarter: "Q4 2023",
      grade: "Exceeding",
      score: "85/100",
      tenure: "2.5 years",
      reviewsCompleted: 10,
      rating: "Exceeding",
    },
    skills: {
      leadership: 90,
      projectDelivery: 85,
      technical: 88,
      communication: 87,
    },
  };

  const tabs = [
    "Activity",
    "Notes",
    "Emails",
    "Calls",
    "Tasks",
    "Meetings",
    "Ai",
  ];

  const mainTabs = [
    "Deals Profile",
    "Activity",
    "Notes",
    "Emails",
    "Calls",
    "Tasks",
    "Meetings",
    "Ai",
    "Companies",
  ];

  const tabComponents = {
    Activity: ActivityTab,
    Notes: NotesTab,
    Emails: EmailsTab,
    Calls: CallsTab,
    Tasks: TasksTab,
    Meetings: MeetingsTab,
    Ai: AiTab,
  };

  const CurrentTabComponent = tabComponents[activeTab];

  const menuItems = [
    {
      title: "Companies (1)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-2">Primary</span>
            <span className="fw-bold">zohoinvoice.com</span>
          </div>
          <div className="d-flex align-items-center">
            <a
              href="https://sender.zohoinvoice.com"
              className="text-decoration-none text-info"
              target="_blank"
              rel="noopener noreferrer">
              sender.zohoinvoice.com <FaExternalLinkAlt className="ms-1" />
            </a>
          </div>
          <p className="mt-2 mb-0">Phone: --</p>
        </div>
      ),
    },
    // Other menu items remain the same
  ];

  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  const [isContactModalOpen, setIsModalContactOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalContactOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalContactOpen(false);
    document.body.classList.remove("modal-open"); //Remove modal-open class
  };

  const [isCreateDealModalOpen, setIsCreateDealModalOpen] = useState(false);

  // Function to handle the creation of a new deal
  const handleCreateDeal = (dealData) => {
    // Handle the new deal data here
    console.log("New deal:", dealData);
    setIsCreateDealModalOpen(false);
  };

  // Function to add a new deal
  const addNewDeal = () => {
    setIsCreateDealModalOpen(true);
  };

  const contactData = {
    name: "Nikunj",
    company: "zoho.com",
    email: "message-service@sender.zoho.com",
    formData: {
      email: "nikunj.zoho@gmail.com",
      phone: "",
      company: "",
      leadStatus: "",
      lifecycleStage: "Lead",
      buyingRole: "",
      contactOwner: "",
    },
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  // Render content based on the selected main tab
  const renderMainTabContent = () => {
    switch (activeMainTab) {
      case "Deals Profile":
        return (
          <div
            className={`${
              darkMode ? "card-dark" : "bg-white"
            } p-4 rounded-lg shadow`}>
            <DealsData />
          </div>
        );

      case "Activity":
        return (
          <div
            className={`${
              darkMode ? "card-dark" : "bg-white"
            } p-4 rounded-lg shadow`}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              
              
            </div>
            {/* Search and Filter */}
            <div className=" p-1 border-b">
              <div className=" gap-4" style={{ display: "flex" }}>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search activities"
                    className={`${darkMode ? "card-dark" : "bg-white" } px-3 py-2 border rounded-lg`}
                  />
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                    Filter activity ({filterDate})
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                    All users
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                    All teams
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <ActivityTab />
          </div>
        );
        
        case "Notes":
          return (
            <div
              className={`${
                darkMode ? "card-dark" : "bg-white"
              } p-4 rounded-lg shadow`}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                
                
              </div>
              {/* Search and Filter */}
              <div className=" p-1 border-b">
                <div className=" gap-4" style={{ display: "flex" }}>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search activities"
                      className={`${darkMode ? "card-dark" : "bg-white" } px-3 py-2 border rounded-lg`}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                      Filter activity ({filterDate})
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                      All users
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                      All teams
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <NotesTab />

            </div>
          );
          
          case "Emails":
            return (
              <div
                className={`${
                  darkMode ? "card-dark" : "bg-white"
                } p-4 rounded-lg shadow`}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  
                  
                </div>
                {/* Search and Filter */}
                <div className=" p-1 border-b">
                  <div className=" gap-4" style={{ display: "flex" }}>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search activities"
                        className={`${darkMode ? "card-dark" : "bg-white" } px-3 py-2 border rounded-lg`}
                      />
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        Filter activity ({filterDate})
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All users
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All teams
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
  
                <EmailsTab />
  
              </div>
            );
          
          case "Calls":
            return (
              <div
                className={`${
                  darkMode ? "card-dark" : "bg-white"
                } p-4 rounded-lg shadow`}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  
                  
                </div>
                {/* Search and Filter */}
                <div className=" p-1 border-b">
                  <div className=" gap-4" style={{ display: "flex" }}>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search activities"
                        className={`${darkMode ? "card-dark" : "bg-white" } px-3 py-2 border rounded-lg`}
                      />
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        Filter activity ({filterDate})
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All users
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All teams
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
  
                <CallsTab />
  
              </div>
            );
          
          case "Tasks":
            return (
              <div
                className={`${
                  darkMode ? "card-dark" : "bg-white"
                } p-4 rounded-lg shadow`}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  
                  
                </div>
                {/* Search and Filter */}
                <div className=" p-1 border-b">
                  <div className=" gap-4" style={{ display: "flex" }}>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search activities"
                        className={`${darkMode ? "card-dark" : "bg-white" } px-3 py-2 border rounded-lg`}
                      />
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        Filter activity ({filterDate})
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All users
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All teams
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
  
                <TasksTab />
  
              </div>
            );
          
          case "Meetings":
            return (
              <div
                className={`${
                  darkMode ? "card-dark" : "bg-white"
                } p-4 rounded-lg shadow`}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  
                  
                </div>
                {/* Search and Filter */}
                <div className=" p-1 border-b">
                  <div className=" gap-4" style={{ display: "flex" }}>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search activities"
                        className={`${darkMode ? "card-dark" : "bg-white" } px-3 py-2 border rounded-lg`}
                      />
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        Filter activity ({filterDate})
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All users
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All teams
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
  
                <MeetingsTab />
  
              </div>
            );
          
          case "Ai":
            return (
              <div
                className={`${
                  darkMode ? "card-dark" : "bg-white"
                } p-4 rounded-lg shadow`}>
                <div className="d-flex justify-content-between align-items-center mb-4 ml-5">
                  
                  
                </div>
                {/* Search and Filter */}
                <div className=" p-1 border-b">
                  <div className=" gap-4" style={{ display: "flex" }}>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search activities"
                        className={`${darkMode ? "card-dark" : "bg-white" } px-3 py-2 border rounded-lg`}
                      />
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        Filter activity ({filterDate})
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All users
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="px-3 py-2 border rounded-lg text-sm flex items-center gap-2">
                        All teams
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
  
                <AiTab />
  
              </div>
            );

      case "Companies":
        return (
          <div
            className={`${
              darkMode ? "card-dark" : "bg-white"
            } p-4 rounded-lg shadow`}>
            <DealsCompany />
          </div>
        );

      default:
        return (
          <div
            className={`${
              darkMode ? "card-dark" : "bg-white"
            } p-4 rounded-lg shadow`}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "300px" }}>
              <div className="text-center">
                <h3 className="h5 mb-3">Coming Soon</h3>
                <p className="text-muted mb-0">
                  This section is under development.
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`${
        darkMode ? "dark-mode" : "bg-gray-100"
      } min-h-screen bg-gray-100`} style={{marginLeft:"20px"}}>
      <div className="container-fluid">
        {/* Header with user info */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className={`${
                darkMode ? "card-dark" : "bg-white"
              } p-3 rounded-lg shadow-sm mt-4`}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img
                      src="/assets/images/avatar.png"
                      alt="Wade Wilson"
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div>
                    <h2 className="h4 mb-0">{dealData.name}</h2>
                    <div className="d-flex align-items-center text-muted">
                      <span className="badge bg-success me-2">
                        {dealData.status}
                      </span>
                      <span>
                        {dealData.title} • {dealData.department} •{" "}
                        {dealData.team} • HR • {dealData.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Tabs Navigation */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className={`${
                darkMode ? "card-dark" : "bg-white"
              } rounded-lg shadow-sm`}>
              <ul className="nav nav-tabs">
                {mainTabs.map((tab, index) => (
                  <li className="nav-item" key={index}>
                    <button
                      className={`nav-link ${
                        activeMainTab === tab ? "active" : ""
                      }`}
                      onClick={() => setActiveMainTab(tab)}>
                      {tab}
                      {tab === "Time off" && " • 1"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Tab Content */}
        <div className="row">
          <div className="col-12">{renderMainTabContent()}</div>
        </div>
      </div>

      {/* Modals */}
      {isContactModalOpen && (
        <ContactForm
          isOpen={isContactModalOpen}
          onClose={handleCloseModal}
          contactData={contactData}
        />
      )}

      {isCreateDealModalOpen && (
        <CreateDealModal
          isOpen={isCreateDealModalOpen}
          onClose={() => setIsCreateDealModalOpen(false)}
          onCreateDeal={handleCreateDeal}
        />
      )}
    </div>
  );
};

export default DealDetails;
