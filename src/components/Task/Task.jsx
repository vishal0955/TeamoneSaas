import React, { useState } from "react";
import "./task.css";
import AddTask from "./AddTask"; // Import the AddTask component
import TaskBoard from "./TaskBoard";
import TaskList from "./TaskList";
import TaskGrid from "./TaskGrid";

const Task = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [view, setView] = useState("list");

  const toggleView = (selectedView) => {
    setView(selectedView);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container projects-container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0"></h4>
          <div className="add-toggle d-flex">
            {/* View Toggle */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="view-toggle">
                <button
                  className={view === "list" ? "active" : ""}
                  onClick={() => toggleView("list")}>
                  <i className="bi bi-list me-2" /> List View
                </button>
                <button
                  className={view === "grid" ? "active" : ""}
                  onClick={() => toggleView("grid")}>
                  <i className="bi bi-grid me-2" /> Grid View
                </button>
                <button
                  className={view === "taskbord" ? "active" : ""}
                  onClick={() => toggleView("taskbord")}>
                  <i className="bi bi-grid me-2" /> Task Board
                </button>
              </div>
            </div>
            <button
              className="btn new-task-btn"
              style={{ height: "fit-content", marginLeft: "20px" }}
              onClick={handleOpenModal}>
              <i className="bi bi-plus" /> New Task
            </button>
          </div>
        </div>

        {/* Grid View */}
        <div className={`grid-view ${view === "grid" ? "active" : "d-none"}`}>
          <TaskGrid />
        </div>

        {/* List View */}
        <div className={`list-view ${view === "list" ? "active" : "d-none"}`}>
          <TaskList />
        </div>

        {/* Task Board */}
        <div
          className={`list-view ${view === "taskbord" ? "active" : "d-none"}`}>
          <TaskBoard />
        </div>
      </div>

      {/* Modal for AddTask */}
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Task</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <AddTask />
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default Task;
