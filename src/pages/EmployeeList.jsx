import React, { useEffect, useState } from "react";
import Employee from "../components/Employee";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:8080/api/employees/getAll");
    const data = await res.json();
    console.log(data);
    setEmployees(data);
  };
  useEffect(function () {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-6">Employee List</h1>
      <div className="">
        <div className="grid grid-cols-5">
          <p>First Name</p>
          <p>Last Name</p>
          <p>Email</p>
          <p>Salary</p>
          <p>Actions</p>
        </div>
        <div className="">
          {employees.map((employee) => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
