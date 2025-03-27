import React from 'react'

const NewCreditNote = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <nav className="text-sm mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <a href="#" className="text-gray-500 hover:text-custom">
            Sales overview
          </a>
        </li>
        <li>
          <span className="text-gray-400 mx-2">&gt;</span>
        </li>
        <li>
          <a href="#" className="text-gray-500 hover:text-custom">
            Credit notes
          </a>
        </li>
      </ol>
    </nav>
    <h1 className="text-2xl font-semibold text-gray-900 mb-8">
      New Credit Note
    </h1>
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <input
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom !rounded-button">
            <option>27 Dec 2024</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Due Date
          </label>
          <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom !rounded-button">
            <option>26 Jan 2025</option>
          </select>
        </div>
        <div className="col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reference
          </label>
          <input
            type="text"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total
          </label>
          <input
            type="text"
            defaultValue={0.0}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom text-right"
            readOnly=""
          />
        </div>
      </div>
      <div className="flex justify-between mb-6">
        <select className="border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom !rounded-button">
          <option>GBP British Pound</option>
        </select>
        <select className="border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom !rounded-button">
          <option>Tax Inclusive</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <th className="px-3 py-3">Item</th>
              <th className="px-3 py-3">Description</th>
              <th className="px-3 py-3">Qty</th>
              <th className="px-3 py-3">Unit Price</th>
              <th className="px-3 py-3">Account</th>
              <th className="px-3 py-3">Tax Rate</th>
              <th className="px-3 py-3 text-right">Amount GBP</th>
              <th className="px-3 py-3 w-10" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-4">
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                />
              </td>
              <td className="px-3 py-4">
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                />
              </td>
              <td className="px-3 py-4">
                <input
                  type="number"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                />
              </td>
              <td className="px-3 py-4">
                <input
                  type="number"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"
                />
              </td>
              <td className="px-3 py-4">
                <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom !rounded-button">
                  <option />
                </select>
              </td>
              <td className="px-3 py-4">
                <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom !rounded-button">
                  <option />
                </select>
              </td>
              <td className="px-3 py-4 text-right">0.00</td>
              <td className="px-3 py-4 text-center">
                <button className="text-gray-400 hover:text-gray-500">
                  <i className="fas fa-times" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
          Add a new line <i className="fas fa-chevron-down ml-2" />
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
          Link to original invoice
        </button>
      </div>
      <div className="mt-8">
        <div className="flex justify-end">
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="font-medium text-gray-500">Subtotal</dt>
              <dd className="text-gray-900">0.00</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-gray-500">VAT</dt>
              <dd className="text-gray-900">0.00</dd>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2">
              <dt className="font-semibold text-gray-900">TOTAL</dt>
              <dd className="font-semibold text-gray-900">0.00</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
            Save <i className="fas fa-chevron-down ml-2" />
          </button>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 !rounded-button">
            Issue Credit Note <i className="fas fa-chevron-down ml-2" />
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        History &amp; Notes
      </h2>
      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
        Add Note
      </button>
    </div>
  </div>
  )
}

export default NewCreditNote;



