import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Auth & Dashboard Pages
import Login from './pages/Login/login';
import SetPassword from './pages/SetPassword/SetPassword';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import ClientDashboard from './pages/Dashboard/ClientDashboard';
import EmployeeDashboard from './pages/Dashboard/EmployeeDashboard';

// Sidebar
import SidebarWithDrawer from './pages/Sidebar/Sidebar';

// Core Pages
import Projects from './pages/Projects/Projects';
import Settings from './pages/Settings/Settings';
import Users from './pages/Users/Users';
import AddClient from './pages/AddClient/AddClient';
  
// Project Details
import ProjectDashboard from './pages/Projects/ProjectDashboard';
import AddProject from './pages/Projects/AddProject';
import Smallview from './pages/Projects/ViewDropdown/Smallview';
import Listview from './pages/Projects/ViewDropdown/Listview';

// Modules - Manpower
import ManpowerManagementName from './pages/Projects/ProjectModules/ManpowerManagement/ManpowerManagement_name';
import AddNewManpower from './pages/Projects/ProjectModules/ManpowerManagement/Addnewmanpower';
import Manpower from './pages/Projects/ProjectModules/ManpowerManagement/Manpower';
import Contractor from './pages/Projects/ProjectModules/ManpowerManagement/Contractor';
import Addnewcontractor from './pages/Projects/ProjectModules/ManpowerManagement/Addnewcontractor';

// Modules - Material
import MaterialList from './pages/Projects/ProjectModules/MaterialList/MaterialList';
import Addmaterial from './pages/Projects/ProjectModules/MaterialList/Addmaterial';

// Modules - Cable Schedule
import CableSchedule from './pages/Projects/ProjectModules/CableSchedule/CableSchedule';
import ACDBCableSchedule from './pages/Projects/ProjectModules/CableSchedule/ACDBCableSchedule';
import DCSideCableSchedule from './pages/Projects/ProjectModules/CableSchedule/DCSideCableSchedule';

// Modules - Cable Summary
import Cablesummary from './pages/Projects/ProjectModules/CableSummary/Cablesummary';
import ACDBSummary from './pages/Projects/ProjectModules/CableSummary/ACDBSummary';
import DCSideSummary from './pages/Projects/ProjectModules/CableSummary/DCSideSummary';


// Modules - Equipment Management
import EquipmentDashboard from './pages/Projects/ProjectModules/EquipmentManagement/Equipmentdashboard';
import Addequipment from './pages/Projects/ProjectModules/EquipmentManagement/Addequipment';


import Statutoryclearancelist from './pages/Projects/ProjectModules/StatutoryClearance/Statutoryclearancelist';
// import EditStatutory from './pages/Projects/ProjectModules/StatutoryClearance/EditStatutory';



import Addinspection from './pages/Projects/ProjectModules/SafetyInspection/Addinspection';
import Safetydashboard from './pages/Projects/ProjectModules/SafetyInspection/Safetydashboard';

const Layout = () => {
  const location = useLocation();
  const hideSidebar = location.pathname === '/login';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {!hideSidebar && <SidebarWithDrawer />}
      <div style={{ flex: 1, padding: '1.5rem' }}>
        <Routes>
          {/* Auth & Redirects */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setpassword" element={<SetPassword />} />

          {/* Dashboards */}
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/clientdashboard" element={<ClientDashboard />} />
          <Route path="/employeedashboard" element={<EmployeeDashboard />} />

          {/* Pages */}
          <Route path="/addclient" element={<AddClient />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />

          {/* Project Details */}
          <Route path="/projects/:id" element={<ProjectDashboard />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/smallview" element={<Smallview />} />
          <Route path="/listview" element={<Listview />} />

          {/* Manpower Module */}
          <Route path="/manpowermanagement_name" element={<ManpowerManagementName />} />
          <Route path="/addnewmanpower/:type" element={<AddNewManpower />} />
          <Route path="/manpower" element={<Manpower />} />
          <Route path="/contractor" element={<Contractor />} />
          <Route path="/addnewcontractor" element={<Addnewcontractor />} />

          {/* Material Module */}
          <Route path="/materiallist" element={<MaterialList />} />
          <Route path="/add-new-bom" element={<Addmaterial />} />

          {/* Cable Schedule */}
          <Route path="/cableschedule" element={<CableSchedule />} />
          <Route path="/acdbcableschedule" element={<ACDBCableSchedule />} />
          <Route path="/dcsidecableschedule" element={<DCSideCableSchedule />} />

          {/* Cable Summary */}
          <Route path="/cablesummary" element={<Cablesummary />} />
          <Route path="/acdbsummary" element={<ACDBSummary />} />
          <Route path="/dcsidecablesummary" element={<DCSideSummary />} />


          <Route path="/equipmentdashboard" element={<EquipmentDashboard />} />
          <Route path="/addequipment" element={<Addequipment />} />


          <Route path="/statutoryclearancelist" element={<Statutoryclearancelist/> } />


          <Route path="/safetydashboard" element={<Safetydashboard/>} />
          <Route path="/addinspection" element={<Addinspection />} />
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