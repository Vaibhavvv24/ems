import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeInd = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  async function fetchEmployee() {
    const res = await fetch(`http://localhost:8080/api/employees/get/${id}`);
    const data = await res.json();
    console.log(data);
    setEmployee(data);
  }

  useEffect(function () {
    fetchEmployee();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center gap-2 m-4 shadow-md mt-10 border border-gray-500 w-1/2">
        <h1>View Employee details</h1>
        <p>First Name: {employee.firstName}</p>
        <p>Last Name: {employee.lastName}</p>
        <p>Email: {employee.email}</p>
        <p>Salary: ₹{employee.salary}</p>
      </div>
    </div>
  );
};

export default EmployeeInd;
