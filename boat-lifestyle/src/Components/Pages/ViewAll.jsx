import { Box, Text } from "@chakra-ui/react";
import { AllProduct } from "./AllProducts";

export function ViewAll() {
  return (
    <>
      <Box>
        <Box color="black" h={"auto"} bg="white" mb={"-15px"}>
          <Text
            width={"15%"}
            p="0.8rem"
            ml={"2.4rem"}
            fontSize="2rem"
            textAlign={"center"}
            cursor={"pointer"}
          >
            boAt Collection
          </Text>
        </Box>
        <br />
        <AllProduct />
      </Box>
    </>
  );
}
