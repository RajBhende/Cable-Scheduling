import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Contractor = () => {
  const navigate = useNavigate();
  const [contractorList, setContractorList] = useState([]);

  // Load data from localStorage when page loads
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("contractorData")) || [];
    setContractorList(storedData);
  }, []);

  // Delete handler
  const handleDelete = (indexToDelete) => {
    const updatedList = contractorList.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("contractorData", JSON.stringify(updatedList));
    setContractorList(updatedList);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold">Contractor List</h5>
        <Button variant="primary" onClick={() => navigate("/addnewmanpower/contractor")}>
          Add New Contractor
        </Button>
      </div>

      {contractorList.length === 0 ? (
        <p>No contractor data available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Position</th>
                <th className="border px-4 py-2">Designation</th>
                <th className="border px-4 py-2">Created By</th>
                <th className="border px-4 py-2">Created At</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contractorList.map((person, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{person.name}</td>
                  <td className="border px-4 py-2">{person.position}</td>
                  <td className="border px-4 py-2">{person.designation}</td>
                  <td className="border px-4 py-2">{person.createdBy}</td>
                  <td className="border px-4 py-2">{person.createdAt}</td>
                  <td className="border px-4 py-2">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => navigate(`/editcontractor/${index}`)}
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
      )}
    </div>
  );
};

export default Contractor;
