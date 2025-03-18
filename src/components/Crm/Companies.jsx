import React from 'react'

const Companies = () => {
        function toggleView(view) {
            const gridView = document.querySelector('.grid-view');
            const listView = document.querySelector('.list-view');
            const buttons = document.querySelectorAll('.view-toggle button');

            // Toggle view visibility
            if (view === 'grid') {
                gridView.classList.add('active');
                listView.classList.remove('active');
            } else {
                listView.classList.add('active');
                gridView.classList.remove('active');
            }

            // Toggle button active state
            buttons.forEach(button => {
                if (button.textContent.toLowerCase().includes(view)) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });

            // Save view preference
            localStorage.setItem('preferredView', view);
        }

        // Load preferred view on page load
        document.addEventListener('DOMContentLoaded', () => {
            const preferredView = localStorage.getItem('preferredView') || 'grid';
            toggleView(preferredView);
        });
  return (
    <>
    <div className="container py-4">
  {/* Header Section */}
  <div className="d-flex justify-content-between align-items-center mb-4 page-header">
    <div className="d-flex align-items-center header-title">
      <h4 className="mb-0">Companies</h4>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 ms-3">
          <li className="breadcrumb-item">
            <a href="#" className="text-decoration-none text-muted">
              CRM
            </a>
          </li>
          <li className="breadcrumb-item active">Companies Grid</li>
        </ol>
      </nav>
    </div>
    <div className="d-flex gap-2 header-actions">
      {/* View Toggle */}
      <div className="d-flex align-items-center">
        <div className="view-toggle">
          <button className="active" onclick="toggleView('grid')">
            <i className="bi bi-grid me-2" />
            Grid
          </button>
          <button onclick="toggleView('list')">
            <i className="bi bi-list me-2" />
            List
          </button>
        </div>
      </div>
      <div className="header-buttons d-flex">
        <button className="btn btn-outline-secondary d-flex align-items-center gap-2 mx-2">
          <i className="bi bi-download" /> Export
        </button>
        <button className="btn btn-primary d-flex align-items-center gap-2">
          <i className="bi bi-plus" /> Add Company
        </button>
      </div>
    </div>
  </div>
  <div className="view-container">
    {/* Grid View */}
    <div className="grid-view active">
      <div className="row g-4">
        {/* BrightWave Innovations */}
        <div className="col-md-6 col-lg-3">
          <div className="company-card">
            <div className="company-logo" style={{ background: "#7B68EE" }}>
              B
            </div>
            <h5 className="mb-2">BrightWave Innovations</h5>
            <div className="team-avatars mb-3">
              <img
                src="https://i.ibb.co/GSmprKx/Ellipse-5-6.png"
                alt="Team member"
              />
              <img
                src="https://i.ibb.co/DHsHQGLj/Vector-3.png"
                alt="Team member"
              />
              <div className="team-count">+1</div>
            </div>
            <div className="contact-info">
              <div className="mb-1">
                <i className="bi bi-envelope me-2" />
                dufeu@brightwave.com
              </div>
              <div className="mb-1">
                <i className="bi bi-telephone me-2" />
                (163) 2459 315
              </div>
              <div>
                <i className="bi bi-geo-alt me-2" />
                Germany
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="contact-links">
                <a href="#">
                  <i className="bi bi-envelope" />
                </a>
                <a href="#">
                  <i className="bi bi-telephone" />
                </a>
                <a href="#">
                  <i className="bi bi-chat" />
                </a>
                <a href="#">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
              <div className="rating">
                <i className="bi bi-star-fill" />
                <span>4.2</span>
              </div>
            </div>
          </div>
        </div>
        {/* TechFlow Solutions */}
        <div className="col-md-6 col-lg-3">
          <div className="company-card">
            <div className="company-logo" style={{ background: "#00C853" }}>
              T
            </div>
            <h5 className="mb-2">TechFlow Solutions</h5>
            <div className="team-avatars mb-3">
              <img
                src="https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png"
                alt="Team member"
              />
              <div className="team-count">+2</div>
            </div>
            <div className="contact-info">
              <div className="mb-1">
                <i className="bi bi-envelope me-2" />
                info@techflow.com
              </div>
              <div className="mb-1">
                <i className="bi bi-telephone me-2" />
                (555) 123 4567
              </div>
              <div>
                <i className="bi bi-geo-alt me-2" />
                United States
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="contact-links">
                <a href="#">
                  <i className="bi bi-envelope" />
                </a>
                <a href="#">
                  <i className="bi bi-telephone" />
                </a>
                <a href="#">
                  <i className="bi bi-chat" />
                </a>
                <a href="#">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
              <div className="rating">
                <i className="bi bi-star-fill" />
                <span>4.8</span>
              </div>
            </div>
          </div>
        </div>
        {/* InnovateTech */}
        <div className="col-md-6 col-lg-3">
          <div className="company-card">
            <div className="company-logo" style={{ background: "#FF4081" }}>
              I
            </div>
            <h5 className="mb-2">InnovateTech</h5>
            <div className="team-avatars mb-3">
              <img
                src="https://i.ibb.co/GSmprKx/Ellipse-5-6.png"
                alt="Team member"
              />
              <img
                src="https://i.ibb.co/DHsHQGLj/Vector-3.png"
                alt="Team member"
              />
              <img
                src="https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png"
                alt="Team member"
              />
              <div className="team-count">+0</div>
            </div>
            <div className="contact-info">
              <div className="mb-1">
                <i className="bi bi-envelope me-2" />
                contact@innovatetech.com
              </div>
              <div className="mb-1">
                <i className="bi bi-telephone me-2" />
                (444) 987 6543
              </div>
              <div>
                <i className="bi bi-geo-alt me-2" />
                Canada
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="contact-links">
                <a href="#">
                  <i className="bi bi-envelope" />
                </a>
                <a href="#">
                  <i className="bi bi-telephone" />
                </a>
                <a href="#">
                  <i className="bi bi-chat" />
                </a>
                <a href="#">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
              <div className="rating">
                <i className="bi bi-star-fill" />
                <span>4.5</span>
              </div>
            </div>
          </div>
        </div>
        {/* GlobalTech Systems */}
        <div className="col-md-6 col-lg-3">
          <div className="company-card">
            <div className="company-logo" style={{ background: "#7B68EE" }}>
              G
            </div>
            <h5 className="mb-2">GlobalTech Systems</h5>
            <div className="team-avatars mb-3">
              <img
                src="https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png"
                alt="Team member"
              />
              <div className="team-count">+4</div>
            </div>
            <div className="contact-info">
              <div className="mb-1">
                <i className="bi bi-envelope me-2" />
                hello@globaltech.com
              </div>
              <div className="mb-1">
                <i className="bi bi-telephone me-2" />
                (777) 888 9999
              </div>
              <div>
                <i className="bi bi-geo-alt me-2" />
                United Kingdom
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="contact-links">
                <a href="#">
                  <i className="bi bi-envelope" />
                </a>
                <a href="#">
                  <i className="bi bi-telephone" />
                </a>
                <a href="#">
                  <i className="bi bi-chat" />
                </a>
                <a href="#">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
              <div className="rating">
                <i className="bi bi-star-fill" />
                <span>4.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* List View */}
    <div className="list-view">
      {/* BrightWave Innovations */}
      <div className="company-list-item">
        <div className="company-logo" style={{ background: "#7B68EE" }}>
          B
        </div>
        <div className="company-info">
          <div>
            <h5 className="mb-2">BrightWave Innovations</h5>
            <div className="team-avatars">
              <img
                src="https://i.ibb.co/GSmprKx/Ellipse-5-6.png"
                alt="Team member"
              />
              <img
                src="https://i.ibb.co/DHsHQGLj/Vector-3.png"
                alt="Team member"
              />
              <div className="team-count">+1</div>
            </div>
          </div>
          <div className="contact-details">
            <div>
              <i className="bi bi-envelope me-2" />
              dufeu@brightwave.com
            </div>
            <div>
              <i className="bi bi-telephone me-2" />
              (163) 2459 315
            </div>
            <div>
              <i className="bi bi-geo-alt me-2" />
              Germany
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="contact-links">
              <a href="#">
                <i className="bi bi-envelope" />
              </a>
              <a href="#">
                <i className="bi bi-telephone" />
              </a>
              <a href="#">
                <i className="bi bi-chat" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div className="rating">
              <i className="bi bi-star-fill" />
              <span>4.2</span>
            </div>
          </div>
        </div>
      </div>
      {/* TechFlow Solutions */}
      <div className="company-list-item">
        <div className="company-logo" style={{ background: "#00C853" }}>
          T
        </div>
        <div className="company-info">
          <div>
            <h5 className="mb-2">TechFlow Solutions</h5>
            <div className="team-avatars">
              <img
                src="https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png"
                alt="Team member"
              />
              <div className="team-count">+2</div>
            </div>
          </div>
          <div className="contact-details">
            <div>
              <i className="bi bi-envelope me-2" />
              info@techflow.com
            </div>
            <div>
              <i className="bi bi-telephone me-2" />
              (555) 123 4567
            </div>
            <div>
              <i className="bi bi-geo-alt me-2" />
              United States
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="contact-links">
              <a href="#">
                <i className="bi bi-envelope" />
              </a>
              <a href="#">
                <i className="bi bi-telephone" />
              </a>
              <a href="#">
                <i className="bi bi-chat" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div className="rating">
              <i className="bi bi-star-fill" />
              <span>4.8</span>
            </div>
          </div>
        </div>
      </div>
      {/* InnovateTech */}
      <div className="company-list-item">
        <div className="company-logo" style={{ background: "#FF4081" }}>
          I
        </div>
        <div className="company-info">
          <div>
            <h5 className="mb-2">InnovateTech</h5>
            <div className="team-avatars">
              <img
                src="https://i.ibb.co/GSmprKx/Ellipse-5-6.png"
                alt="Team member"
              />
              <img
                src="https://i.ibb.co/DHsHQGLj/Vector-3.png"
                alt="Team member"
              />
              <img
                src="https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png"
                alt="Team member"
              />
              <div className="team-count">+0</div>
            </div>
          </div>
          <div className="contact-details">
            <div>
              <i className="bi bi-envelope me-2" />
              contact@innovatetech.com
            </div>
            <div>
              <i className="bi bi-telephone me-2" />
              (444) 987 6543
            </div>
            <div>
              <i className="bi bi-geo-alt me-2" />
              Canada
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="contact-links">
              <a href="#">
                <i className="bi bi-envelope" />
              </a>
              <a href="#">
                <i className="bi bi-telephone" />
              </a>
              <a href="#">
                <i className="bi bi-chat" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div className="rating">
              <i className="bi bi-star-fill" />
              <span>4.5</span>
            </div>
          </div>
        </div>
      </div>
      {/* GlobalTech Systems */}
      <div className="company-list-item">
        <div className="company-logo" style={{ background: "#7B68EE" }}>
          G
        </div>
        <div className="company-info">
          <div>
            <h5 className="mb-2">GlobalTech Systems</h5>
            <div className="team-avatars">
              <img
                src="https://i.ibb.co/SDtWRT1B/Ellipse-5-2.png"
                alt="Team member"
              />
              <div className="team-count">+4</div>
            </div>
          </div>
          <div className="contact-details">
            <div>
              <i className="bi bi-envelope me-2" />
              hello@globaltech.com
            </div>
            <div>
              <i className="bi bi-telephone me-2" />
              (777) 888 9999
            </div>
            <div>
              <i className="bi bi-geo-alt me-2" />
              United Kingdom
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="contact-links">
              <a href="#">
                <i className="bi bi-envelope" />
              </a>
              <a href="#">
                <i className="bi bi-telephone" />
              </a>
              <a href="#">
                <i className="bi bi-chat" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div className="rating">
              <i className="bi bi-star-fill" />
              <span>4.7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Companies