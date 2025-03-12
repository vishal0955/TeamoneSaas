import React from 'react'
import './Sidebar.css';

function Setting() {
  return (
    <div>
      <div>
  <table className="table table-hover table-bordered text-center shadow-sm">
    <thead className="table-primary text-white" style={{"background-color":"#00879E"}}>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Username</th>
        <th>Role</th>
        <th>Status</th>
        <th>Created At</th>
        <th>Permissions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>John</td>
        <td>Doe</td>
        <td>john.doe@example.com</td>
        <td>123-456-7890</td>
        <td>johndoe</td>
        <td>Admin</td>
        <td><span className="badge bg-success">Active</span></td>
        <td>2024-02-19</td>
        <td>
          <span type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="badge bg-secondary">View</span>
        </td>
      </tr>
    </tbody>
  </table>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="box box-primary">
                  <div className="box-body">
                    <input type="hidden" /> <input type="hidden" />
                    <div className="table-responsive ">
                      <table className="table table-striped table-bordered    ">
                        <thead className>
                          <tr className>
                            <th>Module</th>
                            <th>Feature</th>
                            <th>View</th>
                            <th>Add</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Home</th>
                            <td>
                              <input type="hidden" />
                              Dashboard
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Calendar
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              To Do
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Note
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>Project</th>
                            <td>
                              <input type="hidden" />
                              Dashboard
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              All Projects
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Scheduling
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Workload
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>HR</th>
                            <td>
                              <input type="hidden" />
                              Employee Setup
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Departments
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Designations
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Performance
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Recruitment
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Company
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>HR /payrool</th>
                            <td>
                              <input type="hidden" />
                              Employee Salary
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Payslip
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Payroll Items
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Attendance Admin
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>Attendance</th>
                            <td>
                              <input type="hidden" />
                              Attendance
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Leave
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>Finance</th>
                            <td>
                              <input type="hidden" />
                              Accounts Payable
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Accounts Receivable
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Products
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Customers
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <input type="hidden" />
                              Suppliers
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>CRM</th>
                            <td>
                              <input type="hidden" />
                              Dashboard
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Dashboard
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Contacts
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Companies
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Deals
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Quoters
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Tasks
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Analytics
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>Support Desk</th>
                            <td>
                              <input type="hidden" />
                              Dashboard
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Analytics
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              All Tickets
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Sales
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Accounts
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Support
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Technical
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Settings
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>BPAV Social </th>
                            <td>
                              <input type="hidden" />
                              BPAV Social
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>File </th>
                            <td>
                              <input type="hidden" />
                              File
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th>Inventory </th>
                            <td>
                              <input type="hidden" />
                              Dashboard
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th> </th>
                            <td>
                              <input type="hidden" />
                              Calendar
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th> </th>
                            <td>
                              <input type="hidden" />
                              Orders
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Customers
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Inventory
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <th />
                            <td>
                              <input type="hidden" />
                              Assets
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                            <td>
                              <label className>
                                <input type="checkbox" defaultChecked="checked" />
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Setting
