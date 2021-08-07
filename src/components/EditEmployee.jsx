import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { useHistory, useParams } from "react-router-dom";
export default function EditEmployee() {
  // const [employee, setEmployee] = useState({});

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [dept, setDept] = useState("");
  const [salary, setSalary] = useState(0);
  // instantiate the useHistory from the react-router-dom
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    db.collection("employees")
      .doc(id)
      .get()
      .then((snapshot) => {
        //setEmployee(snapshot.data());
        setFirstname(snapshot.data().firstname);
        setLastname(snapshot.data().lastname);
        setGender(snapshot.data().gender);
        setDept(snapshot.data().dept);
        setSalary(snapshot.data().salary);
        console.log(snapshot.data());
      })
      .catch((e) => {
        alert(e);
      });
    console.log(`id is ${id}`);
  }, []);

  //   const record = db.collection("employees").doc(id).get().data();
  // console.log(record);
  //setEmployee(record);
  // create state variables using useState

  const handleSubmit = (e) => {
    e.preventDefault();
    // use the db instance of the firestore service to store new employee data in firebase
    db.collection("employees").doc(id).update({
      firstname,
      lastname,
      gender,
      dept,
      salary,
    });
    // redirect to the home page
    alert("Employee record successfully updated.");
    history.push("/");
  };
  return (
    <div className="m-auto" style={{ marginTop: "40px", width: "35%" }}>
      <h3>Edit Employee</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            required
            className="form-control"
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            required
            className="form-control"
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            required
            className="form-control"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Department</label>
          <input
            type="text"
            required
            className="form-control"
            name="dept"
            onChange={(e) => setDept(e.target.value)}
            value={dept}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Salary</label>
          <input
            type="number"
            required
            className="form-control"
            name="salary"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-success btn-block" />
        </div>
      </form>
    </div>
  );
}
