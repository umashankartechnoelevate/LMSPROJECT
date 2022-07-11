import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function AddMockRating(props) {

  let submitAttendance=()=>{

  }
  return (
    <div>
      <div>
      <Modal
        show={props.showAttendance}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton onClick={props.closeAttendance}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >
            Mock Rating
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{alignItems:"center"}}>
          <table className="table  text-center" style={{height:"600px"}}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>tyss522</td>
                <td>Umashankar</td>
                <td className="d-flex" style={{textDecoration:"none"}}>
                <label>M</label>
                  <div className="form-check form-switch ms-4 me-3" style={{textDecoration:"none"}}>
                    <input
                      className="form-check-input bg-danger"
                      type="checkbox"
                      role="switch"
                      // id="flexSwitchCheckDefault"
                      style={{fontSize:"20px",color:"white",textDecoration:"none"}}
                    />
                  </div>
                  <label>N</label>
                  <div className="form-check form-switch ms-4 ">
                    <input
                      className="form-check-input bg-success"
                      type="checkbox"
                      role="switch"
                      // id="flexSwitchCheckChecked"
                      style={{fontSize:"20px"}}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitAttendance} type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}

export default AddMockRating;
