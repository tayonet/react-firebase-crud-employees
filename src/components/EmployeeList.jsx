import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./employeeList.css";

// import db variable from firebaseConfig file
import { db } from "../firebaseConfig";
const EmployeeList = () => {
  // create state variables using useState
  const [employees, setEmployees] = useState([]);

  //create the useEffect hook to load firebase data into state variable

  useEffect(() => {
    // set the employees array to content of firebase firestore database using the db variable

    db.collection("employees").onSnapshot((snapshot) => {
      setEmployees(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          firstname: doc.data().firstname,
          lastname: doc.data().lastname,
          gender: doc.data().gender,
          dept: doc.data().dept,
          salary: doc.data().salary,
        }))
      );
    });
  }, []);

  const deleteHandler = (id) => {
    db.collection("employees")
      .doc(id)
      .delete()
      .then(alert("Employee record deleted"))
      .catch((e) => alert("Error deleting employee record."));
  };

  return (
    <div className="container">
      <div
        className="w-75 m-auto  divContainer"
        style={{ backgroundColor: "rgb(1,1,30)" }}
      >
        <h2 style={{ textAlign: "center", padding: "10px", color: "#fff" }}>
          Employees List
        </h2>
        <table className="table table-secondary table-striped table-hover">
          <thead>
            <tr>
              <th>Emp #</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Dept</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Loop through the data inside employees array */}
          <tbody>
            {employees.map(
              ({ id, firstname, lastname, gender, dept, salary }, index) => (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{firstname}</td>
                  <td>{lastname}</td>
                  <td>{gender}</td>
                  <td>{dept}</td>
                  <td>{salary}</td>
                  <td>
                    <Link
                      to={`/edit-employee/${id}`}
                      className="btn btn-success"
                    >
                      update
                    </Link>
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={() => deleteHandler(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EmployeeList;
