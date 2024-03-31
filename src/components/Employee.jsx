import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee }) => {
  const navigate = useNavigate();

  async function handleDelete() {
    const res = await fetch(
      `http://localhost:8080/api/employees/delete/${employee.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    alert("Employee deleted successfully");
    window.location.reload();
  }
  return (
    <div className="grid grid-cols-5 ">
      <p>{employee.firstName}</p>
      <p>{employee.lastName}</p>
      <p>{employee.email}</p>
      <p>{employee.salary}</p>

      <div className="flex gap-2">
        <button
          onClick={() => navigate(`/update/${employee.id}`)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(`/employee/${employee.id}`)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Employee;
