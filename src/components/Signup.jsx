import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Create.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://104.237.6.253:4003/api/v1/auth/signup",
        userData
      );

      console.log("Signup successful : Please Signin", response.data);
      alert(response.data.message);

      navigate("/signin");
    } catch (error) {
      // Handle signup error
      console.error("Signup error :", error.response.data);
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="box-shadow p-4 rounded">
        <h1 className="text-center mb-4">Register New User</h1>
        <Form className="text-center">
          <h3>User Name</h3>
          <input
            type="text"
            name="name"
            className="form-control mb-4"
            placeholder="Enter Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            style={{ border: "2px solid #333" }}
          />

          <h3>Password</h3>
          <input
            type="text"
            name="password"
            className="form-control mb-4"
            placeholder="Enter Password "
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            style={{ border: "2px solid #333" }}
          />

          <h3>Phone No.</h3>
          <input
            type="text"
            name="phone_no"
            className="form-control mb-2"
            placeholder="Enter Phone number"
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
            style={{ border: "2px solid #333" }}
          />

          <Button
            variant="success"
            className="mt-4 mx-auto"
            onClick={handleSignup}
            style={{ border: "2px solid #333" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
