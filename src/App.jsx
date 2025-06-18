
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Users from './pages/Users';
import ProjectDashboard from './pages/ProjectDashboard';
import CableSchedule from './pages/Materialmanagementmodule/CableSchedule';
import MaterialList from './pages/Materialmanagementmodule/MaterialList';
import Addmaterial from "./pages/Materialmanagementmodule/Addmaterial";
import ACDBCableSchedule from "./pages/Materialmanagementmodule/ACDBCableSchedule";
import DCSideCableSchedule from "./pages/Materialmanagementmodule/DCSideCableSchedule";
import AddProject from './pages/AddProject';

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
            <Route path="/cableschedule" element={<CableSchedule />} />
            <Route path="/projects/:id/materialmanagment" element={<MaterialList />} />
            <Route path="/add-new-bom" element={<Addmaterial />} />
            <Route path="/acdbcableschedule" element={<ACDBCableSchedule />} />
            <Route path="/dcsidecableschedule" element={<DCSideCableSchedule/>} />
            <Route path="/addproject" element={<AddProject />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
