import { Kanban } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import ProjectCard from "./Cards/proj_card";
import { useSelector } from "react-redux";
import ResourceTimelineCalendar from "../ResourceTimlineCalendar";
import KanbanBoard from "../Kanban/Kanban";

const Project = () => {
  const [designations] = useState([
    {
      id: 1,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 2,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 3,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 4,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 5,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 6,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 7,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 8,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 9,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 10,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 11,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 12,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 13,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 14,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
    {
      id: 15,
      name: "Chatbots",
      members: "Sarah Chen",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Chen",
      startDate: "29-12-2024",
      deadline: "29-04-2025",
      client: "Kailee Kuvalis",
      progress: 86,
      status: "In Progress",
    },
  ]);
  const [tasks, setTasks] = useState(designations);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedDesignations = tasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <h4 className="mb-0 text-2xl font-bold text-start text-md-start w-100 w-md-auto">
          All Projects
        </h4>

        <div className="add-toggle d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 w-100 w-md-auto">
          {/* <div className="d-flex flex-wrap align-items-center gap-2 justify-content-start">
      <Link to="/calendar">
        <button className="btn btn-outline-secondary d-flex align-items-center gap-1">
          <i className="bi bi-grid" /> TimeLine
        </button>
      </Link>
      <Link to="/projectlist">
        <button className="btn btn-outline-secondary d-flex align-items-center gap-1">
          <i className="bi bi-list" /> List View
        </button>
      </Link>
      <Link to="/kanban">
        <button className="btn btn-outline-secondary d-flex align-items-center gap-1">
          <Kanban /> Board View
        </button>
      </Link>
    </div> */}

          <div className= {` ${darkMode ? "dark-mode" : null } view-toggle d-flex flex-wrap gap-1`}>
            {/* <Link to="/ProjectTimelineCalendar"> */}
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-1"
              onClick={() => setActiveTab(0)}
            >
              <i className="bi bi-grid" /> TimeLine
            </button>
            {/* </Link> */}
            {/* <Link to="/projectlist"> */}
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-1"
              onClick={() => setActiveTab(1)}
            >
              <i className="bi bi-list" /> List View
            </button>
            {/* </Link> */}
            {/* <Link to="/kanban"> */}
            <button
              className="btn btn-outline-secondary d-flex align-items-center gap-1"
              onClick={() => setActiveTab(2)}
            >
              <Kanban /> Board View
            </button>
            {/* </Link> */}
          </div>

          <button
            className="btn btn-primary add-project-btn"
            style={{ height: "fit-content" }}
            onClick={handleOpenModal}
          >
            <i className="bi bi-plus" /> Add New Project
          </button>
        </div>
      </div>

      {/* Projects Table */}
      <div className="table-responsive">
        <table className="table align-middle text-nowrap">
          <thead className="text-nowrap">
            <tr>
              <th style={{ width: "40px" }}>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Client</th>
              <th>Members</th>
              <th>Start Date</th>
              <th>Deadline</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDesignations.map((task) => (
              <tr key={task.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>{task.client}</td>
                <td>
                  <img src={task.avatar} className="avatar me-1" alt="avatar" />
                  +3
                </td>
                <td>{task.startDate}</td>
                <td>{task.deadline}</td>
                <td>{task.name}</td>
                <td>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                  <span className="badge bg-info mt-1">{task.status}</span>
                </td>
                <td>
                  <button
                    // onClick={() => handleOpenModal(task)}
                    className="text-blue-500"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    // onClick={() => handleDelete(task.id)}
                    className="text-red-500"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, tasks.length)} of {tasks.length} entries
        </div>
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Project;
