import { Box, Text, Stack } from "@chakra-ui/react";
import { AllProduct } from "./AllProducts";
import { Timer } from "./Timer";

export function SailWithboAt() {
  return (
    <>
      <Box>
        <Box color="black" h={"auto"} bg="white" mb={"-15px"}>
          <Stack>
            <Box>
              <Text
                width={"100%"}
                p="0.8rem"
                color="black"
                fontSize="2.5rem"
                textAlign={"center"}
                cursor={"pointer"}
              >
                SAIL WITH boAt
              </Text>
            </Box>
          </Stack>
        </Box>
        <Timer />
        <br />
        <AllProduct />
      </Box>
    </>
  );
}
