import React, { useState } from "react";
import { FiSettings, FiEdit, FiTrash, FiX } from "react-icons/fi";
import {
  FaPlus,
  FaFileExport,
  FaCog,
  FaTrash,
  FaEdit,
  FaTimes,
} from "react-icons/fa";

const employees = [
  {
    id: "Emp-001",
    name: "Anthony Lewis",
    email: "anthony@example.com",
    phone: "(123) 4567 890",
    designation: "Finance",
    joiningDate: "$12 Sep 2024",
    salary: "$40000",
    image: "https://via.placeholder.com/50",
  },
  {
    id: "Emp-002",
    name: "Brian Villalobos",
    email: "brian@example.com",
    phone: "(179) 7382 829",
    designation: "Developer",
    joiningDate: "24 Oct 2024",
    salary: "$35000",
    image: "https://via.placeholder.com/50",
  },
  {
    id: "Emp-003",
    name: "Harvey Smith",
    email: "harvey@example.com",
    phone: "(184) 2719 738",
    designation: "Executive",
    joiningDate: "18 Feb 2024",
    salary: "$20000",
    image: "https://via.placeholder.com/50",
  },
  {
    id: "Emp-004",
    name: "Stephan Peralt",
    email: "peral@example.com",
    phone: "(193) 7839 748",
    designation: "Executive",
    joiningDate: "17 Oct 2024",
    salary: "$22000",
    image: "https://via.placeholder.com/50",
  },
];

export default function EmployeeSalary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Employee Salary
          </h1>
          <p className="text-gray-500 text-sm">HR / Employee Salary</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0">
          <button className="flex items-center px-4 py-2 border border-black text-black rounded-md">
            <FaFileExport className="mr-2" />
            Export
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-black"
          >
            <FaPlus className="mr-2" />
            Add Salary
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex flex-wrap justify-between items-center p-3 rounded-md">
          <h1 className="text-xl font-semibold text-gray-800">
            Employee Salary List
          </h1>
          <div className="flex flex-wrap gap-2">
            <select className="border p-2 rounded-md text-sm">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select className="border p-2 rounded-md text-sm">
              <option>Sort By : Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center p-3 rounded-md border-t-2  gap-4">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium">Row Per Page</label>
            <select className="border p-2 rounded-md text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded-md text-sm w-full sm:w-auto"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-nowrap">
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Designation</th>
              <th className="border p-2">Joining Date</th>
              <th className="border p-2">Salary</th>
              <th className="border p-2">Payslip</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="text-center border text-nowrap">
                <td className="p-2 border">{employee.email}</td>
                <td className="p-2 border">{employee.phone}</td>
                <td className="p-2 border">
                  <select className="border p-1 rounded-md">
                    <option>{employee.designation}</option>
                    <option>Finance</option>
                    <option>Developer</option>
                    <option>Executive</option>
                  </select>
                </td>
                <td className="p-2 border">{employee.joiningDate}</td>
                <td className="p-2 border">{employee.salary}</td>
                <td className="p-2 border">
                  <button className="bg-black text-white px-3 py-1 rounded-md">
                    Generate Slip
                  </button>
                </td>
                <td className="p-2 border flex justify-center gap-2">
                  <button className="text-blue-500">
                    <FiEdit size={18} />
                  </button>
                  <button className="text-red-500">
                    <FiTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="fixed bottom-4 right-4 bg-orange-500 p-3 rounded-full text-white">
        <FiSettings size={24} />
      </div> */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-3/4 md:w-1/2 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Employee Salary</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <FiX size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  Employee Name
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Select</option>
                  {employees.map((emp) => (
                    <option key={emp.id}>{emp.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Net Salary</label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
            </div>

            <h3 className="mt-4 font-semibold">Earnings</h3>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <input
                type="text"
                placeholder="Basic"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="DA(40%)"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="HRA(15%)"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Conveyance"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Allowance"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Medical Allowance"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Others"
                className="p-2 border rounded-md"
              />
            </div>

            <h3 className="mt-4 font-semibold">Deductions</h3>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <input
                type="text"
                placeholder="TDS"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="ESI"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="PF"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Leave"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Prof. Tax"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Labour Welfare"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Others"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded-md mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                Add Employee Salary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
