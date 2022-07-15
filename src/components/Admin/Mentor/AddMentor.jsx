import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./AddMentor.css";
import EditMentor from "./EditMentor";

function AddMentor() {
  const [showAddMentor, setshowAddMentor] = useState(false);
  const [showEditMentor, setshowEditMentor] = useState(false);
  const [selectMentor, setselectMentor] = useState({});

  const [MentorData, setMentorData] = useState({
    mentorName: "",
    employeeID: "",
    emailID: "",
    skills: "",
  });
  
  const [MentorFinalData, setMentorFinalData] = useState([]);

  let closeAddMentor = () => {
    setshowAddMentor(false);
  };
  let closeEditMentor = () => {
    setshowEditMentor(false);
  };

  let dontRefresh = (e) => {
    e.preventDefault();
  };

  let userData = (e) => {
    setMentorData({
      ...MentorData,
      [e.target.name]: e.target.value,
    });
  };

  let addMentorData = () => {
    setMentorFinalData([...MentorFinalData, MentorData]);
    closeAddMentor();
    setMentorData({
      mentorName: "",
      employeeID: "",
      emailID: "",
      skills: "",
    });
  };

  let selectedMentor = (val) => {
    setshowEditMentor(true);
    setselectMentor(val);
  };
  return (
    <div className="container-fluid" >
      <div className=" row AddMentorMain">
        <div className="d-flex justify-content-start">
          <div className="col col-4 text-start"><p className="fw-bold" style={{ color: "#FAA81D" }}>
            Mentor List
          </p></div>
          {/* <div className="col-4"><img
            className="batchsearchbaricon"
            height="20px"
            src="./Homepage/search.png"
            alt="search"
          /> */}
          <div className="col col-4"><input
            style={{
              // marginLeft: "1025px",
              backgroundColor: "#F4F5F8",
              border: "none",
              height: "40px",
              padding: "0px 50px",
              borderRadius: "5px",
            }}
            className="w-50"
            type="text"
            placeholder="Search"
          /></div>
          {/* </div> */}
          <div className="col-4"><button
            onClick={() => {
              setshowAddMentor(true);
            }}
            className="btn text-white batchsearchbar"
            style={{
              backgroundColor: "#FAA81D",
              border: "none",
              marginLeft: "20px",
            }}
          >
            + New Mentor
          </button></div>
        </div>
        <div className="table-responsive-sm">
        <table className="mentortable mt-3 table table-hover table-borderless">
          <thead>
            <tr style={{ backgroundColor: "#E9EEF7", width: "100%" }}>
              <th>⬜</th>
              <th>No.</th>
              <th>Mentor Name</th>
              <th>Employee ID</th>
              <th>E-mail ID</th>
              <th>Skills</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {MentorFinalData.map((val, ind) => {
              return (
                <tr className="mt-2 p-2">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{ind}</td>
                  <td>{val.mentorName}</td>
                  <td>{val.employeeID}</td>
                  <td>{val.emailID}</td>
                  <td>{val.skills}</td>
                  <td>
                    <button
                      onClick={() => {
                        selectedMentor(val);
                      }}
                      className="border-0 bg-white "
                    >
                      <i className="fas fa-pen me-3"></i>
                    </button>
                    <i className="fas fa-trash"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>

      <Modal
        show={showAddMentor}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={closeAddMentor}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >
            Add new Mentor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={dontRefresh}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mentor Name</Form.Label>
              <Form.Control
                type="text"
                name="mentorName"
                value={MentorData.mentorName}
                onChange={(e) => {
                  userData(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Employee ID</Form.Label>
              <datalist id="mylist">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </datalist>
              <Form.Control
                type="search"
                list="mylist"
                name="employeeID"
                value={MentorData.employeeID}
                onChange={(e) => {
                  userData(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>E-mail ID</Form.Label>
              <Form.Control
                type="email"
                name="emailID"
                value={MentorData.emailID}
                onChange={(e) => {
                  userData(e);
                }}
              />
            </Form.Group>
            
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Skills</Form.Label>
              <Form.Select
                id="disabledSelect"
                style={{ height: "50px", border: "2px solid black" }}
              >
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
                <button type="submit" className="btn ">Add</button>
              </Form.Select>
              
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                name="skills"
                value={MentorData.skills}
                onChange={(e) => {
                  userData(e);
                }}
              />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addMentorData}>Create</Button>
        </Modal.Footer>
      </Modal>

      <EditMentor
        closeEditMentor={closeEditMentor}
        showEditMentor={showEditMentor}
        selectMentor={selectMentor}
      />
    </div>
  );
}

export default AddMentor;
