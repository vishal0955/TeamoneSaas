import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import InventoryDashboard from './InventoryDashboard';

const InventorySidebar = () => {
  return (
    <div className="flex h-screen">
        {/* sidebar */}
    <aside className="w-48 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <img
          src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
          alt="Logo"
          className="h-8 mb-8"
        />
        <button className="w-full bg-custom text-custom px-4 py-2 rounded-button flex items-center justify-center gap-2 mb-8">
          <i className="fas fa-plus" />
          <span>New Order</span>
        </button>
        <nav className="space-y-1">
          <Link to= "/inventory/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-custom rounded-md bg-indigo-50"
          >
            <i className="fas fa-gauge-high w-5" />
            <span>Dashboard</span>
          </Link>
          <Link to="/inventory/calendar"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
          >
            <i className="far fa-calendar w-5" />
            <span>Calendar</span>
          </Link>
          <Link to="/inventory/orerlist"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
          >
            <i className="fas fa-clipboard-list w-5" />
            <span>Orders</span>
          </Link>
          <Link to="/inventory/customerslist"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
          >
            <i className="far fa-user w-5" />
            <span>Customers</span>
          </Link>
          <Link to="/inventory/inventory"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
          >
            <i className="fas fa-box w-5" />
            <span>Inventory</span>
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
          >
            <i className="far fa-file w-5" />
            <span>Documents</span>
          </a>
        </nav>
      </div>
      <div className="mt-auto border-t border-gray-200">
        <nav className="space-y-1 p-6">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
          >
            <i className="fas fa-barcode w-5" />
            <span>Scan a barcode</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
          >
            <i className="far fa-circle-question w-5" />
            <span>Help center</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
          >
            <i className="fas fa-gear w-5" />
            <span>Settings</span>
          </a>
        </nav>
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">BTS</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">BTS Big</p>
              <p className="text-xs text-gray-500">Enterprise Plan</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <div className="flex-1 flex flex-col">
    
    </div>
  </div>
  )
}

export default InventorySidebar;


