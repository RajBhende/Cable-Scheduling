import React from "react";

const AddProject = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-8">
        <h2 className="text-2xl font-bold mb-6 ">Add New Project</h2>
        <br></br>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Project Name</label>
            <input type="text" placeholder="Enter Project Name" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Project Code</label>
            <input type="text" placeholder="Enter Project Code Name" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Client Name</label>
            <input type="text" placeholder="Enter Project Client Name" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Contractor Name</label>
            <input type="text" placeholder="Enter Contractor Name" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Cable Type</label>
            <input type="text" placeholder="Enter Cable Line Type" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Length of Cable</label>
            <input type="number" placeholder="Enter Total Length of Cable" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Start Destination District</label>
            <input type="text" placeholder="Enter Start Destination" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block mb-1 font-medium">End Destination Disterict</label>
            <input type="text" placeholder="Enter End Destination" className="border p-2 rounded w-full" />
          </div>

 <div>
            <label className="block mb-1 font-medium">Start Destination City</label>
            <input type="text" placeholder="Enter Start Destination City" className="border p-2 rounded w-full" />
          </div>

           <div>
            <label className="block mb-1 font-medium">Start Destination City</label>
            <input type="text" placeholder="Enter End Destination City" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input type="date" className="border p-2 rounded w-full" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Completion Date</label>
            <input type="date" className="border p-2 rounded w-full" />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Project Status</label>
            <select className="border p-2 rounded w-full">
              <option value="">Select Project Status</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
        </form>

        <div className="mt-6 text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
