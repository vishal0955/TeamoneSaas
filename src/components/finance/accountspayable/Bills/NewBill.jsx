import React from 'react'

const NewBill = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <nav className="mb-8">
      <div className="text-sm">
        <a href="#" className="text-custom hover:text-custom/80">
          Purchases overview
        </a>
        <span className="mx-2 text-gray-400">&gt;</span>
        <a href="#" className="text-custom hover:text-custom/80">
          Bills to pay
        </a>
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 mt-2">New Bill</h1>
    </nav>
    <div className="bg-white rounded-lg shadow">
      <form className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom">
              <option>27 Dec 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom">
              <option>26 Jan 2025</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reference
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total
            </label>
            <input
              type="text"
              defaultValue={0.0}
              className="w-full text-right border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
              readOnly=""
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <select className="border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom">
            <option>GBP British Pound</option>
          </select>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Amounts are</span>
            <select className="border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom">
              <option>Tax Inclusive</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">
                  Item
                </th>
                <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">
                  Description
                </th>
                <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">
                  Qty
                </th>
                <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">
                  Unit Price
                </th>
                <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">
                  Account
                </th>
                <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">
                  Tax Rate
                </th>
                <th className="text-right py-2 px-4 text-sm font-medium text-gray-700">
                  Amount GBP
                </th>
                <th className="w-8" />
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                  />
                </td>
                <td className="py-2 px-4">
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                  />
                </td>
                <td className="py-2 px-4">
                  <input
                    type="number"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                  />
                </td>
                <td className="py-2 px-4">
                  <input
                    type="number"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                  />
                </td>
                <td className="py-2 px-4">
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom" />
                </td>
                <td className="py-2 px-4">
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom" />
                </td>
                <td className="py-2 px-4">
                  <input
                    type="text"
                    defaultValue={0.0}
                    className="w-full text-right border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                    readOnly=""
                  />
                </td>
                <td className="py-2 px-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    ×
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-start mb-6">
          <div className="space-x-4">
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
              Add a new line
              <i className="fas fa-chevron-down ml-2" />
            </button>
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
              Assign expenses to a customer or project
            </button>
          </div>
          <div className="w-72">
            <div className="flex justify-between py-2">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-medium">0.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm text-gray-600">VAT</span>
              <span className="text-sm font-medium">0.00</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-200">
              <span className="text-base font-medium">TOTAL</span>
              <span className="text-base font-medium">0.00</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 border-t">
          <button className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
            Save
            <i className="fas fa-chevron-down ml-2" />
          </button>
          <div className="space-x-4">
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Approve
              <i className="fas fa-chevron-down ml-2" />
            </button>
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        History &amp; Notes
      </h2>
      <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
        Add Note
      </button>
    </div>
  </div>
  )
}

export default NewBill


