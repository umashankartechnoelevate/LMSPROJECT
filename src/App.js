import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Admin/Login";
import Home from "./components/Admin/Home";
import AddMentor from "./components/Admin/Mentor/AddMentor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBatch from "./components/Admin/Batch/AddBatch";
import Request from "./components/Admin/Request/Request";
import MentorHome from "./components/Mentor/MentorHome";
import MentorDashboard from "./components/Mentor/Dashboard/MentorDashboard";
import MentorBatch from "./components/Mentor/MentorBatch/MentorBatch";
import EmployeeList from "./components/Mentor/MentorBatch/EmployeeList";
import Chart from "./components/Mentor/MentorBatch/Chart";
import EmployeeHome from "./components/Employee/EmployeeHome";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import StepForm from "./components/Employee/stepForm/StepForm";
import AddAttendance from "./components/Mentor/MentorBatch/AddAttendance";
import { useState, useNavigate } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* routing for admin module */}
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />}>
            <Route path="AddBatch" element={<AddBatch />} />
            <Route path="AddMentor" element={<AddMentor />} />
            <Route path="Request" element={<Request />} />
          </Route>

          {/* routing for mentor module */}
          <Route path="/MentorHome" element={<MentorHome />} />
          <Route path="/MentorDashboard" element={<MentorDashboard />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>

      {/* <MentorHome /> */}
      {/* <BrowserRouter>
        <EmployeeHome />
        <Routes>
          <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
        </Routes>
      </BrowserRouter>
      <StepForm/> */}
    </div>
  );
}

export default App;
