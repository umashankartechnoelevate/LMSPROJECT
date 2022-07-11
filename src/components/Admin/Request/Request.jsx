import React from "react";
import './Request.css'
import { Form,Button,Modal } from "react-bootstrap";
import { useState } from "react";

function Request() {
  const [Approve, setApprove] = useState(false);
  const [Reject, setReject] = useState(false);

const [requestDAta, setrequestDAta] = useState({
  
})

  let ApproveReq = () => {
    setApprove(true);
  };
  let RejectReq=()=>{
    setReject(true)
  }

  let closeApprove=()=>{
    setApprove(false);
  }

  let closeReject=()=>{
    setReject(false)
  }
  return (
    <div>
      <div className="Requestmain">
        <div className="d-flex justify-content-start">
          <p className="fw-bold" style={{ color: "#FAA81D" }}>
            Request List
          </p>
          <img
            className="batchsearchbaricon"
            height="20px"
            src="./Homepage/search.png"
            alt=""
          />
          <input
            style={{
              marginLeft: "1170px",
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
        <table className=" mt-3 table table-hover table-borderless">
          <thead>
            <tr  style={{ backgroundColor: "#E9EEF7" }}>
              <th>⬜</th>
              <th>No.</th>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>YOP</th>
              <th>Percentage</th>
              <th>Experience</th>
              <th>Contact No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            <tr className="mt-2 p-2">
              <td>
                <input type="checkbox" />
              </td>
              <td>01</td>
              <td>TYSC0522002</td>
              <td>Umashankar Jabagond</td>
              <td>2018</td>
              <td>80.16</td>
              <td>2.5</td>
              <td>9823191415</td>
              <td>
               <button onClick={ApproveReq} id="Approve"  className=" btn border-success me-2 p-1 fw-bold text-success" style={{height:"36px",width:"75px"}}>Approve</button>
               <button onClick={RejectReq} id="Reject" className="btn border-danger p-1 fw-bold text-danger" style={{height:"36px",width:"60px"}}>Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal
        show={Approve}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={closeApprove}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >Change Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Batch Name</Form.Label>
              <Form.Select
                id="disabledSelect"
                style={{ height: "50px", border: "2px solid black" }}
              >
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Batch ID</Form.Label>
              <Form.Select
                id="disabledSelect"
                style={{ height: "50px", border: "2px solid black" }}
              >
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeApprove}>Submit</Button>
        </Modal.Footer>
      </Modal>

      {/* reject request mdel */}
      <Modal
        show={Reject}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={closeReject}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >Reason for Rejection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Label>Reason</Form.Label><br/>
              <textarea name="" id="" cols="40" rows="5"></textarea>
            </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={closeReject}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Request;
