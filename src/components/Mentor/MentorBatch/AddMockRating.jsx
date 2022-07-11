import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function AddMockRating(props) {
  const [MockRating, setMockRating] = useState({
    mockType: "",
    mockTaken: "",
    technology: "",
    practicalKnowledge: "",
    theoroticalKnowledge: "",
    overallFeedback: "",
    feedback: "",
  });
  

  let dontRefresh = (e) => {
    e.preventDefault();
  };

  let changeDetails = (e) => {
    setMockRating({
      ...MockRating,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Modal
        show={props.showAddMockRating}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className=""
      >
        <Modal.Header closeButton onClick={props.closeAddMockRating}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >
            Mock Rating
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={dontRefresh}>
            <div className="d-flex ms-5 me-5" >
              <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                <Form.Label>Mock Type</Form.Label>
                <Form.Control
                  type="text"
                  name="mockType"
                  value={MockRating.batchName}
                  onChange={(e) => {
                    changeDetails(e);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3 ms-5 w-50" controlId="formBasicPassword">
                <Form.Label>Mock Taken</Form.Label>
                <datalist id="mylist">
                  <option value="1">{}</option>
                  <option value="2">{}</option>
                  <option value="3">{}</option>
                </datalist>
                <Form.Control
                  type="search"
                  list="mylist"
                  name="mockTaken"
                  value={MockRating.mentorName}
                  onChange={(e) => {
                    changeDetails(e);
                  }}
                />
              </Form.Group>
            </div>
            <div className="d-flex ms-5 me-5">
              <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
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
                  name="technology"
                  value={MockRating.technology}
                  onChange={(e) => {
                    changeDetails(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 ms-5 w-50" controlId="formBasicPassword">
                <Form.Label>Practical Knowledge (out of 100) <span className="text-danger">*</span> </Form.Label>
                <Form.Control
                  type="text"
                  name="practicalKnowledge"
                  value={MockRating.startDate}
                  onChange={(e) => {
                    changeDetails(e);
                  }}
                ></Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex ms-5 me-5">
              <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                <Form.Label>Theorotical Knowledge (out of 100)<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="theoroticalKnowledge"
                  value={MockRating.endDate}
                  onChange={(e) => {
                    changeDetails(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 ms-5 w-50" controlId="formBasicPassword">
                <Form.Label>
                  Overall Feedback ((Practical+Theorotical)/2)<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="overallFeedback"
                  value={MockRating.endDate}
                  onChange={(e) => {
                    changeDetails(e);
                  }}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3 ms-5 me-5" controlId="formBasicPassword">
              <Form.Label>Detailed Feedback <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="feedback"
                value={MockRating.endDate}
                onChange={(e) => {
                  changeDetails(e);
                }}
                style={{height:"100px"}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.AddMockRatings} type="submit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMockRating;
