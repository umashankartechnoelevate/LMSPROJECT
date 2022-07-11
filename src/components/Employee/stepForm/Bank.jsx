import React from 'react'
import "../EmployeeDashboard.css";
import { Form } from 'react-bootstrap';

function Bank() {
  return (
    <div className="FormBorder">
        <div style={{ display: "flex", textAlign: "start" }}>
          <div>
            <label htmlFor="">Account No</label>
            <br />
            <input
              style={{ width: "350px", height: "45px", borderRadius: "5px" }}
              type="text"
            />
          </div>
          <div className="ms-5" style={{ textAlign: "start" }}>
            <label htmlFor="">Bank Name</label>
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
              <Form.Label className="m-0">
               Account Type
              </Form.Label>
              <Form.Select id="disabledSelect"style={{ height: "50px",border:"2px solid black"}} >
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
              </Form.Select>
            </Form.Group>
            </Form>
          </div>

          <div className="ms-5" style={{ textAlign: "start" }}>
            <label htmlFor="">IFSC code</label>
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
              <Form.Label className="m-0">
               Branch
              </Form.Label>
              <Form.Select id="disabledSelect"style={{ height: "50px",border:"2px solid black"}} >
                <option> select</option>
                <option> select1</option>
                <option> select1</option>
              </Form.Select>
            </Form.Group>
            </Form>
          </div>
          <div className="ms-5" style={{ textAlign: "start" }}>
            <label htmlFor="">State</label>
            <br />
            <input
              style={{ width: "350px", height: "45px", borderRadius: "5px" }}
              type="text"
            /><Form action="">
            <Form.Group className="mb-3 " style={{ width: "350px", height: "50px", borderRadius: "5px" }}>
              <Form.Label className="m-0">
               State
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
  )
}

export default Bank