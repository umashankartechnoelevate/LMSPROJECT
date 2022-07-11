import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import AddBatch from "./AddBatch";

function EditBatch(props) {
  const [EditBatch, setEditBatch] = useState({
    batchName: "",
    mentorName: "",
    technologies: "",
    startDate: "",
    endDate: "",
    status: "",
    action: "",
  });

  useEffect(() => {
    setEditBatch({ ...props.selectBatch });
  }, [props.selectBatch]);

  console.log("props in edit model", props);
  // getting user entered value in our state
  let changeDetails = (e) => {
    setEditBatch({
      ...EditBatch,
      [e.target.name]: e.target.value,
    });
  };

  // after clicking create button data is storing in ather component to map over it
  let editBatches = () => {
    props.addBatches();
    props.closeEditBatch();
    setEditBatch({
      batchName: "",
      mentorName: "",
      technologies: "",
      startDate: "",
      endDate: "",
      status: "",
      action: "",
    });
  };

  // after submitting the form it will get get refresh
  let dontRefresh = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        show={props.showEditBatch}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.closeEditBatch}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >
            Edit batch
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={dontRefresh}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Batch Name</Form.Label>
              <Form.Control
                type="text"
                name="batchName"
                value={EditBatch.batchName}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mentor Name</Form.Label>
              <datalist id="mylist">
                <option value="1">{}</option>
                <option value="2">{}</option>
                <option value="3">{}</option>
              </datalist>
              <Form.Control
                type="search"
                list="mylist"
                name="mentorName"
                value={EditBatch.mentorName}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Technologies</Form.Label>
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
                name="technologies"
                value={EditBatch.technologies}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={EditBatch.startDate}
                onChange={(e) => {
                  changeDetails(e);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={EditBatch.endDate}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={editBatches}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditBatch;
