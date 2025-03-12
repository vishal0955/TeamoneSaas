// import React from "react";
// import { Calendar, FileText, ChevronDown } from "lucide-react";
// import Sidebar from "../../layout/Sidebar" // Ensure Sidebar is correctly imported

// const AdminDashboard = () => {
//   return (
//     <div className="flex">
  
//       {/* Main Content */}
//       <div className="flex-1 p-6 bg-gray-100 min-h-screen">
//         {/* Breadcrumb */}
//         <div className="text-gray-500 text-sm mb-4">
//           <span>Dashboard / </span>
//           <span className="text-black font-semibold">Admin Dashboard</span>
//         </div>

//         {/* Header */}
//         <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
//           {/* Left Section */}
//           <div className="flex items-center gap-4">
//             <img
//               src="https://randomuser.me/api/portraits/men/45.jpg"
//               alt="Admin"
//               className="w-12 h-12 rounded-full border border-gray-300"
//             />
//             <div>
//               <h2 className="text-lg font-semibold">Welcome Back, Adrian</h2>
//               <p className="text-gray-500 text-sm">
//                 You have <span className="text-red-600 font-semibold">21</span>{" "}
//                 Pending Approvals &{" "}
//                 <span className="text-red-600 font-semibold">14</span> Leave
//                 Requests
//               </p>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-3">
//             {/* Export Button */}
//             <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
//               <FileText size={16} /> Export <ChevronDown size={16} />
//             </button>

//             {/* Year Picker */}
//             <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
//               <Calendar size={16} /> 2025
//             </button>

//             {/* Dropdown Button */}
//             <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
//               <ChevronDown size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-4 flex gap-3">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//             + Add Project
//           </button>
//           <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
//             + Add Requests
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React from "react";
import { Calendar, FileText, ChevronDown } from "lucide-react";


const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-4">
          <span>Dashboard / </span>
          <span className="text-black font-semibold">Admin Dashboard</span>
        </div>

        {/* Header */}
        <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Admin"
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div>
              <h2 className="text-lg font-semibold">Welcome Back, Adrian</h2>
              <p className="text-gray-500 text-sm">
                You have <span className="text-red-600 font-semibold">21</span>{" "}
                Pending Approvals &{" "}
                <span className="text-red-600 font-semibold">14</span> Leave
                Requests
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Export Button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              <FileText size={16} /> Export <ChevronDown size={16} />
            </button>

            {/* Year Picker */}
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
              <Calendar size={16} /> 2025
            </button>

            {/* Dropdown Button */}
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            + Add Project
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            + Add Requests
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
