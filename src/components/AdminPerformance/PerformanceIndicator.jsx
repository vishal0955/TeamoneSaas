import React, { useState } from "react";
import {
  FaPlus,
  FaFileExport,
  FaCog,
  FaTrash,
  FaEdit,
  FaTimes,
} from "react-icons/fa";
import Modal from "./modal";

const datas = [
  {
    id: 1,
    designation: "Web Designer",
    department: "Designing",
    approvedBy: "Doglas Martini",
    createdDate: "14 Jan 2024",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    designation: "Web Developer",
    department: "Developer",
    approvedBy: "Doglas Martini",
    createdDate: "21 Jan 2024",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    designation: "IOS Developer",
    department: "Developer",
    approvedBy: "Doglas Martini",
    createdDate: "18 Feb 2024",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    designation: "Android Developer",
    department: "Developer",
    approvedBy: "Doglas Martini",
    createdDate: "24 Feb 2024",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    designation: "DevOps Engineer",
    department: "DevOps",
    approvedBy: "Doglas Martini",
    createdDate: "11 Mar 2024",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const PerformanceIndicator = () => {
  const [data, setData] = useState(datas);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    designation: "",
    department: "",
    approvedBy: "",
    createdDate: "",
    status: "",
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (item = null) => {
    if (item) {
      setEditMode(true);
      setFormData(item);
    } else {
      setEditMode(false);
      setFormData({
        id: "",
        designation: "",
        department: "",
        approvedBy: "",
        createdDate: "",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        status: "Active",
      });
    }
    setModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Add or Update Data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setData(data.map((item) => (item.id === formData.id ? formData : item)));
    } else {
      setData([...data, { ...formData, id: data.length + 1 }]);
    }
    closeModal();
  };

  // Delete Data
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const renderSelect = (label) => (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <select className="w-full border p-2 rounded">
        <option>Select</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Poor</option>
      </select>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Performance Indicator
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Performance /{" "}
            <span className="text-black">Performance Indicator</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0">
          <button
            onClick={() => openModal()}
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black"
          >
            <FaPlus className="mr-2" />
            Add Indicator
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Performance Indicator List</h3>
          <div className="flex items-center space-x-2">
            <select className="border rounded p-2">
              <option>Sort By: Last 7 Days</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="border rounded p-2"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Designation</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Approved By</th>
                <th className="p-3 text-left">Created Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 font-semibold">{item.designation}</td>
                  <td className="p-3">{item.department}</td>
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={item.image}
                      alt="profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold">{item.approvedBy}</span>
                  </td>
                  <td className="p-3">{item.createdDate}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700 border border-green-500"
                          : "bg-red-100 text-red-700 border border-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => openModal(item)}
                      className="text-blue-500"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      
      


      {/* Modal */}
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 className="text-xl font-bold mb-4">
          {editMode ? "Edit Indicator" : "Add New Indicator"}
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Designation */}
          {/* {renderSelect("Designation")} */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Approved By</label>
              <input
                type="text"
                name="approvedBy"
                value={formData.approvedBy}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Created Date</label>
              <input
                type="date"
                name="createdDate"
                value={formData.createdDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>
          {/* Technical Section */}
          <h4 className="font-semibold mt-4">Technical</h4>
          <div className="grid grid-cols-2 gap-4">
            {renderSelect("Customer Experience")}
            {renderSelect("Marketing")}
            {renderSelect("Management")}
            {renderSelect("Administration")}
            {renderSelect("Presentation Skills")}
            {renderSelect("Quality of Work")}
            {renderSelect("Efficiency")}
          </div>

          {/* Organizational Section */}
          <h4 className="font-semibold mt-4">Organizational</h4>
          <div className="grid grid-cols-2 gap-4">
            {renderSelect("Integrity")}
            {renderSelect("Professionalism")}
            {renderSelect("Team Work")}
            {renderSelect("Critical Thinking")}
            {renderSelect("Conflict Management")}
            {renderSelect("Attendance")}
            {renderSelect("Ability to Meet Deadline")}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="text-right">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black"
            >
              {editMode ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default PerformanceIndicator;
