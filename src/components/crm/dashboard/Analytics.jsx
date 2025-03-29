// import React from "react";
// import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { Button, Container, Row, Col, Dropdown } from "react-bootstrap";

// const forecastData = [
//   { month: "Oct 2024", pipeline: 50000, bestCase: 30000, commit: 20000, closedWon: 10000 },
//   { month: "Nov 2024", pipeline: 100000, bestCase: 70000, commit: 50000, closedWon: 20000 },
//   { month: "Dec 2024", pipeline: 200000, bestCase: 90000, commit: 80000, closedWon: 60000 },
// ];

// const revenueData = [
//   { name: "Ezzat Kiwan", revenue: 10000 },
//   { name: "Andrew Ashraf", revenue: 20000 },
//   { name: "John Doe", revenue: 300000 },
// ];

// const dealsCreatedData = [
//   { name: "Ezzat Kiwan", deals: 5 },
//   { name: "Unknown user", deals: 3 },
//   { name: "John Doe", deals: 28 },
// ];

// const dealClosedGoalData = [
//   { date: "25/11", closed: 10000, goal: 5000 },
//   { date: "30/11", closed: 20000, goal: 10000 },
//   { date: "5/12", closed: 30000, goal: 15000 },
//   { date: "10/12", closed: 40000, goal: 20000 },
//   { date: "15/12", closed: 50000, goal: 25000 },
//   { date: "20/12", closed: 60000, goal: 30000 },
// ];

// const Analytics = () => {
//   return (
//     <div className="container-fluid mt-4">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h4>Sales</h4>
//         <div>
//           <Button variant="outline-secondary" className="me-2">
//             Quick filters
//           </Button>
//           <Button variant="outline-secondary" className="me-2">
//             Advanced filters
//           </Button>
//           <Dropdown className="d-inline-block me-2">
//             <Dropdown.Toggle variant="light">Actions</Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item>Export</Dropdown.Item>
//               <Dropdown.Item>Refresh</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Button variant="dark">Add Report +</Button>
//         </div>
//       </div>

//       {/* Charts Grid */}
//       <Row>
//         {/* Forecast Won This Month */}
//         <Col lg={6} md={12} className="mb-4">
//           <div className="card p-3 shadow-sm">
//             <h5>Forecast Won This Month</h5>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={forecastData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pipeline" fill="#3b82f6" name="Pipeline" />
//                 <Bar dataKey="bestCase" fill="#22c55e" name="Best Case" />
//                 <Bar dataKey="commit" fill="#facc15" name="Commit" />
//                 <Bar dataKey="closedWon" fill="#ef4444" name="Closed Won" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </Col>

//         {/* Forecast Revenue This Month */}
//         <Col lg={6} md={12} className="mb-4">
//           <div className="card p-3 shadow-sm">
//             <h5>Forecast Revenue This Month</h5>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={revenueData} layout="vertical">
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis type="number" />
//                 <YAxis dataKey="name" type="category" />
//                 <Tooltip />
//                 <Bar dataKey="revenue" fill="#6366f1" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </Col>
//         </Row>


//  <Row>
//         {/* Deal Closed Totals vs. Goal */}
//         <Col lg={6} md={12} className="mb-4">
//           <div className="card p-3 shadow-sm">
//             <h5>Deal Closed Totals vs. Goal</h5>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={dealClosedGoalData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="goal" stroke="#3b82f6" name="Revenue Goal" />
//                 <Line type="monotone" dataKey="closed" stroke="#ef4444" name="Closed Amount" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </Col>

//         {/* Deals Created */}
//         <Col lg={6} md={12} className="mb-4">
//           <div className="card p-3 shadow-sm">
//             <h5>Deals Created</h5>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={dealsCreatedData} layout="vertical">
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis type="number" />
//                 <YAxis dataKey="name" type="category" />
//                 <Tooltip />
//                 <Bar dataKey="deals" fill="#f87171" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Analytics;

import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Oct 2024", pipeline: 10000, bestCase: 5000, commit: 7000, closed: 8000 },
  { name: "Nov 2024", pipeline: 20000, bestCase: 15000, commit: 12000, closed: 14000 },
  { name: "Dec 2024", pipeline: 40000, bestCase: 25000, commit: 22000, closed: 18000 },
];

const Analytics = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Sales</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Forecast Won This Month */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Forecast Won This Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pipeline" fill="#3b82f6" name="Pipeline" />
              <Bar dataKey="bestCase" fill="#22c55e" name="Best Case" />
              <Bar dataKey="commit" fill="#facc15" name="Commit" />
              <Bar dataKey="closed" fill="#ef4444" name="Closed Won" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Forecast Revenue This Month */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Forecast Revenue This Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pipeline" fill="#6366f1" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Deal Closed Totals vs Goal */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Deal Closed Totals vs. Goal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pipeline" stroke="#2563eb" name="Revenue Goal" />
              <Line type="monotone" dataKey="closed" stroke="#dc2626" name="Closed Amount" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Deals Created */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Deals Created</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart layout="vertical" data={data}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="pipeline" fill="#6366f1" name="Deals" />
              <Bar dataKey="closed" fill="#ef4444" name="Closed Deals" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

