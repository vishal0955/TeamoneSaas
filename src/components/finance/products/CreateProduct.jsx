import React from 'react'

const CreateProduct = () => {
  return (
    <div className="min-h-screen">
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-arrow-left" />
              <span className="ml-2">Companies</span>
            </a>
            <h1 className="text-lg font-semibold">Product Overview</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="!rounded-button px-4 py-2 text-gray-700 hover:bg-gray-100">
              Actions <i className="fas fa-chevron-down ml-2" />
            </button>
            <button className="!rounded-button px-4 py-2 text-gray-700 hover:bg-gray-100">
              <i className="fas fa-cog" />
              <span className="ml-2">Customize record</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <div className="max-w-8xl mx-auto px-4 py-6">
      <div className="flex gap-6">
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200">
              <div className="flex space-x-4 p-4">
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-plus" />
                  <span className="ml-2">Add Product</span>
                </button>
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-edit" />
                  <span className="ml-2">Edit</span>
                </button>
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-trash" />
                  <span className="ml-2">Delete</span>
                </button>
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-download" />
                  <span className="ml-2">Export</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <nav className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium rounded-md bg-custom text-white"
                >
                  Details
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Inventory
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Reviews
                </a>
              </nav>
              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-medium mb-4">Product Details</h3>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder="Add product description here..."
                    defaultValue={""}
                  />
                </section>
                <section>
                  <h3 className="text-lg font-medium mb-4">
                    Product Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Product Status</p>
                      <p className="mt-1">In Stock</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="mt-1">Electronics</p>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="text-lg font-medium mb-4">Product Research</h3>
                  <div className="flex space-x-4">
                    <button className="!rounded-button flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-50">
                      <i className="fas fa-chart-line mr-2" />
                      Market Analysis
                    </button>
                    <button className="!rounded-button flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-50">
                      <i className="fas fa-tags mr-2" />
                      Price History
                    </button>
                    <button className="!rounded-button flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-50">
                      <i className="fas fa-boxes mr-2" />
                      Similar Products
                    </button>
                  </div>
                </section>
                <section>
                  <h3 className="text-lg font-medium mb-4">Sales Analytics</h3>
                  <div className="flex space-x-4 mb-4">
                    <select className="!rounded-button border border-gray-300 px-4 py-2">
                      <option>Delivery Performance</option>
                      <option>Monthly Orders</option>
                      <option>Quality Metrics</option>
                    </select>
                    <select className="!rounded-button border border-gray-300 px-4 py-2">
                      <option>All data</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                    </select>
                  </div>
                  <div className="h-64 bg-gray-50 rounded-lg border border-gray-200" />
                </section>
              </div>
            </div>
          </div>
        </main>
        <aside className="w-80">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-medium">Product Summary</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>SKU</span>
                  <span>PRD-001</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Price</span>
                  <span>$99.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Stock</span>
                  <span>150 units</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sales</span>
                  <span>1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Rating</span>
                  <span>4.5/5</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span>Performance</span>
                    <span className="text-green-500">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Demand</span>
                    <span className="text-green-500">Strong</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  )
}

export default CreateProduct

