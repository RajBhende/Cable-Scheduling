import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

const AddInventory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "Test Project ltd",
    inventoryNumber: "",
    productName: "",
    productType: "",
    productPrice: "",
    quantityOrdered: "",
    quantityUsed: "",
    shortSurplusQty: "",
    createdBy: "",
    location: "",
    productCategory: "",
    unit: "",
    vendorName: "",
    totalQuantity: "",
    quantityReceived: "",
    quantityRemaining: "",
    dateTime: new Date().toLocaleString(),
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
    console.log("Form Data:", formData);
    //formData to backend API
  };
  
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">
            <HiArrowLeft className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-semibold">Inventory Management</h3>
        </div>
        {/* <button
          onClick={() => navigate("/inventory-list")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Inventory List
        </button> */}
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold mb-4">Add Inventory Details</h4>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Project Name</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                readOnly
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-medium">Inventory Number</label>
              <input
                type="text"
                name="inventoryNumber"
                value={formData.inventoryNumber}
                onChange={handleChange}
                placeholder="Enter inventory number"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Product Type</label>
              <input
                type="text"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                placeholder="Enter product type"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Product Price</label>
              <input
                type="text"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleChange}
                placeholder="Enter product price"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Quantity Ordered</label>
              <input
                type="text"
                name="quantityOrdered"
                value={formData.quantityOrdered}
                onChange={handleChange}
                placeholder="Enter quantity ordered"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Quantity Used</label>
              <input
                type="text"
                name="quantityUsed"
                value={formData.quantityUsed}
                onChange={handleChange}
                placeholder="Enter quantity used"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Short/Surplus Quantity</label>
              <input
                type="text"
                name="shortSurplusQty"
                value={formData.shortSurplusQty}
                onChange={handleChange}
                placeholder="Enter short/surplus quantity"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Created By</label>
              <input
                type="text"
                name="createdBy"
                value={formData.createdBy}
                onChange={handleChange}
                placeholder="Enter created by"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="">Select tower location</option>
                <option value="Tower A">Tower A</option>
                <option value="Tower B">Tower B</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Product Category</label>
              <input
                type="text"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                placeholder="Enter product category"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Unit of Measurement</label>
              <input
                type="text"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                placeholder="Enter unit of measurement"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Vendor Name</label>
              <input
                type="text"
                name="vendorName"
                value={formData.vendorName}
                onChange={handleChange}
                placeholder="Enter vendor name"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Total Quantity</label>
              <input
                type="text"
                name="totalQuantity"
                value={formData.totalQuantity}
                onChange={handleChange}
                placeholder="Enter total quantity"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Quantity Received</label>
              <input
                type="text"
                name="quantityReceived"
                value={formData.quantityReceived}
                onChange={handleChange}
                placeholder="Enter quantity received"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Quantity Remaining</label>
              <input
                type="text"
                name="quantityRemaining"
                value={formData.quantityRemaining}
                onChange={handleChange}
                placeholder="Enter quantity remaining"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Date & Time</label>
              <div className="relative">
                <input
                  type="text"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded pl-10"
                />
                <FaCalendarAlt className="absolute top-3 left-3 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Inventory
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInventory;
