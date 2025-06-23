import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Manpower = () => {
  const navigate = useNavigate();
  const [manpowerList, setManpowerList] = useState([]);

  // Load data from localStorage when page loads
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("manpowerData")) || [];
    setManpowerList(storedData);
  }, []);

  // Delete handler
  const handleDelete = (indexToDelete) => {
    const updatedList = manpowerList.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("manpowerData", JSON.stringify(updatedList));
    setManpowerList(updatedList);
  };

  return (
  <div className="p-6 max-w-7xl mx-auto">
  <div className="flex items-center justify-between mb-4">
    <h5 className="text-xl font-bold">Manpower List</h5>
    <Button variant="primary" onClick={() => navigate("/addnewmanpower/manpower")}>
      Add New Manpower
    </Button>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border border-gray-300 text-sm">
      <thead className="bg-gray-200 text-left">
        <tr>
          <th className="border px-2 py-1 w-10">Sr.No</th>
          <th className="border px-2 py-1">Name</th>
          <th className="border px-2 py-1">Company Name</th>
          <th className="border px-2 py-1">Project Name</th>
          <th className="border px-2 py-1">Position</th>
          <th className="border px-2 py-1">Designation</th>
          <th className="border px-2 py-1 w-20">Manpower Count</th>
          <th className="border px-2 py-1 w-24">Project Stage</th>
          <th className="border px-2 py-1 w-24">Created By</th>
          <th className="border px-2 py-1 w-28">Created At</th>
          <th className="border px-2 py-1 w-32">Actions</th>
        </tr>
      </thead>

            <tbody>
              {manpowerList.map((person, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{person.name}</td>
                  <td className="border px-4 py-2">{person.projectName}</td>
                  <td className="border px-4 py-2">{person.position}</td>
                  <td className="border px-4 py-2">{person.designation}</td>
                  <td className="border px-4 py-2">{person.laborCount || "-"}</td>
                  <td className="border px-4 py-2">{person.laborStage || "-"}</td>
                  <td className="border px-4 py-2">{person.createdBy}</td>
                  <td className="border px-4 py-2">{person.createdAt}</td>
                  <td className="border px-4 py-2">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="info"
                        onClick={() => navigate(`/viewmanpower/${index}`)}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => navigate(`/editmanpower/${index}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default Manpower;
