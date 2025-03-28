import React from "react";

const InventoryCalendar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-[Inter]">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              
              <span className="ml-3 text-lg font-semibold text-gray-900">
                Inventory Calendar
              </span>
            </div>
            <div className="flex items-center">
              <button className="!rounded-button bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                <i className="fas fa-cog text-gray-600"></i>
              </button>
              <div className="ml-3 relative">
                <button className="!rounded-button flex items-center bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                  <i className="fas fa-user text-gray-600"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="py-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <i className="fas fa-calendar text-gray-600 mr-2"></i>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom"
                />
                <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {['Subscribe', 'Today', 'Day', 'Week', 'Month'].map((text, index) => (
                <button
                  key={index}
                  className={`!rounded-button px-4 py-2 text-sm border rounded-md ${text === 'Month' ? 'bg-custom text-white' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InventoryCalendar;
