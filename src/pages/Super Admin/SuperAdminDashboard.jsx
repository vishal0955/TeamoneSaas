import React from 'react';
import './SuperAdminDashboard.css';
import Sidebar from './Sidebar';

function SuperAdminDashboard() {
  return (
    <div>
      <Sidebar/>
      <>
  <div className="container-fluid mt-4 " style={{marginLeft:"250px"}}>
    <div className="row mt-4 ">
      <div className="col-md-6 col-lg-3 col-sm-6 mb-3">
        <div className="card h-100">
          <div
            routerlink="/Admin/Care Providers"
            className="card-body d-flex align-items-center gap-3"
          >
            <div className="icon-box mr-3">
              <i className="fas fa-users fa-lg " />
            </div>
            <div>
              <h6 className="mb-1 fw-bold">Recent Orders</h6>
              <p className="lead mb-0">5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 col-sm-6 mb-3">
        <div className="card h-100">
          <div
            routerlink="/Admin/Clients"
            className="card-body d-flex align-items-center gap-3"
          >
            <div className="icon-box mr-3">
              <i className="fas fa-user-circle fa-lg " />
            </div>
            <div>
              <h6 className="mb-1 fw-bold">Total Orders</h6>
              <p className="lead mb-0">10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 col-sm-6 mb-3">
        <div className="card h-100">
          <div className="card-body d-flex align-items-center gap-3">
            <div className="icon-box mr-3">
              <i className="fas fa-tasks fa-lg " />
            </div>
            <div>
              <h6 className="mb-1 fw-bold">Active Orders</h6>
              <p className="lead mb-0">0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 col-sm-6 mb-3">
        <div className="card h-100">
          <div
            routerlink="/Admin/Projects"
            routerlinkactive="router-link-active"
            className="card-body d-flex align-items-center gap-3"
          >
            <div className="icon-box mr-3">
              {/* <i class="fas fa-briefcase fa-lg "></i> */}
              <i className="fa-solid fa-note-sticky fa-lg" />
            </div>
            <div>
              <h6 className="mb-1 fw-bold">Total Revenue</h6>
              <p className="lead mb-0">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div style={{ width: "100%", margin: "auto" }}>
          <canvas id="clientChart" />
        </div>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div style={{ width: "100%", margin: "auto" }}>
          <canvas id="otherChart" />
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default SuperAdminDashboard
