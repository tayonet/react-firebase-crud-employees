import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeList from "./components/EmployeeList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={EmployeeList} />
        <Route path="/add-employee" component={AddEmployee} />
        <Route path="/edit-employee/:id" component={EditEmployee} />
      </div>
    </Router>
  );
}

export default App;
