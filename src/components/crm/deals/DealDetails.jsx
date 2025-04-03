import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActivityTab from "./tabs/ActivityTab";
import NotesTab from "./tabs/NotesTab";
import EmailsTab from "./tabs/EmailsTab";
import CallsTab from "./tabs/CallsTab";
import TasksTab from "./tabs/TasksTab";
import MeetingsTab from "./tabs/MeetingsTab";
import CreateDealModal from "./ADdDealForm";
import ContactForm from "../contact/ContactForm";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import {
  FaChevronRight,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {  Dropdown } from "react-bootstrap";

const DealDetails = () => {
  const [activeTab, setActiveTab] = useState("Activity");
  const [filterDate, setFilterDate] = useState("1/5/26");
  const [isOpen, setIsOpen] = useState(false);
  const [dealDatas , setDealDatas] = useState();
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
    name: "StraightIn Lead - Turning Point Management Group",
    amount: "£25,000",
    closeDate: "-/-",
    stage: "Qualified",
    pipeline: "Sales pipeline",
  };


  
  const tabs = ['Activity', 'Notes', 'Emails', 'Calls', 'Tasks', 'Meetings', 'Ai'];
  
  const tabComponents = {
    Activity: ActivityTab,
    Notes: NotesTab,
    Emails: EmailsTab,
    Calls: CallsTab,
    Tasks: TasksTab,
    Meetings: MeetingsTab,
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
              rel="noopener noreferrer"
            >
              sender.zohoinvoice.com <FaExternalLinkAlt className="ms-1" />
            </a>
          </div>
          <p className="mt-2 mb-0">Phone: --</p>
        </div>
      ),
    },
    {
      title: "Contact (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Leads (0)",
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
              rel="noopener noreferrer"
            >
              sender.zohoinvoice.com <FaExternalLinkAlt className="ms-1" />
            </a>
          </div>
          <p className="mt-2 mb-0">Phone: --</p>
        </div>
      ),
    },

    {
      title: "Deals (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Track the revenue opportunities associated with this record.
            </span>
          </div>
        </div>
      ),
    },

    {
      title: "Tickets (2)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Track the customer requests associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Invoice (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Send your customer a request for payment and associate it with
              this record.
            </span>
          </div>
          <div className="d-flex align-items-center">
            <button
              style={{
                border: "none",
                background: "none",
                color: "blue",
                cursor: "pointer",
              }}
            >
              Set up Payment
            </button>
          </div>
        </div>
      ),
      dropdown: (
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            className="p-0 text-secondary fw-bold"
          >
            Add
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },

    {
      title: "Health Score",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },

    {
      title: "Lead Score",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Payment (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Give customers a fast, flexible way to pay. Add a payment link to
              accept a payment and associate it with this record.
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center borderlessed">
            <button>set up Payment</button>
          </div>
        </div>
      ),
    },

    {
      title: 'Payment {""}',
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Automate subscription management and recurring billing from this
              record.
            </span>
          </div>
        </div>
      ),
      dropdown: (
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            className="p-0 text-secondary fw-bold"
          >
            Add
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
  ];

  const handleToggle = (key) => {
    setActiveKey(prevKey => (prevKey === key ? null : key));
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

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="px-4 py-2">
          <Link
            to="/deals"
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
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
                d="M15 19l-7-7 7-7"
              />
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
              <select
                className="border rounded p-2 w-full"
                value={dealData.pipeline}
                onChange={(e) =>
                  setDealDatas({ ...dealData, pipeline: e.target.value })
                }
              >
                <option value="Lead">Lead</option>
                <option value="Qualification">Qualification</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Negotiation">Negotiation</option>
                <option value="Closed Won">Closed Won</option>
                <option value="Closed Lost">Closed Lost</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Left Content */}
        <div className="flex-1 bg-white m-4 rounded-lg shadow">
          {/* Tabs */}
          <div className="border-b">
            <div className="">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="p-1 border-b">
            <div className=" gap-4">
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

          {/* Tab Content */}
          <CurrentTabComponent activities={activities} />
        </div>

        {/* Right Sidebar */}
        <div className="col-md-3 bg-white shadow p-3">
        <Accordion activeKey={activeKey}>
  {menuItems.map((item, index) => (
    <Accordion.Item eventKey={index.toString()} key={index}>
      <Accordion.Header onClick={() => handleToggle(index.toString())} className="w-100">
        <div className="d-flex align-items-center w-100 justify-content-between">
          <div className="d-flex align-items-center">{item.title}</div>
          <Button variant="link" className="p-0">+ Add</Button>
        </div>
      </Accordion.Header>

      <Accordion.Body>
        {/* Yeh message sirf tab dikh raha jab yeh wala item active ho */}
        {activeKey === index.toString() && (
          <p>{item.content}</p>
        )}
      </Accordion.Body>
    </Accordion.Item>
  ))}
</Accordion>


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
                  <ContactForm handleclose={handleCloseModal} />
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

export default DealDetails;
