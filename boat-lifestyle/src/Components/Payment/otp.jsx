import { useEffect, useContext } from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../Styles/payment.css";
import { AppContext } from "../Context/AppContext";

const Otp = () => {
  const { handleClear } = useContext(AppContext);
  const navigate = useNavigate();
  const handleOtp = () => {
    alert("Ordered Successfully");
    handleClear();
    navigate("/");
  };

  useEffect(() => {
    alert("Please Enter the OTP");
  }, []);

  return (
    <Box className="backgroundColorOtp">
      <Box className="checkoutDiv">
        <Box className="checkoutHeadDiv">
          <h2 className="checkoutHead">Enter OTP</h2>
        </Box>
        <input type="text" />
        <button onClick={handleOtp} className="checkoutBtn">
          Submit
        </button>
      </Box>
    </Box>
  );
};

export default Otp;
