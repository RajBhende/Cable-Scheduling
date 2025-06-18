import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AddNewManpower from "./Addnewmanpower";

const Manpower = () => {
  const navigate = useNavigate();
  const [manpowerList, setManpowerList] = useState([]);

  // Load data from localStorage when page loads
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("manpowerData")) || [];
    setManpowerList(storedData);
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold">Manpower List</h5>
       <Button variant="primary" onClick={() => navigate("/Addnewmanpower")}>
  Add New Manpower
</Button>

      </div>

      {manpowerList.length === 0 ? (
        <p>No manpower data available.</p>
      ) : (
        <ul className="mt-6 space-y-2">
          {manpowerList.map((person, index) => (
            <li key={index} className="border p-3 rounded bg-gray-100">
              <strong>Name:</strong> {person.name} <br />
              <strong>Position:</strong> {person.position} <br />
              <strong>Designation:</strong> {person.designation} <br />
              <strong>Created By:</strong> {person.createdBy} <br />
              <strong>Created At:</strong> {person.createdAt} <br />
              <strong>Actions:</strong> {person.actions}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Manpower;
