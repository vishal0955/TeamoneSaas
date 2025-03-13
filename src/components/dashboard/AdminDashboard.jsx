import React, { useEffect } from "react";
import * as echarts from "echarts";

const AdminDashboard = () => {
  useEffect(() => {
    const charts = [];

    const initChart = (id, options) => {
      const el = document.getElementById(id);
      if (el) {
        const chart = echarts.init(el);
        chart.setOption(options);
        charts.push(chart);
      }
    };

    initChart("employeeDistribution", {
      animation: false,
      tooltip: { trigger: "item" },
      legend: { orient: "vertical", right: 10, top: "center" },
      series: [
        {
          name: "Department",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 10, borderColor: "#fff", borderWidth: 2 },
          label: { show: false, position: "center" },
          emphasis: {
            label: { show: true, fontSize: "20", fontWeight: "bold" },
          },
          labelLine: { show: false },
          data: [
            { value: 735, name: "Engineering" },
            { value: 580, name: "Sales" },
            { value: 484, name: "Marketing" },
            { value: 300, name: "Operations" },
            { value: 235, name: "HR" },
          ],
        },
      ],
    });

    const handleResize = () => charts.forEach((chart) => chart.resize());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      charts.forEach((chart) => chart.dispose());
    };
  }, []);

  return (
    <div className="flex-1 max-w-full  overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-full ">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              title: "Total Employees",
              value: "2,420",
              icon: "fas fa-users",
              bg: "bg-indigo-100",
              textColor: "text-indigo-600",
            },
            {
              title: "Active Projects",
              value: "45",
              icon: "fas fa-project-diagram",
              bg: "bg-green-100",
              textColor: "text-green-600",
            },
            {
              title: "Monthly Payroll",
              value: "$840.2K",
              icon: "fas fa-dollar-sign",
              bg: "bg-yellow-100",
              textColor: "text-yellow-600",
            },
            {
              title: "Attendance Rate",
              value: "96.8%",
              icon: "fas fa-clock",
              bg: "bg-red-100",
              textColor: "text-red-600",
            },
            {
              title: "Open Positions",
              value: "24",
              icon: "fas fa-file-invoice",
              bg: "bg-purple-100",
              textColor: "text-purple-600",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`flex-shrink-0 ${item.bg} rounded-lg p-3`}>
                  <i className={`${item.icon} ${item.textColor} text-xl`}></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-semibold text-gray-700">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Employee Distribution
            </h3>
            <div id="employeeDistribution" className="h-80"></div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Monthly Hiring Trends
            </h3>
            <div id="hiringTrends" className="h-80"></div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recruitment Pipeline
            </h3>
            <div id="recruitmentPipeline" className="h-80"></div>
          </div>
                  
        </div>

        {/* Recent Activities Table */}
        <div className="mt-6 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Activities
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["Activity", "Person", "Department", "Date", "Status"].map(
                    (header, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    New employee onboarding
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Sarah Johnson
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Engineering
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Jan 15, 2024
                  </td>
                  <td className="px-6 py-4 text-sm text-green-600">
                    Completed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
                  
        </div>
      </div>
    // </div>
  );
};

export default AdminDashboard;
