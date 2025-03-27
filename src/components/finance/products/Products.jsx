import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 !rounded-button hover:bg-gray-50">
              Products
              <i className="fas fa-chevron-down ml-2 text-xs" />
            </button>
          </div>
          <span className="text-sm text-gray-500">60 records</span>
        </div>
        <div className="flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 !rounded-button hover:bg-gray-50">
            Actions
            <i className="fas fa-chevron-down ml-2 text-xs" />
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 !rounded-button hover:bg-gray-50">
            <i className="fas fa-file-import mr-2" />
            Import
          </button>
          <Link to="/finance/createproduct">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 !rounded-button bg-blue-600 hover:bg-blue-700">
            <i className="fas fa-plus mr-2" />
            Create product
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 !rounded-button hover:bg-gray-50">
                  All products
                  <i className="fas fa-times ml-2 text-xs" />
                </button>
                <div className="relative">
                  <input
                    type="text"
                    placeholder=""
                    className="block w-64 pl-3 pr-10 py-1.5 text-sm border-gray-300 !rounded-button focus:ring-custom focus:border-custom"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-custom hover:text-custom/90 text-sm font-medium">
                Add view (2/50)
              </button>
              <button className="text-custom hover:text-custom/90 text-sm font-medium">
                All Views
              </button>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 !rounded-button hover:bg-gray-50">
                Create date
                <i className="fas fa-chevron-down ml-2 text-xs" />
              </button>
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 !rounded-button hover:bg-gray-50">
                <i className="fas fa-plus mr-2" />
                More
              </button>
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 !rounded-button hover:bg-gray-50">
                <i className="fas fa-filter mr-2" />
                Advanced filters
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search name, description..."
                className="block w-64 pl-3 pr-10 py-2 text-sm border-gray-300 !rounded-button focus:ring-custom focus:border-custom"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i className="fas fa-search text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="w-12 px-6 py-3">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-custom focus:ring-custom"
                  />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                  <i className="fas fa-sort ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  SKU
                  <i className="fas fa-sort ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Create Date (GMT)
                  <i className="fas fa-sort ml-1" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-custom focus:ring-custom"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-custom hover:text-custom/90">
                    Administration Per Hour
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ADMINISTRATION-HOUR
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  6 Dec 2024 15:46 GMT
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-custom focus:ring-custom"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-custom hover:text-custom/90">
                    [ControlLabs] Commissioning Hour
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Commissioning-Hour
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  6 Dec 2024 12:04 GMT
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-custom focus:ring-custom"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href="#" className="text-custom hover:text-custom/90">
                    Control &amp; Automation Consultant
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Control-Automation-Consultant
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  6 Dec 2024 10:49 GMT
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products


