import React from "react";
import "../EmployeeDashboard.css";
import { Form } from 'react-bootstrap';

function Primary() {
  return (
    <div style={{ justifyContent: "center" }}>
      <div className="FormBorder">
        <div style={{ display: "flex", textAlign: "start" }}>
          <div>
            <label htmlFor="">Employee ID</label>
            <br />
            <input
              style={{ width: "350px", height: "45px", borderRadius: "5px" }}
              type="text"
            />
          </div>
          <div className="ms-5" style={{ textAlign: "start" }}>
            <label htmlFor="">Employee Name</label>
            <br />
            <input
              style={{ width: "350px", height: "45px", borderRadius: "5px" }}
              type="text"
            />
          </div>
        </div>
        <div style={{ display: "flex", textAlign: "start", marginTop: "20px" }}>
          <div>
            <label htmlFor="">Date of joining</label>
            <br />
            <input
              style={{ width: "350px", height: "45px", borderRadius: "5px" }}
              type="date"
            />
          </div>

          <div className="ms-5" style={{ textAlign: "start" }}>
            <label htmlFor="">Date of Birth</label>
            <br />
            <input
              style={{ width: "350px", height: "45px", borderRadius: "5px" }}
              type="date"
            />
          </div>
        </div>
        <div style={{ display: "flex", textAlign: "start", marginTop: "20px" }}>
          <div>
            <label htmlFor="">E-mail ID</label>
            <br />
            <input
              style={{ width: "350px", height: "45px", borderRadius: "5px" }}
              type="text"
            />
          </div>
          <div className="ms-5" style={{ textAlign: "start" }}>
            <label htmlFor="">Blood Group</label>
            <br />
            <input
              style={{ width: "350px", height: "45px", borderRadius: "5px" }}
              type="text"
            />
          </div>
        </div>
        <div style={{ display: "flex", textAlign: "start", marginTop: "20px" }}>
          <div>
            <Form action="">
            <Form.Group className="mb-3 " style={{ width: "350px", height: "50px", borderRadius: "5px" }}>
              <Form.Label>
                Designation
              </Form.Label>
              <Form.Select id="disabledSelect"style={{ height: "50px", border:"2px solid black"}} >
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
              </Form.Select>
            </Form.Group>
            </Form>
          </div>

          <div className="ms-5" style={{ textAlign: "start" }}>
          <Form action="">
            <Form.Group className="mb-3 " style={{ width: "350px", height: "50px", borderRadius: "5px" }}>
              <Form.Label>
               Gender
              </Form.Label>
              <Form.Select id="disabledSelect" style={{ height: "50px", border:"2px solid black"}}>
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
              </Form.Select>
            </Form.Group>
            </Form>
          </div>
        </div>
        <div style={{ display: "flex", textAlign: "start", marginTop: "20px" }}>
          <div>
          <Form action="">
            <Form.Group className="mb-3 " style={{ width: "350px", height: "50px", borderRadius: "5px" }}>
              <Form.Label>
                Nationality
              </Form.Label>
              <Form.Select id="disabledSelect" style={{ height: "50px",border:"2px solid black"}}>
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
              </Form.Select>
            </Form.Group>
            </Form>
          </div>

          <div className="ms-5">
          <Form action="">
            <Form.Group className="mb-3 " style={{ width: "350px", height: "50px", borderRadius: "5px" }}>
              <Form.Label>
               Employee Status
              </Form.Label>
              <Form.Select id="disabledSelect"style={{ height: "50px",border:"2px solid black"}} >
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
              </Form.Select>
            </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Primary;
