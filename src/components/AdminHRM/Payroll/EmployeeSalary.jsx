import React, { useState } from "react";
import { FiSettings, FiEdit, FiTrash, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaFileExport,
  FaCog,
  FaTrash,
  FaEdit,
  FaTimes,
} from "react-icons/fa";
import AddEmployeeSalaryModal from "./AddEmployeeSalaryModal";

const defaultEarnings = {
  basic: 3000,
  hra: 1000,
  conveyance: 200,
  others: 100,
};

 

const defaultDeductions = {
  tds: 200,
  pf: 300,
  esi: 150,
  loan: 50,
};

const employee = [
  {
    id: "Emp-001",
    name: "Anthony Lewis",
    email: "anthony@example.com",
    phone: "(123) 4567 890",
    designation: "Finance",
    joining: "12 Sep 2024",
    salary: "40000",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    earnings: defaultEarnings,
    deductions: defaultDeductions,
    payslipNo: "PS4283",
    salaryMonth: "October 2024",
  },
  {
    id: "Emp-002",
    name: "Brian Villalobos",
    email: "brian@example.com",
    phone: "(179) 7382 829",
    designation: "Developer",
    joining: "24 Oct 2024",
    salary: "35000",
    image: "https://i.pravatar.cc/40?u=2",
    earnings: defaultEarnings,
    deductions: defaultDeductions,
    payslipNo: "PS4284",
    salaryMonth: "October 2024",
  },
  // ... same for others
];

// const employee = [
//   {
//     id: "Emp-001",
//     name: "Anthony Lewis",
//     email: "anthony@example.com",
//     phone: "(123) 4567 890",
//     designation: "Finance",
//     joining: "12 Sep 2024",
//     salary: "40000",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: "Emp-002",
//     name: "Brian Villalobos",
//     email: "brian@example.com",
//     phone: "(179) 7382 829",
//     designation: "Developer",
//     joining: "24 Oct 2024",
//     salary: "35000",
//     image: "https://i.pravatar.cc/40?u=2",
//   },
//   {
//     id: "Emp-003",
//     name: "Harvey Smith",
//     email: "harvey@example.com",
//     phone: "(184) 2719 738",
//     designation: "Executive",
//     joining: "18 Feb 2024",
//     salary: "20000",
//     image: "https://i.pravatar.cc/40?u=1",
//   },
//   {
//     id: "Emp-004",
//     name: "Stephan Peralt",
//     email: "peral@example.com",
//     phone: "(193) 7839 748",
//     designation: "Executive",
//     joining: "17 Oct 2024",
//     salary: "22000",
//     image: "https://i.pravatar.cc/40?u=3",
//   },
// ];

export default function EmployeeSalary() {
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState(employee);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  const handleAddSalary = () => {
    setShowModal(true);
  };

  const addEmployee = (newEmp) => {
    const id = `Emp-${String(employees.length + 1).padStart(3, "0")}`;
    const dummyImage = `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`;

    const employeeWithSlip = {
      ...newEmp,
      id,
      image: dummyImage,
      earnings: {
        basic: 3000,
        hra: 1000,
        conveyance: 200,
        others: 100,
      },
      deductions: {
        tds: 200,
        pf: 300,
        esi: 150,
        loan: 50,
      },
      payslipNo: "PS" + Math.floor(1000 + Math.random() * 9000),
      salaryMonth: "October 2024", // You can make this dynamic
    };

    setEmployees([...employees, employeeWithSlip]);
    setShowModal(false);
  };

  const deleteEmployee = (id) => {
    const updated = employees.filter((emp) => emp.id !== id);
    setEmployees(updated);
  };

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
            onClick={handleAddSalary}
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
          />
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-nowrap">
              <th className="p-2 text-left">Emp ID</th>
              <th className="p-2 text-left">Name</th>
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
                <td className="p-2 border">{employee.id}</td>
                <td className="p-2 mx-4 flex items-center gap-2">
                  <img
                    src={employee.image}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{employee.name}</div>
                    <div className="text-sm text-gray-500">{employee.role}</div>
                  </div>
                </td>
                <td className="p-2 border">{employee.email}</td>
                <td className="p-2 border">{employee.phone}</td>
                <td className="p-2 border">{employee.designation}</td>
                <td className="p-2 border">{employee.joining}</td>
                <td className="p-2 border">${employee.salary}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => {
                      localStorage.setItem(
                        "payslipData",
                        JSON.stringify(employee)
                      );
                      navigate(`/payslip/${employee.id}`);
                    }}
                    className="bg-black text-white px-3 py-1 rounded-md"
                  >
                    Generate Slip
                  </button>
                </td>
                {/* <td className="p-2 border flex justify-center gap-2">
                  <button className="text-blue-500">
                    <FiEdit size={18} />
                  </button>
                  <button className="text-red-500">
                    <FiTrash size={18} />
                  </button>
                </td> */}

                <td className="p-2 border flex justify-center gap-2">
                  <button
                    className="text-blue-500"
                    onClick={() => {
                      setSelectedEmployee(employee);
                      setIsEdit(true);
                      setShowModal(true);
                    }}
                  >
                    <FiEdit size={18} />
                  </button>

                  <button
                    className="text-red-500"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure to delete ${employee.name}?`
                        )
                      ) {
                        deleteEmployee(employee.id);
                      }
                    }}
                  >
                    <FiTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {showModal && (
        <AddEmployeeSalaryModal
          onClose={() => {
            setShowModal(false);
            setIsEdit(false);
            setSelectedEmployee(null);
          }}
          onSubmit={isEdit ? updateEmployee : addEmployee}
          isEdit={isEdit}
          employeeData={selectedEmployee}
        />
      )}
    </div>
  );
}
