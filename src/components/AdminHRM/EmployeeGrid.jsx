// import React, { useState } from "react";
// import {
//   FaPlus,
//   FaFilter,
//   FaDownload,
//   FaPenToSquare,
//   FaTrash,
//   FaUser,
//   FaXmark,
// } from "react-icons/fa6";
// import {
//   FaUsers,
//   FaUserCheck,
//   FaUserTimes,
//   FaUserPlus,
//   FaBars,
//   FaTh,
//   FaCog,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const departments = [
//   "IT Department",
//   "HR Department",
//   "Finance Department",
//   "Marketing Department",
// ];
// const designations = [
//   "Senior Developer",
//   "HR Manager",
//   "Marketing Specialist",
//   "Finance Manager",
// ];

// const employee = [
//   {
//     id: "EMP001",
//     name: "John Doe",
//     designation: "Senior Developer",
//     department: "IT Department",
//     email: "john.doe@example.com",
//     phone: "+1 234 567 890",
//     status: "Active",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     dateOfJoin: "2023-01-01",
//   },
//   {
//     id: "EMP002",
//     name: "Jane Smith",
//     designation: "HR Manager",
//     department: "HR Department",
//     email: "jane.smith@example.com",
//     phone: "+1 234 567 891",
//     status: "Active",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     dateOfJoin: "2023-02-01",
//   },
// ];

// const EmployeeGrid = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [employees, setEmployees] = useState(employee);
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeButton, setActiveButton] = useState("list");

//   const [newEmployee, setNewEmployee] = useState({
//     id: "",
//     name: "",
//     email: "",
//     phone: "",
//     designation: designations[0],
//     department: departments[0],
//     status: "Active",
//     dateOfJoin: "",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEmployee({ ...newEmployee, [name]: value });
//   };

//   const handleSaveEmployee = (e) => {
//     e.preventDefault();
//     if (editingEmployee) {
//       setEmployees(
//         employees.map((emp) =>
//           emp.id === editingEmployee.id
//             ? { ...newEmployee, id: editingEmployee.id }
//             : emp
//         )
//       );
//       setEditingEmployee(null);
//     } else {
//       setEmployees([
//         ...employees,
//         { ...newEmployee, id: `EMP00${employees.length + 1}` },
//       ]);
//     }
//     setIsModalOpen(false);
//     setNewEmployee({
//       id: "",
//       name: "",
//       email: "",
//       phone: "",
//       designation: designations[0],
//       department: departments[0],
//       status: "Active",
//       dateOfJoin: "",
//       image: "https://randomuser.me/api/portraits/men/3.jpg",
//     });
//   };

//   const handleDeleteEmployee = (id) => {
//     setEmployees(employees.filter((employee) => employee.id !== id));
//   };

//   const handleEditEmployee = (employee) => {
//     setNewEmployee(employee);
//     setEditingEmployee(employee);
//     setIsModalOpen(true);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className=" bg-gray-50 font-sans flex flex-col items-center p-6">
//       <div className="w-full bg-white rounded-lg p-6">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//           <div>
//             <h1 className="text-2xl font-semibold text-gray-800">
//               Employee Grid
//             </h1>
//             <p className="text-gray-500 text-sm">Employee &gt; Employee Grid</p>
//           </div>
//           <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-0 flex-wrap">
//             <Link to={"/employeelist"}>
//               <button
//                 className={`p-2 ${
//                   activeButton === "grid"
//                     ? "bg-orange-600 text-white"
//                     : "bg-white border"
//                 } rounded-lg hover:bg-orange-600`}
//                 onClick={() => setActiveButton("grid")}
//               >
//                 <FaBars />
//               </button>
//             </Link>

//             <Link>
//               <button
//                 className={`p-2 ${
//                   activeButton === "list"
//                     ? "bg-orange-600 text-white"
//                     : "bg-white border"
//                 } rounded-lg hover:bg-orange-600`}
//                 onClick={() => setActiveButton("list")}
//               >
//                 <FaTh />
//               </button>
//             </Link>

//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="px-4 py-2 bg-gray-800 text-white rounded-md flex items-center hover:bg-black"
//             >
//               <FaPlus className="mr-2" /> Add Employee
//             </button>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <StatCard
//             icon={<FaUsers />}
//             title="Total..."
//             count="1007"
//             color="bg-black"
//           />
//           <StatCard
//             icon={<FaUserCheck />}
//             title="Active"
//             count="1007"
//             color="bg-green-500"
//           />
//           <StatCard
//             icon={<FaUserTimes />}
//             title="Inactive"
//             count="1007"
//             color="bg-red-500"
//           />
//           <StatCard
//             icon={<FaUserPlus />}
//             title="New..."
//             count="67"
//             color="bg-blue-500"
//           />
//         </div>

//         <div className="flex justify-between items-center mb-4 mt-3">
//           <div className="relative w-64 mb-4 z-0">
//             <input
//               type="text"
//               placeholder="Search employees..."
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>
//           <div className="flex space-x-2">
//             <button className="px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center">
//               <FaFilter className="mr-2" /> Filter
//             </button>
//             <button className="px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center">
//               <FaDownload className="mr-2" /> Export
//             </button>
//           </div>
//         </div>

//         {isModalOpen && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative">
//               <button
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 <FaXmark size={20} />
//               </button>
//               <h2 className="text-xl font-semibold mb-4">
//                 {editingEmployee ? "Edit Employee" : "Add Employee"}
//               </h2>
//               <form className="space-y-4" onSubmit={handleSaveEmployee}>
//                 <div className="grid grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     className="w-full p-2 border rounded"
//                     value={newEmployee.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   {/* <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="w-full p-2 border rounded"
//                     value={newEmployee.lastName}
//                     onChange={handleInputChange}
//                     required
//                   /> */}
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="w-full p-2 border rounded"
//                     value={newEmployee.email}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     className="w-full p-2 border rounded"
//                     value={newEmployee.phone}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <select
//                     name="department"
//                     className="w-full p-2 border rounded"
//                     value={newEmployee.department}
//                     onChange={handleInputChange}
//                   >
//                     {departments.map((dept) => (
//                       <option key={dept} value={dept}>
//                         {dept}
//                       </option>
//                     ))}
//                   </select>
//                   <select
//                     name="designation"
//                     className="w-full p-2 border rounded"
//                     value={newEmployee.designation}
//                     onChange={handleInputChange}
//                   >
//                     {designations.map((desg) => (
//                       <option key={desg} value={desg}>
//                         {desg}
//                       </option>
//                     ))}
//                   </select>
//                   <input
//                     type="date"
//                     name="dateOfJoin"
//                     className="w-full p-2 border rounded"
//                     value={newEmployee.dateOfJoin}
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="Employee ID"
//                     value={newEmployee.id}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-4 mt-4">
//                   <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
//                     <FaUser className="text-3xl text-gray-400" />
//                   </div>
//                   <button
//                     type="button"
//                     className="px-4 py-2 border rounded hover:bg-gray-50"
//                   >
//                     Upload Photo
//                   </button>
//                 </div>
//                 <textarea
//                   rows="4"
//                   placeholder="Additional Information"
//                   className="w-full p-2 border rounded"
//                 ></textarea>
//                 <div className="flex justify-end space-x-2">
//                   <button
//                     onClick={() => setIsModalOpen(false)}
//                     className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                   >
//                     {editingEmployee ? "Update Employee" : "Save Employee"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600">
//               <th className="px-4 py-3">Employee</th>
//               <th className="px-4 py-3">Designation</th>
//               <th className="px-4 py-3">Department</th>
//               <th className="px-4 py-3">Email</th>
//               <th className="px-4 py-3">Phone</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 text-nowrap">
//             {filteredEmployees.map((employee) => (
//               <tr key={employee.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-3 flex items-center space-x-3">
//                   <img
//                     src={employee.image}
//                     className="w-8 h-8 rounded-full"
//                     alt={employee.name}
//                   />
//                   <div>
//                     <div className="font-medium text-gray-900">
//                       {employee.name}
//                     </div>
//                     <div className="text-sm text-gray-500">#{employee.id}</div>
//                   </div>
//                 </td>
//                 <td className="px-4 py-3 text-sm">{employee.designation}</td>
//                 <td className="px-4 py-3 text-sm">{employee.department}</td>
//                 <td className="px-4 py-3 text-sm">{employee.email}</td>
//                 <td className="px-4 py-3 text-sm">{employee.phone}</td>
//                 <td className="px-4 py-3">
//                   <span className="px-2 py-1 text-sm text-green-800 bg-green-100 rounded-full">
//                     {employee.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3 flex space-x-2">
//                   <button
//                     onClick={() => handleEditEmployee(employee)}
//                     className="text-blue-600 hover:text-blue-800"
//                   >
//                     <FaPenToSquare />
//                   </button>
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => handleDeleteEmployee(employee.id)}
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="flex justify-between items-center p-4 border-t mt-4">
//           <div className="text-sm text-gray-600">
//             Showing 1 to {employees.length} of {employees.length} entries
//           </div>
//           <div className="flex space-x-2">
//             <button className="px-3 py-1 border border-gray-200 rounded-md disabled:opacity-50">
//               Previous
//             </button>
//             <button className="px-3 py-1 border border-gray-200 rounded-md bg-blue-600 text-white">
//               1
//             </button>
//             <button className="px-3 py-1 border border-gray-200 rounded-md disabled:opacity-50">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ icon, title, count, color }) => (
//   <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
//     <div className={`p-4 rounded-full text-white ${color}`}>{icon}</div>
//     <div>
//       <p className="text-gray-500 text-sm">{title}</p>
//       <h2 className="text-xl font-bold">{count}</h2>
//     </div>
//   </div>
// );

// export default EmployeeGrid;

import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import {
  FaPlus,
  FaFilter,
  FaDownload,
  FaPenToSquare,
  FaTrash,
  FaUser,
  FaXmark,
} from "react-icons/fa6";
import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaUserPlus,
  FaBars,
  FaTh,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const departments = [
  "IT Department",
  "HR Department",
  "Finance Department",
  "Marketing Department",
];
const designations = [
  "Senior Developer",
  "HR Manager",
  "Marketing Specialist",
  "Finance Manager",
];

const employee = [
  {
    id: "EMP001",
    name: "John Doe",
    role: "Software Developer",
    designation: "Senior Developer",
    projects: 20,
    done: 13,
    progress: 7,
    productivity: 65,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "purple",
    department: "IT Department",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    status: "Active",
    // image: "https://randomuser.me/api/portraits/men/1.jpg",
    dateOfJoin: "2023-01-01",
  },
  {
    id: "EMP002",
    name: "Harvey Smith",
    role: "Developer",
    projects: 25,
    done: 7,
    progress: 18,
    productivity: 20,
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    color: "red",
    designation: "HR Manager",
    department: "HR Department",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    status: "Active",
    dateOfJoin: "2023-02-01",
  },
  {
    id: "EMP003",
    name: "Jane Smith",
    role: "Developer",
    projects: 30,
    done: 10,
    progress: 20,
    productivity: 30,
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    color: "yellow",
    designation: "HR Manager",
    department: "HR Department",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    status: "Active",
    dateOfJoin: "2023-02-01",
  },
  {
    id: "EMP004",
    name: "Stephan Peralt",
    role: "Software Developer",
    projects: 15,
    done: 13,
    progress: 2,
    productivity: 90,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    color: "green",
    designation: "HR Manager",
    department: "HR Department",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    status: "Active",
    dateOfJoin: "2023-02-01",
  },
];

const EmployeeGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState(employee);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState("list");

  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    designation: designations[0],
    department: departments[0],
    status: "Active",
    dateOfJoin: "",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSaveEmployee = (e) => {
    e.preventDefault();
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingEmployee.id
            ? { ...newEmployee, id: editingEmployee.id }
            : emp
        )
      );
      setEditingEmployee(null);
    } else {
      setEmployees([
        ...employees,
        { ...newEmployee, id: `EMP00${employees.length + 1}` },
      ]);
    }
    setIsModalOpen(false);
    setNewEmployee({
      id: "",
      name: "",
      email: "",
      phone: "",
      designation: designations[0],
      department: departments[0],
      status: "Active",
      dateOfJoin: "",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    });
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleEditEmployee = (employee) => {
    setNewEmployee(employee);
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-gray-50 font-sans flex flex-col items-center p-6">
      <div className="w-full bg-white rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Employee Grid
            </h1>
            <p className="text-gray-500 text-sm">Employee &gt; Employee Grid</p>
          </div>
          <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-0 flex-wrap">
            <Link to={"/employeelist"}>
              <button
                className={`p-2 ${
                  activeButton === "grid"
                    ? "bg-orange-600 text-white"
                    : "bg-white border"
                } rounded-lg hover:bg-orange-600`}
                onClick={() => setActiveButton("grid")}
              >
                <FaBars />
              </button>
            </Link>

            <Link>
              <button
                className={`p-2 ${
                  activeButton === "list"
                    ? "bg-orange-600 text-white"
                    : "bg-white border"
                } rounded-lg hover:bg-orange-600`}
                onClick={() => setActiveButton("list")}
              >
                <FaTh />
              </button>
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-gray-800 text-white rounded-md flex items-center hover:bg-black"
            >
              <FaPlus className="mr-2" /> Add Employee
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<FaUsers />}
            title="Total..."
            count="1007"
            color="bg-black"
          />
          <StatCard
            icon={<FaUserCheck />}
            title="Active"
            count="1007"
            color="bg-green-500"
          />
          <StatCard
            icon={<FaUserTimes />}
            title="Inactive"
            count="1007"
            color="bg-red-500"
          />
          <StatCard
            icon={<FaUserPlus />}
            title="New..."
            count="67"
            color="bg-blue-500"
          />
        </div>

        <div className="flex justify-between items-center mb-4 mt-3">
          <div className="relative w-64 mb-4 z-0">
            <input
              type="text"
              placeholder="Search employees..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center">
              <FaFilter className="mr-2" /> Filter
            </button>
            <button className="px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center">
              <FaDownload className="mr-2" /> Export
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                <FaXmark size={20} />
              </button>
              <h2 className="text-xl font-semibold mb-4">
                {editingEmployee ? "Edit Employee" : "Add Employee"}
              </h2>
              <form className="space-y-4" onSubmit={handleSaveEmployee}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-2 border rounded"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded"
                    value={newEmployee.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <select
                    name="department"
                    className="w-full p-2 border rounded"
                    value={newEmployee.department}
                    onChange={handleInputChange}
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  <select
                    name="designation"
                    className="w-full p-2 border rounded"
                    value={newEmployee.designation}
                    onChange={handleInputChange}
                  >
                    {designations.map((desg) => (
                      <option key={desg} value={desg}>
                        {desg}
                      </option>
                    ))}
                  </select>
                  <input
                    type="date"
                    name="dateOfJoin"
                    className="w-full p-2 border rounded"
                    value={newEmployee.dateOfJoin}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Employee ID"
                    value={newEmployee.id}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaUser className="text-3xl text-gray-400" />
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 border rounded hover:bg-gray-50"
                  >
                    Upload Photo
                  </button>
                </div>
                <textarea
                  rows="4"
                  placeholder="Additional Information"
                  className="w-full p-2 border rounded"
                ></textarea>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {editingEmployee ? "Update Employee" : "Save Employee"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="absolute top-4 left-4 w-5 h-5 text-blue-600 border-gray-300 rounded"
              />

              {/* Three-dot menu */}
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <FaEllipsisV />
              </button>

              {/* Profile Picture */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-20 h-20 rounded-full border-4 border-gray-200 object-cover"
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-white border-2 rounded-full"></span>
                </div>
              </div>

              {/* Employee Name & Role */}
              <div className="text-center mt-3">
                <h3 className="text-lg font-semibold">{employee.name}</h3>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
                  {employee.role}
                </span>
              </div>

              {/* Stats */}
              <div className="mt-4 text-center text-gray-700 text-sm">
                <div className="flex justify-around">
                  <div>
                    <p className="font-bold">{employee.projects}</p>
                    <p>Projects</p>
                  </div>
                  <div>
                    <p className="font-bold">{employee.done}</p>
                    <p>Done</p>
                  </div>
                  <div>
                    <p className="font-bold">{employee.progress}</p>
                    <p>Progress</p>
                  </div>
                </div>
              </div>

              {/* Productivity */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 font-medium">
                  Productivity:{" "}
                  <span className="font-bold">{employee.productivity}%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className={`h-2 rounded-full bg-${employee.color}-500`}
                    style={{ width: `${employee.productivity}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center p-4 border-t mt-4">
          <div className="text-sm text-gray-600">
            Showing 1 to {employees.length} of {employees.length} entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-200 rounded-md disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-200 rounded-md bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 border border-gray-200 rounded-md disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, count, color }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
    <div className={`p-4 rounded-full text-white ${color}`}>{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-xl font-bold">{count}</h2>
    </div>
  </div>
);

export default EmployeeGrid;
