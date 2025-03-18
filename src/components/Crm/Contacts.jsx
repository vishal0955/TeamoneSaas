import React, { useState, useEffect } from "react";
import "./Crm.css";
import AddContact from "./AddContact";

const Contacts = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open"); // Remove modal-open class
  };

  const [contacts] = useState([
    {
      id: 1,
      name: "Darlee Robertson",
      role: "Facility Manager",
      email: "darlee@example.com",
      phone: "(163) 2459 315",
      location: "Germany",
      rating: 4.2,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Sharon Roy",
      role: "Installer",
      email: "sharon@example.com",
      phone: "(146) 1248 296",
      location: "USA",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Vaughan Lewis",
      role: "Senior Manager",
      email: "vaughan@example.com",
      phone: "(135) 3489 516",
      location: "Canada",
      rating: 3.5,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Jessica Louise",
      role: "Test Engineer",
      email: "jessica@example.com",
      phone: "(158) 3409 506",
      location: "India",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  ]);

  const filteredContacts = contacts.filter(contact => {
    const searchString = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(searchString) ||
      contact.role.toLowerCase().includes(searchString) ||
      contact.email.toLowerCase().includes(searchString) ||
      contact.phone.toLowerCase().includes(searchString) ||
      contact.location.toLowerCase().includes(searchString)
    );
  });

  const ContactCard = ({ contact, isListView }) => (
    <div className={`contact-card position-relative ${isListView ? '' : 'col-md-6 col-lg-3'}`}>
      <div className="form-check contact-checkbox">
        <input className="form-check-input" type="checkbox" />
      </div>
      <div className="card-menu">
        <button className="btn btn-link text-dark p-0" data-bs-toggle="dropdown">
          <i className="bi bi-three-dots-vertical" />
        </button>
      </div>
      <div className="text-center">
        <img src={contact.image} alt={contact.name} className="profile-img" style={{margin:"10px auto"}} />
        {isListView ? (
          <div className="contact-info-wrapper">
            <div className="contact-details d-flex justify-content-evenly">
              <h5 className="mb-1">{contact.name}</h5>
              <p className="text-muted mb-2">{contact.role}</p>
              <div className="d-flex gap-4">
                <div className="contact-info">
                  <i className="bi bi-envelope" /> {contact.email}
                </div>
                <div className="contact-info">
                  <i className="bi bi-telephone" /> {contact.phone}
                </div>
                <div className="contact-info">
                  <i className="bi bi-geo-alt" /> {contact.location}
                </div>
                <div className="rating">
                  <i className="bi bi-star-fill" /> {contact.rating}
                </div>
              </div>
            </div>
            <div className="action-icons">
              <a href="#"><i className="bi bi-envelope" /></a>
              <a href="#"><i className="bi bi-telephone" /></a>
              <a href="#"><i className="bi bi-chat" /></a>
              <a href="#"><i className="bi bi-camera-video" /></a>
              <a href="#"><i className="bi bi-facebook" /></a>
            </div>
          </div>
        ) : (
          <>
            <h5 className="mb-1">{contact.name}</h5>
            <p className="text-muted mb-2">{contact.role}</p>
            <div className="contact-info">
              <i className="bi bi-envelope" /> {contact.email}
            </div>
            <div className="contact-info">
              <i className="bi bi-telephone" /> {contact.phone}
            </div>
            <div className="contact-info mb-3">
              <i className="bi bi-geo-alt" /> {contact.location}
            </div>
            <div className="rating mb-3">
              <i className="bi bi-star-fill" /> {contact.rating}
            </div>
            <div className="action-icons">
              <a href="#"><i className="bi bi-envelope" /></a>
              <a href="#"><i className="bi bi-telephone" /></a>
              <a href="#"><i className="bi bi-chat" /></a>
              <a href="#"><i className="bi bi-camera-video" /></a>
              <a href="#"><i className="bi bi-facebook" /></a>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="mb-1">Contacts</h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#" className="text-decoration-none text-muted">
                    CRM
                  </a>
                </li>
                <li className="breadcrumb-item active">Contacts Grid</li>
              </ol>
            </nav>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            {/* View Toggle */}
            <div className="d-flex align-items-center">
              <div className="view-toggle">
                <button 
                  className={viewMode === 'grid' ? 'active' : ''} 
                  onClick={() => setViewMode('grid')}
                >
                  <i className="bi bi-grid me-2" />
                  Grid
                </button>
                <button 
                  className={viewMode === 'list' ? 'active' : ''} 
                  onClick={() => setViewMode('list')}
                >
                  <i className="bi bi-list me-2" />
                  List
                </button>
              </div>
            </div>
            <div className="dropdown mx-3">
              <button
                className="btn btn-light dropdown-toggle border border-dark"
                style={{padding:"8px 10px"}}
                type="button"
                data-bs-toggle="dropdown">
                Export
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Export as CSV</a></li>
                <li><a className="dropdown-item" href="#">Export as PDF</a></li>
                <li><a className="dropdown-item" href="#">Export as Excel</a></li>
              </ul>
            </div>
            <button className="btn btn-dark" style={{ height: "fit-content" }}
            onClick={handleOpenModal}>
              <i className="bi bi-plus" /> Add Contact
            </button>
          </div>
        </div>
        <div className="contact-box bg-white shadow-sm p-4 rounded-3">
          {/* Contact Views Container */}
          <div className="contact-views">
            {/* Grid/List View */}
            <div className={viewMode === 'grid' ? 'grid-view active' : 'list-view active'}>
              <div className="contact-header d-flex justify-content-between mb-3">
                <h5>Contacts {viewMode === 'grid' ? 'Grid' : 'List'}</h5>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle border border-dark"
                    type="button"
                    style={{padding:"5px 10px"}}
                    data-bs-toggle="dropdown">
                    Sort By: Last 7 Days
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Sort By: Last 10 Days</a></li>
                    <li><a className="dropdown-item" href="#">Sort By: Last 15 Days</a></li>
                    <li><a className="dropdown-item" href="#">Sort By: Last 20 Days</a></li>
                  </ul>
                </div>
              </div>
              {viewMode === 'grid' ? (
                <div className="row g-4">
                  {filteredContacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} isListView={false} />
                  ))}
                </div>
              ) : (
                <div className="contact-list">
                  {filteredContacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} isListView={true} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Add contact */}
            {isModalOpen && (
              <>
                <div className="modal fade show d-block" role="dialog">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Add New Contact</h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={handleCloseModal}
                        />
                      </div>
                      <div className="modal-body">
                        <AddContact />
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
    </>
  );
};

export default Contacts;