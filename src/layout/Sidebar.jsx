// import { Link , NavLink} from "react-router-dom";

// const Sidebar = () => {
//     const userRole = localStorage.getItem("userRole");

//     // const menuItems = {
//     //     admin: [
//     //         { name: "Dashboard", path: "/admin" },
//     //         { name: "Manage Users", path: "/admin/users" },
//     //         { name: "Reports", path: "/admin/reports" },
//     //     ],
//     //     superAdmin: [
//     //         { name: "Dashboard", path: "/superAdmin" },
//     //         { name: "System Settings", path: "/superAdmin/settings" },
//     //         { name: "User Management", path: "/superAdmin/users" },
//     //     ],
//     //     client: [
//     //         { name: "Dashboard", path: "/client" },
//     //         { name: "Orders", path: "/client/orders" },
//     //         { name: "Support", path: "/client/support" },
//     //     ],
//     //     manager: [
//     //         { name: "Dashboard", path: "/manager" },
//     //         { name: "Team Management", path: "/manager/team" },
//     //         { name: "Projects", path: "/manager/projects" },
//     //     ],
//     //     employee: [
//     //         { name: "Dashboard", path: "/employee" },
//     //         { name: "Tasks", path: "/employee/tasks" },
//     //         { name: "Attendance", path: "/employee/attendance" },
//     //     ],
//     // };
     
//     const menuItems = [
//         {
//           name: 'Dashboard',
//           path: '/dashboard',
//         //   icon: <DashboardIcon />,
//         //   permission: PERMISSIONS.VIEW_DASHBOARD
//         },
//         {
//           name: 'CRM',
//           path: '/crm',
//         //   icon: <CRMIcon />,
//         //   permission: PERMISSIONS.VIEW_CRM,
//           subItems: [
//             {
//               name: 'Customers',
//               path: '/crm/customers',
//             //   permission: PERMISSIONS.VIEW_CRM
//             },
//             {
//               name: 'Leads',
//               path: '/crm/leads',
//             //   permission: PERMISSIONS.VIEW_CRM
//             },
//             {
//               name: 'Sales',
//               path: '/crm/sales',
//             //   permission: PERMISSIONS.VIEW_CRM
//             }
//           ]
//         },
//         // Other menu items...
//       ];


//     if (!userRole) {
//         return null; // If no role, don't show sidebar
//     }

//     return (
//         // <div className="sidebar">
//         //     <h2>{userRole} Panel</h2>
//         //     <ul>
//         //         {menuItems[userRole]?.map((item, index) => (
//         //             <li key={index}>
//         //                 <Link to={item.path}>{item.name}</Link>
//         //             </li>
//         //         ))}
//         //     </ul>
//         // </div>

//         <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>SaaS Platform</h2>
//       </div>
//       <nav className="sidebar-nav">
//         <ul>
//           {menuItems.map((item) => {
//             // Only show menu items user has permission to see
//             // if (!checkPermission(item.permission)) return null;

//             return (
//               <li key={item.path}>
//                 <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
//                   <span className="icon">{item.icon}</span>
//                   <span className="label">{item.name}</span>
//                 </NavLink>

//                 {/* If there are sub-items, render them */}
//                 {item.subItems && (
//                   <ul className="sub-menu">
//                     {item.subItems.map((subItem) => {
//                     //   if (!checkPermission(subItem.permission)) return null;
                      
//                       return (
//                         <li key={subItem.path}>
//                           <NavLink 
//                             to={subItem.path} 
//                             className={({ isActive }) => isActive ? 'active' : ''}
//                           >
//                             {subItem.name}
//                           </NavLink>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </div>
//     );
// };

// export default Sidebar;


// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const userRole = localStorage.getItem("userRole");
//   const [openMenus, setOpenMenus] = useState({});

//   const toggleMenu = (menuName) => {
//     setOpenMenus((prev) => ({
//       ...prev,
//       [menuName]: !prev[menuName],
//     }));
//   };

//   const menuItems = [
//     {
//       name: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       name: "CRM",
//       path: "/crm",
//       subItems: [
//         { name: "Customers", path: "/crm/customers" },
//         { name: "Leads", path: "/crm/leads" },
//         { name: "Sales", path: "/crm/sales" },
//       ],
//     },
//     {
//       name: "HRM",
//       path: "/hrm",
//       subItems: [
//         { name: "Employees", path: "/hrm/employees" },
//         { name: "Attendance", path: "/hrm/attendance" },
//         { name: "Payroll", path: "/hrm/payroll" },
//       ],
//     },
//   ];

//   if (!userRole) {
//     return null;
//   }

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>SaaS Platform</h2>
//       </div>
//       <nav className="sidebar-nav">
//         <ul>
//           {menuItems.map((item) => (
//             <li key={item.path}>
//               <div className="menu-item" onClick={() => toggleMenu(item.name)}>
//                 <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "") }>
//                   <span className="label">{item.name}</span>
//                 </NavLink>
//                 {item.subItems && <span className="dropdown-arrow">▼</span>}
//               </div>
              
//               {item.subItems && openMenus[item.name] && (
//                 <ul className="sub-menu">
//                   {item.subItems.map((subItem) => (
//                     <li key={subItem.path}>
//                       <NavLink to={subItem.path} className={({ isActive }) => (isActive ? "active" : "") }>
//                         {subItem.name}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from "react";
// import { FaAngleDown, FaAngleRight } from "react-icons/fa";

// const menuItems = [
//   { title: "Home", icon: "📂", subItems: ["Dashboard", "Calendar", "To Do", "Notes"] },
//   { title: "Projects", icon: "⚙️", subItems: [] },
//   { title: "HR", icon: "⚙️", subItems: [] },
//   { title: "Finance", icon: "⚙️", subItems: [] },
//   { title: "CRM", icon: "⚙️", subItems: [] },
//   { title: "Support Desk", icon: "⚙️", subItems: [] },
//   { title: "BPAV Social", icon: "⚙️", subItems: [] },
//   { title: "Files", icon: "📁", subItems: [] },
//   { title: "Inventory", icon: "⚙️", subItems: [] },
// ];

// export default function Sidebar() {
//   const [openMenus, setOpenMenus] = useState({});

//   const toggleMenu = (title) => {
//     setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
//   };

//   return (
//     <div className="w-64 min-h-screen bg-gray-100 p-4">
//       <ul>
//         {menuItems.map((item) => (
//           <li key={item.title} className="mb-2">
//             <button
//               className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-200"
//               onClick={() => toggleMenu(item.title)}
//             >
//               <span className="flex items-center">
//                 {item.icon} <span className="ml-2">{item.title}</span>
//               </span>
//               {item.subItems.length > 0 && (
//                 openMenus[item.title] ? <FaAngleDown /> : <FaAngleRight />
//               )}
//             </button>
//             {openMenus[item.title] && item.subItems.length > 0 && (
//               <ul className="ml-6 mt-2 border-l border-gray-300">
//                 {item.subItems.map((subItem) => (
//                   <li key={subItem} className="p-1 pl-4 text-gray-700 hover:text-black">
//                     {subItem}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import { useState } from "react";
// import { House } from 'lucide-react';
// import { FaAngleDown, FaAngleRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const menuItems = [
//   {
//     name: "Dashboard",
//     path: "/dashboard",
//     icon: <House />,
//   },
//   {
//     name: "CRM",
//     path: "/crm",
//     subItems: [
//       { name: "Customers", path: "/crm/customers" },
//       { name: "Leads", path: "/crm/leads" },
//       { name: "Sales", path: "/crm/sales" },
//     ],
//   },
//   {
//     name: "HRM",
//     path: "/hrm",
//     subItems: [
//       { name: "Employees", path: "/hrm/employees" },
//       { name: "Attendance", path: "/hrm/attendance" },
//       { name: "Payroll", path: "/hrm/payroll" },
//     ],
//   },
//   {
//     name: "Project",
//     path: "/project",
//     subItems: [
//       { name: "Project", path: "/hrm/employees" },
//       { name: "Task", path: "/hrm/attendance" },
//       { name: "Timline", path: "/hrm/payroll" },
//     ],
//   },
// ];

// export default function Sidebar({toggleSideBar, collapsed}) {
//     // const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openMenus, setOpenMenus] = useState({});
//   console.log("collapsed", collapsed);

//   const toggleMenu = (name) => {
//     setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
//   };

//   return (
   
//     <div className={collapsed ? "w-64 min-h-screen bg-gray-100 p-4" : "w-20 bg-green-400"}>
//      {/* <div className="w-64 min-h-screen bg-gray-100 p-4" > */}
//      <div className="pt-0">
//        <p className="h-[50px]">Logo</p>
//      </div>
//      <div>
//      <ul className="pt-66px">
//         {menuItems.map((item) => (
//           <li key={item.name} className="mb-2">
        
//             <button
//               className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-200"
//               onClick={() => toggleMenu(item.name)}
//             >
//               <span className="flex items-center">
//                 <Link to={item.path} className="ml-2">{item.name}</Link>
//               </span>
//               {item.subItems && (
//                 openMenus[item.name] ? <FaAngleDown /> : <FaAngleRight />
//               )}
//             </button>
//             {openMenus[item.name] && item.subItems && (
//               <ul className="ml-6 mt-2 border-l border-gray-300">
//                 {item.subItems.map((subItem) => (
//                   <li key={subItem.name} className="p-1 pl-4 text-gray-700 hover:text-black">
//                     <Link to={subItem.path}>{subItem.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { House, Users, Calendar, BarChart3, FolderKanban, FileText } from 'lucide-react';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <House size={20} />,
  },
  {
    name: "CRM",
    path: "/crm",
    icon: <Users size={20} />,
    subItems: [
      { name: "Customers", path: "/crm/customers" },
      { name: "Leads", path: "/crm/leads" },
      { name: "Sales", path: "/crm/sales" },
    ],
  },
  {
    name: "HRM",
    path: "/hrm",
    icon: <Calendar size={20} />,
    subItems: [
      { name: "Employees", path: "/hrm/employees" },
      { name: "Attendance", path: "/hrm/attendance" },
      { name: "Payroll", path: "/hrm/payroll" },
    ],
  },
  {
    name: "Project",
    path: "/project",
    icon: <FolderKanban size={20} />,
    subItems: [
      { name: "Project", path: "/project/projects" },
      { name: "Task", path: "/project/tasks" },
      { name: "Timeline", path: "/project/timeline" },
    ],
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <BarChart3 size={20} />,
  },
  {
    name: "Documents",
    path: "/documents",
    icon: <FileText size={20} />,
  },
];

export default function Sidebar({ toggleSidebar, collapsed }) {
  const [openMenus, setOpenMenus] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = (name, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // Determine sidebar width/visibility
  const sidebarClass = collapsed 
    ? "w-16 fixed z-30 h-screen bg-white" 
    : "w-64 fixed z-30 h-screen bg-white";

  // For mobile: when expanded, show overlay
  const overlayClass = !collapsed && isMobile 
    ? "fixed inset-0 bg-black bg-opacity-50 z-20" 
    : "hidden";

  return (
    <>
      {/* Backdrop overlay for mobile */}
      <div 
        className={overlayClass} 
        onClick={() => toggleSidebar && toggleSidebar()}
      ></div>
      
      {/* Sidebar */}
      <div 
        className={`transition-all duration-300 border-r border-gray-200 ${sidebarClass}`}
      >
        {/* Logo area */}
        <div className="h-14 flex items-center justify-center border-b border-gray-200">
          {collapsed ? (
            <span className="text-blue-500 font-bold text-xl">H</span>
          ) : (
            <span className="text-blue-500 font-bold text-xl">HRMS</span>
          )}
        </div>
        
        {/* Menu items */}
        <ul className="pt-4">
          {menuItems.map((item) => (
            <li key={item.name} className="mb-1 group">
              <div className="relative">
                <Link 
                  to={item.path}
                  className={`flex items-center ${
                    collapsed ? "justify-center" : "justify-between"
                  } px-4 py-3 hover:bg-gray-100 transition-colors`}
                >
                  <div className="flex items-center">
                    <span className={`text-gray-500 ${!collapsed && "mr-3"}`}>
                      {item.icon}
                    </span>
                    {!collapsed && (
                      <span className="text-gray-700">{item.name}</span>
                    )}
                  </div>
                  
                  {!collapsed && item.subItems && (
                    <button 
                      onClick={(e) => toggleMenu(item.name, e)}
                      className="text-gray-500"
                    >
                      {openMenus[item.name] ? <FaAngleDown size={14} /> : <FaAngleRight size={14} />}
                    </button>
                  )}
                </Link>
                
                {/* Show tooltip on hover when collapsed */}
                {collapsed && (
                  <div className="absolute left-16 ml-1 top-2 z-50 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none">
                    {item.name}
                  </div>
                )}
              </div>
              
              {/* Submenu */}
              {!collapsed && openMenus[item.name] && item.subItems && (
                <ul className="bg-gray-50 py-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link 
                        to={subItem.path}
                        className="block pl-12 pr-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
      
      {/* Content spacer to push main content when sidebar is expanded */}
      <div className={collapsed ? "ml-16" : "ml-64"}>
        {/* Your main content would go here */}
      </div>
    </>
  );
}