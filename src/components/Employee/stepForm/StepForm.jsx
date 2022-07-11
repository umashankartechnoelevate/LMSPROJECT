import React from "react";
import "./StepForm.css";
//for model popup
import Modal from "react-bootstrap/Modal";
//for stepper form
import { Button, message, Steps } from "antd";
import { useState } from "react";
import Primary from "./Primary";
import Secondory from "./Secondory";
import Educational from "./Educational";
import Address from "./Address";
import Bank from "./Bank";
import Technical from "./Technical";
import Experience from "./Experience";
import Contact from "./Contact";
import { Form } from 'react-bootstrap';
const { Step } = Steps;
const steps = [
  {
    title: "Primary Info",
    content: <Primary />,
  },
  {
    title: "Secondory Info",
    content: <Secondory />,
  },
  {
    title: "Educational Skills",
    content: <Educational />,
  },
  {
    title: "Address Details",
    content: <Address />,
  },
  {
    title: "Bank Details",
    content: <Bank />,
  },
  {
    title: "Technical Skills",
    content: <Technical />,
  },
  {
    title: "Experience",
    content: <Experience />,
  },
  {
    title: "Contact",
    content: <Contact />,
  },
];

function StepForm() {
  // form popup model
  const [showApprove, setshowApprove] = useState(false)

  let closeApprove=()=>{
    setshowApprove(false)
  }
  let dontRefresh=(e)=>{
    e.preventDefault()
  }
  // for step form
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <Steps style={{ marginLeft: "140px", width: "90%" }} current={current}>
        {steps.map((item) => (
          <Step className="text-danger" key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action buttondiv">
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        <div>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button onClick={()=>{setshowApprove(true)}} type="primary">Submit</Button>
          )}
        </div>
      </div>

      {/* model for popup to approve request */}
      <Modal
        show={showApprove}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center">
          <p className="textApprove">Your request will be approved <br />in sometimes please wait</p>
          <button onClick={()=>{setshowApprove(false)}} className="btn btnapprove">Return</button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StepForm;
