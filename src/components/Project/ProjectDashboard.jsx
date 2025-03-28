import React, { useEffect } from "react";
import * as echarts from "echarts";

const Dashboard = () => {
  useEffect(() => {
    const pieChart = echarts.init(document.getElementById("pieChart"));
    const barChart = echarts.init(document.getElementById("barChart"));

    const pieOption = {
      animation: false,
      tooltip: { trigger: "item" },
      legend: { orient: "vertical", right: 10, top: "center" },
      series: [
        {
          type: "pie",
          radius: "70%",
          label: { show: false },
          data: [
            { value: 35, name: "John Doe" },
            { value: 30, name: "Jane Smith" },
            { value: 25, name: "Mike Johnson" },
            { value: 20, name: "Sarah Williams" },
            { value: 15, name: "Tom Brown" },
          ],
        },
      ],
    };

    const barOption = {
      animation: false,
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["John Doe", "Jane Smith", "Mike Johnson", "Sarah Williams", "Tom Brown"] },
      yAxis: { type: "value" },
      series: [{ data: [15, 12, 8, 6, 4], type: "bar" }],
    };

    pieChart.setOption(pieOption);
    barChart.setOption(barOption);

    window.addEventListener("resize", () => {
      pieChart.resize();
      barChart.resize();
    });

    return () => {
      window.removeEventListener("resize", () => {
        pieChart.resize();
        barChart.resize();
      });
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            
            <div className="flex items-center">
              <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium">
                <i className="fas fa-plus mr-2"></i>New Task
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tracking Dashboard</h1>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
          <StatusCard title="Unassigned" count="111" icon="fas fa-inbox" bgColor="bg-blue-100" iconColor="text-blue-600" />
          <StatusCard title="In Progress" count="33" icon="fas fa-spinner" bgColor="bg-yellow-100" iconColor="text-yellow-600" />
          <StatusCard title="Completed" count="157" icon="fas fa-check" bgColor="bg-green-100" iconColor="text-green-600" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Total Tasks by Assignee</h3>
            <div id="pieChart" style={{ height: "400px" }}></div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Open Tasks by Assignee</h3>
            <div id="barChart" style={{ height: "400px" }}></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

// StatusCard Component
const StatusCard = ({ title, count, icon, bgColor, iconColor }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${bgColor} rounded-md p-3`}>
            <i className={`${icon} ${iconColor} text-xl`}></i>
          </div>
          <div className="ml-5">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <div className="mt-1 text-3xl font-semibold text-gray-900">{count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
