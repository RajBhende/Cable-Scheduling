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


















// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="p-4">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center gap-2 text-gray-700 mb-4">
//           <FaBars
//             className="text-2xl cursor-pointer"
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           />
//           <h5 className="text-base font-medium px-4 py-2 rounded-md hover:bg-gray-200">
//             Dashboard
//           </h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



//         {/* <div>
//           <span className="text-sm text-gray-800 font-medium">
//             Welcome, <span className="font-semibold">monali.kalyani@nppmt.com</span>
//           </span>
//         </div>
//       </div> */}

//       {/* Cards Section */}
//       {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"> */}
//         {/* Total Projects */}
//         {/* <div className="bg-white shadow-md rounded-lg p-4 border">
//           <h2 className="text-lg font-medium mb-2">Total Projects</h2>
//           <div className="text-3xl font-bold">6</div>
//           <p className="text-sm text-gray-600 mb-2">of 10 allowed</p>
//           <div className="h-2 bg-gray-200 rounded-full">
//             <div className="h-2 bg-blue-600 rounded-full w-[60%]" />
//           </div>
//         </div> */}

//         {/* Total Users */}
//         {/* <div className="bg-white shadow-md rounded-lg p-4 border">
//           <h2 className="text-lg font-medium mb-2">Total Users</h2>
//           <div className="text-3xl font-bold">9</div>
//           <p className="text-sm text-gray-600 mb-2">of 12 allowed</p>
//           <div className="h-2 bg-gray-200 rounded-full">
//             <div className="h-2 bg-green-600 rounded-full w-[75%]" />
//           </div>
//         </div>
//       </div> */}

//       {/* Add New User Form */}
//       {/* <div className="bg-white shadow-md rounded-lg p-6 border">
//         <h2 className="text-lg font-semibold mb-4">Add New User</h2>

//         <form className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <div className="flex items-center gap-2">
//             <input type="checkbox" id="viewOnly" />
//             <label htmlFor="viewOnly" className="text-sm">
//               Make this user view only
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Add User
//           </button>
//         </form>
//       </div> */}
