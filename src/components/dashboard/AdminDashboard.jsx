import React from "react";
import { Calendar, FileText, ChevronDown } from "lucide-react";
import AddProjectModal from "../../components/dashboard/AddProjectModal"; // Import Modal

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex max-w-full min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-4 flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="text-gray-400">🏠</span> Dashboard /
          </span>
          <span className="text-black font-semibold">Admin Dashboard</span>
        </div>

        {/* Header */}
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Admin"
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2">
                Welcome Back, Adrian
                <span className="text-gray-400 cursor-pointer">🔗</span>
              </h2>
              <p className="text-gray-500 text-sm">
                You have{" "}
                <span className="text-orange-500 font-semibold">21</span>{" "}
                Pending Approvals &{" "}
                <span className="text-orange-500 font-semibold">14</span> Leave
                Requests
              </p>
            </div>
          </div>

          {/* Right Section (Buttons Aligned Properly) */}
          <div className="flex flex-col items-end gap-3 mt-4 md:mt-0">
            {/* Export & Year Picker Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                <FileText size={16} /> Export <ChevronDown size={16} />
              </button>

              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                <Calendar size={16} /> 2025
              </button>

              <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Add Project & Add Requests Buttons Directly Below */}
            <div className="flex gap-3">
              {/* <button className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-800">
                ➕ Add Project
              </button> */}

              <div>
                {/* Add Project Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  + Add Project
                </button>

                {/* Render Modal */}
                <AddProjectModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-600">
                ➕ Add Requests
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;




