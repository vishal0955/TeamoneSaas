import React from 'react'

function OrderPlan() {
  return (
    <div>
      <table className="table table-hover table-bordered text-center shadow-sm">
  <thead
    className="table-primary text-white"
    style={{ backgroundColor: "#00879E" }}
  >
    <tr>
      <th>Order Id</th>
      <th>Name</th>
      <th>Plan Name</th>
      <th>Price</th>
      <th>Status</th>
      <th>Payment Type</th>
      <th>Date</th>
      <th>Coupon</th>
      <th>Invoice</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>John Doe</td>
      <td>Premium</td>
      <td>$99</td>
      <td>
        <span className="badge bg-success">Active</span>
      </td>
      <td>Credit Card</td>
      <td>2024-02-19</td>
      <td>DISCOUNT20</td>
      <td>
        <button className="btn btn-sm btn-outline-secondary">Download</button>
      </td>
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

export default OrderPlan
