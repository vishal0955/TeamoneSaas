// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { Calendar, FileText, ChevronDown } from "lucide-react";

// const AdminDashboard = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Breadcrumb */}
//       <div className="text-gray-500 text-sm mb-4">
//         <span>Dashboard / </span>
//         <span className="text-black font-semibold">Admin Dashboard</span>
//       </div>

//       {/* Header */}
//       <div className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between">
//         {/* Left Section */}
//         <div className="flex items-center gap-4">
//           <img
//             src="https://randomuser.me/api/portraits/men/45.jpg"
//             alt="Admin"
//             className="w-12 h-12 rounded-full border"
//           />
//           <div>
//             <h2 className="text-xl font-semibold">Welcome Back, Adrian</h2>
//             <p className="text-gray-500 text-sm">
//               You have <span className="text-red-500 font-semibold">21</span>{" "}
//               Pending Approvals &
//               <span className="text-red-500 font-semibold"> 14</span> Leave
//               Requests
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Export Dropdown */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline" className="flex items-center gap-2">
//                 <FileText size={16} /> Export <ChevronDown size={16} />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuItem>PDF</DropdownMenuItem>
//               <DropdownMenuItem>Excel</DropdownMenuItem>
//               <DropdownMenuItem>CSV</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Year Picker */}
//           <Button variant="outline" className="flex items-center gap-2">
//             <Calendar size={16} /> 2025
//           </Button>

//           {/* Action Button */}
//           <Button variant="destructive" className="px-4">
//             <ChevronDown size={16} />
//           </Button>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-4 flex gap-2">
//         <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//           + Add Project
//         </Button>
//         <Button className="bg-red-500 hover:bg-red-600 text-white">
//           + Add Requests
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React from "react";
// import { Calendar, FileText, ChevronDown } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      {/* Breadcrumb */}
      <div style={{ color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>
        <span>Dashboard / </span>
        <span style={{ color: "black", fontWeight: "600" }}>
          Admin Dashboard
        </span>
      </div>

      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          padding: "24px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Admin"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid #ddd",
            }}
          />
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
              Welcome Back, Adrian
            </h2>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              You have{" "}
              <span style={{ color: "#dc2626", fontWeight: "600" }}>21</span>{" "}
              Pending Approvals &
              <span style={{ color: "#dc2626", fontWeight: "600" }}> 14</span>{" "}
              Leave Requests
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Export Button */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <FileText size={16} /> Export <ChevronDown size={16} />
          </button>

          {/* Year Picker */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Calendar size={16} /> 2025
          </button>

          {/* Dropdown Button */}
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#dc2626",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
        <button
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          + Add Project
        </button>
        <button
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          + Add Requests
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
