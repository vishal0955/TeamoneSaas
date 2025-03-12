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

import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: 'smart-home',
  },
  {
    name: "CRM",
    path: "/crm",
    subItems: [
      { name: "Customers", path: "/crm/customers" },
      { name: "Leads", path: "/crm/leads" },
      { name: "Sales", path: "/crm/sales" },
    ],
  },
  {
    name: "HRM",
    path: "/hrm",
    subItems: [
      { name: "Employees", path: "/hrm/employees" },
      { name: "Attendance", path: "/hrm/attendance" },
      { name: "Payroll", path: "/hrm/payroll" },
    ],
  },
];

export default function Sidebar({toggleSideBar, collapsed}) {
    // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  console.log("collapsed", collapsed);

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
   
    <div className={collapsed ? "w-64 min-h-screen bg-gray-100 p-4" : "w-4 bg-green-400"}>
     {/* <div className="w-64 min-h-screen bg-gray-100 p-4" > */}
     <ul>
        {menuItems.map((item) => (
          <li key={item.name} className="mb-2">
            <button
              className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-200"
              onClick={() => toggleMenu(item.name)}
            >
              <span className="flex items-center">
                <Link to={item.path} className="ml-2">{item.name}</Link>
              </span>
              {item.subItems && (
                openMenus[item.name] ? <FaAngleDown /> : <FaAngleRight />
              )}
            </button>
            {openMenus[item.name] && item.subItems && (
              <ul className="ml-6 mt-2 border-l border-gray-300">
                {item.subItems.map((subItem) => (
                  <li key={subItem.name} className="p-1 pl-4 text-gray-700 hover:text-black">
                    <Link to={subItem.path}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}



