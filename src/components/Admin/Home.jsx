import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Home.css";
import { Breadcrumb, Layout, Menu } from "antd";
// import AddBatch from "./Batch/AddBatch";
// import AddMentor from "./Mentor/AddMentor";
// import Request from "./Request/Request";
// import SideNav from './SideNav';
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

function Home() {
  return (
    <div>
      <Layout className="col col-md-12 col-sm-12">
        <Header className="header bg-white">
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
              placeholder="Search Mentor / Employee"
            />
            <div>
              <button className=" logoutbtn btn ">Logout</button>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider width={90} className="site-layout-background mt-1">
            <nav>
              <div className=" groupdiv mt-5 ">
                <Link className="nav-link" to={"/AddBatch"}>
                  <img
                    className="groupimage"
                    src="./Homepage/group2x2.png"
                    alt="group"
                    height="50px"
                  />
                  <p className="sidebarname">Batch</p>
                </Link>
              </div>
              <div className="mt-5">
                <Link className="nav-link" to={"/AddMentor"}>
                  <img
                    height="50px"
                    className="groupimage"
                    src="./Homepage/mentor2x.png"
                    alt="mentor"
                  />
                  <p className="sidebarname">Mentor</p>
                </Link>
              </div>
              <div className="mt-5">
                <Link className="nav-link" to={"/Request"}>
                  <img
                    height="50px"
                    src="./Homepage/request2x.png"
                    alt="request"
                  />
                  <p className="sidebarname">Request</p>
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
              <Breadcrumb.Item ><Link to="/AddBatch">Batch</Link></Breadcrumb.Item>
              <Breadcrumb.Item ><Link to="/AddMentor" >Mentor</Link></Breadcrumb.Item>
              <Breadcrumb.Item ><Link to="/Request">Request</Link></Breadcrumb.Item>
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

      <h1 className="try">Umashankar</h1>
    </div>
  );
}

export default Home;
