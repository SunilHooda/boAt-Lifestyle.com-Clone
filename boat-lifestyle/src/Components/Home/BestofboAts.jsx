import { Box, Text, UnorderedList, ListItem, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SingleProductBox } from "../SingleProductBox2";
import {
  BestSeller,
  TopEarbuds,
  SmartWatches,
  TrendingWireless,
  TrendingANC,
} from "./data";

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

  const handleSmartWatches = () => {
    setData(SmartWatches);
    setValue("3");
  };

  const handleTrendingWireless = () => {
    setData(TrendingWireless);
    setValue("4");
  };

  const handleTrendingAnc = () => {
    setData(TrendingANC);
    setValue("5");
  };

  useEffect(() => {
    setData(BestSeller);
  }, []);
  return (
    <>
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
          BEST OF boAt
        </Text>
      </Box>

      <UnorderedList
        ml={"5px"}
        alignItems={"left"}
        width={"95%"}
        listStyleType={"none"}
        mb={"3rem"}
      >
        <Grid
          templateColumns={"repeat(6,1fr)"}
          gap={0.2}
          fontSize="18px"
          fontWeight={"bold"}
          // color={"#6A6868"}
        >
          <ListItem
            style={style}
            color={value === "1" ? "red" : "#6A6868"}
            textDecoration={value === "1" ? "underline" : "none"}
            onClick={handleBestSeller}
          >
            Best Sellers
          </ListItem>
          <ListItem
            style={style}
            color={value === "2" ? "red" : "#6A6868"}
            textDecoration={value === "2" ? "underline" : "none"}
            onClick={handleTopEarbuds}
          >
            Top Earbuds
          </ListItem>
          <ListItem
            style={style}
            color={value === "3" ? "red" : "#6A6868"}
            textDecoration={value === "3" ? "underline" : "none"}
            onClick={handleSmartWatches}
          >
            Smart Watches
          </ListItem>
          <ListItem
            ml={"20px"}
            style={style}
            color={value === "4" ? "red" : "#6A6868"}
            textDecoration={value === "4" ? "underline" : "none"}
            onClick={handleTrendingWireless}
          >
            Trending Wireless
          </ListItem>
          <ListItem
            ml={"20px"}
            color={value === "5" ? "red" : "#6A6868"}
            style={style}
            textDecoration={value === "5" ? "underline" : "none"}
            onClick={handleTrendingAnc}
          >
            Trending ANC
          </ListItem>
          <ListItem
            ml={"450px"}
            style={style}
            fontSize={"0.9rem"}
            color="black"
            fontWeight={"600"}
            _hover={{ textDecoration: "underline", color: "red" }}
          >
            ViewAll
          </ListItem>
        </Grid>
      </UnorderedList>

      <Box width={"100%"} height={"470px"}>
        <Grid templateColumns={"repeat(5,1fr)"} gap={0.1} ml={"3rem"}>
          {data.map((item) => {
            return (
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
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
