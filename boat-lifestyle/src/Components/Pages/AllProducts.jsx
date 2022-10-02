import { useEffect, useState } from "react";
import { AllProducts } from "./AllProductsData";
import { Box, Grid } from "@chakra-ui/react";
import { SingleProductBox } from "../SingleItemBox/SingleProduct3";
export function AllProduct() {
  const [data, setData] = useState([]);

  const sort = {
    display: "flex",
    color: "black",
    justifyContent: "spaceBetween",
    alignItems: "center",
    width: "50%",
    margin: "auto",
  };
  const label = {
    fontSize: "14px",
    color: "#2F4F4F",
    textTransform: "uppercase",
  };

  const option = {
    fontWeight: "normal",
    display: "block",
    whiteSpace: "nowrap",
    minHeight: "1.2em",
    padding: "0px 2px 1px",
    textAlign: "center",
    transition: "opacity 5ms",
    border: "none",
  };

  const select = {
    display: "inlineBlock",
    verticalAlign: "middle",
    margin: "-18px 0 -16px 0.5em",
    fontSize: "16px",
    letterpacing: "0",
    backgroundColor: "transparent",
    color: "#2F4F4F",
    // border: none;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    let temp = [...AllProducts];

    if (value === "manual") {
      temp = AllProducts;
    } else if (value === "price-ascending") {
      temp = temp.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      temp = temp.sort((a, b) => {
        return b.price - a.price;
      });
    }

    setData(temp);
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    let temp = [...AllProducts];

    if (value === "manual") {
      temp = AllProducts;
    } else if (value === "Airdops") {
      temp = temp.filter((item) => {
        return item.category === value;
      });
    } else if (value === "Headphones") {
      temp = temp.filter((item) => {
        return item.category === value;
      });
    } else if (value === "Womens") {
      temp = temp.filter((item) => {
        return item.category === value;
      });
    } else if (value === "Bluetooth Headphone") {
      temp = temp.filter((item) => {
        return item.category === value;
      });
    } else if (value === "Wired Headphone") {
      temp = temp.filter((item) => {
        return item.category === value;
      });
    }
    setData(temp);
  };

  useEffect(() => {
    setData(AllProducts);
  }, []);
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box pb="20px" pt={"-20px"} ml="100px" style={sort}>
          <Box className="sort" style={sort}>
            <>
              <label style={label}>Filter by Category</label>
              <span>
                <select style={select} onChange={handleFilter}>
                  <option style={option} value="manual">
                    Featured
                  </option>
                  <option style={option} value="Airpods">
                    Airpods
                  </option>
                  <option style={option} value="Headphones">
                    Headphones
                  </option>
                  <option style={option} value="Womens">
                    TRebel Women
                  </option>
                  <option style={option} value="Bluetooth Headphone">
                    Speaker
                  </option>
                  <option style={option} value="Wired Headphone">
                    Wired Headphone
                  </option>
                </select>
              </span>
            </>
          </Box>
          <Box className="sort" style={sort}>
            <>
              <label style={label}>Sort by Price:</label>
              <span>
                <select style={select} onChange={handleChange}>
                  <option style={option} value="manual">
                    Featured
                  </option>
                  <option style={option} value="price-ascending">
                    Price, low to high
                  </option>
                  <option style={option} value="price-descending">
                    Price, high to low
                  </option>
                </select>
              </span>
            </>
          </Box>
        </Box>

        <Box width={"100%"} height={"auto"} mb="50px" mt={"20px"}>
          <Grid
            templateColumns={"repeat(4,1fr)"}
            ml={"3rem"}
            templateRows={"auto"}
            rowGap="50px"
          >
            {data.map((item, index) => {
              return (
                <SingleProductBox
                  key={index}
                  name={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.images[0]}
                  id={index}
                  strp={item.strike_price}
                  dec={item.youSaved}
                  item={item}
                />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
