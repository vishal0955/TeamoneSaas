import React from 'react'
import AddDeal from './AddDeal'
import { useState } from 'react';

const Deal = () => {
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
    <div className="container">
  <div className="deals-header py-3">
    <div className="container-fluid px-4">
      <div className="row align-items-center">
        <div className="col-auto">
          <h4 className="mb-0">Deals</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-muted">
                  CRM
                </a>
              </li>
              <li className="breadcrumb-item active">Deals Grid</li>
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
              <i className="bi bi-plus-lg" /> Add Deal
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid px-4 py-4">
    <div className="row g-4">
      {/* Deal Card 1 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="deal-card bg-white p-3 rounded-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <span className="status-badge status-new">New</span>
            <div className="deal-type type-wr">WR</div>
          </div>
          <div className="border border-secondary p-3 rounded-3">
            <h6 className="mb-1">Website Redesign</h6>
            <p className="text-muted small mb-3">03 Deals · $16,90,000</p>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-envelope text-muted" />
              <span className="small">shailen@gmail.com</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-telephone text-muted" />
              <span className="small">(163) 2459 315</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-geo-alt text-muted" />
              <span className="small">Newport, United States</span>
            </div>
            <div className="progress progress-small mb-2">
              <div
                className="progress-bar bg-primary"
                style={{ width: "85%" }}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://i.pravatar.cc/32?img=1"
                  alt="Sharon Roy"
                  className="avatar"
                />
                <span className="small">Sharon Roy</span>
              </div>
              <span className="small text-muted">85%</span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <span className="action-icon">
                  <i className="bi bi-chat" />
                </span>
                <span className="action-icon">
                  <i className="bi bi-telephone" />
                </span>
                <span className="action-icon">
                  <i className="bi bi-calendar" />
                </span>
              </div>
              <span className="small text-muted">15 Jan 2024</span>
            </div>
          </div>
        </div>
      </div>
      {/* Deal Card 2 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="deal-card bg-white p-3 rounded-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <span className="status-badge status-prospect">Prospect</span>
            <div className="deal-type type-ap">AP</div>
          </div>
          <div className="border border-secondary p-3 rounded-3">
            <h6 className="mb-1">App Development</h6>
            <p className="text-muted small mb-3">30 Leads · $19,94,938</p>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-envelope text-muted" />
              <span className="small">jessica@gmail.com</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-telephone text-muted" />
              <span className="small">(156) 3459 596</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-geo-alt text-muted" />
              <span className="small">Chester, United Kingdom</span>
            </div>
            <div className="progress progress-small mb-2">
              <div
                className="progress-bar bg-primary"
                style={{ width: "95%" }}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://i.pravatar.cc/32?img=2"
                  alt="Jessica Louise"
                  className="avatar"
                />
                <span className="small">Jessica Louise</span>
              </div>
              <span className="small text-muted">95%</span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <span className="action-icon">
                  <i className="bi bi-chat" />
                </span>
                <span className="action-icon">
                  <i className="bi bi-telephone" />
                </span>
                <span className="action-icon">
                  <i className="bi bi-calendar" />
                </span>
              </div>
              <span className="small text-muted">15 Jan 2024</span>
            </div>
          </div>
        </div>
      </div>
      {/* Deal Card 3 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="deal-card bg-white p-3 rounded-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <span className="status-badge status-proposal">Proposal</span>
            <div className="deal-type type-ss">SS</div>
          </div>
          <div className="border border-secondary p-3 rounded-3">
            <h6 className="mb-1">SEO Services</h6>
            <p className="text-muted small mb-3">30 Leads · $19,94,938</p>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-envelope text-muted" />
              <span className="small">jonelle@gmail.com</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-telephone text-muted" />
              <span className="small">(184) 6348 195</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-geo-alt text-muted" />
              <span className="small">Coventry, United Kingdom</span>
            </div>
            <div className="progress progress-small mb-2">
              <div
                className="progress-bar bg-primary"
                style={{ width: "60%" }}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://i.pravatar.cc/32?img=3"
                  alt="Jonelle Curtiss"
                  className="avatar"
                />
                <span className="small">Jonelle Curtiss</span>
              </div>
              <span className="small text-muted">60%</span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <span className="action-icon">
                  <i className="bi bi-chat" />
                </span>
                <span className="action-icon">
                  <i className="bi bi-telephone" />
                </span>
                <span className="action-icon">
                  <i className="bi bi-calendar" />
                </span>
              </div>
              <span className="small text-muted">15 Jan 2024</span>
            </div>
          </div>
        </div>
      </div>
      {/* Deal Card 4 */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="deal-card bg-white p-3 rounded-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <span className="status-badge status-won">Won</span>
            <div className="deal-type type-cm">CM</div>
          </div>
          <div className="border border-secondary p-3 rounded-3">
            <h6 className="mb-1">Cloud Migration</h6>
            <p className="text-muted small mb-3">30 Leads · $19,94,938</p>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-envelope text-muted" />
              <span className="small">jonathan@gmail.com</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-telephone text-muted" />
              <span className="small">(163) 2459 315</span>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-geo-alt text-muted" />
              <span className="small">London, United Kingdom</span>
            </div>
            <div className="progress progress-small mb-2">
              <div
                className="progress-bar bg-primary"
                style={{ width: "80%" }}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://i.pravatar.cc/32?img=4"
                  alt="Jonathan Smith"
                  className="avatar"
                />
                <span className="small">Jonathan Smith</span>
              </div>
              <span className="small text-muted">80%</span>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <span className="action-icon">
                  <i className="bi bi-chat" />
                </span>
                <span className="action-icon">
                  <i className="bi bi-telephone" />
                </span>
                <span className="action-icon">
                  <i className="bi bi-calendar" />
                </span>
              </div>
              <span className="small text-muted">15 Jan 2024</span>
            </div>
          </div>
        </div>
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
                        <h5 className="modal-title">Add New Deal</h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={handleCloseModal}
                        />
                      </div>
                      <div className="modal-body">
                        <AddDeal />
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

export default Deal