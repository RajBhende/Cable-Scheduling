import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const Addequipment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    machineryType: "",
    totalUnits: "",
    contractorName: "",
    assignedNumbers: "",
    assignedDate: "",
    returnDate: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);

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
                 <h3 className="text-xl font-semibold text-gray-800">Add Equipment Details</h3>
               </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

             <div>
            <label className="block mb-1 font-medium">Equipment Code</label>
            <input
              type="text"
              name="equipmentcode"
              placeholder="Enter Equipment Code"
              value={formData.equipmentcode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Equipment Type</label>
            <input
              type="text"
              name="equipmentType"
              placeholder="Enter Equipment Type"
              value={formData.equipmentType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Total Unit(No's)</label>
            <input
              type="number"
              name="totalUnits"
              placeholder="Enter Quantity"
              value={formData.totalUnits}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Contractor Name</label>
            <input
              type="text"
              name="contractorName"
              placeholder="Enter Contractor Name"
              value={formData.contractorName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

            <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Assigned Numbers</label>
            <input
              type="text"
              name="assignedNumbers"
              placeholder="Enter Assigned Numbers"
              value={formData.assignedNumbers}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Assigned Date</label>
            <input
              type="date"
              name="assignedDate"
              value={formData.assignedDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Returned Date</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Remarks</label>
          <textarea
            name="remarks"
            placeholder="Enter remarks..."
            value={formData.remarks}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addequipment;
