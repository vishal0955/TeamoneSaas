import React, { useState, useEffect } from 'react';
import './Crm.css';
import AddCompanies from './AddCompanies';

const Companies = () => {
  const [viewMode, setViewMode] = useState('grid');
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
      document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      document.body.classList.remove("modal-open"); // Remove modal-open class
    };
  const [companies] = useState([
    {
      id: 1,
      name: 'BrightWave Innovations',
      logo: { text: 'B', background: '#7B68EE' },
      team: [
        'https://i.ibb.co/GSmprKx/Ellipse-5-6.png',
        'https://i.ibb.co/DHsHQGLj/Vector-3.png'
      ],
      teamCount: 1,
      email: 'dufeu@brightwave.com',
      phone: '(163) 2459 315',
      location: 'Germany',
      rating: 4.2
    },
    {
      id: 2,
      name: 'TechFlow Solutions',
      logo: { text: 'T', background: '#00C853' },
      team: ['https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png'],
      teamCount: 2,
      email: 'info@techflow.com',
      phone: '(555) 123 4567',
      location: 'United States',
      rating: 4.8
    },
    {
      id: 3,
      name: 'InnovateTech',
      logo: { text: 'I', background: '#FF4081' },
      team: [
        'https://i.ibb.co/GSmprKx/Ellipse-5-6.png',
        'https://i.ibb.co/DHsHQGLj/Vector-3.png',
        'https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png'
      ],
      teamCount: 0,
      email: 'contact@innovatetech.com',
      phone: '(444) 987 6543',
      location: 'Canada',
      rating: 4.5
    },
    {
      id: 4,
      name: 'GlobalTech Systems',
      logo: { text: 'G', background: '#7B68EE' },
      team: ['https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png'],
      teamCount: 4,
      email: 'hello@globaltech.com',
      phone: '(777) 888 9999',
      location: 'United Kingdom',
      rating: 4.7
    }
  ]);

  useEffect(() => {
    const savedView = localStorage.getItem('preferredView');
    if (savedView) {
      setViewMode(savedView);
    }
  }, []);

  const toggleView = (view) => {
    setViewMode(view);
    localStorage.setItem('preferredView', view);
  };

  const CompanyCard = ({ company, isListView }) => {
    const TeamAvatars = () => (
      <div className="team-avatars mb-3">
        {company.team.map((avatar, index) => (
          <img key={index} src={avatar} alt="Team member" />
        ))}
        <div className="team-count">+{company.teamCount}</div>
      </div>
    );

    const ContactInfo = () => (
      <div className={isListView ? "contact-details" : "contact-info"}>
        <div className="mb-1">
          <i className="bi bi-envelope me-2" />
          {company.email}
        </div>
        <div className="mb-1">
          <i className="bi bi-telephone me-2" />
          {company.phone}
        </div>
        <div>
          <i className="bi bi-geo-alt me-2" />
          {company.location}
        </div>
      </div>
    );

    const ContactLinks = () => (
      <div className="contact-links">
        <a href="#"><i className="bi bi-envelope" /></a>
        <a href="#"><i className="bi bi-telephone" /></a>
        <a href="#"><i className="bi bi-chat" /></a>
        <a href="#"><i className="bi bi-linkedin" /></a>
      </div>
    );

    const Rating = () => (
      <div className="rating">
        <i className="bi bi-star-fill" />
        <span>{company.rating}</span>
      </div>
    );

    if (isListView) {
      return (
        <div className="company-list-item">
          <div className="company-logo" style={{ background: company.logo.background }}>
            {company.logo.text}
          </div>
          <div className="company-info">
            <div>
              <h5 className="mb-2">{company.name}</h5>
              <TeamAvatars />
            </div>
            <ContactInfo />
            <div className="d-flex align-items-center gap-3">
              <ContactLinks />
              <Rating />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="col-md-6 col-lg-3">
        <div className="company-card">
          <div className="company-logo" style={{ background: company.logo.background }}>
            {company.logo.text}
          </div>
          <h5 className="mb-2">{company.name}</h5>
          <TeamAvatars />
          <ContactInfo />
          <div className="d-flex justify-content-between align-items-center mt-3">
            <ContactLinks />
            <Rating />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
       <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 page-header">
        <div className="d-flex align-items-center header-title">
          <h4 className="mb-0">Companies</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 ms-3">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-muted">CRM</a>
              </li>
              <li className="breadcrumb-item active">Companies {viewMode === 'grid' ? 'Grid' : 'List'}</li>
            </ol>
          </nav>
        </div>
        <div className="d-flex gap-2 header-actions">
          <div className="d-flex align-items-center">
            <div className="view-toggle">
              <button 
                className={viewMode === 'grid' ? 'active' : ''} 
                onClick={() => toggleView('grid')}
              >
                <i className="bi bi-grid me-2" />
                Grid
              </button>
              <button 
                className={viewMode === 'list' ? 'active' : ''} 
                onClick={() => toggleView('list')}
              >
                <i className="bi bi-list me-2" />
                List
              </button>
            </div>
          </div>
          <div className="header-buttons d-flex">
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2 mx-2">
              <i className="bi bi-download" /> Export
            </button>
            <button className="btn btn-primary d-flex align-items-center gap-2" onClick={handleOpenModal}>
              <i className="bi bi-plus" /> Add Company
            </button>
          </div>
        </div>
      </div>
      <div className="view-container">
        <div className={viewMode === 'grid' ? 'grid-view active' : 'list-view active'}>
          {viewMode === 'grid' ? (
            <div className="row g-4">
              {companies.map(company => (
                <CompanyCard key={company.id} company={company} isListView={false} />
              ))}
            </div>
          ) : (
            companies.map(company => (
              <CompanyCard key={company.id} company={company} isListView={true} />
            ))
          )}
        </div>
      </div>
    </div>
          {/* /* Modal for Add companies */}
          {isModalOpen && (
            <>
              <div className="modal fade show d-block" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add New Companies</h5>
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={handleCloseModal}
                      />
                    </div>
                    <div className="modal-body">
                      <AddCompanies />
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

export default Companies;
