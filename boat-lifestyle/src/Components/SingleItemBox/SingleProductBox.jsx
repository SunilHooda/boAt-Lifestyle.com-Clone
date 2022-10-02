import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { AppContext } from "./../Context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function SingleProductBox({
  id,
  image,
  name,
  rating,
  price,
  strp,
  dec,
  item,
}) {
  const { handleCartData, handleProductData } = useContext(AppContext);
  const toast = useToast();

  const handleToast = () => {
    toast({
      title: "Product Added To Cart.",
      // description: "We've created your account for you.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box
        borderRadius={"10px"}
        color={"black"}
        h="451px"
        bgColor="#EAEAEA"
        w={"85%"}
        p={"8px"}
      >
        <Box
          w="255px"
          h="37%"
          boxSize={"-webkit-fit-content"}
          alignItems={"center"}
          _hover={{ cursor: "pointer" }}
          onClick={() => handleProductData(item)}
        >
          <Image
            m="auto"
            ml={"15px"}
            mt={"10px"}
            w="255px"
            h="58%"
            src={image}
          />
          <Flex
            position={"absolute"}
            top="8px"
            bg="yellow"
            color={"black"}
            alignItems="center"
            p="3px"
            h={"1.2rem"}
            fontSize="0.9rem"
            ml="-7px"
            borderRadius={"3px"}
          >
            <MdFlashOn />
            <Text>
              <p>Super Saver</p>
            </Text>
          </Flex>
        </Box>

        <Box
          borderRadius={"10px"}
          bgColor={"white"}
          p="10px"
          border={"1px solid white"}
        >
          <Box textOverflow={"ellipsis"}>
            <Link to="/productDetails">
              <Text
                noOfLines={1}
                as={"b"}
                textAlign={"left"}
                _hover={{ cursor: "pointer" }}
                onClick={() => handleProductData(item)}
              >
                {name}
              </Text>
            </Link>
          </Box>

          <Flex gap={"0.5rem"} alignItems={"center"} marginBottom="5px">
            <FaStar color="red" size={13} border="none" />
            <Text> {rating}</Text>
          </Flex>

          <hr marginTop="5px" />

          <Flex>
            <Text color="red" as={"b"}>
              ₹ {price}
            </Text>
            <Text textDecoration={"line-through"} ml={"12px"} color={"#696969"}>
              ₹ {strp}
            </Text>
          </Flex>

          <Text fontSize={"0.8rem"} textAlign={"left"}>
            {dec}
          </Text>

          <Box mt={"10px"} textAlign={"center"}>
            <Button
              onClick={() => handleCartData(item)}
              width={"100%"}
              _hover={"none"}
              p="0px 10px"
              color={"white"}
              m={"auto"}
              bg="red"
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
