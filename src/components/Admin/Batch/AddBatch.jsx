import React from "react";
import "./AddBatch.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form } from "react-bootstrap";
import EditBatch from "./EditBatch";
import { Row,Select, Col} from "antd";

// for multiple select technologies
import { Tag } from "antd";

const options = [
  {
    value: "React JS",
  },
  {
    value: "Node JS",
  },
  {
    value: "Java",
  },
  {
    value: "SQL",
  },
];

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

function AddBatch() {
  const [showAddBatch, setshowAddBatch] = useState(false);
  const [showEditBatch, setshowEditBatch] = useState(false);
  const [Data, setData] = useState([]);

  //storing all user entered values in an state
  const [AddBatch, setAddBatch] = useState({
    batchName: "",
    mentorName: "",
    technologies: "",
    startDate: "",
    endDate: "",
    status: "",
    action: "",
  });
  const [selectBatch, setselectBatch] = useState();
  // console.log(AddBatch);
  //storing data in new state to map all data to add in table

  // console.log(Data);

  //closing popped form
  let closeAddBatch = () => {
    setshowAddBatch(false);
  };

  // closing the edit model
  let closeEditBatch = () => {
    setshowEditBatch(false);
  };

  // getting user entered value in our state
  let changeDetails = (e) => {
    setAddBatch({
      ...AddBatch,
      [e.target.name]: e.target.value,
    });
  };

  // after clicking create button data is storing in ather component to map over it
  let addBatches = () => {
    setData([...Data, AddBatch]);
    closeAddBatch();
    setAddBatch({
      batchName: "",
      mentorName: "",
      technologies: "",
      startDate: "",
      endDate: "",
      status: "",
      action: "",
    });
  };

  // after submitting the form it will not get refresh
  let dontRefresh = (e) => {
    e.preventDefault();
  };

  // to edit here we are selecting the selected values
  let selectedBatch = (value) => {
    setselectBatch(value);
    setshowEditBatch(true);
  };
  // adding value to arrey of object
  let i = 0;
  Data.map((item) => {
    item["id"] = i;
    i++;
  });

  // to delete addBatch
  let deleteAddBatch = (id) => {
    const deletes = Data.filter((val) => {
      console.log("value.id", val.id);
      console.log(id);
      return val.id !== id;
    });
    // console.log(deletes,"deleted data");
    setAddBatch({ deletes });
  };
  console.log(Data);

  //   let editAddBatch=(id)=>{
  //     let edit=AddBatch.find((value)=>{return value.id===id})
  //   }
  // console.log(editAddBatch);

  return (
    <div className="container-fluid mb-2">
      {/* header part started */}
      <div className="row ">
      <div  id="Addbatchmain">
        <div className=" col col-lg-12 col-md-8 col-sm-1 d-md-flex d-sm-flex text-start justify-content-md-start justify-content-sm-start">
          <div className="col col-md-4 col-sm-4  "><p className="fw-bold" style={{ color: "#FAA81D" }}>
            Batch List
          </p></div>
          {/* <div><img
            className="batchsearchbaricon"
            height="20px"
            src="./Homepage/search.png"
            alt=""
          /></div> */}
          <div className="col col-md-4 col-sm-4">
            <input
            style={{
              marginLeft: "150px",
              backgroundColor: "#F4F5F8",
              border: "none",
              height: "40px",
              padding: "0px 50px",
              borderRadius: "5px",
            }}
            className="w-50"
            type="text"
            placeholder="Search"
          /></div>
          <div className="col col-md-4 col-sm-4">
            <button
            onClick={() => {
              setshowAddBatch(true);
            }}
            className="btn text-white batchsearchbar"
            style={{
              backgroundColor: "#FAA81D",
              border: "none",
              marginLeft: "250px",
            }}
          >
            + New Batch
          </button></div>
        </div>
        {/* Header part ended */}
        {/* AddBatch Table started */}
        <div className="table-responsive-sm mt-2">
        <table className="table table-hover table-borderless">
          <thead>
            <tr id="tablerow" style={{ backgroundColor: "#E9EEF7",}}>
              <th scope="col">⬜</th>
              <th scope="col">No.</th>
              <th scope="col">Batch ID</th>
              <th scope="col">Batch Name</th>
              <th scope="col">Mentor Name</th>
              <th scope="col">Technologies</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value, index) => {
              return (
                <tr key={index} className="mt-2 p-2">
                  <td scope="row">
                    <input type="checkbox" />
                  </td>
                  <td>{index + 1}</td>
                  <td>TYSC0522002</td>
                  <td>{value.batchName}</td>
                  <td>{value.mentorName}</td>
                  <td>{value.technologies}</td>
                  <td>{value.startDate}</td>
                  <td>{value.endDate}</td>
                  <td>
                    <p style={{ color: "#DFBC03" }}>In Progress</p>
                    <p style={{ color: "#03BE35" }}>Completed</p>
                    <p style={{ color: "#1492E6" }}>To be started</p>
                  </td>
                  <td>
                    <button
                      className="border-0 bg-white"
                      type="button"
                      onClick={() => {
                        selectedBatch(value);
                      }}
                    >
                      <i className="fas fa-pen"></i>
                    </button>
                    <button
                      onClick={(val) => {
                        deleteAddBatch(val);
                      }}
                    >
                      <i type="submit" className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        {/* AddBatch teble Ended */}
      </div>
      </div>

      {/* form to add Adding new batch */}
      <Modal
        show={showAddBatch}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={closeAddBatch}>
          <Modal.Title
            style={{ color: "#086288" }}
            id="contained-modal-title-vcenter"
          >
            Add new batch
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={dontRefresh}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Batch Name</Form.Label>
              <Form.Control
                type="text"
                name="batchName"
                value={AddBatch.batchName}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Mentor Name</Form.Label>
              <Form.Select
                id="disabledSelect"
                style={{ height: "50px", border: "2px solid black" }}
              >
                <option> Satyam </option>
                <option> Megha</option>
                <option> Umashankar</option>
              </Form.Select>
            </Form.Group>

            {/* for technologies multiple selectable technologies started */}

            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Mentor Name</Form.Label>
              <Select
                mode="multiple"
                showArrow
                tagRender={tagRender}
                defaultValue={["gold", "cyan"]}
                style={{
                  width: "100%",
                }}
                options={options}
              />
            </Form.Group>
            {/* for technologies multiple selectable technologies ended*/}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={AddBatch.startDate}
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
                value={AddBatch.endDate}
                onChange={(e) => {
                  changeDetails(e);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={addBatches}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>

      <EditBatch
        showEditBatch={showEditBatch}
        selectBatch={selectBatch}
        closeEditBatch={closeEditBatch}
        addBatches={addBatches}
      />
    </div>
    // </div>
  );
}

export default AddBatch;
