import { useEffect, useContext } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../Styles/payment.css";
import { AppContext } from "../Context/AppContext";
import { useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const { handleClear } = useContext(AppContext);
  const navigate = useNavigate();
  const toast = useToast();

  const handleOtp = () => {
    if (otp === "") {
      toast({
        title: `Please Enter Your OTP`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        title: `Ordered Successfully`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      handleClear();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  useEffect(() => {
    toast({
      title: `Your OTP is 12345`,
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  }, [toast]);

  return (
    <Box className="backgroundColorOtp">
      <Box className="checkoutDiv">
        <Box className="checkoutHeadDiv">
          <h2 className="checkoutHead">Enter OTP</h2>
        </Box>
        <input
          type="text"
          placeholder="Enter Your Otp here..."
          value={otp}
          id="otp"
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button onClick={handleOtp} className="checkoutBtn">
          Submit
        </button>
      </Box>
    </Box>
  );
};

export default Otp;
