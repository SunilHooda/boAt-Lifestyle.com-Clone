import {
  Box,
  Text,
  Grid,
  Stack,
  Container,
  Spacer,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SingleProductBox } from "../SingleItemBox/SingleProductBox2";
import { BestSeller, TopEarbuds, TrendingWireless } from "./data";

export function BestofboAt() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("1");

  const style = {
    padding: "0.2rem",
    cursor: "pointer",
  };

  const handleBestSeller = () => {
    setData(BestSeller);
    setValue("1");
  };

  const handleTopEarbuds = () => {
    setData(TopEarbuds);
    setValue("2");
  };

  const handleTrendingWireless = () => {
    setData(TrendingWireless);
    setValue("3");
  };

  useEffect(() => {
    setData(BestSeller);
    setValue("1");
  }, []);

  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"column"}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Stack ml="1.8rem">
          <Box>
            <Text
              width={"100%"}
              p="0.8rem"
              color="black"
              fontSize="2rem"
              textAlign={"center"}
              cursor={"pointer"}
              _hover={{ textDecoration: "underline" }}
            >
              BEST OF boAt
            </Text>
          </Box>
        </Stack>

        <Container maxW="container.xl">
          <Stack direction="row" fontSize="18px" fontWeight={"bold"} pl="0.8">
            <Box>
              <Text
                width={"100%"}
                style={style}
                color={value === "1" ? "red" : "#6A6868"}
                textDecoration={value === "1" ? "underline" : "none"}
                onClick={handleBestSeller}
              >
                Best Sellers
              </Text>
            </Box>
            <Box>
              <Text
                width={"100%"}
                style={style}
                color={value === "2" ? "red" : "#6A6868"}
                textDecoration={value === "2" ? "underline" : "none"}
                onClick={handleTopEarbuds}
              >
                Top Earbuds
              </Text>
            </Box>
            <Box>
              <Text
                width={"100%"}
                style={style}
                color={value === "3" ? "red" : "#6A6868"}
                textDecoration={value === "3" ? "underline" : "none"}
                onClick={handleTrendingWireless}
              >
                Trending Wireless
              </Text>
            </Box>
            <Spacer />
            <Link to="/allProducts">
              <Text
                style={style}
                fontSize={"1rem"}
                color="black"
                fontWeight={"600"}
                _hover={{ textDecoration: "underline", color: "red" }}
              >
                View All
              </Text>
            </Link>
          </Stack>
        </Container>

        <Container
          margin={"auto"}
          justify={"center"}
          align="center"
          maxW="container.xl"
        >
          <Grid
            w="full"
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={4}
            paddingTop="5px"
          >
            {data &&
              data.map((item) => {
                return (
                  <GridItem key={item.id} justify={"center"} align="center">
                    <SingleProductBox
                      key={item.id}
                      name={item.title}
                      price={item.price}
                      rating={item.rating}
                      image={item.image}
                      id={item.id}
                      strp={item.strprice}
                      dec={item.dec}
                      item={item}
                    />
                  </GridItem>
                );
              })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
