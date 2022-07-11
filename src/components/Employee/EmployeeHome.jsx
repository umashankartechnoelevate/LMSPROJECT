import React, { useEffect } from "react";
import './EmployeeHome.css'
import { useState } from "react";
import "antd/dist/antd.css";
import "./EmployeeHome.css";
import { Breadcrumb, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

//for model
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
const { Header, Content, Sider } = Layout;

function EmployeeHome() {
  //Reset password
  const [isresetPassword, setisresetPassword] = useState(false);

  useEffect(() => {
    setisresetPassword(true);
  },[]);

  // dropdown
  const menu = (
    <Menu 
      items={[
        {
          label: (
            <div className="profileHOver" ><a className="profileHOver" href="">
              Profile
            </a></div>
          ),
          key: "0",
        },
        {
          label: <div className="profileHOver" ><a href="">Change Password</a></div>,
          key: "1",
        },
        {
          label: <div className="profileHOver" ><a href="">Logout</a></div>,
          key: "2",
        },
      ]}
    />
  );

  let changePassword = () => {
    setisresetPassword(false);
  };
  return (
    <div>
      <Layout>
        <Header className="header bg-white">
          <Menu/>
          <div className="d-flex">
            <div>
              <img height="50px" src="./Homepage/logo.png" alt="" />
            </div>
            <img
              className="searchbaricon"
              height="20px"
              src="./Homepage/search.png"
              alt=""
            />
            <input
              className=" searchbar w-50"
              type="text"
              placeholder="Search Employee"
            />
            <div>
              <Dropdown className="profileHOver" overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <button className=" logoutbtn btn d-flex border-0">
                      <img
                        className="me-2 ProfileImage img-fluid "
                        data-bs-toggle="dropdown"
                        src="./Mentor/umashanksar mj.jpg"
                        alt="imag"
                        style={{ height: "40px", width: "40px" }}
                      />
                      <p className="me-2 mt-2">Uma</p>
                      <i className="fas fa-angle-down mt-3"></i>
                    </button>
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider width={90} className="site-layout-background mt-1">
            <nav>
              <div className=" groupdiv mt-5 ">
                <Link className="nav-link" to={"/EmployeeDashboard"}>
                  <img
                    className="groupimage"
                    src="./Mentor/Dashboard.png"
                    alt="group"
                    height="50px"
                  />
                  <p className="sidebarname">Dashboard</p>
                </Link>
              </div>
            </nav>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
              height: "850px",
            }}
          >
            <Breadcrumb
              separator=">"
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/EmployeeDashboard">Dashboard</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            ></Content>
          </Layout>
        </Layout>
      </Layout>

      {/* model for reset password */}
      <Modal
        show={isresetPassword}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            style={{
              color: "#086288",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="contained-modal-title-vcenter"
          >
            Reset your Password <br />
            to continue
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <input
            style={{
              width: "350px",
              height: "50px",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
            type="text"
            placeholder="Enter Existing Password"
          />
          <br />
          <input
            style={{
              width: "350px",
              height: "50px",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
            type="text"
            placeholder="Enter New Password (must be atleast 6 characters)"
          />
          <br />
          <input
            style={{ width: "350px", height: "50px", borderRadius: "5px" }}
            type="text"
            placeholder="ReEnter  Password"
          />
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <div>
            <Button type="submit" onClick={changePassword}>
              Change
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployeeHome;
