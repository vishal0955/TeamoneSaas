import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../layout/Layout";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import SuperAdminDashboard from "../pages/Super Admin/SuperAdminDashboard";
import ClientDashboard from "../components/dashboard/ClientDashboard";
import ManagerDashboard from "../components/dashboard/ManagerDashboard";
import EmployeeDashboard from "../components/dashboard/EmployeeDashboard";
import Policy from "../components/AdminHRM/Policy";
import Login from "../authentication/Login";
import NotFound from "../authentication/NotFound";
import Todo from "../components/adminApplication/Todo/Todo";
import High_todo from "../components/adminApplication/Todo/High_todo";
import Medium_todo from "../components/adminApplication/Todo/Medium_todo";
import Low_todo from "../components/adminApplication/Todo/Low_todo";
import SuperAdminLayout from "../layout/SuperAdminLayout";
import EmployeeList from "../components/AdminHRM/EmployeeList";
import Attendance from "../components/AdminHRM/Attendance";
import Plans from "../pages/Super Admin/Plans";
import Document from "../components/AdminHRM/Document";
import WorkDetails from "../components/AdminHRM/WorkDetails";
import UserInfo from "../pages/Super Admin/UserInfo";
import OrderPlan from "../pages/Super Admin/OrderPlan";
import PlanRequest from "../pages/Super Admin/PlanRequest";
import Setting from "../pages/Super Admin/Setting";
import Project from "../components/Project/Project";
import TaskListExample from "../pages/TaskListExample";
import TaskManagementTable from "../components/adminApplication/Todo/Takslist";
// import TodoList from "../components/ToDo/TodoList";
import TodoApp from "../components/ToDo/TodoApp";
import PerformanceAppraisal from "../components/AdminPerformance/PerformanceAppraisal";
import EmployeeGrid from "../components/AdminHRM/EmployeeGrid";
import EmployeeDetails from "../components/AdminHRM/EmployeeDetails";
import Department from "../components/AdminHRM/Department";
import Designations from "../components/AdminHRM/Designations";
import PerformanceIndicator from "../components/AdminPerformance/PerformanceIndicator";
import TaskList from "../components/Task/Task";
import TaskDetail from "../components/Task/TaskDetail";
import AddTask from "../components/Task/AddTask";
import Task from "../components/Task/Task";

import NotesList from "../components/Notes/NotesList";
import NotesGrid from "../components/Notes/NotesGrid";

import AttendanceAdmin from "../components/AdminHRM/Attendance/AttendanceAdmin";
import Holidays from "../components/AdminHRM/Holiday";
import Timesheet from "../components/AdminHRM/Timesheet/Timesheet";
import LeaveSetting from "../components/AdminHRM/Leave/LeaveSetting";
import Leave from "../components/AdminHRM/Leave/LeaveList";
import Overtime from "../components/AdminHRM/Leave/Overtime";
import CustomPolicyModal from "../components/AdminHRM/Leave/CustomPolicyform";
import Contacts from "../components/crmold/Contacts";
// import Companies from "../components/crmold/Companies";
import Leads from "../components/crmold/Leads";
import Deal from "../components/crmold/Deal";
import Pipeline from "../components/crmold/Pipeline";

import Job from "../components/Recruitment/Job";
import Schedule from "../components/AdminHRM/Timesheet/Schedule";
import Candidate from "../components/Recruitment/Candidate";
import Activity from "../components/crmold/Activity";
import Refferal from "../components/Recruitment/Refferal";
import Users from "../usermanagement/users";
import CRMDashboard from "../components/crm/dashboard/CRMDashboard";
import Analytics from "../components/crm/dashboard/Analytics";
import ContactsList from "../components/crm/contact/Contact";
import ShiftRoster from "../components/AdminHRM/ShiftRoster/ShiftRoster";
import EmployeeSalary from "../components/AdminHRM/Payroll/EmployeeSalary";
import ContactDetailPage from "../components/crm/contact/ContactCard";
import Company from "../components/crm/companies/Company";
import CompanyDetails from "../components/crm/companies/CompanyDetails";
import AllQuotes from "../components/crm/allquotes/AllQuotes";
import AllInvoice from "../components/crm/invoice/AllInvoice";
import SalesDashboard from "../components/crm/deals/DealsKanban";
import DealDetails from "../components/crm/deals/DealDetails";
import PaymentList from "../components/crm/Payment/PaymentList";
import NewInvoice from "../components/crm/invoice/NewInvoice";


const RoleBasedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/not-found" element={<NotFound />} />

      <Route path="/superadmin" element={<SuperAdminLayout />}>
        <Route index element={<SuperAdminDashboard />} />
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="plans" element={<Plans />} />
        <Route path="user_info" element={<UserInfo />} />
        <Route path="order_plan" element={<OrderPlan />} />
        <Route path="plan_request" element={<PlanRequest />} />
        <Route path="settings" element={<Setting />} />
      </Route>

      <Route element={<Layout />}>
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/todo" element={<TodoApp />} />

        {/* Notes Route  */}
        <Route path="/notesgrid" element={<NotesGrid />} />
        <Route path="/noteslist" element={<NotesList />} />

        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/project/projects" element={<Project />} />
        <Route path="/project/task" element={<Task />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/addtask" element={<AddTask />} />

        {/* crm-section */}
        <Route path="/crm/customers" element={<ContactsList />} />
        <Route path="/crm/contacts" element={<ContactsList/>} />
        <Route path="/crm/contactdetails" element={<ContactDetailPage />} />


        <Route path="/crm/companies" element={<Company />} />
        <Route path="/crm/companydetails" element={<CompanyDetails />} />


        {/* <Route path="/crm/customers" element={<ContactsList/>} />
        <Route path="/crm/companies" element={<Companies />} />
        <Route path="/crm/leads" element={<Leads />} />
        <Route path="/crm/deals" element={<Deal />} />
        <Route path="/crm/pipeline" element={<Pipeline />} />
      
        <Route path="/crm/activities" element={<Activity />} /> */}


        <Route path="/crm/quotes" element={<AllQuotes />} /> 
        <Route path="/crm/invoices" element={<AllInvoice />} /> 
        <Route path="/crm/analytics" element={<Analytics />} />

        
        <Route path="/crm/deals" element={<SalesDashboard />} />
        <Route path="/crm/dealdetails" element={<DealDetails />} />
  
        <Route path="/crm/Payment" element={<PaymentList />} /> 



        {/*  CRM Routes  */}

        <Route path="/crm/dashboard" element={<CRMDashboard />} />

        {/* crm-section */}
        {/* recruitment */}
        <Route path="/recruitment/jobs" element={<Job />} />
        <Route path="/recruitment/candidates" element={<Candidate />} />
        <Route path="/recruitment/refferals" element={<Refferal />} />
        {/* recruitment */}

        {/* <Route path="/todolist" element={<TodoList />} /> */}
        <Route path="/tasklist" element={<TaskListExample />} />

        <Route path="/employeegrid" element={<EmployeeGrid/>} />
        <Route
          path="/employeelist"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <EmployeeList></EmployeeList>
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/:id"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <EmployeeDetails></EmployeeDetails>
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/employeedetails"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <EmployeeDetails></EmployeeDetails>
            </ProtectedRoute>
          }
        /> */}

        {/* <Route path="/tasklist" element={<TaskListExample />} /> */}
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="/tasklist" element={<TaskListExample />} />

        <Route
          path="/hrm/attendance/shift_schedule"
          element={<Schedule />}
        ></Route>

        <Route
          path="/shiftroster"
          element={<ShiftRoster></ShiftRoster>}
        ></Route>

        <Route
          path="/performanceindicator"
          element={<PerformanceIndicator></PerformanceIndicator>}
        ></Route>

        <Route
          path="/employeesalary"
          element={<EmployeeSalary></EmployeeSalary>}
        ></Route>
        <Route
          path="/performaceappraisal"
          element={<PerformanceAppraisal></PerformanceAppraisal>}
        ></Route>

        <Route
          path="/employee/:id"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <EmployeeDetails></EmployeeDetails>
            </ProtectedRoute>
          }
        />
        <Route
          path="/workdetails"
          element={<WorkDetails></WorkDetails>}
        ></Route>

        <Route path="/document" element={<Document></Document>}></Route>
        <Route path="/attendance" element={<Attendance></Attendance>}></Route>

        {/*  lave */}
        <Route path="/hrm/attendance/leaves" element={<Leave />} />

        <Route
          path="/hrm/attendance/list"
          element={<AttendanceAdmin />}
        ></Route>

        <Route
          path="/department"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <Department></Department>
            </ProtectedRoute>
          }
        />
        <Route
          path="/designations"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <Designations></Designations>
            </ProtectedRoute>
          }
        />

        <Route path="/hrm/holiday" element={<Holidays />}></Route>

        <Route path="/hrm/attendance/timesheet" element={<Timesheet />} />

        <Route
          path="/hrm/attendance/leave_settings"
          element={<LeaveSetting />}
        />

        <Route path="/hrm/attendance/overtime" element={<Overtime />} />

        <Route path="/addcustompolicy" element={<CustomPolicyModal />}></Route>

        <Route path="/tasklist1" element={<TaskManagementTable />} />
        <Route path="/projectlist" element={<Project />} />

        <Route path="/high" element={<High_todo></High_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/Medium" element={<Medium_todo></Medium_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/Low" element={<Low_todo></Low_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
     

        {/* Administration */}

        <Route
          path="/admininistration/user_management/users"
          element={<Users />}
        />

        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoleBasedRoutes;
