import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const Addnewmanpower = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const isContractor = type === "contractor";

  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    position: "",
    designation: "",
    laborCount: "",
    laborStage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      createdAt: new Date().toLocaleString(),
      createdBy: isContractor ? "Contractor Module" : "Manpower Module",
      actions: "Edit | Delete",
    };

    const key = isContractor ? "contractorData" : "manpowerData";
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    existing.push(updatedData);
    localStorage.setItem(key, JSON.stringify(existing));

    setTimeout(() => {
      navigate(`/${type}`);
    }, 100);
  };

  return (
    <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
      <div className="fixed top-10 left-[270px] right-4 bg-gray-100 border z-50 px-4 py-2">
        <div className="flex items-center space-x-2">
          <IoMdArrowBack
            className="h-5 w-5 cursor-pointer hover:text-blue-600"
            onClick={() => navigate(-1)}
          />
          <span className="text-base font-medium">
            Add New {isContractor ? "Contractor" : "Manpower"}
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="fixed top-30 left-[270px] right-4 bg-gray-100 border z-50 px-4 py-2"
      >
        <div className="flex flex-col space-y-1.5 mb-4">
          <h5 className="text-xl font-semibold">
            {isContractor ? "Contractor" : "Manpower"} Details
          </h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>

          {/* Project Name */}
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Enter project name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>

          {/* Position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <select
              name="position"
              id="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            >
              <option value="">Select position</option>
              <option value="Engineer">Engineer</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Technician">Technician</option>
            </select>
          </div>

          {/* Designation */}
          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
              Designation
            </label>
            <select
              name="designation"
              id="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            >
              <option value="">Select designation</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Lead">Lead</option>
            </select>
          </div>

          {/* Labor Count */}
          <div>
            <label htmlFor="laborCount" className="block text-sm font-medium text-gray-700 mb-1">
              Labor Count
            </label>
            <input
              type="number"
              name="laborCount"
              id="laborCount"
              value={formData.laborCount}
              onChange={handleChange}
              placeholder="Enter number of labors"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
              min={1}
            />
          </div>

          {/* Labor Stage */}
          <div>
            <label htmlFor="laborStage" className="block text-sm font-medium text-gray-700 mb-1">
              Labor Stage
            </label>
            <select
              name="laborStage"
              id="laborStage"
              value={formData.laborStage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            >
              <option value="">Select stage</option>
              <option value="Start Stage">Start Stage</option>
              <option value="Mid Stage">Mid Stage</option>
              <option value="End Stage">End Stage</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add {isContractor ? "Contractor" : "Manpower"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addnewmanpower;
