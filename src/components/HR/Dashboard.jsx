import React from "react";

const HRDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-8xl mx-auto">
        {/* Navbar */}
       

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Left Section */}
          <div className="flex-1">
            {/* Statistics Section */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-4">
                {["To do's", "Performance", "Recruitment", "HR"].map(
                  (title, index) => (
                    <div key={index} className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <div className="text-2xl font-semibold text-custom">
                        {index < 2 ? 6 - index * 4 : 2}
                      </div>
                      <div className="text-sm text-gray-600">{title}</div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Cards Section */}
            <div className="flex gap-4 mb-8 overflow-x-auto">
              {[
                {
                  img: "1",
                  name: "Sarah Wilson",
                  title: "9th Anniversary!",
                  desc: "Are you ready for the biggest party of the year? Find exact dates here.",
                  time: "12 days ago",
                },
                {
                  img: "2",
                  name: "John Cooper",
                  title: "Team Updates",
                  desc: "New team structure announcement coming soon. Stay tuned!",
                  time: "2 days ago",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white text-gray-900 rounded-lg p-6 min-w-[300px] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={`https://i.pravatar.cc/40?img=${item.img}`}
                      className="rounded-full w-10 h-10"
                      alt="Avatar"
                    />
                    <div className="font-medium">{item.name}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                  <div className="text-xs opacity-75 mt-4">{item.time}</div>
                </div>
              ))}
            </div>

            {/* Tasks Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="divide-y divide-gray-200">
                {[
                  {
                    icon: "fa-file-alt",
                    task: "Legal action relating to implementation",
                    status: "Due in 1 day",
                    tag: "Training",
                    img: "3",
                    button: "Take action",
                  },
                  {
                    icon: "fa-comments",
                    task: "Pending feedback for 'Screen Call' interview",
                    status: "Due in 5 days",
                    tag: "Interview",
                    img: "4",
                    button: "Add feedback",
                  },
                ].map((item, index) => (
                  <div key={index} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <i className={`fas ${item.icon} text-gray-600`}></i>
                      </div>
                      <div>
                        <div className="font-medium">{item.task}</div>
                        <div className={`text-sm ${index === 0 ? "text-red-500" : "text-orange-500"}`}>{item.status}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{item.tag}</span>
                      <img
                        src={`https://i.pravatar.cc/32?img=${item.img}`}
                        className="rounded-full w-8 h-8"
                        alt="Avatar"
                      />
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded">
                        {item.button}
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-80">
            {/* Team Section */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 font-medium">In your team</h3>
                <a href="#" className="text-custom text-sm">
                  See all
                </a>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {["5", "6", "7"].map((img, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <img src={`https://i.pravatar.cc/40?img=${img}`} className="rounded-full w-10 h-10" alt="Avatar" />
                  </div>
                ))}
              </div>
            </div>

            {/* Favorites Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 font-medium">Favorites</h3>
                <button className="text-custom">
                  <i className="fas fa-pen"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
