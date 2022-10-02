import React from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import "../Styles/payment.css";

const Payments = () => {
  const navigate = useNavigate();
  const otpSend = () => {
    alert("OTP has been send to your registered Mobile.");
    navigate("/otp");
  };
  return (
    <Box className="backgroundColorPayment">
      <Box className="checkoutDiv">
        <Box className="checkoutHeadDiv">
          <h2 className="checkoutHead">Payment Details</h2>
        </Box>
        <label>Card Holder's Name</label>
        <input type="text" name="" id="" />
        <label>Card Number</label>
        <input type="password" name="" id="" />
        <label>CVV</label>
        <input type="password" name="" id="" />
        <label>Expiry date</label>
        <input type="date" name="" id="" />
        <button className="checkoutBtn" onClick={otpSend}>
          Submit
        </button>
      </Box>
    </Box>
  );
};

export default Payments;
