import { useState, useEffect } from "react";
import {
  House,
  Users,
  Calendar,
  BarChart3,
  FolderKanban,
  FolderOpenDot,
  ClipboardCheck,
  FileText,
  Cog,
  Contact,
  User,
  ChartColumn,
  SquareCheckBig,
} from "lucide-react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <House size={16} />,
  },
  {
    name: "Todo",
    path: "/todo",
    icon: <SquareCheckBig size={16} />,  
  }, 
  {
    name: "Notes",
    path: "/notesgrid",
    icon: <ClipboardCheck size={16} />,   
  },
  {
    name: "Project",
    path: "/project",
    icon: <FolderOpenDot size={16} />,
    subItems: [
      { name: "Project", path: "/project/projects" },
      { name: "Task", path: "/project/task" },
    
      { name: "Todo", path: "/project/Todo" },
      { name: "Notes", path: "/project/Notes" },
    ],
  },
  {
    name: "CRM",
    path: "/crm",
    icon: <Contact size={16} />,
    subItems: [
      { name: "Contacts", path: "/crm/customers" },
      { name: "Companies", path: "/crm/companies" },
      { name: "Leads", path: "/crm/leads" },
      { name: "Deals", path: "/crm/deals" },
      { name: "Pipeline", path: "/crm/pipeline" },
      { name: "Analytics", path: "/crm/analytics" },
      { name: "Activities", path: "/crm/activities" },
      { name: "Sales", path: "/crm/sales" },
    ],
  },
  {
    name: "HRM",
    path: "/hrm",
    icon: <Users size={16} />,
    subItems: [
      {
        name: "Employees",
        path: "/hrm/employees",
        subMenu: [
          { name: "Employees List", path: "/employeelist" },
          // { name: "Employees Details", path: "/employeedetails" },
          { name: "Departments", path: "/department" },
          { name: "Designations", path: "/designations" },
          { name: "Policies", path: "/hrm/employees/policies" },
        ],
      },
      {
        name: "Tickets",
        path: "/hrm/tickets",
        // subMenu: [
        //   { name: "Leave", path: "/hrm/tickets/leave" },
        //   { name: "Attendance", path: "/hrm/tickets/attendance" },
        // ]
      },
      {
        name: "Holidays",
        path: "/hrm/holiday",
      },
      {
        name: "Attendance",
        path: "/hrm/attendance",
        subMenu: [
          { name: "Attendance", path: "/hrm/attendance/list" },
          { name: "Leaves", path: "/hrm/attendance/leaves" },
          { name: "Leave Settings", path: "/hrm/attendance/leave_settings" },
          { name: "Timesheet", path: "/hrm/attendance/timesheet" },
          { name: "Shift & Schedule", path: "/hrm/attendance/shift_schedule" },
          { name: "OverTime", path: "/hrm/attendance/overtime" },
        ],
      },
      {
        name: "Performance",
        path: "/hrm/performance",
        subMenu: [
          {
            name: "Performance Indicator",
            path: "/hrm/performance/performance_indicator",
          },

          {
            name: "Performance Review",
            path: "/hrm/performance/performance_review",
          },
          {
            name: "Performance Appraisal",
            path: "/hrm/performance/performance_appraisal",
          },
        ],
      },
    ],
  },

  {
    name: "Recruitment",
    path: "/recruitment",
    icon: <Calendar size={16} />,
    subItems: [
      { name: "Jobs", path: "/recruitment/jobs" },
      { name: "Candidates", path: "/recruitment/candidates" },
      { name: "Refferals", path: "/recruitment/refferals" },

    ],
  },

  {
    name: "Finance & Accounts",
    path: "/finance",
    icon: <ChartColumn size={16} />,
    subItems: [
      {
        name: "Sales",
        path: "/finance/sales",
        subMenu: [
          { name: "Estimates", path: "/finance/sales/estimates" },
          { name: "Invoices", path: "/finance/sales/invoices" },
          { name: "Payments", path: "/finance/sales/payments" },
          { name: "Expenses", path: "/finance/sales/expenses" },
          { name: "Provident Funds", path: "/finance/sales/provident_funds" },
          { name: "Taxes", path: "/finance/sales/taxs" },
        ],
      },
      {
        name: "Payroll",
        path: "/finance/payroll",
        subMenu: [
          { name: "Employee Salary", path: "/finance/payroll/employee_salary" },
          { name: "Payroll Items", path: "/finance/payroll/payroll_items" },
        ],
      },
    ],
  },

  {
    name: "Administration",
    path: "/administration",

    subItems: [
      {
        name: "Help & Support",
        path: "/admininistration/help_support",
        subMenu: [
          { name: "FAQs", path: "/admininistration/help_support/faqs" },
        ],
      },
      {
        name: "User Management",
        path: "/admininistration/user_management",
        subMenu: [
          { name: "Users", path: "/admininistration/user_management/users" },
          {
            name: "Roles &Permissions",
            path: "/admininistration/user_management/roles_permissions",
          },
        ],
      },
    ],
  },

  // {
  //   name: "Reports",
  //   path: "/reports",
  //   icon: <BarChart3 size={14} />,
  // },
  // {
  //   name: "Documents",
  //   path: "/documents",
  //   icon: <FileText size={14} />,
  // },
];

const superAdminMenu = [
  {
    name: "Dashboard",
    path: "/superadmin/dashboard",
    icon: <House size={16} />,
  },
  {
    name: "Plans ",
    path: "/superadmin/plans",
    icon: <Calendar size={16} />,
  },
  {
    name: "User Info ",
    path: "/superadmin/user_info",
    icon: <Calendar size={16} />,
  },
  {
    name: "Order",
    path: "/superadmin/order_plan",
    icon: <Calendar size={16} />,
  },
  {
    name: "Plan Request ",
    path: "/superadmin/plan_request",
    icon: <Calendar size={16} />,
  },
  {
    name: "Settings",
    path: "/superadmin/settings",
    icon: <Cog size={16} />,
  },
];

export default function Sidebar({ toggleSidebar, collapsed }) {
  const userRole = localStorage.getItem("userRole");
  const menu = userRole === "superadmin" ? superAdminMenu : menuItems;
  const [openMenus, setOpenMenus] = useState({ Project: true, CRM: true });
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMenu = (name, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleSubMenu = (name, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenSubMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          !collapsed && isMobile
            ? "opacity-100 z-20"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      <aside
        className={`fixed left-0 top-0 h-screen bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
          collapsed ? "w-20" : "w-56"
        } z-30`}>
        {/* Fixed Header */}
        <div className="h-16 flex-shrink-0 flex items-center justify-between px-4 border-b border-gray-100">
          {collapsed ? (
            <span className="text-indigo-600 font-bold text-2xl">H</span>
          ) : (
            <span className="text-indigo-600 font-bold text-2xl">HRMS</span>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors">
            {collapsed ? "→" : "←"}
          </button>
        </div>

        {/* Scrollable Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
          <div className="p-4">
            <ul className="space-y-1.5">
              {menu.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}>
                  <Link
                    to={item.path}
                    className={`group flex items-center gap-x-3 px-3 py-2 rounded-lg transition-all duration-150
                                            ${
                                              openMenus[item.name]
                                                ? "bg-indigo-50 text-indigo-600"
                                                : "hover:bg-gray-50"
                                            }
                                        `}
                    onClick={(e) => {
                      if (item.subItems) {
                        toggleMenu(item.name, e);
                      }
                    }}>
                    <span
                      className={`flex-shrink-0 transition-colors duration-150
                                            ${
                                              openMenus[item.name]
                                                ? "text-indigo-600"
                                                : "text-black group-hover:text-gray-700"
                                            }
                                        `}>
                      {item.icon}
                    </span>

                    {!collapsed && (
                      <>
                        <span
                          className={`font-medium transition-colors duration-150
                                                    ${
                                                      openMenus[item.name]
                                                        ? "text-indigo-600"
                                                        : "text-black group-hover:text-gray-900"
                                                    }
                                                `}>
                          {item.name}
                        </span>

                        {item.subItems && (
                          <span
                            className={`ml-auto transition-transform duration-200 ${
                              openMenus[item.name] ? "rotate-180" : ""
                            }`}>
                            <FaAngleDown size={14} />
                          </span>
                        )}
                      </>
                    )}
                  </Link>

                  {/* Tooltip for collapsed state */}
                  {collapsed && hoveredItem === item.name && (
                    <div className="absolute left-full top-0 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
                      {item.name}
                    </div>
                  )}

                  {/* Submenu */}
                  {!collapsed && item.subItems && openMenus[item.name] && (
                    <ul className="mt-1 ml-4 pl-3 border-l border-gray-200 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <div className="relative">
                            <Link
                              to={subItem.path}
                              className={`group flex items-center justify-between py-2 pl-3 pr-2 rounded-md text-sm transition-colors
                                                                ${
                                                                  openSubMenus[
                                                                    subItem.name
                                                                  ]
                                                                    ? "text-indigo-600 bg-indigo-50"
                                                                    : "text-black hover:text-gray-900 hover:bg-gray-50"
                                                                }
                                                            `}
                              onClick={(e) => {
                                if (subItem.subMenu) {
                                  toggleSubMenu(subItem.name, e);
                                }
                              }}>
                              <span>{subItem.name}</span>
                              {subItem.subMenu && (
                                <span
                                  className={`transition-transform duration-200 ${
                                    openSubMenus[subItem.name]
                                      ? "rotate-180"
                                      : ""
                                  }`}>
                                  <FaAngleDown size={12} />
                                </span>
                              )}
                            </Link>

                            {/* Third level menu */}
                            {subItem.subMenu && openSubMenus[subItem.name] && (
                              <ul className="mt-1 ml-3 pl-3 border-l border-gray-200 space-y-1">
                                {subItem.subMenu.map((nestedItem) => (
                                  <li key={nestedItem.name}>
                                    <Link
                                      to={nestedItem.path}
                                      className="block py-1.5 pl-3 text-sm text-black hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
                                      {nestedItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <style jsx>{`
          /* Custom scrollbar styles */
          .scrollbar-thin::-webkit-scrollbar {
            width: 6px;
          }

          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }

          .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: #d1d5db;
            border-radius: 3px;
          }

          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background-color: #9ca3af;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-thin {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: thin; /* Firefox */
          }
        `}</style>
      </aside>

      <main
        className={`transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-56"
        }`}>
        {/* Main content */}
      </main>
    </>
  );
}
