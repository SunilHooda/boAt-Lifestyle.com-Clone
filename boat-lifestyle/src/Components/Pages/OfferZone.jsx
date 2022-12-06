import { Box, Text, Stack } from "@chakra-ui/react";
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
        <Stack>
          <Box>
            <Text
              width={"100%"}
              p="0.8rem"
              color="black"
              fontSize="2.5rem"
              textAlign={"center"}
              cursor={"pointer"}
              _hover={{ textDecoration: "underline" }}
            >
              Offer Zone
            </Text>
          </Box>
        </Stack>
        <br />
        <AllProduct />
      </Box>
    </>
  );
}
