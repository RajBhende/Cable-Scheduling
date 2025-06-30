import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const Addinspection = () => {
  const [activeTab, setActiveTab] = useState("safe");
 const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    location: "",
    department: "",
    personName: "",
    category: "Appearance",
    subCategory: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
         {/* Back Button */}
              <div className="mb-6 flex items-center gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="text-blue-700 text-lg hover:underline flex items-center"
                >
                  <HiArrowLeft className="w-6 h-6" />
                </button>
                <h3 className="text-xl font-semibold text-gray-800">Safety Observation</h3>
              </div>
        
              {/* <h4 className="text-lg font-semibold mb-3">
                Project Title:{" "}
                <span className="text-gray-700 font-normal">
                  Two-core Multipurpose Power Cable Line
                </span>
              </h4> */}

 

      {/* Tabs */}
      <div className="mb-6 border-b">
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === "safe"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600"
          }`}
          onClick={() => setActiveTab("/safeobservation")}
        >
          Safe Observation
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === "unsafe"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600"
          }`}
          onClick={() => navigate("/unsafeobservation")}
        >
          Unsafe Observation
        </button>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Project Name</label>
          <select
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select</option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select</option>
            <option value="Site 1">Site 1</option>
            <option value="Site 2">Site 2</option>
          </select>
        </div>

   <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="personName"
            value={formData.date}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
     

        <div>
          <label className="block mb-1 font-medium">Inspected By</label>
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Appearance">Appearance</option>
            <option value="Behavior">Behavior</option>
          </select>
        </div> */}

          <div>
          <label className="block mb-1 font-medium">Name of Authorized person</label>
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

{/* 
        <div>
          <label className="block mb-1 font-medium">Sub-Category</label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select</option>
            <option value="Helmet">Helmet</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div> */}
      </form>

      {/* Remarks */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          rows={3}
        />
      </div>

      {/* Buttons */}
      {/* <div className="flex gap-3">
        <button type="button" className="bg-green-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" className="bg-red-600 text-white px-4 py-2 rounded">
          Delete
        </button>
        <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add
        </button>
      </div> */}
    </div>
  );
};

export default Addinspection;
