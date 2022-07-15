import React, { useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import EmployeeList from "./EmployeeList";
import "./MentorBatch.css";
import AddAttendance from "./AddAttendance";
import { Button as BTN, Popover } from "antd";
import EmployeeList from "./EmployeeList";

function MentorBatch({setempList,setlineChart,setadminorbatch}) {
  
  const [mentorBatchData, setmentorBatchData] = useState([]);
  const [showAttendance, setshowAttendance] = useState(false);


  let AttendanceList = () => {
    setshowAttendance(true);
  };
  let closeAttendance = () => {
    setshowAttendance(false);
  };

  // for strengrth purpose
  // for mockrating popup
  const content = (
    <div>
      <table>
        <tr>
          <th>Initial Strength</th>
          <th className="ps-5">100</th>
        </tr>
        <tr>
          <th>Dropout</th>
          <th className="ps-5">10</th>
        </tr>
        <tr>
          <th>Terminated</th>
          <th className="ps-5">10</th>
        </tr>
        <tr>
          <th>Absconding</th>
          <th className="ps-5">10</th>
        </tr>
        <tr>
          <th>Present Strength</th>
          <th className="ps-5">70</th>
        </tr>
      </table>
    </div>
  );

  let ToEmployeeList=()=>{
    setempList(true) 
    setadminorbatch(false)
    setlineChart(false)
  }

  return (
    <div>
      <div id="AddMentormain">
        <div className="d-flex justify-content-start">
          <p className="fw-bold" style={{ color: "#FAA81D" }}>
            Batch List
          </p>
          <img
            className="batchsearchbaricon"
            height="20px"
            src="./Homepage/search.png"
            alt=""
          />
          <input
            style={{
              marginLeft: "1050px",
              backgroundColor: "#F4F5F8",
              border: "none",
              height: "40px",
              padding: "0px 50px",
              borderRadius: "5px",
            }}
            className="w-25"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="row table-responsive mt-2">
      <table className="table" style={{width:"100%"}}>
        <thead>
          <tr style={{backgroundColor:"#E9EEF7"}}>
            <th>⬜</th>
            <th>No</th>
            <th>Batch ID</th>
            <th>Batch Name</th>
            <th>Technologies</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Batch Strength</th>
          </tr>
        </thead>
        <tbody className="border-0">
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>01</td>
            <td>TYSS5220022</td>
            <td>Uplift react</td>
            <td>react</td>
            <td>5-may-2022</td>
            <td>06-jun-2022</td>
            <td>
            </td>
            <td>
            <Popover content={content} placement="bottom" className="bg-white border-0">
             
             <BTN type="primary">
               <i
                 style={{ fontSize: "30px", color: "yellow", border:"none" }}
                 className="fas fa-exclamation-triangle"
               ></i>
             </BTN>
           </Popover>
              <button onClick={AttendanceList} className="AttendanceButton ">
                Attendance
              </button>
             <button onClick={()=>{ToEmployeeList()}} className="border-0">
                <i className="fas fa-chevron-right"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Outlet/>
      </div>
      
      <AddAttendance
        showAttendance={showAttendance}
        closeAttendance={closeAttendance}
      />
    </div>
  );
}

export default MentorBatch;
