import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/login'; // Capitalized
import SidebarWithDrawer from './pages/Sidebar/Sidebar';

import AdminDashboard from './pages/Dashboard/AdminDashboard';
import ClientDashboard from './pages/Dashboard/ClientDashboard';
import EmployeeDashboard from './pages/Dashboard/EmployeeDashboard';  
import SetPassword from './pages/SetPassword/SetPassword';
import AddClient from './pages/AddClient/AddClient';  

import Projects from './pages/Projects/Projects';
import Settings from './pages/Settings/Settings'; 
import Users from './pages/Users/Users';
import ProjectDashboard from './pages/Projects/ProjectDashboard';
import ManpowerManagement from './pages/Projects/ProjectModules/ManpowerManagement/ManpowerManagement_name';
import Manpower from './pages/Projects/ProjectModules/ManpowerManagement/Manpower';
import AddNewManpower from "./pages/Projects/ProjectModules/ManpowerManagement/Addnewmanpower";
import Contractor from './pages/Projects/ProjectModules/ManpowerManagement/Contractor';
import CableSchedule from './pages/Projects/ProjectModules/CableSchedule/CableSchedule';
import MaterialList from './pages/Projects/ProjectModules/MaterialList/MaterialList';
import Addmaterial from "./pages/Projects/ProjectModules/MaterialList/Addmaterial";
import ACDBCableSchedule from "./pages/Projects/ProjectModules/CableSchedule/ACDBCableSchedule";
import DCSideCableSchedule from "./pages/Projects/ProjectModules/CableSchedule/DCSideCableSchedule";
import AddProject from './pages/Projects/AddProject';
import ManpowerManagementName from './pages/Projects/ProjectModules/ManpowerManagement/ManpowerManagement_name';
import Addnewcontractor from './pages/Projects/ProjectModules/ManpowerManagement/Addnewcontractor';

const Layout = () => {
  const location = useLocation();

  // Show sidebar only when not on /login
  const hideSidebar = location.pathname === '/login';

  return (
     <div style={{ display: 'flex', minHeight: '100vh' }}>
      {!hideSidebar && <SidebarWithDrawer />}
      <div style={{ flex: 1, padding: '1.5rem' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/setpassword" element={<SetPassword />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/clientdashboard" element={<ClientDashboard/>} />
          <Route path="/employeedashboard" element={<EmployeeDashboard/>} />
          <Route path="/addclient" element={<AddClient/>} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projects/:id" element={<ProjectDashboard />} />
          <Route path="/manpowermanagement_name" element={<ManpowerManagementName />} />
          <Route path="/addnewmanpower/:type" element={<AddNewManpower />} />
          <Route path="/manpower" element={<Manpower />} />
          <Route path="/contractor" element={<Contractor />} />
          <Route path="/cableschedule" element={<CableSchedule />} />
          <Route path="/projects/:id/materialmanagment" element={<MaterialList />} />
          <Route path="/add-new-bom" element={<Addmaterial />} />
          <Route path="/acdbcableschedule" element={<ACDBCableSchedule />} />
          <Route path="/dcsidecableschedule" element={<DCSideCableSchedule />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/addnewcontractor" element={<Addnewcontractor />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
