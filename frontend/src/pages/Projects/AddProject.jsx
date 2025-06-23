import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    projectCode: "",
    clientName: "",
    contractorName: "",
    cableType: "",
    cableLength: "",
    startDistrict: "",
    endDistrict: "",
    startCity: "",
    endCity: "",
    startDate: "",
    endDate: "",
    projectStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const newProject = {
    ...formData,
    createdAt: new Date().toLocaleString(),
  };

  const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
  const updatedProjects = [...existingProjects, newProject];
  localStorage.setItem("projects", JSON.stringify(updatedProjects));

  console.log("Project saved:", updatedProjects); // 👈 debug

  // Reset form
  setFormData({
    projectName: "",
    projectCode: "",
    clientName: "",
    contractorName: "",
    cableType: "",
    cableLength: "",
    startDistrict: "",
    endDistrict: "",
    startCity: "",
    endCity: "",
    startDate: "",
    endDate: "",
    projectStatus: "",
  });

  // Navigate to project list
  navigate("/projects");
};


  return (
    <div className="bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-8">
        <h2 className="text-2xl font-bold mb-6">Add New Project</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Project Name", name: "projectName" },
            { label: "Project Code", name: "projectCode" },
            { label: "Client Name", name: "clientName" },
            { label: "Contractor Name", name: "contractorName" },
            { label: "Cable Type", name: "cableType" },
            { label: "Length of Cable", name: "cableLength", type: "number" },
            { label: "Start Destination District", name: "startDistrict" },
            { label: "End Destination District", name: "endDistrict" },
            { label: "Start Destination City", name: "startCity" },
            { label: "End Destination City", name: "endCity" },
            { label: "Start Date", name: "startDate", type: "date" },
            { label: "Completion Date", name: "endDate", type: "date" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block mb-1 font-medium">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                className="border p-2 rounded w-full"
                required
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Project Status</label>
            <select
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select Project Status</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>

          <div className="md:col-span-2 text-right mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
