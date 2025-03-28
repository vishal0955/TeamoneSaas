import React from 'react'
import { Link } from 'react-router-dom'

const CreditNotes = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">Credit Notes</h1>
      <div className="flex items-center gap-4 relative">
        <div className="relative">
          <button
            id="actions-button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Actions <i className="fas fa-chevron-down ml-2" />
          </button>
          <div
            id="dropdown-menu"
            className="hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
          >
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Export to Excel
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Export to PDF
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Print Credit Notes
              </a>
            </div>
          </div>
        </div>

        <Link to="/finance/newcreditnote">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-button text-white bg-blue-600 hover:bg-blue-500">
          Create credit note
        </button>
        </Link>
      </div>
    </div>
    <div className="mb-6 flex flex-wrap gap-4 items-center">
      <div className="relative flex-grow max-w-md">
        <input
          type="text"
          placeholder="Search all credit notes"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-button focus:ring-custom focus:border-custom"
        />
        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="inline-flex items-center">
          <span className="text-sm text-gray-700 mr-2">Status:</span>
          <select className="border-gray-300 rounded-button focus:border-custom focus:ring-custom">
            <option>All</option>
          </select>
        </div>
        <div className="inline-flex items-center">
          <span className="text-sm text-gray-700 mr-2">Owners:</span>
          <select className="border-gray-300 rounded-button focus:border-custom focus:ring-custom">
            <option>All users</option>
          </select>
        </div>
        <div className="inline-flex items-center">
          <span className="text-sm text-gray-700 mr-2">Archive status:</span>
          <select className="border-gray-300 rounded-button focus:border-custom focus:ring-custom">
            <option>Active</option>
          </select>
        </div>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Credit Note
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Credit Amount{" "}
                <i className="fas fa-info-circle ml-1 text-gray-400" />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quote Owner
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Create Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-custom font-medium">
                Credit Note #1234
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                £14.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    Pending signature (0/1)
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://ai-public.creatie.ai/gen_page/avatar_placeholder.png"
                    
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      John Doe
                    </p>
                    <p className="text-sm text-gray-500">
                      john@example.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Today at 23:17
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-custom font-medium">
                Credit Note #1235
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                £28.50
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" />
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://ai-public.creatie.ai/gen_page/avatar_placeholder.png"
                    alt="Sarah Johnson"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Sarah Johnson
                    </p>
                    <p className="text-sm text-gray-500">sarah.j@example.com</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Yesterday at 15:30
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-custom font-medium">
                Credit Note #1236
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                £75.20
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2" />
                  <span className="text-sm text-gray-600">Rejected</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://ai-public.creatie.ai/gen_page/avatar_placeholder.png"
                    alt="Mark Wilson"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Mark Wilson
                    </p>
                    <p className="text-sm text-gray-500">mark.w@example.com</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2024-01-15
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-custom font-medium">
                Credit Note #1237
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                £142.00
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-400 mr-2" />
                  <span className="text-sm text-gray-600">In Review</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://ai-public.creatie.ai/gen_page/avatar_placeholder.png"
                    alt="Emma Davis"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Emma Davis
                    </p>
                    <p className="text-sm text-gray-500">emma.d@example.com</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2024-01-14
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between items-center">
          <div>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50">
              Prev
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button className="relative inline-flex items-center px-4 py-2 border border-custom bg-custom text-sm font-medium text-white">
                1
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                4
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                5
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                6
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                7
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                8
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                9
              </button>
            </nav>
          </div>
          <div>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-button bg-white text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
        <div className="ml-4">
          <select className="border-gray-300 rounded-button text-sm focus:border-custom focus:ring-custom">
            <option>25 per page</option>
            <option>50 per page</option>
            <option>100 per page</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreditNotes

 

