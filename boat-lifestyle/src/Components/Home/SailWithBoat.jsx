import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SingleProductBox } from "../SingleItemBox/SingleProductBox";
import { SailWithBoat } from "./data";
import { Timer } from "../Pages/Timer";
import { Link } from "react-router-dom";

export function SailWthBoat() {
  return (
    <>
      <Box color="white" h={"auto"} bg="black" pb={"30px"}>
        <Box>
          <Flex>
            <Text
              width={"21.5%"}
              pt="2.5rem"
              fontSize="2rem"
              textAlign={"center"}
              cursor={"pointer"}
            >
              SAIL WITH boAt
            </Text>
            <Spacer />
            <Link to="/sailwithboAt">
              <Text
                width={"80%"}
                fontSize="1rem"
                textAlign={"center"}
                cursor={"pointer"}
                margin={"auto"}
                mt={"3.5rem"}
                mr={"4rem"}
                p={"2px"}
                textDecoration="underline"
                _hover={{ color: "red" }}
              >
                View All
              </Text>
            </Link>
          </Flex>
        </Box>
        <Timer />
        <br /> <br />
        <Box>
          <Slider
            style={{
              width: "95%",
              marginLeft: "35px",
              height: "470px",
              margin: "auto",
              marginTop: "-20px",
            }}
            infinite={true}
            speed={200}
            slidesToShow={4}
            slidesToScroll={4}
            centerMode={true}
            swipeToSlide={true}
            autoplay={true}
            autoplaySpeed={2000}
            centerPadding={"10px"}
          >
            {SailWithBoat.map((item) => {
              return (
                <SingleProductBox
                  key={item.id}
                  name={item.pname}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  id={item.id}
                  strp={item.strprice}
                  dec={item.dec}
                  item={item}
                />
              );
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
}
