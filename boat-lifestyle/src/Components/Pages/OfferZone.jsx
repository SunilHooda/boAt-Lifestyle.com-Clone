import { Box, Text } from "@chakra-ui/react";
import { AllProduct } from "./AllProducts";

export function OfferZone() {
  return (
    <>
      <Box>
        <Box>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/offer-page_strip_Web.jpg?v=1634206843"
            style={{ maxWidth: "98.8vw" }}
            alt="oFFERzONE"
          />
        </Box>
        <br />
        <br />
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
            OFFER ZONE
          </Text>
        </Box>
        <br />
        <AllProduct />
      </Box>
    </>
  );
}
