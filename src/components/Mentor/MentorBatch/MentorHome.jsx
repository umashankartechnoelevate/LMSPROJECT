import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
//for login dropdown layoiut
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const { Header, Content, Sider } = Layout;

function MentorHome() {
  // dropdown
  const menu = (
    <Menu
      items={[
        {
          label: <a style={{transform:"scale(1.5 1)"}} href="">Profile</a>,
          key: "0",
        },
        {
          label: <a href="">Change Password</a>,
          key: "1",
        },
        {
          label: <a href="">Logout</a>,
          key: "1",
        },
      ]}/>);

  return (
    <div>
      <Layout>
        <Header className="header bg-white">
          <div className="logo" />
          <Menu />

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
            <div className="mt-2 dropdown">
              
              <Dropdown overlay={menu} trigger={["click"]}>
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
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Header>

        <Layout>
          <Sider width={90} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                // height: '100%',
                borderRight: 0,
              }}
            />
            <nav>
              <div className=" groupdiv mt-5 ">
                <Link className="nav-link" to={"/MentorDashboard"}>
                  <img
                    className="groupimage"
                    src="./Mentor/Dashboard.png"
                    alt="group"
                    height="50px"
                  />
                  <p className="sidebarname">Dashboard</p>
                </Link>
              </div>
              <div className="mt-2">
                <Link className="nav-link" to={"/MentorBatch"}>
                  <img
                    height="50px"
                    className="groupimage"
                    src="./Homepage/group2x2.png"
                    alt="mentor"
                  />
                  <p className="sidebarname">Batch</p>
                </Link>
              </div>
            </nav>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
              height: "855px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
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
    </div>
  );
}

export default MentorHome;
