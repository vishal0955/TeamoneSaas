import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const CRMDashboard = () => {
  const [activeMainTab, setActiveMainTab] = useState('summary');
  const [activeSideTab, setActiveSideTab] = useState('schedule');

  const stats = [
    { title: 'CALLS', value: 0, color: 'text-purple' },
    { title: 'EMAILS', value: 0, color: 'text-primary' },
    { title: 'TO-DOS', value: 2, color: 'text-success' },
    { title: 'LINKEDIN', value: 0, color: 'text-warning' },
    { title: 'OVERDUE', value: 173, color: 'text-danger' },
    { title: 'DUE TOMORROW', value: 0, color: 'text-secondary' }
  ];

  const schedule = [
    { time: '08:00', title: '2 to-do tasks' },
    { time: '11:00', title: 'Prospecting new business', type: 'success' },
    { time: '13:00', title: 'Deep Work Focus Time', type: 'info', attendees: '1 attendee' }
  ];

  const mainTabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'leads', label: 'Leads' },
    { id: 'deals', label: 'Deals' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'feed', label: 'Feed' }
  ];

  const sideTabs = [
    { id: 'schedule', label: 'Schedule' },
    { id: 'insights', label: 'Insights' },
    { id: 'feed', label: 'Feed' }
  ];

  const renderTabContent = (tabId) => {
    switch (tabId) {
      case 'summary':
        return (
          <>
            <div className="row mb-4">
              <div className="col-12">
                <h6 className="mb-3">Your tasks today</h6>
                <div className="row g-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-2">
                      <div className="card h-100">
                        <div className="card-body text-center">
                          <h3 className={stat.color}>{stat.value}</h3>
                          <small className="text-muted">{stat.title}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <h6 className="mb-3">Guided actions <span className="badge bg-secondary">i</span></h6>
                    <div className="btn-group mb-3">
                      <button className="btn btn-light active">All actions (7)</button>
                      <button className="btn btn-light">Closing related (5)</button>
                      <button className="btn btn-light">Prospecting related (2)</button>
                    </div>
                    
                    <div className="list-group">
                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <i className="fas fa-envelope me-2 text-muted"></i>
                            <strong>Send a follow up email to Scott Davies</strong>
                            <p className="text-muted small mb-0">Scott Davies opened your last email but hasn't replied yet</p>
                          </div>
                          <div className="text-end">
                            <strong>Coller Capital - London</strong>
                            <p className="text-muted small mb-0">Support contract</p>
                            <p className="text-muted small mb-0">Amount: £105,460.00</p>
                            <p className="text-muted small mb-0">Close date: 12/12/2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="custom-tabs">
                        {sideTabs.map(tab => (
                          <button
                            key={tab.id}
                            className={`custom-tab-btn ${activeSideTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveSideTab(tab.id)}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                      <div>
                        <button className="btn btn-link p-0 me-2"><i className="fas fa-chevron-left"></i></button>
                        <button className="btn btn-link p-0"><i className="fas fa-chevron-right"></i></button>
                      </div>
                    </div>

                    <h6 className="mb-3">Today, 25 December</h6>
                    <div className="timeline">
                      {schedule.map((item, index) => (
                        <div key={index} className="timeline-item mb-3">
                          <div className="d-flex">
                            <div className="me-3 text-muted">{item.time}</div>
                            <div className={`flex-grow-1 p-2 rounded ${item.type ? `bg-${item.type}-subtle` : ''}`}>
                              <div>{item.title}</div>
                              {item.attendees && <small className="text-muted">{item.attendees}</small>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'leads':
        return <div className="p-4">Leads content goes here</div>;
      case 'deals':
        return <div className="p-4">Deals content goes here</div>;
      case 'schedule':
        return <div className="p-4">Schedule content goes here</div>;
      case 'feed':
        return <div className="p-4">Feed content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Sales</h5>
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Benjamin Price
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="custom-tabs">
            {mainTabs.map(tab => (
              <button
                key={tab.id}
                className={`custom-tab-btn ${activeMainTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveMainTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {renderTabContent(activeMainTab)}
    </div>
  );
};

export default CRMDashboard;
