import { Box, Text } from "@chakra-ui/react";
import { AllProduct } from "./AllProducts";

export function SailWithboAt() {
  return (
    <>
      <Box>
        <Box color="black" h={"auto"} bg="white" pb={"10px"}>
          <Text
            width={"15%"}
            p="0.8rem"
            ml={"1.8rem"}
            fontSize="2rem"
            textAlign={"center"}
            cursor={"pointer"}
            _hover={{ textDecoration: "underline" }}
          >
            Sail With boAt
          </Text>
        </Box>
        <br />
        <AllProduct />
      </Box>
    </>
  );
}
