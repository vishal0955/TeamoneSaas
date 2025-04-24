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
  Landmark,
  Cog,
  Contact,
  User,
  ChartColumn,
  SquareCheckBig,
  Box,
  File,
  HelpingHandIcon,
  HelpCircle,
} from "lucide-react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/ThemeSlice";

const menuItems = [
  {
    name: "",
    path: "/admin",
    icon: <House size={16} />,
    subItems: [
      { name: "Dashboard", path: "/admin" },
      { name: "Calendar", path: "/fullcalendar" },
      {
        name: "Todo",
        path: "/todo",
        // icon: <SquareCheckBig size={16} />,
      },
      {
        name: "Notes",
        path: "/notesgrid",
        // icon: <ClipboardCheck size={16} />,
      },
    ],
  },

  {
    name: "",
    path: "/project",
    icon: <FolderOpenDot size={16} />,
    subItems: [
      { name: "Dashboard", path: "/project" },

      { name: "All Project", path: "allproject" },
      { name: "Scheduling", path: "/project/projects" },

      { name: "Workload", path: "/project/workload" },
    ],
  },

  {
    name: "",
    path: "/crm/dashboard",
    icon: <Contact size={16} />,
    subItems: [
      { name: "Dashboard", path: "/crm/dashboard" },
      { name: "Contacts", path: "/crm/customers" },
      { name: "Companies", path: "/crm/companies" },

      { name: "Deals", path: "/crm/deals" },
      { name: "Quotes", path: "/crm/quotes" },
      { name: "Invoices", path: "/crm/invoices" },
      { name: "Analytics", path: "/crm/analytics" },
    ],
  },
  {
    name: "",
    path: "/hr/dashboard",
    icon: <Users size={16} />,
    subItems: [
      { name: "Dashboard", path: "/hr/dashboard" },
      { name: "My Profile", path: "/hr/myprofile" },
      { name: "People", path: "/hr/people" },
      { name: "Performance", path: "/hr/performance" },
      { name: "Recruitment", path: "/hr/recruitment" },
      { name: "Company", path: "/hr/company" },
    ],
  },

  {
    name: "",
    path: "/finance/accounts_payable",
    icon: <ChartColumn size={16} />,
    subItems: [
      { name: "Accounts Payable", path: "/finance/accounts_payable" },
      { name: "Accounts Receivable", path: "/finance/accounts_receivable" },
      { name: "Products", path: "/finance/products" },
      { name: "Customers", path: "/finance/companies" },
      { name: "Suppliers", path: "/finance/suppliers" },
    ],
  },

  {
    name: "",
    path: "/support",
    icon: <HelpCircle size={16} />,
    subItems: [
      { name: "Support", path: "/support" },
      { name: "Settings", path: "/support/settings" },
    ],
  },

  {
    name: "",
    path: "/inventory",
    icon: <Box size={16} />,
  },

  { name: "", path: "/files", icon: <File size={16} /> },

  { name: "", path: "/social", icon: <Users size={16} /> },

  {
    name: "",
    path: "/admininistration/user_management/users",
    icon: <Landmark size={16} />,

    subItems: [
      {
        name: "User",
        path: "/admininistration/user_management/users",
       
      },
          {
            name: "Roles &Permissions",
            path: "/admininistration/user_management/roles_permissions",
          },
        
      
    ],
  },
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
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  console.log(darkMode);

  const userRole = localStorage.getItem("userRole");
  const menu = userRole === "superadmin" ? superAdminMenu : menuItems;
  const [openMenus, setOpenMenus] = useState({ Home: true });
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isMenuActive = (item) => {
    if (isActive(item.path)) return true;
    if (item.subItems) {
      return item.subItems.some((subItem) => isActive(subItem.path));
    }
    return false;
  };

  const sidebarTheme = {
    background: darkMode ? "bg-gray-900" : "bg-gray-50",
    text: darkMode ? "text-gray-300" : "text-indgo-700",
    hover: darkMode ? "hover:bg-gray-800" : "hover:bg-gray-50",
    activeBackground: darkMode ? "bg-gray-800" : "bg-indigo-50",
    activeText: darkMode ? "text-indigo-400" : "text-indigo-600",
    border: darkMode ? "border-gray-700" : "border-gray-200",
    icon: darkMode ? "text-gray-400" : "text-gray-500",
    scrollbar: darkMode ? "scrollbar-dark" : "scrollbar-light",
    submenuActive: darkMode ? "border-l-indigo-500" : "border-l-indigo-600",
    submenuHover: darkMode ? "hover:bg-gray-800/50" : "hover:bg-indigo-50/50",
    submenuText: darkMode ? "text-gray-400" : "text-gray-900 font-semibold",
    submenuActiveText: darkMode ? "text-indigo-400" : "text-indigo-600",
  };

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
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          !collapsed && isMobile
            ? "opacity-100 z-20"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside
        style={{ marginTop: "65px", zIndex: "60" }}
        className={`fixed left-0 top-0 h-screen ${
          sidebarTheme.background
        } shadow-xl flex flex-col transition-all duration-300 ease-in-out pb-5
    ${isMobile && collapsed ? "w-0" : collapsed ? "w-15" : ""}
    ${darkMode ? "border-r border-gray-800" : "border-r border-gray-100"}`}
      >
        {/* Navigation */}
        <nav className={`flex-1 ${sidebarTheme.scrollbar}`}>
          <div className="p-4">
            <ul className="space-y-1.5">
              {menu.map((item, index) => (
                <li
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(index)} // Track the hovered menu by index
                  onMouseLeave={() => setHoveredItem(null)} // Reset when mouse leaves
                >
                  <Link
                    to={item.path}
                    className={`group flex items-center gap-x-3 px-3 py-2.5 rounded-lg transition-all duration-150
              ${
                isMenuActive(item)
                  ? sidebarTheme.activeBackground +
                    " " +
                    sidebarTheme.activeText
                  : sidebarTheme.text + " " + sidebarTheme.hover
              }`}
                  >
                    <span
                      className={`flex-shrink-0 transition-colors duration-150
              ${
                isMenuActive(item) ? sidebarTheme.activeText : sidebarTheme.icon
              }`}
                    >
                      {item.icon}
                    </span>

                    {!collapsed && (
                      <span className="font-medium text-sm">{item.name}</span>
                    )}
                  </Link>

                  {/* Tooltip for collapsed menu */}
                  {collapsed && hoveredItem === index && (
                    <div className="absolute left-full top-0 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-50">
                      {item.name}
                    </div>
                  )}

                  {/* Submenu shown only for the hovered item */}
                  {item.subItems && hoveredItem === index && (
                    <ul className="absolute left-full top-0 ml-1 bg-white rounded-md shadow-lg p-2 z-50 space-y-1 min-w-[160px]">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md whitespace-nowrap"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Styles */}
        <style jsx>{`
          .scrollbar-light::-webkit-scrollbar {
            width: 6px;
          }
          .scrollbar-light::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-light::-webkit-scrollbar-thumb {
            background-color: #d1d5db;
            border-radius: 3px;
          }
          .scrollbar-light::-webkit-scrollbar-thumb:hover {
            background-color: #9ca3af;
          }

          .scrollbar-dark::-webkit-scrollbar {
            width: 6px;
          }
          .scrollbar-dark::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-dark::-webkit-scrollbar-thumb {
            background-color: #4b5563;
            border-radius: 3px;
          }
          .scrollbar-dark::-webkit-scrollbar-thumb:hover {
            background-color: #6b7280;
          }
        `}</style>
      </aside>

      {/* Main Content */}
      <main
  className={`transition-all duration-300 ${
    isMobile && collapsed
      ? "ml-0" 
      : userRole === "superadmin"
      ? "ml-56"  // For superadmin, use ml-56
      : userRole === "admin"
      ? "ml-20"  // For admin, use ml-20
      : collapsed
      ? "ml-20"  // Default case for other roles when collapsed
      : "ml-56"
  }`}
>
  {/* ...existing main content... */}
</main>

    </>
  );
}
