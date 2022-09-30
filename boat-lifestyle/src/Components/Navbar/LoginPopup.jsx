import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const LoginPopup = ({ login, setLogin }) => {
  const toggleStatus = () => {};
  return (
    <Box
      bg={"white"}
      h={"90px"}
      w={"210px"}
      position="absolute"
      right={"15px"}
      top={"70px"}
      zIndex={"10"}
      p="5px"
      borderRadius={"5px"}
      border="1px solid lightgrey"
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mb={"15px"}
        pl={"10px"}
        pr={"10px"}
      >
        <p
          style={{
            color: "red",
            fontSize: "1.1rem",
            margin: "0px",
            fontWeight: "bold",
          }}
        >
          {/* {credData.first_name ? `Hi ${credData.first_name}!` : "Hi boAthead!"} */}
          Hi boAthead!
        </p>
        <Spacer />
        <ImCross
          cursor={"pointer"}
          onClick={() => setLogin(!login)}
          size={13}
        />
      </Flex>
      <Link>
        <Button
          w={"100%"}
          bg={"red"}
          color={"white"}
          _hover={{ bg: "green" }}
          onClick={toggleStatus}
          h={"35px"}
          mb={"5px"}
          fontSize="1.1rem"
        >
          {/* {credData.first_name === undefined ? "Login" : "Logout"} */}
          Login
        </Button>
      </Link>
    </Box>
  );
};

export default LoginPopup;
