import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { SingleProductBox } from "../SingleItemBox/SingleProductBox";
import { SailWithBoat } from "./data";
import { Timer } from "../Pages/Timer";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function SailWthBoat() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Box color="white" bg="black" pb={"30px"}>
        <Stack>
          <Flex alignItems={"center"}>
            <Stack ml="3rem" pt="2.5rem">
              <Text
                width={"100%"}
                fontSize="2rem"
                textAlign={"center"}
                cursor={"pointer"}
              >
                SAIL WITH boAt
              </Text>
            </Stack>
            <Spacer />
            <Stack mr={"4rem"} pt="2.5rem">
              <Link to="/sailwithboAt">
                <Text
                  width={"100%"}
                  fontSize="1rem"
                  textAlign={"center"}
                  cursor={"pointer"}
                  margin={"auto"}
                  textDecoration="underline"
                  _hover={{ color: "red" }}
                >
                  View All
                </Text>
              </Link>
            </Stack>
          </Flex>
        </Stack>

        <Timer />

        <br />
        <Box margin={"auto"}>
          <Stack marginLeft="50px">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              arrows={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
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
            </Carousel>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
