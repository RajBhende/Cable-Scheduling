import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Contractor = () => {
  const navigate = useNavigate();
  const [contractorList, setContractorList] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("contractorData")) || [];
    setContractorList(storedData);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedList = contractorList.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("contractorData", JSON.stringify(updatedList));
    setContractorList(updatedList);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold">Contractor List</h5>
        <Button variant="primary" onClick={() => navigate("/addnewcontractor")}>
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
                <th className="border px-2 py-1 w-10">Sr.No</th>
                <th className="border px-2 py-1">Contractor Name</th>
                <th className="border px-2 py-1">Company Name</th>
                <th className="border px-2 py-1">Project Name</th>
                <th className="border px-2 py-1">Position</th>
                <th className="border px-2 py-1">Designation</th>
                <th className="border px-2 py-1 w-20">Labor Count</th>
                <th className="border px-2 py-1 w-28">Contract Stage</th>
                <th className="border px-2 py-1 w-28">Created By</th>
                <th className="border px-2 py-1 w-32">Created At</th>
                <th className="border px-2 py-1 w-40">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contractorList.map((person, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-2 py-1">{index + 1}</td>
                  <td className="border px-2 py-1">{person.contractorName}</td>
                  <td className="border px-2 py-1">{person.companyName}</td>
                  <td className="border px-2 py-1">{person.projectName}</td>
                  <td className="border px-2 py-1">{person.position}</td>
                  <td className="border px-2 py-1">{person.designation}</td>
                  <td className="border px-2 py-1">{person.laborCount}</td>
                  <td className="border px-2 py-1">{person.laborStage}</td>
                  <td className="border px-2 py-1">{person.createdBy}</td>
                  <td className="border px-2 py-1">{person.createdAt}</td>
                  <td className="border px-2 py-1">
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        size="sm"
                        variant="info"
                        onClick={() => navigate(`/viewcontractor/${index}`)}
                      >
                        View
                      </Button>
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
