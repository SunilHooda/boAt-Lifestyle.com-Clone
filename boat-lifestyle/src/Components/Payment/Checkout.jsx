import React from "react";
import { Box } from "@chakra-ui/react";
import "../Styles/payment.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <Box className="backgroundColor">
      <Box className="checkoutDiv">
        <Box className="checkoutHeadDiv">
          <h2 className="checkoutHead">Delivery Address</h2>
        </Box>
        <label>First Name</label>
        <input type="text" />

        <label>Last Name</label>
        <input type="text" />

        <label>Address</label>
        <input type="text" />

        <label>City</label>
        <input type="text" />

        <label>State</label>
        <input type="text" />

        <label>Pincode</label>
        <input type="text" />
        <Link to={"/payments"}>
          <button className="checkoutBtn">Submit</button>
        </Link>
      </Box>
    </Box>
  );
};

export default Checkout;
