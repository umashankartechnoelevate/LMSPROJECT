import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";

function EditMentor(props) {
  const [editMentor, seteditMentor] = useState({
    mentorName: "",
    employeeID: "",
    emailID: "",
    skills: "",
  });

  let dontRefresh = (e) => {
    e.preventDefault();
  };

  let editMentorData=(e)=>{
    seteditMentor({
      ...editMentor,
      [e.target.name]:e.target.value
    })
  }

  let updateMentorData=()=>{
    props.closeEditMentor()

  }

  useEffect(() => {
    seteditMentor({...props.selectMentor})
  }, [props.selectMentor])
  
  return (
    <div>
      <Modal
        show={props.showEditMentor}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.closeEditMentor}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >
            Edit Mentor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={dontRefresh}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mentor Name</Form.Label>
              <Form.Control
                type="text"
                name="mentorName"
                value={editMentor.mentorName}
                onChange={(e) => {
                  editMentorData(e);
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
                value={editMentor.employeeID}
                onChange={(e) => {
                  editMentorData(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>E-mail ID</Form.Label>
              <Form.Control
                type="email"
                name="emailID"
                value={editMentor.emailID}
                onChange={(e) => {
                  editMentorData(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                name="skills"
                value={editMentor.skills}
                onChange={(e) => {
                  editMentorData(e);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={updateMentorData}>Edit Mentor</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditMentor;
