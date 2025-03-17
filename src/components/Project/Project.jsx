import React, { useState } from "react";
import "./project.css";
import AddNewProject from "./AddNewProject"; // Import the AddNewProject component

const Project = () => {
  const [view, setView] = useState("grid");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const toggleView = (selectedView) => {
    setView(selectedView);
  };

  const handleAddProjectClick = () => {
    setShowModal(true); // Show the modal when the button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <>
      <div className="container projects-container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">All Projects</h4>
          <div className="add-toggle d-flex">
            {/* View Toggle */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="view-toggle">
                <button
                  className={view === "grid" ? "active" : ""}
                  onClick={() => toggleView("grid")}>
                  <i className="bi bi-grid me-2" /> Grid View
                </button>
                <button
                  className={view === "list" ? "active" : ""}
                  onClick={() => toggleView("list")}>
                  <i className="bi bi-list me-2" /> List View
                </button>
              </div>
            </div>
            <button
              className="btn add-project-btn ms-3"
              style={{ height: "fit-content" }}
              onClick={handleAddProjectClick} // Open modal on click
            >
              <i className="bi bi-plus" /> Add New Project
            </button>
          </div>
        </div>

        {/* Grid View */}
        <div className={`grid-view ${view === "grid" ? "active" : "d-none"}`}>
          <div className="row g-4">
            {/* Project Cards */}
            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="d-flex justify-content-between align-items-start">
                  <span className="project-status status-ongoing">Ongoing</span>
                  <button className="project-options">
                    <i className="bi bi-three-dots" />
                  </button>
                </div>
                <h5 className="project-title">Brand Refresh Project</h5>
                <p className="project-description">
                  Redesigning company brand identity and visual guidelines
                </p>
                <div className="project-meta">Due Oct 15</div>
                <div className="team-avatars">
                  <img
                    src="https://i.ibb.co/PGg1c87h/Ellipse-5-6.png"
                    className="avatar"
                    alt="avatar"
                  />
                  <img
                    src="https://i.ibb.co/Jj86BTPS/Ellipse-5-7.png"
                    className="avatar"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* List View */}
        <div className={`list-view ${view === "list" ? "active" : "d-none"}`}>
          <div className="project-card">
            <div className="project-info">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="heading-badge d-flex">
                  <h5 className="project-title mb-0 me-4">
                    Brand Refresh Project
                  </h5>
                  <span className="project-status status-ongoing mb-0">
                    Ongoing
                  </span>
                </div>
                <div className="img-group">
                  <img
                    src="https://i.ibb.co/PGg1c87h/Ellipse-5-6.png"
                    className="avatar"
                    alt="avatar"
                  />
                  <img
                    src="https://i.ibb.co/Jj86BTPS/Ellipse-5-7.png"
                    className="avatar"
                    alt="avatar"
                  />
                </div>
              </div>
              <p className="project-description mb-2">
                Redesigning company brand identity and visual guidelines
              </p>
              <div className="project-meta">
                <span>
                  <i className="bi bi-calendar me-2" /> Due Oct 15
                </span>
                <span>
                  <i className="bi bi-people me-2" /> 2 Members
                </span>
              </div>
            </div>
            <button className="project-options">
              <i className="bi bi-three-dots" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Adding New Project */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Project</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <AddNewProject onClose={handleCloseModal} /> {/* Pass the close function */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;