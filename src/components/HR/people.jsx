import React from "react";

const People = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Time Management Dashboard</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script>
        <script
          src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js"
          data-color="#000000"
          data-border-radius="small"
        ></script>
      </head>
      <body className="bg-white text-gray-900 min-h-screen">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navbar */}
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-semibold">People</h1>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="fas fa-users"></i>
                  <span>Employees</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="far fa-clock"></i>
                  <span>Time management</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="far fa-file-alt"></i>
                  <span>Documents</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <i className="fas fa-money-bill"></i>
                  <span>Payroll</span>
                </a>
              </div>
            </div>
          </nav>

          {/* Requests Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Showing 3 requests</h2>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                View all
              </a>
            </div>
            <div className="mt-4 bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a person"
                    alt="Harry"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">8 - 12 Aug 2024 · Annual Leave</h3>
                    <p className="text-sm text-gray-600">
                      Harry Peter · <span className="text-yellow-500">Pending</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 flex items-center space-x-2">
                    <i className="fas fa-check"></i>
                    <span>Approve</span>
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 flex items-center space-x-2">
                    <i className="fas fa-times"></i>
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium">August 2024</h2>
            </div>
            <div className="mt-6 bg-gray-100 rounded-lg p-6 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left pl-4 py-2">Employees</th>
                    {[...Array(31)].map((_, index) => (
                      <th key={index} className="w-10 text-center py-2">
                        {index + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Jane Smith", color: "bg-green-500" },
                    { name: "Alfredo Ryan", color: "bg-red-500" },
                    { name: "Mike Johnson", color: "bg-amber-500" },
                  ].map((employee, index) => (
                    <tr key={index}>
                      <td className="pl-4 py-2">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=A professional headshot"
                          className="h-8 w-8 rounded-full inline-block mr-2"
                          alt={employee.name}
                        />
                        {employee.name}
                      </td>
                      <td colSpan="31" className="py-2">
                        <div className="flex space-x-1">
                          <div className={`h-10 ${employee.color} rounded`} style={{ width: 30 }}></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default People;
