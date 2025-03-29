import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Summary = () => {
  return (
    <div className="bg-gray-50 font-sans flex h-screen">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold">Help Desk</h1>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-minus"></i>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-blue-50 text-custom">
              <i className="fas fa-chart-pie w-5 h-5 mr-2"></i>
              Summary
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
              <i className="fas fa-chart-bar w-5 h-5 mr-2"></i>
              Analyze
            </a>
          </div>
        </nav>
      </aside> */}

      {/* Main Content */}
      <main className="container ">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Summary</h1>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-question-circle text-lg"></i>
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Boxes */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            {["ALL OPEN TICKETS", "TICKETS CLOSED", "TIME TO FIRST REPLY", "TIME TO CLOSE", "CES"].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-sm text-gray-600 mb-2">{item}</div>
                <div className="text-2xl font-semibold">0</div>
              </div>
            ))}
          </div>

          {/* Team Availability & SLA Progress */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold">Team Availability</h2>
              <div className="space-y-4 mt-4">
                {[
                  { name: "John Doe", tickets: 27 },
                  { name: "Seif Ashraf", tickets: 5 },
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">Assigned: {user.tickets} tickets</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-600">Available</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold">SLA Progress</h2>
              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-2">Current SLA status</div>
                <div className="text-3xl font-semibold">0% <span className="text-sm text-gray-500">on target</span></div>
              </div>
            </div>
          </div>

          {/* Today's Tickets by Channel */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 mt-8">
            <h2 className="text-lg font-semibold mb-6">Today's tickets by channel</h2>
            <table className="w-full">
              <thead>
                <tr className="text-sm text-gray-600">
                  <th className="text-left font-medium pb-4">Channel</th>
                  <th className="text-right font-medium pb-4">Today's tickets</th>
                  <th className="text-right font-medium pb-4">All open tickets</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { icon: "comments", label: "Live chat" },
                  { icon: "envelope", label: "Email" },
                  { icon: "file-alt", label: "Forms" },
                  { icon: "phone", label: "Calling" },
                ].map((channel, index) => (
                  <tr key={index}>
                    <td className="py-3 flex items-center">
                      <i className={`fas fa-${channel.icon} text-gray-400 mr-2`}></i>
                      {channel.label}
                    </td>
                    <td className="text-right">0</td>
                    <td className="text-right">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Summary;
