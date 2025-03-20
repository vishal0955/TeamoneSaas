import { X, Calendar } from "lucide-react";
import { useState } from "react";

export default function AddAppraisalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState("technical");

  const technicalCompetencies = [
    { indicator: "Customer Experience", expected: "Intermediate" },
    { indicator: "Marketing", expected: "Advanced" },
    { indicator: "Management", expected: "Advanced" },
    { indicator: "Administration", expected: "Advanced" },
    { indicator: "Presentation Skill", expected: "Expert / Leader" },
    { indicator: "Quality Of Work", expected: "Expert / Leader" },
    { indicator: "Efficiency", expected: "Expert / Leader" },
  ];

  const organizationalCompetencies = [
    { indicator: "Integrity", expected: "Beginner" },
    { indicator: "Professionalism", expected: "Beginner" },
    { indicator: "Team Work", expected: "Intermediate" },
    { indicator: "Critical Thinking", expected: "Advanced" },
    { indicator: "Conflict Management", expected: "Intermediate" },
    { indicator: "Attendance", expected: "Intermediate" },
    { indicator: "Ability To Meet Deadline", expected: "Advanced" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[900px] max-w-full p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Add Appraisal</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        {/* Form */}
        <div className="mt-4 space-y-4">
          {/* Employee & Appraisal Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Employee</label>
              <select className="w-full border rounded-md p-2">
                <option>Select</option>
                <option>Anthony Lewis</option>
                <option>Brian Villalobos</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Appraisal Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border rounded-md p-2 pr-10"
                />
                <Calendar
                  className="absolute right-3 top-3 text-gray-500"
                  size={18}
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "technical"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("technical")}
            >
              Technical
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "organizational"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("organizational")}
            >
              Organizational
            </button>
          </div>

          {/* Competencies Table */}
          <div className="border rounded-md p-3">
            <h3 className="font-medium mb-2">
              {activeTab === "technical"
                ? "Technical Competencies"
                : "Organizational Competencies"}
            </h3>
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Indicator</th>
                  <th className="p-2 text-left">Expected Value</th>
                  <th className="p-2 text-left">Set Value</th>
                </tr>
              </thead>
              <tbody>
                {(activeTab === "technical"
                  ? technicalCompetencies
                  : organizationalCompetencies
                ).map((comp, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{comp.indicator}</td>
                    <td className="p-2">{comp.expected}</td>
                    <td className="p-2">
                      <select className="w-full border rounded-md p-1">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select className="w-full border rounded-md p-2">
              <option>Select</option>
              <option>Active</option>
              <option>Pending</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              className="bg-gray-300 px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-black">
              Add Appraisal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
