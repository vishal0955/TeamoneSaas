import React from 'react'

function UserInfo() {
  return (
    <div>
      <div>
  <button type="button" className="btn text-white px-4 py-2 mb-3" style={{"background-color":"#00879E"}} data-bs-toggle="modal" data-bs-target="#adminCreateModal">
    Create Admin
  </button>
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
        <th>Actions</th>
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
          <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
          <button className="btn btn-sm btn-outline-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div className="modal fade" id="adminCreateModal" tabIndex={-1} aria-labelledby="adminCreateModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="adminCreateModalLabel" style={{"color":"#00879E"}}>Create Admin</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter first name" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Enter last name" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="role" className="form-label">Role</label>
                <select className="form-select" id="role">
                  <option selected>Select Role</option>
                  <option value="superadmin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <select className="form-select" id="status">
                  <option selected>Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn text-white px-4 py-2" style={{"background-color":"#00879E"}}>Create Admin</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserInfo
