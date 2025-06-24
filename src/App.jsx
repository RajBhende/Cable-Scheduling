import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
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
import Smallview from './pages/Projects/ViewDropdown/Smallview';
import Listview from './pages/Projects/ViewDropdown/Listview';
import Cablesummary from './pages/Projects/ProjectModules/CableSummary/Cablesummary';
import ACDBSummary from './pages/Projects/ProjectModules/CableSummary/ACDBSummary';
import DCSideSummary from './pages/Projects/ProjectModules/CableSummary/DCSideSummary';

const App = () => {
  return (
    <BrowserRouter> 
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '1.5rem' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
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
            <Route path="/smallview" element={<Smallview />} />
            <Route path="/listview" element={<Listview/>} />
            <Route path="/cablesummary" element={<Cablesummary/>} />
            <Route path="/acdbsummary" element={<ACDBSummary/>} />
            <Route path="/dcsidecablesummary" element={<DCSideSummary/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
