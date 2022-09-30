import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Grid,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SingleProductBox } from "../SingleProductBox2";
import { NewLaunches, DC, Marvel } from "./data";

export function CatchthemAll() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("1");

  const style = {
    padding: "0.1rem",
    cursor: "pointer",
  };

  const handleNewLaunches = () => {
    setData(NewLaunches);
    setValue("1");
  };

  const handleMarvel = () => {
    setData(Marvel);
    setValue("2");
  };

  const handleDC = () => {
    setData(DC);
    setValue("3");
  };

  useEffect(() => {
    setData(NewLaunches);
  }, []);
  return (
    <>
      <Box color="black" h={"auto"} bg="white" pb={"10px"}>
        <Text
          width={"17%"}
          p="0.8rem"
          ml={"1.7rem"}
          fontSize="2rem"
          textAlign={"center"}
          cursor={"pointer"}
          _hover={{ textDecoration: "underline" }}
        >
          CATCH'EM ALL
        </Text>
      </Box>

      <UnorderedList
        ml={"5px"}
        alignItems={"left"}
        width={"90%"}
        listStyleType={"none"}
        mb={"3rem"}
      >
        <Grid
          templateColumns={"repeat(6,1fr)"}
          gap={1}
          fontSize="18px"
          fontWeight={"bold"}
        >
          <ListItem
            style={style}
            color={value === "1" ? "red" : "#6A6868"}
            textDecoration={value === "1" ? "underline" : "none"}
            onClick={handleNewLaunches}
          >
            New Launches
          </ListItem>
          <ListItem
            style={style}
            color={value === "2" ? "red" : "#6A6868"}
            textDecoration={value === "2" ? "underline" : "none"}
            onClick={handleMarvel}
          >
            Marvel Products
          </ListItem>
          <ListItem
            style={style}
            color={value === "3" ? "red" : "#6A6868"}
            textDecoration={value === "3" ? "underline" : "none"}
            onClick={handleDC}
          >
            DC Products
          </ListItem>
          <Spacer />
          <ListItem
            mr={"-310px"}
            textAlign={"right"}
            // style={style}
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
                type={item.type}
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
