import React from "react";

const ProjectDetails = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navbar */}


      {/* Main Content */}
      <main className="flex-1 py-6">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">E-Commerce Platform Redesign</h1>
            <button className="bg-custom px-4 py-2 text-white font-medium hover:bg-custom/90 rounded-md">
              New Task
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Project Details */}
            <div className="col-span-2 bg-gray-50 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Project Details</h2>
              <p className="text-gray-600 mb-4">
                Complete redesign of the e-commerce platform including user interface improvements, checkout process optimization, and mobile responsiveness implementation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
                  <p className="text-gray-900">Jan 15, 2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
                  <p className="text-gray-900">Mar 30, 2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    In Progress
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Priority</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    High
                  </span>
                </div>
              </div>
            </div>

            {/* Custom Fields */}
            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Custom Fields</h2>
              {[
                { label: "Contact Name", value: "John Anderson" },
                { label: "Contact Email", value: "john.anderson@example.com" },
                { label: "Contact Phone", value: "+1 (555) 123-4567" },
                { label: "Organization", value: "Tech Solutions Inc." }
              ].map((field, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom sm:text-sm" value={field.value} readOnly />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
