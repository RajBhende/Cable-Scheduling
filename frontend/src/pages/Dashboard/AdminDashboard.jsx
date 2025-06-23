import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">👋 Welcome, Admin</h1>

      <p className="text-gray-600 mb-8">
        You have full control over the platform. Manage clients, users, and view overall system activity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Clients</h2>
          <p className="text-2xl font-bold text-blue-500 mt-2">12</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700">Active Projects</h2>
          <p className="text-2xl font-bold text-green-500 mt-2">8</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700">Employees Added</h2>
          <p className="text-2xl font-bold text-purple-500 mt-2">25</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          className="bg-blue-600 text-white py-3 rounded-lg font-medium shadow hover:bg-blue-700"
          onClick={() => handleNavigate("/addclient")}
        >
          ➕ Add New Client
        </button>
        <button
          className="bg-green-600 text-white py-3 rounded-lg font-medium shadow hover:bg-green-700"
          onClick={() => handleNavigate("/projects")}
        >
          📁 View All Projects
        </button>
        <button
          className="bg-gray-700 text-white py-3 rounded-lg font-medium shadow hover:bg-gray-800"
          onClick={() => handleNavigate("/settings")}
        >
          ⚙️ Settings
        </button>
      </div>
    </div>
  
  );
}
