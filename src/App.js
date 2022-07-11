import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Admin/Login";
import Home from "./components/Admin/Home";
import AddMentor from "./components/Admin/Mentor/AddMentor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBatch from "./components/Admin/Batch/AddBatch";
import Request from "./components/Admin/Request/Request";

import { Breadcrumb } from "antd";
import MentorHome from "./components/Mentor/MentorBatch/MentorHome";
import MentorDashboard from "./components/Mentor/Dashboard/MentorDashboard";
import MentorBatch from "./components/Mentor/MentorBatch/MentorBatch";
import EmployeeList from "./components/Mentor/MentorBatch/EmployeeList";
import Chart from "./components/Mentor/MentorBatch/Chart";
import EmployeeHome from "./components/Employee/EmployeeHome";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";
import StepForm from "./components/Employee/stepForm/StepForm";

function App() {
  return (
    <div className="App">
      
      {/* <Home /> */}

      {/* navigation for Login  */}

      <BrowserRouter>
      <Login/>
      <Routes>
      <Route path="/Home" element={<Home />} />
      </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/AddBatch" element={<AddBatch />} />
          <Route path="/AddMentor" element={<AddMentor />} />
          <Route path="/Request" element={<Request />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Chart/> */}

      {/* <BrowserRouter>
      <MentorHome/>
        <Routes>
          <Route path="/MentorBatch" element={<MentorBatch />} />
          <Route path="/EmployeeList" element={<EmployeeList/>} />
        </Routes>
      </BrowserRouter> */}

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
