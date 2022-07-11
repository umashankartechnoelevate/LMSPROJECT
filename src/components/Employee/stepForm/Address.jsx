import React, { useState } from "react";
import "../EmployeeDashboard.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Form } from 'react-bootstrap';

function Address() {
  const userTemplate={addressType:"",doorNo:"",street:"",locality:"",city:"",state:"",PINCode:"",landmark:""}
  const [eduData, seteduData] = useState([userTemplate])

  let addAddress=()=>{
    seteduData([...eduData,userTemplate])
  }
  return (
    <div className="FormBorder">
      {
        eduData.map((val,ind)=>{
          return(
      <Accordion style={{ width: "1000px", justifyContent: "center" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Address Type </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div style={{ display: "flex", textAlign: "start" }}>
              <div>
              <Form action="">
            <Form.Group className="mb-3 " style={{ width: "350px", height: "50px", borderRadius: "5px" }}>
              <Form.Label className="m-0">
              Address Type
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
                <label htmlFor="">Door No</label>
                <br />
                <input
                  style={{
                    width: "350px",
                    height: "45px",
                    borderRadius: "5px",
                  }}
                  type="text"
                />
              </div>
            </div>
            <div
              style={{ display: "flex", textAlign: "start", marginTop: "20px" }}
            >
              <div>
                <label htmlFor="">Street</label>
                <br />
                <input
                  style={{
                    width: "350px",
                    height: "45px",
                    borderRadius: "5px",
                  }}
                  type="text"
                />
              </div>

              <div className="ms-5" style={{ textAlign: "start" }}>
                <label htmlFor="">Locality</label>
                <br />
                <input
                  style={{
                    width: "350px",
                    height: "45px",
                    borderRadius: "5px",
                  }}
                  type="text"
                />
              </div>
            </div>
            <div
              style={{ display: "flex", textAlign: "start", marginTop: "20px" }}
            >
              <div>
              <Form action="">
            <Form.Group className="mb-3 " style={{ width: "350px", height: "50px", borderRadius: "5px" }}>
              <Form.Label className="m-0">
               City
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
              <Form action="">
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
            <div
              style={{ display: "flex", textAlign: "start", marginTop: "20px" }}
            >
              <div>
                <label htmlFor="">PIN Code</label>
                <br />
                <input
                  style={{
                    width: "350px",
                    height: "45px",
                    borderRadius: "5px",
                  }}
                  type="text"
                />
              </div>
              <div className="ms-5" style={{ textAlign: "start" }}>
                <label htmlFor="">Landmark</label>
                <br />
                <input
                  style={{
                    width: "350px",
                    height: "45px",
                    borderRadius: "5px",
                  }}
                  type="text"
                />
              </div>
              <div><button onClick={addAddress} style={{color:"#086288",border:"none",backgroundColor:"white",margin:"50px 0px 0px 140px"}}><span style={{border:"2px solid black",borderRadius:"100%",padding:"0px 0px 0px 5px",fontSize:"15px",color:"#086288",borderColor:"#086288"}}> + </span> &nbsp; Add </button></div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
    })}
  </div>
);
}

export default Address;
