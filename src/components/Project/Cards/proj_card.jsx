import React from "react";

const ProjectCard= () => {
  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Nav Links */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-custom text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Projects
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Tasks
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Calendar
                </a>
              </div>
            </div>

            {/* User Controls */}
            <div className="flex items-center">
              <button type="button" className="p-2 rounded-full text-gray-400 hover:text-gray-500">
                <span className="fas fa-bell"></span>
              </button>
              <button type="button" className="ml-3 p-2 rounded-full text-gray-400 hover:text-gray-500">
                <span className="fas fa-cog"></span>
              </button>
              <div className="ml-3 relative">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="fas fa-user text-gray-500"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 relative">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-4">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500">My Projects</a>
                    </li>
                  </ol>
                </nav>

                <div className="mt-4">
                  <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
                </div>
              </div>

              {/* New Project Form */}
              <div className="bg-white rounded-lg shadow mb-8">
                <div className="px-6 py-5 border-b border-gray-200 bg-green-50">
                  <h3 className="text-lg font-medium text-green-800">🚀 NEW PROJECT 🎉</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-custom focus:ring-custom sm:text-sm" placeholder="Enter project name"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Client Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3  focus:border-custom focus:ring-custom sm:text-sm" defaultValue="Acme Corporation"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Goal</label>
                    <textarea rows="3" className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-custom focus:ring-custom sm:text-sm">
                      Redesign the company website to improve user experience and increase conversion rates.
                    </textarea>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-white rounded-lg shadow">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex">
                    <a href="#" className="border-custom text-custom w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm">
                      Details
                    </a>
                  </nav>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Status</label>
                      <select className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-custom focus:ring-custom sm:text-sm">
                        <option>Planning</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Priority</label>
                      <select className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-custom focus:ring-custom sm:text-sm">
                        <option>Normal</option>
                        <option>High</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">Comments</label>
                    <div className="mt-2">
                      <textarea rows="3" className="block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-custom focus:ring-custom sm:text-sm" placeholder="Add a comment..."></textarea>
                      <div className="mt-3 flex justify-end">
                        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-custom hover:bg-custom focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar (Activity Feed) */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow">
                <div className="px-4 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Activity</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectCard;
