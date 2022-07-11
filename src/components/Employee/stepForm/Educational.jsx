import React, { useState } from "react";
import "../EmployeeDashboard.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { border } from "@mui/system";
import { Form } from 'react-bootstrap';

function Educational() {
  const [isADD, setisADD] = useState(true);
  const [userTemplate, setuserTemplate] = useState({EductaionType:"",Yop:"",Percentage:"",University:"",Institute:"",Specialization:"",State:""})
  const [EduData, setEduData] = useState([userTemplate]);

  let AddForms=()=>{
    setisADD(false);
    setEduData([...EduData,userTemplate])
  }

  let getData=(e)=>{
    setuserTemplate({
    ...userTemplate,
    [e.target.name]:e.target.value
    })}

    console.log(userTemplate)
  return (
    <div style={{height:"400px",
      width:"800px",
      justifyContent: "center",
      margin:"auto"}}>
      {
      EduData.map((val, ind) => {
        return (
          <Accordion style={{ width: "1000px", justifyContent: "center" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Education Type </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div style={{ display: "flex", textAlign: "start" }}>
                <div>
                <Form action="">
            <Form.Group className="" style={{ width: "350px", height: "50px", borderRadius:"5px" }}>
              <Form.Label className="m-0">
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
                <div className="ms-5" style={{ textAlign: "start" }}>
                  <label htmlFor="">Year of Passing</label>
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
                style={{
                  display: "flex",
                  textAlign: "start",
                  marginTop: "20px",
                }}
              >
                <div>
                  <label htmlFor="">Percentage(%)</label>
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
                <Form action="">
            <Form.Group className=" " style={{ width: "350px", height: "50px", borderRadius: "5px" }}>
              <Form.Label className="m-0">
               University name
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
                style={{
                  display: "flex",
                  textAlign: "start",
                  marginTop: "20px",
                }}
              >
                <div>
                  <label htmlFor="">Institute Name</label>
                  <br/>
                  <input
                  onChange={(e)=>{getData(e)}}    
                  name="Institute"
                  value={userTemplate.Institute}
                    style={{
                      width: "350px",
                      height: "45px",
                      borderRadius: "5px",
                    }}
                    type="text"
                  />
                </div>
                <div className="ms-5" style={{ textAlign: "start" }}>
                  <label htmlFor="">Specialization</label>
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
                style={{
                  display: "flex",
                  textAlign: "start",
                  marginTop: "20px",
                }}
              >
                <div>
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
                <div>
                  <button
                    onClick={AddForms}
                    style={{
                      color: "#086288",
                      border: "none",
                      backgroundColor: "white",
                      margin: "50px 0px 0px 500px",
                    }}
                  >
                    <span
                      style={{
                        border: "2px solid black",
                        borderRadius: "100%",
                        padding: "0px 0px 0px 5px",
                        fontSize: "15px",
                        color: "#086288",
                        borderColor: "#086288",
                        marginLeft: "5px",
                      }}
                    >
                      {isADD ? (
                        "+"
                      ) : (
                        <i
                          style={{
                            fontSize: "15px",
                            border: "none",
                            marginLeft: "-5px",
                          }}
                          className="fas fa-trash"
                        ></i>
                      )}
                    </span>
                    &nbsp;{isADD ? "Add" : "Delete"}
                  </button>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>)
      })}
    </div>
  );
}

export default Educational;
