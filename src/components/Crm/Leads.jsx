import React, { useState } from 'react'
import AddLead from './AddLead';

const Leads = () => {
      const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    
      const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("modal-open"); // Add modal-open class to prevent scrolling
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove("modal-open"); // Remove modal-open class
      };
  return (
    <>
    <div className="container ">
  <div className="lead-header py-3">
    <div className="container-fluid px-4">
      <div className="row align-items-center">
        <div className="col-auto">
          <h4 className="mb-0">Leads</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-muted">
                  CRM
                </a>
              </li>
              <li className="breadcrumb-item active">Leads Grid</li>
            </ol>
          </nav>
        </div>
        <div className="col">
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <i className="bi bi-funnel" /> Filter
            </button>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <i className="bi bi-download" /> Export
            </button>
            <button className="btn btn-dark d-flex align-items-center gap-2" onClick={handleOpenModal}>
              <i className="bi bi-plus-lg" /> Add Lead
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="leads-container bg-white p-3">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h5 className="mb-0">Leads Grid</h5>
      <select className="sort-dropdown">
        <option>Sort By: Last 7 Days</option>
        <option>Sort By: Last 30 Days</option>
        <option>Sort By: Last 90 Days</option>
      </select>
    </div>
    <div className="row g-4">
      {/* Contacted */}
      <div className="col-lg-3 col-md-6">
        <div className="status-card">
          <div className="status-header">
            <div className="status-dot status-contacted" />
            <span>Contacted</span>
            <div className="ms-auto" style={{ cursor: "pointer" }}>
              <i className="bi bi-eye" />
              <i className="bi bi-pencil ms-2" />
              <i className="bi bi-three-dots-vertical ms-2" />
            </div>
          </div>
          <div className="status-info">02 Leads · $7,50,000</div>
          <div className="lead-item">
            <div className="lead-avatar avatar-blue">LW</div>
            <div className="lead-amount">$03,50,000</div>
            <div className="lead-name">Linda White</div>
            <div className="lead-info">
              <i className="bi bi-envelope" />
              <span>linda@email.com</span>
            </div>
            <div className="lead-info">
              <i className="bi bi-telephone" />
              <span>(193) 7839 748</span>
            </div>
            <div className="lead-info">
              <i className="bi bi-geo-alt" />
              <span>Austin, United States</span>
            </div>
            <div className="lead-actions">
              <i className="bi bi-eye" />
              <i className="bi bi-chat" />
              <i className="bi bi-three-dots-vertical" />
            </div>
          </div>
        </div>
      </div>
      {/* Not Contacted */}
      <div className="col-lg-3 col-md-6">
        <div className="status-card">
          <div className="status-header">
            <div className="status-dot status-not-contacted" />
            <span>Not Contacted</span>
            <div className="ms-auto" style={{ cursor: "pointer" }}>
              <i className="bi bi-eye" />
              <i className="bi bi-pencil ms-2" />
              <i className="bi bi-three-dots-vertical ms-2" />
            </div>
          </div>
          <div className="status-info">02 Leads · $7,60,000</div>
          <div className="lead-item">
            <div className="lead-avatar avatar-purple">EJ</div>
            <div className="lead-amount">$3,50,000</div>
            <div className="lead-name">Emily Johnson</div>
            <div className="lead-info">
              <i className="bi bi-envelope" />
              <span>emily@gmail.com</span>
            </div>
            <div className="lead-info">
              <i className="bi bi-telephone" />
              <span>(179) 7382 829</span>
            </div>
            <div className="lead-info">
              <i className="bi bi-geo-alt" />
              <span>Newyork, United States</span>
            </div>
            <div className="lead-actions">
              <i className="bi bi-eye" />
              <i className="bi bi-chat" />
              <i className="bi bi-three-dots-vertical" />
            </div>
          </div>
        </div>
      </div>
      {/* Closed */}
      <div className="col-lg-3 col-md-6">
        <div className="status-card">
          <div className="status-header">
            <div className="status-dot status-closed" />
            <span>Closed</span>
            <div className="ms-auto" style={{ cursor: "pointer" }}>
              <i className="bi bi-eye" />
              <i className="bi bi-pencil ms-2" />
              <i className="bi bi-three-dots-vertical ms-2" />
            </div>
          </div>
          <div className="status-info">45 Leads · $15,44,540</div>
          <div className="lead-item">
            <div className="lead-avatar avatar-green">JS</div>
            <div className="lead-amount">$3,20,000</div>
            <div className="lead-name">John Smith</div>
            <div className="lead-info">
              <i className="bi bi-envelope" />
              <span>john@gmail.com</span>
            </div>
            <div className="lead-info">
              <i className="bi bi-telephone" />
              <span>(123) 4567 890</span>
            </div>
            <div className="lead-info">
              <i className="bi bi-geo-alt" />
              <span>Chester, United Kingdom</span>
            </div>
            <div className="lead-actions">
              <i className="bi bi-eye" />
              <i className="bi bi-chat" />
              <i className="bi bi-three-dots-vertical" />
            </div>
          </div>
        </div>
      </div>
      {/* Lost */}
      <div className="col-lg-3 col-md-6">
        <div className="status-card">
          <div className="status-header">
            <div className="status-dot status-lost" />
            <span>Lost</span>
            <div className="ms-auto" style={{ cursor: "pointer" }}>
              <i className="bi bi-eye" />
              <i className="bi bi-pencil ms-2" />
              <i className="bi bi-three-dots-vertical ms-2" />
            </div>
          </div>
          <div className="status-info">15 Leads · $14,89,543</div>
          <div className="lead-item">
            <div className="lead-avatar avatar-red">MB</div>
            <div className="lead-amount">$4,100,00</div>
            <div className="lead-name">Michael Brown</div>
            <div className="lead-info">
              <i className="bi bi-envelope" />
              <span>michael@gmail.com</span>
            </div>
            <div className="lead-info">
              <i className="bi bi-telephone" />
              <span>(184) 2719 738</span>
            </div>
            <div className="lead-info">
              <i className="bi bi-geo-alt" />
              <span>London, United Kingdom</span>
            </div>
            <div className="lead-actions">
              <i className="bi bi-eye" />
              <i className="bi bi-chat" />
              <i className="bi bi-three-dots-vertical" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 {/* Modal for Add Leads */}
            {isModalOpen && (
              <>
                <div className="modal fade show d-block" role="dialog">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Add New Leads</h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={handleCloseModal}
                        />
                      </div>
                      <div className="modal-body">
                        <AddLead />
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
  )
}

export default Leads