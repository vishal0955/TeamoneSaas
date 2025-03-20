import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Crm.css';

const Analytics = () => {
  const dealsChartRef = useRef(null);
  const hotDealsChartRef = useRef(null);
  const leadsSourceChartRef = useRef(null);
  
  useEffect(() => {
    // Deals by Stage Chart
    const dealsChart = new Chart(dealsChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Closed Deals',
          data: [65, 45, 75, 55],
          backgroundColor: '#2563eb'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: '#e5e7eb'
            },
            ticks: {
              color: '#6b7280'
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#6b7280'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#374151',
              font: {
                size: 14
              }
            }
          }
        }
      }
    });

    // Hot Deals Chart
    const hotDealsChart = new Chart(hotDealsChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Won', 'Lost', 'Pending'],
        datasets: [{
          data: [45, 25, 30],
          backgroundColor: ['#34d399', '#dc3545', '#fbbf24']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#374151',
              font: {
                size: 14
              },
              padding: 16
            }
          }
        }
      }
    });

    // Leads Source Chart
    const leadsSourceChart = new Chart(leadsSourceChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Website', 'Referral', 'Social'],
        datasets: [{
          data: [40, 35, 25],
          backgroundColor: ['#818cf8', '#34d399', '#fbbf24']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#374151',
              font: {
                size: 14
              },
              padding: 16
            }
          }
        }
      }
    });

    // Cleanup function to destroy charts when component unmounts
    return () => {
      dealsChart.destroy();
      hotDealsChart.destroy();
      leadsSourceChart.destroy();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container py-4">
      <h4 className='mb-4 fw-bold'>Analytics</h4>
      <div className="row g-4">
        {/* Monthly Contact Growth */}
        <div className="col-lg-8">
          <div className="dashboard-card">
            <div className="card-title">
              <span>Deals by Stage</span>
              <div className="btn-group">
                <button className="btn btn-sm btn-outline-secondary">Week</button>
                <button className="btn btn-sm btn-outline-secondary active">Month</button>
                <button className="btn btn-sm btn-outline-secondary">Year</button>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-wrapper">
                <canvas ref={dealsChartRef} />
              </div>
            </div>
          </div>
        </div>

        {/* Hot Deals */}
        <div className="col-lg-4">
          <div className="dashboard-card">
            <div className="card-title">Hot Deals</div>
            <div className="chart-container">
              <div className="chart-wrapper">
                <canvas ref={hotDealsChartRef} />
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Valued Contacts */}
        <div className="col-lg-4">
          <div className="dashboard-card">
            <div className="card-title">
              <span>Monthly Valued Contacts</span>
              <i className="bi bi-three-dots" />
            </div>
            <div className="contact-list">
              <div className="contact-item">
                <div className="avatar">PK</div>
                <div className="contact-info">
                  <div className="contact-name">Peter Kim</div>
                  <div className="contact-email">peter@example.com</div>
                </div>
                <div className="contact-value">$12,450</div>
              </div>
              <div className="contact-item">
                <div className="avatar">JS</div>
                <div className="contact-info">
                  <div className="contact-name">Jane Smith</div>
                  <div className="contact-email">jane@example.com</div>
                </div>
                <div className="contact-value">$10,200</div>
              </div>
              <div className="contact-item">
                <div className="avatar">RJ</div>
                <div className="contact-info">
                  <div className="contact-name">Robert Johnson</div>
                  <div className="contact-email">robert@example.com</div>
                </div>
                <div className="contact-value">$8,750</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="col-lg-4">
          <div className="dashboard-card">
            <div className="card-title">
              <span>Recent Activities</span>
              <i className="bi bi-three-dots" />
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="bi bi-telephone" />
                </div>
                <div className="activity-text">Call scheduled with new prospect</div>
                <div className="activity-time">2h ago</div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="bi bi-envelope" />
                </div>
                <div className="activity-text">Sent proposal to client</div>
                <div className="activity-time">5h ago</div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="bi bi-check-circle" />
                </div>
                <div className="activity-text">Deal closed with ABC Corp</div>
                <div className="activity-time">1d ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leads by Source */}
        <div className="col-lg-4">
          <div className="dashboard-card">
            <div className="card-title">
              <span>Leads by Source</span>
              <i className="bi bi-three-dots" />
            </div>
            <div className="chart-container chart-sm">
              <div className="chart-wrapper">
                <canvas ref={leadsSourceChartRef} />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="col-lg-12">
          <div className="dashboard-card">
            <div className="card-title">
              <span>Recent Leads</span>
              <button className="btn btn-sm btn-outline-primary">View All</button>
            </div>
            <div className="table-responsive">
              <table className="table leads-table">
                <thead>
                  <tr>
                    <th>Lead</th>
                    <th>Email</th>
                    <th>Value</th>
                    <th>Status</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Michael Brown</td>
                    <td>michael@example.com</td>
                    <td>$5,000</td>
                    <td>
                      <span className="status-badge status-new">New</span>
                    </td>
                    <td>Dec 18, 2023</td>
                  </tr>
                  <tr>
                    <td>Sarah Wilson</td>
                    <td>sarah@example.com</td>
                    <td>$8,500</td>
                    <td>
                      <span className="status-badge status-progress">In Progress</span>
                    </td>
                    <td>Dec 17, 2023</td>
                  </tr>
                  <tr>
                    <td>David Clark</td>
                    <td>david@example.com</td>
                    <td>$12,000</td>
                    <td>
                      <span className="status-badge status-closed">Closed</span>
                    </td>
                    <td>Dec 16, 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
