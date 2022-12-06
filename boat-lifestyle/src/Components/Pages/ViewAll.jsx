import { Box, Text, Stack } from "@chakra-ui/react";
import { AllProduct } from "./AllProducts";

export function ViewAll() {
  return (
    <>
      <Box>
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
              boAt Collection
            </Text>
          </Box>
        </Stack>
        <br />
        <AllProduct />
      </Box>
    </>
  );
}
