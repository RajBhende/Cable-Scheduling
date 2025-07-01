import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Card, Table, Form } from "react-bootstrap";

const Addinspection = () => {
  const [activeTab, setActiveTab] = useState("safe");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    location: "",
    date: "",
    inspectedby: "",
    nameofauthorizedperson: "",
    comments: "",
  });

  const checklist = [
    {
      section: "A. Check for Standard",
      items: [
        {
          id: 1,
          text: "IC (International Electro-technical Commission):R 61482-2 Protective Clothing against Thermal Arc Hazards of an Electric Arc; NFPA (National Fire Protection Association) 70E.",
        },
        {
          id: 2,
          text: "Check or small tears and cuts",
        },
        {
          id: 3,
          text: "Inspect the arc flash apparel for signs of wear and tear.",
        },
        {
          id: 4,
          text: "Hard Cap : Check shield adapters, ensure no cracks and correctly fitted inside cap side slots. Inspect for cracks, shell expiration date and that the suspension adjusting mechanism works.",
        },
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=" p-6">
      {/* Back Button and Title */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-700 text-lg hover:underline flex items-center"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
        <h3 className="text-xl font-semibold text-gray-800">
          New Inspection Details
        </h3>
      </div>

      {/* Form */}
      <h4 className=" text-lg font-semibold mb-3">Inspection Details</h4>
      <br></br>
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
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Inspected By</label>
          <input
            type="text"
            name="inspectedby"
            placeholder="Enter Name"
            value={formData.inspectedby}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Name of Authorized Person</label>
          <input
            type="text"
            name="nameofauthorizedperson"
            placeholder="Enter the name of authorized person"
            value={formData.nameofauthorizedperson}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </form>

      {/* Comments */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          rows={3}
        />
      </div>
  

      {/* Checklist */}
      <div className="mt-4">
        <Card className="p-4 shadow-sm">
          <h4 className="mb-4 fw-semibold"> Inspection Checklist</h4>

          <Table bordered hover responsive className="align-middle">
            <thead className="table-light text-center">
              <tr>
                <th style={{ width: "5%" }}>Sr. No</th>
                <th style={{ width: "60%" }}>Parameters to be Checked</th>
                <th style={{ width: "15%" }}>OK/NOT OK</th>
                <th style={{ width: "20%" }}>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {checklist.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <tr className="bg-light fw-semibold">
                    <td colSpan="4">{section.section}</td>
                  </tr>
                  {section.items.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center">{item.id}</td>
                      <td>{item.text}</td>
                      <td className="text-center">
                        <Form.Check
                          inline
                          label="NOT OK"
                          type="radio"
                          name={`oknotok-${item.id}`}
                          id={`notok-${item.id}`}
                        />
                        <Form.Check
                          inline
                          label="OK"
                          type="radio"
                          name={`oknotok-${item.id}`}
                          id={`ok-${item.id}`}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="Enter remarks"
                          size="sm"
                        />
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Addinspection;
