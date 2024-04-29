import React, { useState } from 'react';
import './Employee.css'; // Import CSS file

const Employee = () => {
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'Sam', lastName: 'Adam', department: 'IT', age: 35 },
    { id: 2, firstName: 'John', lastName: 'Jacob', department: 'Sales', age: 45 }
  ]);

  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    department: '',
    age: ''
  });

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedEmployees = employees.map(emp =>
      emp.id === id ? { ...emp, [name]: value } : emp
    );
    setEmployees(updatedEmployees);
  };

  const getPosition = (age) => {
    return age > 40 ? 'Sr. Employee' : 'Jr. Employee';
  };

  const getSalary = (age, position) => {
    const baseSalary = 50000;
    return position === 'Sr. Employee' ? age * 10 + baseSalary : age * 5 + baseSalary;
  };

  const addEmployee = () => {
    const id = employees.length + 1;
    const position = getPosition(newEmployee.age);
    const salary = getSalary(newEmployee.age, position);
    const employee = { id, ...newEmployee, position, salary };
    setEmployees([...employees, employee]);
    setNewEmployee({ firstName: '', lastName: '', department: '', age: '' });
    setShowAddEmployee(false);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <div className="fab-container">
        <button className="fab" onClick={() => setShowAddEmployee(true)}>ADD</button>
      </div>
      {showAddEmployee && (
        <div className="employee-form">
          <h3>Add New Employee</h3>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={newEmployee.firstName} onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })} className="form-control" />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={newEmployee.lastName} onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })} className="form-control" />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input type="text" name="department" value={newEmployee.department} onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })} className="form-control" />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age" value={newEmployee.age} onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })} className="form-control" />
          </div>
          <button className="btn btn-danger" onClick={addEmployee}>Add Employee</button>
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Age</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                {editEmployeeId === employee.id ? (
                  <input
                    type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e) => handleChange(e, employee.id)}
                  />
                ) : (
                  employee.firstName
                )}
              </td>
              <td>
                {editEmployeeId === employee.id ? (
                  <input
                    type="text"
                    name="lastName"
                    value={employee.lastName}
                    onChange={(e) => handleChange(e, employee.id)}
                  />
                ) : (
                  employee.lastName
                )}
              </td>
              <td>
                {editEmployeeId === employee.id ? (
                  <input
                    type="text"
                    name="department"
                    value={employee.department}
                    onChange={(e) => handleChange(e, employee.id)}
                  />
                ) : (
                  employee.department
                )}
              </td>
              <td>{employee.age}</td>
              <td>{getPosition(employee.age)}</td>
              <td>${getSalary(employee.age, getPosition(employee.age)).toFixed(2)}</td>
              <td>
                {editEmployeeId === employee.id ? (
                  <button className="btn btn-success" onClick={() => setEditEmployeeId(null)}>
                    Save
                  </button>
                ) : (
                  <button className="btn btn-primary mr-2" onClick={() => setEditEmployeeId(employee.id)}>
                    Edit
                  </button>
                )}
                <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
