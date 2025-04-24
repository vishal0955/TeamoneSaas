import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Accordion from "react-bootstrap/Accordion";
import {
  FaChevronRight,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";
const DealsCompany = () => {
     const [activeKey, setActiveKey] = useState("0"); // Default open first menu

    const darkMode = useSelector((state) => (state.theme.isDarkMode))

    const handleToggle = (key) => {
        setActiveKey((prevKey) => (prevKey === key ? null : key));
      };

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
    
  return (
    <>
    {/* Right Sidebar */}
            <div className=" my-4">
              <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white h-100 p-3 rounded`}>
                <Accordion activeKey={activeKey}>
                  {menuItems.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header
                        onClick={() => handleToggle(index.toString())}
                        className="w-100"
                      >
                        <div className="d-flex align-items-center w-100 justify-content-between">
                          <div className="d-flex align-items-center">
                            {item.title}
                          </div>
                          <Button variant="link" className="p-0 text-decoration-none text-info">
                            + Add
                          </Button>
                        </div>
                      </Accordion.Header>
    
                      <Accordion.Body>
                        {/* Yeh message sirf tab dikh raha jab yeh wala item active ho */}
                        {activeKey === index.toString() && <p>{item.content}</p>}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
    </>
  )
}

export default DealsCompany