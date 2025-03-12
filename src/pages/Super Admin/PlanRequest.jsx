import React from 'react'

function PlanRequest() {
  return (
    <div>
      <table className="table table-hover table-bordered text-center shadow-sm">
  <thead
    className="table-primary text-white"
    style={{ backgroundColor: "#00879E" }}
  >
    <tr>
      <th>Name</th>
      <th>Plan Name</th>
      <th>Total Users</th>
      <th>Total Customers</th>
      <th>Total Vendors</th>
      <th>Total Clients</th>
      <th>Duration</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Premium</td>
      <td>500</td>
      <td>200</td>
      <td>100</td>
      <td>50</td>
      <td>12 Months</td>
      <td>2024-02-19</td>
      <td>
        <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
        <button className="btn btn-sm btn-outline-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>

    </div>
  )
}

export default PlanRequest
