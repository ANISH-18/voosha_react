import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Create.css";

function DisplayOrder() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await axios.get(
          "http://104.237.6.253:4003/api/v1/order/get-order",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(response.data.data);
        console.log(response.data);
        setError(null); // Reset error if successful
      } catch (error) {
        console.error("Error fetching orders:", error.response.data);
        setError(error.response.data.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <div className="container text-center my-4">
        <Row className="justify-content-end mt-3 mr-3">
          <Col xs={3} className="text-center">
            <Link to="/add-order">
              <Button variant="success" size="lg" style={{ width: "100%" }}>
                Add Order
              </Button>
            </Link>
          </Col>
        </Row>

        <h1>Orders History</h1>

        {error && <div className="alert alert-danger">{error}</div>}
        <Table
          className="my-4"
          responsive
          striped
          bordered
          hover
          variant="secondary"
          style={{ border: "2px solid #333" }}
        >
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>User ID</th>
              <th>Order Name</th>
              <th>Sub Total</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachData, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{eachData.user_id}</td>
                <td>{eachData.orderName}</td>
                <td>{eachData.subTotal}</td>
                <td>{eachData.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DisplayOrder;
