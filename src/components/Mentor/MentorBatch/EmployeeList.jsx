import React, { useState } from "react";
import "./EmployeeList.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import AddMockRating from "./AddMockRating";
// tooltip
import { Button as BTN, Popover } from "antd";

// selectable dropdown
// import React from 'react';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

function EmployeeList() {
  // state to add mock
  const [showAddMock, setshowAddMock] = useState(false);
  // state to add mockrating
  const [showAddMockRating, setshowAddMockRating] = useState(false);
  //state to store mock data
  const [MockData, setMockData] = useState({});
  // state to add Reason to change status
  const [showReason, setshowReason] = useState(false);

  let dontRefresh = (e) => {
    e.preventDefault();
  };

  let changeDetails = (e) => {
    setMockData({
      ...MockData,
      [e.target.name]: e.target.value,
    });
  };

  let closeAddMock = () => {
    setshowAddMock(false);
  };

  let closeAddMockRating = () => {
    setshowAddMockRating(false);
  };

  let closeshowReason = () => {
    setshowReason(false);
  };

  let addMocks = () => {
    setshowAddMock(false);
  };

  let AddMockRatings = () => {
    setshowAddMockRating(false);
  };

  let submitReason = () => {
    setshowReason(false);
  };
  const content = (
    <div>
      <table>
        <tr>
          <th>Mock 1</th>
          <th className="ps-5">Excellent</th>
        </tr>
        <tr>
          <th>Mock 2</th>
          <th className="ps-5">Good</th>
        </tr>
        <tr>
          <th>Mock 3</th>
          <th className="ps-5">Above Average</th>
        </tr>
        <tr>
          <th>Mock 4</th>
          <th className="ps-5">Average</th>
        </tr>
        <tr>
          <th>Mock 5</th>
          <th className="ps-5">Below Average</th>
        </tr>
      </table>
    </div>
  );
  return (
    <div>
      <div id="AddEmployeemain">
        <div className="d-flex justify-content-start">
          <p className="fw-bold" style={{ color: "#FAA81D" }}>
            Employee List (Batch ID)
          </p>
          <img
            className="batchsearchbaricon"
            height="20px"
            src="./Homepage/search.png"
            alt=""
          />
          <input
            style={{
              marginLeft: "800px",
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
          <div className=" dropdown downloadDropdown ms-2">
            <button
              style={{ backgroundColor: "#0000000A" }}
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Download
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="">
                  Employees Data
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="">
                  Attedance Data
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="">
                  Mock Data
                </a>
              </li>
            </ul>
          </div>
          <button
            className="btn text-white batchsearchbar"
            style={{
              backgroundColor: "#FAA81D",
              border: "none",
              marginLeft: "20px",
            }}
            onClick={() => {
              setshowAddMock(true);
            }}
          >
            + Create Mock
          </button>
        </div>
      </div>

      <table className="table" style={{ marginLeft: "100px" }}>
        <thead>
          <tr>
            <th>⬜</th>
            <th>No</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Mocks Taken</th>
            <th>Mock Ratings</th>
            <th>Attendance</th>
            <th>Status</th>
            <th>Batch Strength</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>01</td>
            <td>TYSS5220022</td>
            <td>Umashankar</td>
            <td>2/3</td>
            <td>
              <Popover
                content={content}
                placement="bottom"
                className="bg-white border-0"
              >
                <Button type="primary">
                  <i
                    style={{ fontSize: "30px", color: "yellow" }}
                    className="fas fa-exclamation-triangle"
                  ></i>
                </Button>
              </Popover>
            </td>
            <td>15/23</td>
            <td>             
                <Box sx={{ minWidth:50 }}>
                  <FormControl>
                    <NativeSelect>
                      <option
                      type="submit"
                      onClick={() => {
                        setshowReason(true);
                      }}
                      className="mb-2"
                    >
                      Absconded
                    </option>
                    <option
                      type="submit"
                      onClick={() => {
                        setshowReason(true);
                      }}
                      className="mb-2"
                    >
                      Terminated
                    </option>
                    <option
                      type="click"
                      onClick={() => {
                        setshowReason(true);
                      }}
                    >Active</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
            </td>
            <td>
              <button
                onClick={() => {
                  setshowAddMockRating(true);
                }}
                className="AttendanceButton"
              >
                Give Rating
              </button>
              <button className="border-0 bg-white">
                <i className="fas fa-chevron-right ms-5"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* model for adding mock */}
      <Modal
        show={showAddMock}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={closeAddMock}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >
            Add Mock
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={dontRefresh}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Batch ID</Form.Label>
              <Form.Control
                type="text"
                name="batchName"
                value={MockData.batchName}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mock NO</Form.Label>
              <datalist id="mylist">
                <option value="1">{}</option>
                <option value="2">{}</option>
                <option value="3">{}</option>
              </datalist>
              <Form.Control
                type="search"
                list="mylist"
                name="mentorName"
                value={MockData.mentorName}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Technology</Form.Label>
              <datalist id="technologies">
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Java+SpringBoot"></option>
                <option value="Node & Expressjs"></option>
              </datalist>
              <Form.Control
                className="input-group"
                multiple
                list="technologies"
                type="text"
                name="technologies"
                value={MockData.technologies}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Panel</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={MockData.startDate}
                onChange={(e) => {
                  changeDetails(e);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date & Time</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={MockData.endDate}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={addMocks}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      {/* model for reason to change the status */}

      <Modal
        show={showReason}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={closeshowReason}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >
            Reason to change Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Reason</p>
          <textarea type="text" cols="50" rows="5" />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={submitReason}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>

      <AddMockRating
        showAddMockRating={showAddMockRating}
        closeAddMockRating={closeAddMockRating}
        AddMockRatings={AddMockRatings}
      />
    </div>
  );
}

export default EmployeeList;
