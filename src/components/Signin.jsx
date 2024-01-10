import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://104.237.6.253:4003/api/v1/auth/signin",
        credentials
      );

      console.log(response.data);

      console.log(response.data.accessToken, "ACCESS");

      const accessToken = response.data.data.accessToken;
      console.log("Access Token:", accessToken);
      if (!accessToken) {
        console.error("Access token not found in response.");

        return;
      }

      // Store the token in localStorage
      localStorage.setItem("accessToken", accessToken);
      alert(response.data.message);
      navigate("/get-order");
    } catch (error) {
      // Handle login error
      console.error("Login error:", error.response.error);
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="box-shadow p-8 rounded" style={{ maxWidth: "400px" }}>
        <h1 className="text-center mb-4">Sign-in</h1>
        <Form
          className="text-center"
          style={{ maxWidth: "300px", margin: "0 auto" }}
        >
          <h3>Phone No</h3>
          <input
            type="text"
            name="phone_no"
            value={credentials.phoneNumber}
            onChange={(e) =>
              setCredentials({ ...credentials, phoneNumber: e.target.value })
            }
            className="form-control mb-4"
            placeholder="Enter User Phone No"
            style={{ border: "2px solid #333" }}
          />

          <h3>Password</h3>
          <input
            type="text"
            name="password"
            className="form-control mb-2"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            style={{ border: "2px solid #333" }}
          />

          <Button
            variant="success"
            className="mt-4 mx-auto"
            onClick={handleLogin}
            style={{ border: "2px solid #333" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
