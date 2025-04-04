import React from "react";
import { Link } from "react-router-dom";

const Suppliers = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left Section: Title and record count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                Suppliers
              </h1>
              <span className="text-gray-500 text-sm">13,613 records</span>
            </div>

            {/* Right Section: Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-end w-full">
              <button className="w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                See Target Accounts
              </button>
              <button className="w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                Data Quality
              </button>
              <div className="relative w-full sm:w-auto">
                <button className="w-full !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                  Actions <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <button className="w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                <i className="fas fa-file-import mr-2" />
                Import
              </button>
              <Link to="/finance/createsupplier" className="w-full sm:w-auto">
                <button className="w-full !rounded-button px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500">
                  <i className="fas fa-plus mr-2" />
                  Create supplier
                </button>
              </Link>
            </div>
          </div>
        </header>

        <div className="mt-4 bg-white rounded-lg shadow">
          <div className="border-b border-gray-200 px-4 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2">
              <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-custom">
                All suppliers
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                My suppliers
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-custom bg-blue-50 hover:bg-blue-100 !rounded-button">
                Add view (2/50)
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-custom hover:text-custom/90">
                All Views
              </button>
            </div>
          </div>

          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="relative w-full sm:w-auto">
                <button className="w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2">
                  Supplier owner <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <div className="relative w-full sm:w-auto">
                <button className="w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2">
                  Create date <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <div className="relative w-full sm:w-auto">
                <button className="w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2">
                  Last activity date <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <div className="relative w-full sm:w-auto">
                <button className="w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2">
                  Lead status <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <div className="w-full sm:w-auto">
                <button className="w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2">
                  More <i className="fas fa-plus ml-2" />
                </button>
              </div>
              <div className="w-full sm:w-auto">
                <button className="w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2">
                  Advanced filters
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search Input */}
              <div className="relative w-full sm:max-w-sm">
                <input
                  type="text"
                  placeholder="Search name, phone, or email"
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400" />
                </div>
              </div>

              {/* Button Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 w-full sm:w-auto">
                <button className="w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                  <i className="fas fa-file-alt mr-2" />
                  Create report
                </button>
                <button className="w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                  <i className="fas fa-file-export mr-2" />
                  Export
                </button>
                <button className="w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                  <i className="fas fa-columns mr-2" />
                  Edit columns
                </button>
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
                    Supplier name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Supplier owner
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Create date (GMT)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last activity date (GMT)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Tech Solutions Ltd
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          John Smith
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:24 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 234 567 8900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:40 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Global Supplies Inc
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          Sarah Johnson
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 09:15 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 987 654 3210
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 15:30 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Tech Solutions Ltd
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          John Smith
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:24 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 234 567 8900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:40 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Global Supplies Inc
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          Sarah Johnson
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 09:15 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 987 654 3210
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 15:30 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Tech Solutions Ltd
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          John Smith
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:24 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 234 567 8900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:40 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Global Supplies Inc
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          Sarah Johnson
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 09:15 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 987 654 3210
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 15:30 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Tech Solutions Ltd
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          John Smith
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:24 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 234 567 8900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:40 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Global Supplies Inc
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          Sarah Johnson
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 09:15 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 987 654 3210
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 15:30 GMT
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Tech Solutions Ltd
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          John Smith
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:24 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 234 567 8900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:40 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Global Supplies Inc
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          Sarah Johnson
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 09:15 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 987 654 3210
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 15:30 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Tech Solutions Ltd
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          John Smith
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:24 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 234 567 8900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:40 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Global Supplies Inc
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          Sarah Johnson
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 09:15 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 987 654 3210
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 15:30 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Tech Solutions Ltd
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          John Smith
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:24 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 234 567 8900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    23 Dec 2024 17:40 GMT
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Global Supplies Inc
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://i.ibb.co/dJ68VsWW/image.png"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          Sarah Johnson
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 09:15 GMT
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    +1 987 654 3210
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    22 Dec 2024 15:30 GMT
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-700">
                  Showing 1 to 10 of 13,613 results
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="!rounded-button px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                  disabled=""
                >
                  Previous
                </button>
                <button className="!rounded-button px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
