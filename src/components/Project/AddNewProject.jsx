import React, { useState, useEffect } from "react";
import "./project.css";

const AddNewProject = () => {
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
  return (
    <form id="projectForm">
      <div className="text-center mb-4">
        <div className="upload-area">
          <input
            type="file"
            name="mainFile"
            multiple
            className="d-none"
            
          />
          <div className="upload-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={48}
              fill="currentColor"
              className="bi bi-cloud-upload"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
              />
            </svg>
          </div>
          <p className="mb-1">Upload files or drag and drop</p>
          <p className="text-muted small">Max. file size: 50MB</p>
          <div id="mainFileUploadPreview" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Project Name</label>
          <input
            type="text"
            className="form-control"
            name="projectName"
            
            required
            placeholder="Enter project name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Client</label>
          <select
            className="form-select"
            name="client"
            
            required
          >
            <option value="">Select client</option>
            <option value="client1">Client 1</option>
            <option value="client2">Client 2</option>
            <option value="client3">Client 3</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            name="endDate"
            
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Priority</label>
          <select
            className="form-select"
            name="priority"
            
            required
          >
            <option value="">Select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Project Value</label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              name="projectValue"
              
              required
              placeholder={0.0}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          name="description"
          
          rows={4}
          required
          placeholder="Project description..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Attachments</label>
        <div className="upload-area">
          <input
            type="file"
            name="attachments"
            multiple
            className="d-none"
            
          />
          <div className="upload-icon">📎</div>
          <p className="mb-1">Upload files or drag and drop</p>
          <p className="text-muted small">Max. file size: 50MB</p>
          <div id="attachmentsUploadPreview" />
        </div>
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-light me-2"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Create Project
        </button>
      </div>
    </form>
  );
};

export default AddNewProject;