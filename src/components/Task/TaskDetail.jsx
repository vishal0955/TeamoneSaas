import React from 'react';
import { useParams } from 'react-router-dom';
import "./task.css";
import { Link } from 'react-router-dom';
const TaskDetail = () => {
  const { id } = useParams();

  // You can fetch task details based on the id here
  // For now, we will just display the id
  return (
    <>
    <div>
        <div className="container py-5">
  <div className="task-card">
    <div className="d-flex justify-content-between align-items-start mb-4">
      <h4 className="mb-0">Task Details</h4>
      <div className="btn">
      <Link to="/project/task" className="edit-btn me-2">
         Back
      </Link>
      <a href="#" className="edit-btn">
        <i className="bi bi-pencil" /> Edit Task
      </a>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8">
        <h5 className="mb-3">Task Description</h5>
        <p className="text-muted mb-4">
          Design and implement new user interface components for the dashboard
          section. Focus on improving user experience and maintaining
          consistency with our design system.
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="task-metadata">
              <i className="bi bi-calendar" />
              <span>Due: Oct 15, 2024 - 5:00 PM</span>
            </div>
            <div className="task-metadata">
              <i className="bi bi-person" />
              <span>Assigned to: Sarah Chen</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="task-metadata">
              <i className="bi bi-flag" />
              <span>Priority: High</span>
            </div>
            <div className="task-metadata">
              <i className="bi bi-folder" />
              <span>Project: Brand Refresh Project</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <h5 className="mb-3">Attachments</h5>
        <div className="attachment-item">
          <div className="d-flex align-items-center">
            <i className="bi bi-file-pdf text-danger me-2" />
            <div>
              <div>Requirements.pdf</div>
              <div className="file-size">2.4 KB</div>
            </div>
          </div>
          <a href="#" className="text-muted">
            <i className="bi bi-download" />
          </a>
        </div>
        <div className="attachment-item">
          <div className="d-flex align-items-center">
            <i className="bi bi-file-image text-primary me-2" />
            <div>
              <div>Mockup.png</div>
              <div className="file-size">1.8 MB</div>
            </div>
          </div>
          <a href="#" className="text-muted">
            <i className="bi bi-download" />
          </a>
        </div>
        <div className="attachment-item">
          <div className="d-flex align-items-center">
            <i className="bi bi-file-word text-primary me-2" />
            <div>
              <div>Guidelines.doc</div>
              <div className="file-size">850 KB</div>
            </div>
          </div>
          <a href="#" className="text-muted">
            <i className="bi bi-download" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  );
};

export default TaskDetail;
