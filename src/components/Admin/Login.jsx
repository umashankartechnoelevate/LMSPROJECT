import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
// import { Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Login() {
  // for Admin module
  const [loginData, setLoginData] = useState({
    adminUserID: "",
    adminPassword: "",
  });

  // for Mentor module
  // const [mentorLoginData, setmentorLoginData] = useState({
  //   mentorUserID: "",
  //   mentorPassword: "",
  // });

  let navigate = useNavigate();

  let LoginDetails = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  let dontRefresh = (e) => {
    e.preventDefault();
  };
  console.log(loginData);

  // validation started
  const [userIDVal, setuserIDVal] = useState("");
  const [userPassVal, setuserPassVal] = useState("");

  let userIDValidate = () => {
    if (loginData.adminUserID) {
      let regex = /^[a-zA-Z.user]/g;
      if (regex.test(loginData.adminUserID)) {
        setuserIDVal("");
        return true;
      } else {
        setuserIDVal("* please enter correct userID");
      }
    // } else if (loginData.adminUserID) {
    //   let regex = /^[a-zA-Z.mentor]/g;
    //   if (regex.test(loginData.adminUserID)) {
    //     setmentorIDVal("");
    //     return true;
    // }else{
    //   setuserIDVal("* please enter userID");
    }
  };

  let passwordValidate = () => {
    if (loginData.adminPassword) {
      let regex = /^[A-Z][a-z0-9]/g;
      if (regex.test(loginData.adminPassword)) {
        setuserPassVal("");
        return true;
      } else {
        setuserPassVal("* please enter correct password");
      }
    } else {
      setuserPassVal("* enter your password");
    }
  };


  // const [mentorIDVal, setmentorIDVal] = useState("");

  // let mentorIDValidate = () => {
  //   if (loginData.adminUserID) {
  //     let regex = /^[a-zA-Z.mentor]/g;
  //     if (regex.test(loginData.adminUserID)) {
  //       setmentorIDVal("");
  //       return true;
  //     } else {
  //       setmentorIDVal("* please enter correct userID");
  //     }
  //   } else {
  //     setmentorIDVal("* please enter userID");
  //   }
  // };

  //validation ended
  let LoginDone = () => {
    userIDValidate();
    passwordValidate();
    // mentorIDValidate();
    localStorage.setItem("LoginData", JSON.stringify(loginData));

    // if validation true then only navigate to other page
    if (userIDValidate() && passwordValidate()) {
      navigate("/Home");
    } else {
      navigate("/MentorHome");
    }
  };

  return (
    <div>
      <div className="maindiv col-sm-12">
        <div className=" backimage container-fluid col-sm-12 ">
          <div className="row sideimg d-flex offset-2">
            <div className="col-md-8 col-sm-8 mt-5">
              <figure>
                <img
                  height="800"
                  width="1200"
                  src="./Login/sideimg2x.png"
                  alt=""
                />
                <figcaption>
                  <h1 id="figcap" className="text-white text-start ">
                    Good things on <br /> your way
                  </h1>
                </figcaption>
              </figure>
            </div>
            <div className="login col-md-4 col-sm-4 ms-5">
              <img
                height="100px"
                className="mt-5"
                src="./Login/techno.png"
                alt=""
              />
              <h1 className="logintext mb-5 mt-5">Login</h1>
              <div className>
                <form action="" onSubmit={dontRefresh}>
                  <label className="text-white">Employee ID</label>
                  <br />
                  <input
                    placeholder="Enter your login ID"
                    className="employeeinput mb-1 text-black "
                    type="text"
                    name="adminUserID"
                    value={loginData.adminUserID}
                    onChange={(e) => {
                      LoginDetails(e);
                    }}
                  />
                  {userIDVal && (
                    <div className="text-danger mb-1 fs-5">{userIDVal}</div>
                  )}
                  {/* {mentorIDVal && (
                    <div className="text-danger mb-1 fs-5">{mentorIDVal}</div>
                  )} */}

                  <br />
                  <div className="m-0 justify-content-start">
                    <label
                      className="text-white justify-content-start"
                      htmlFor=""
                      placeholder="Enter Password"
                    >
                      Password
                    </label>
                  </div> +

                  <input
                    placeholder="Enter your Password"
                    className="employeeinput text-black"
                    type="text"
                    name="adminPassword"
                    value={loginData.adminPassword}
                    onChange={(e) => {
                      LoginDetails(e);
                    }}
                  />
                  {userPassVal && (
                    <div className="text-danger fs-5">{userPassVal}</div>
                  )}
                  <div className="loginbutton mt-4 d-flex">
                    <button onClick={LoginDone} className="firstbtn text-white">
                      LOGIN
                    </button>
                    <button className="secondbtn text-white">CANCEL</button>
                  </div>
                  <div className="horline"></div>
                  <div className="d-flex mt-4">
                    <p className="text-white ">Copyright 2018 Aleercio.com</p>
                    <p className="text-white ms-5">
                      Terms & conditions | Privacy policy
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
