
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Dropdown,
  Badge,
  InputGroup,
  Pagination,
} from "react-bootstrap";
import {
 
  FaTrash,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { FaPenToSquare, FaRegEye } from "react-icons/fa6";




import { Navigate } from 'react-router-dom';
import { AddUserModal } from './userModal';

const Users = () => {
  // Sample data for initial users
  const initialUsers = [
    {
      id: 1,
      name: "Anthony Lewis",
      email: "anthony@example.com",
      createdDate: "12 Sep 2024",
      role: "Employee",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      createdDate: "15 Sep 2024",
      role: "Client",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael@example.com",
      createdDate: "18 Sep 2024",
      role: "Employee",
      status: "Inactive",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortBy, setSortBy] = useState("Last 7 Days");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

   const [showAddModal, setShowAddModal] = useState(false);
  
  // Avatar placeholder component
  const Avatar = ({ name }) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const colors = ["#FF6B6B", "#6B66FF", "#66FFB8", "#FFD166"];
    const colorIndex = name.charCodeAt(0) % colors.length;

    return (
      <div
        style={{
          backgroundColor: colors[colorIndex],
          color: "#fff",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          marginRight: "10px",
        }}
      >
        {initials}
      </div>
    );
  };

  // Get total number of entries
  const totalEntries = 50;

  return (
    <Container fluid className="p-4">
      {/* Header */}
      <Row className="mb-4 ">
        <Col md={6}>
          <h2>Users</h2>
          <div className="text-muted">Administration / Users</div>
        </Col>
        <Col md={6}className="text-end ">
          <Button variant="outline-secondary" className="me-2">
            <i className="bi bi-download me-1"></i> Export
          </Button>
          <Button variant="dark" onClick={() => setShowAddModal(true)}>
            <i className="bi bi-plus me-1"></i> Add User
          </Button>
        </Col>
      </Row>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow-sm mb-4">
        <Row className="mb-4">
          <Col>
            <h5>Users List</h5>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <InputGroup>
              <Form.Control
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                placeholder="Date"
              />
              <InputGroup.Text>
                <FaCalendarAlt />
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="w-100 text-start border"
              >
                {roleFilter}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setRoleFilter("All Roles")}>
                  All Roles
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRoleFilter("Employee")}>
                  Employee
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRoleFilter("Client")}>
                  Client
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="w-100 text-start border"
              >
                {statusFilter}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setStatusFilter("All Status")}>
                  All Status
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStatusFilter("Active")}>
                  Active
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setStatusFilter("Inactive")}>
                  Inactive
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="w-100 text-start border"
              >
                {sortBy}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortBy("Last 7 Days")}>
                  Last 7 Days
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("Last 30 Days")}>
                  Last 30 Days
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("Last 90 Days")}>
                  Last 90 Days
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Table Controls */}
        <Row className="mb-3 align-items-center">
          <Col xs={12} md={2}>
            <Form.Select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Form.Select>
          </Col>
          <Col xs="auto" className="text-muted">
            entries
          </Col>
          <Col xs={12} md={5} className="ms-auto">
            <InputGroup>
              <Form.Control
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        {/* Users Table */}
        <Table hover responsive className="align-middle">
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Created Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <Avatar name={user.name} />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdDate}</td>
                <td>
                  <Badge
                    bg={user.role === "Employee" ? "danger" : "primary"}
                    className="bg-opacity-10 text-dark"
                  >
                    {user.role}
                  </Badge>
                </td>
                <td>
                  <Badge
                    bg={user.status === "Active" ? "success" : "danger"}
                    pill
                    className="px-3 py-2"
                  >
                    {user.status}
                  </Badge>
                </td>
                {/* <td>
                  <Button variant="light" size="sm" className="me-1">
                    <FaEye />
                  </Button>

                  <Button
                    className=" action-btn  hover:text-blue-800"
                    style={{ color: "blue" }}
                  >
                    <FaPenToSquare />
                  </Button>
                  <Button className=" action-btn text-danger hover:text-red-800">
                    <FaTrash />
                  </Button>
                </td> */}
                <td>
                  <button className="">
                    <FaRegEye />
                  </button>
                  <button
                    className=" action-btn  hover:text-blue-800"
                    style={{ color: "blue" }}
                  >
                    <FaPenToSquare />
                  </button>
                  <button className=" action-btn text-danger hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <Row className="align-items-center mt-2">
          <Col xs={12} md={6}>
            <div className="text-muted">
              Showing 1 to {users.length} of {totalEntries} entries
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-md-end mt-3 mt-md-0"
          >
            <Pagination className="mb-0">
              <Pagination.Item disabled>Previous</Pagination.Item>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
          </Col>
        </Row>

        <AddUserModal 
        show={showAddModal} 
        handleClose={() => setShowAddModal(false)} 
      />
      </div>
    </Container>
  );
};

export default Users;
