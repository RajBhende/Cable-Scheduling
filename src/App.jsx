import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Users from './pages/Users';
import ProjectDashboard from './pages/ProjectDashboard';
import ManpowerManagement from './pages/ManpowerManagement/ManpowerManagement_name';
import 'bootstrap/dist/css/bootstrap.min.css';
import Manpower from './pages/ManpowerManagement/manpower';
import AddNewManpower from "./pages/ManpowerManagement/Addnewmanpower";
import Contractor from './pages/ManpowerManagement/contractor';



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
            <Route path="/manpowermanagement_name" element={<ManpowerManagement />} />
            <Route path="/addnewmanpower" element={<AddNewManpower />} />
            <Route path="/manpower" element={< Manpower />} />
            <Route path="/contractor" element={< Contractor />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
