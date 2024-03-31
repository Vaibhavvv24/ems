import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email, salary };
    const res = await fetch(
      `http://localhost:8080/api/employees/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(employee),
      }
    );
    const data = await res.json();
    console.log(data);
    navigate("/employees");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6 m-4">
      <div className="mt-10 flex flex-col rounded-md shadow-lg w-[500px]">
        <div className="flex justify-center">
          <h1 className="text-center my-5 text-3xl">Update employee</h1>
        </div>
        <form className="flex flex-col  gap-6 " onSubmit={handleSubmit}>
          <div className="flex flex-col m-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-4/5 p-2 shadow-lg border border-gray-300 rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-4/5 p-2 shadow-lg border border-gray-300 rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-4/5 p-2 shadow-lg border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col m-2 ">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              name="salary"
              className="w-4/5 p-2 shadow-lg border border-gray-300 rounded-md"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
            >
              Update Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
