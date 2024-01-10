import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Create.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddOrder = () => {
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({
    orderName: "",
    subTotal: "",
    phoneNumber: "",
  });

  const handleAddOrder = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const response = await axios.post(
        "http://104.237.6.253:4003/api/v1/order/add-order",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const addedOrder = response.data;
      console.log(addedOrder);
      alert(response.data.message);
      navigate("/get-order");
    } catch (error) {
      // Handle order addition error
      console.error("Order addition error:", error.response.data);
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center width-container"
      style={{ height: "100vh" }}
    >
      <div
        className="box-shadow p-4 rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h1 className="text-center mb-4">Add Order</h1>

        <Form className="text-center">
          <h3>Order </h3>
          <input
            type="text"
            name="orderName"
            className="form-control mb-4"
            placeholder="Enter User name"
            value={orderData.orderName}
            onChange={(e) =>
              setOrderData({ ...orderData, orderName: e.target.value })
            }
            style={{ border: "2px solid #333" }}
          />

          {/* <h3>Order Name</h3>
          <input
            type="text"
            name="order_name"
            className="form-control mb-4"
            placeholder="Enter Order Name "
            value={data.order_name}
            onChange={handelChange}
            style={{ border: '2px solid #333' }}
          /> */}

          <h3>Sub Total</h3>
          <input
            type="text"
            name="subTotal"
            className="form-control mb-4"
            placeholder="Enter Sub Total "
            value={orderData.subTotal}
            onChange={(e) =>
              setOrderData({ ...orderData, subTotal: e.target.value })
            }
            style={{ border: "2px solid #333" }}
          />

          <h3>Phone No</h3>
          <input
            type="text"
            name="phoneNumber"
            className="form-control mb-2"
            placeholder="Enter Phone number"
            value={orderData.phoneNumber}
            onChange={(e) =>
              setOrderData({ ...orderData, phoneNumber: e.target.value })
            }
            style={{ border: "2px solid #333" }}
          />

          <Button
            variant="success"
            className="mt-4 mx-auto"
            onClick={handleAddOrder}
            style={{ border: "2px solid #333" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddOrder;
