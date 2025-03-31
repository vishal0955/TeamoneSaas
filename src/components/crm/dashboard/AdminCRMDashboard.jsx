import React, { useLayoutEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js
import "./crmdashboard.css";

const AdminCRMDashboard = () => {
  const revenueChartRef = useRef(null);
  const salesChartRef = useRef(null);
  const trendChartRef = useRef(null);

  useLayoutEffect(() => {
    // Ensure the canvas elements have the correct height set before creating charts
    if (
      revenueChartRef.current &&
      salesChartRef.current &&
      trendChartRef.current
    ) {
      // Set canvas height for all charts to 200px
      revenueChartRef.current.style.height = "200px";
      salesChartRef.current.style.height = "200px";
      trendChartRef.current.style.height = "200px";
    }

    const revenueChart = new Chart(revenueChartRef.current, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Revenue",
            data: [350, 450, 100, 400, 500, 300, 250],
            backgroundColor: "#2e31b9",
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Maintain aspect ratio
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              borderDash: [2, 2],
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    const salesChart = new Chart(salesChartRef.current, {
      type: "doughnut", // Doughnut chart (circle chart)
      data: {
        labels: ["Branch 1", "Branch 2", "Branch 3"],
        datasets: [
          {
            data: [30, 40, 30],
            backgroundColor: ["#2e31b9", "#51cef8", "#47adb4"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Maintain aspect ratio
        plugins: {
          legend: {
            position: "right",
          },
        },
        cutout: "70%", // Control the "hole" size in the middle of the doughnut
      },
    });

    const trendChart = new Chart(trendChartRef.current, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Online Payment",
            data: [150, 200, 250, 200, 250, 200],
            borderColor: "#4e73df",
            backgroundColor: "rgba(78, 115, 223, 0.1)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Offline Sales",
            data: [100, 150, 200, 150, 200, 250],
            borderColor: "#1cc88a",
            backgroundColor: "rgba(28, 200, 138, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Maintain aspect ratio
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              borderDash: [2, 2],
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      revenueChart.destroy();
      salesChart.destroy();
      trendChart.destroy();
    };
  }, []);

  return (
    <div className="container bg-light p-4">
      <h1 className="mb-3">CRM Dashboard</h1>
      {/* Stats Section */}
      <div className="inv-stats-grid">
        <div className="inv-stat-box">
          <div className="inv-stat-content">
            <div className="inv-stat-icon inv-stat-icon-primary">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div>
              <div className="inv-stat-label">Number of sales</div>
              <p className="inv-stat-value">2431</p>
            </div>
          </div>
        </div>
        <div className="inv-stat-box">
          <div className="inv-stat-content">
            <div className="inv-stat-icon inv-stat-icon-warning">
              <i class="fa-solid fa-money-bill-trend-up"></i>
            </div>
            <div>
              <div className="inv-stat-label">Sales Revenue</div>
              <p className="inv-stat-value">$24,403</p>
            </div>
          </div>
        </div>
        <div className="inv-stat-box">
          <div className="inv-stat-content">
            <div className="inv-stat-icon inv-stat-icon-neutral">
              <i class="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <div>
              <div className="inv-stat-label">Average Price</div>
              <p className="inv-stat-value">$2431</p>
            </div>
          </div>
        </div>
        <div className="inv-stat-box">
          <div className="inv-stat-content">
            <div className="inv-stat-icon inv-stat-icon-danger">
              <i class="fa-solid fa-users"></i>
            </div>
            <div>
              <div className="inv-stat-label">Total Customers</div>
              <p className="inv-stat-value">64732</p>
            </div>
          </div>
        </div>
      </div>
      {/* Charts Row */}
      <div className="row g-4">
        <div className="col-md-6">
          <div
            className="chart-card shadow-sm p-3 rounded-3"
            style={{ height: "500px" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="m-0">Revenue Analytics</h5>
              <div className="dropdown">
                <button
                  className="btn inv-filter-button w-auto d-flex justify-content-between align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <span>This Month</span>
                  <i className="bi bi-chevron-down" />
                </button>
                <ul className="dropdown-menu w-100">
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <canvas
              ref={revenueChartRef}
              className="chart-canvas"
              style={{ height: "200px", width: "100%" }} // Set height for the chart
            />
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="chart-card shadow-sm p-3 rounded-3"
            style={{ height: "500px" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="m-0">Sales Analytics</h5>
              <div className="dropdown">
                <button
                  className="btn inv-filter-button w-auto d-flex justify-content-between align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <span>This Month</span>
                  <i className="bi bi-chevron-down" />
                </button>
                <ul className="dropdown-menu w-100">
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <canvas
              ref={salesChartRef}
              className="chart-canvas"
              style={{
                height: "200px",
                width: "100%",
                position: "relative",
                left: "90px",
              }} // Set height for the chart
            />
          </div>
        </div>
        <div className="col-md-8 col-12">
          <div
            className="chart-card shadow-sm p-3 rounded-3"
            style={{ height: "500px", width: "809px" }}
          >
            <h5 className="mb-3">Sales Trend</h5>
            <canvas
              ref={trendChartRef}
              className="chart-canvas"
              style={{ height: "300px", width: "100%" }} // Set height for the chart
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="chart-card shadow-sm p-3 rounded-3">
            <h5 className="mb-3">Top Performer</h5>
            <div className="performer-item d-flex align-items-center mb-3 border-bottom">
              <img
                src="https://i.ibb.co/99s1Tczy/user-11.jpg"
                className="rounded-circle me-3"
                width={40}
              />
              <div>
                <h6 className="mb-0">Isabella Becker</h6>
                <small className="text-muted">isabellabecker@gmail.com</small>
              </div>
            </div>
            <div className="performer-item d-flex align-items-center border-bottom">
              <img
                src="https://i.ibb.co/PZn720Jx/Ellipse-5-6.png"
                className="rounded-circle me-3"
                width={40}
              />
              <div>
                <h6 className="mb-0">John Doe</h6>
                <small className="text-muted">john@gmail.com</small>
              </div>
            </div>
            <div className="performer-item d-flex align-items-center border-bottom">
              <img
                src="https://i.ibb.co/vCJC86Jw/Ellipse-5-3.png"
                className="rounded-circle me-3"
                width={40}
              />
              <div>
                <h6 className="mb-0">Alex Joshi</h6>
                <small className="text-muted">alex00123@gmail.com</small>
              </div>
            </div>
            <div className="performer-item d-flex align-items-center border-bottom">
              <img
                src="https://i.ibb.co/tf61ZY9/Ellipse-5-5.png"
                className="rounded-circle me-3"
                width={40}
              />
              <div>
                <h6 className="mb-0">Jane Smith</h6>
                <small className="text-muted">jane@gmail.com</small>
              </div>
            </div>
            <div className="performer-item d-flex align-items-center border-bottom">
              <img
                src="https://i.ibb.co/S4snbKKb/Ellipse-5-2.png"
                className="rounded-circle me-3"
                width={40}
              />
              <div>
                <h6 className="mb-0">Michael Johnson</h6>
                <small className="text-muted">michael@gmail.com</small>
              </div>
            </div>
            <div className="performer-item d-flex align-items-center border-bottom">
              <img
                src="https://i.ibb.co/bM3TbY82/Ellipse-5-1.png"
                className="rounded-circle me-3"
                width={40}
              />
              <div>
                <h6 className="mb-0">William Brown</h6>
                <small className="text-muted">william@gmail.com</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCRMDashboard;
