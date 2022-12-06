import { useEffect, useState } from "react";
import { AllProducts } from "./AllProductsData";
import { Box, Grid, Container, GridItem, Select } from "@chakra-ui/react";
import { SingleProductBox } from "../SingleItemBox/SingleProduct3";
import InfiniteScroll from "react-infinite-scroll-component";

export function AllProduct() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState(Array.from({ length: 16 }));

  const label = {
    fontSize: "14px",
    color: "#2F4F4F",
    textTransform: "uppercase",
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

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 16 })));
    }, 2000);
  };

  useEffect(() => {
    setData(AllProducts.slice(0, items.length));
  }, [items]);

  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Container
          maxW={"container.sm"}
          display="flex"
          margin={"auto"}
          justifyContent={"center"}
          alignItems="center"
          gap={2}
          marginBottom="20px"
        >
          <Box>
            <label style={label}>Filter by Category</label>
            <Select onChange={handleFilter}>
              <option value="manual">Featured</option>
              <option value="Airpods">Airpods</option>
              <option value="Headphones">Headphones</option>
              <option value="Womens">TRebel Women</option>
              <option value="Bluetooth Headphone">Speaker</option>
              <option value="Wired Headphone">Wired Headphone</option>
            </Select>
          </Box>
          <Box>
            <label style={label}>Sort by Price:</label>
            <Select onChange={handleChange}>
              <option value="manual">Featured</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
            </Select>
          </Box>
        </Container>
        <Container
          margin={"auto"}
          mt="20px"
          justify={"center"}
          align="center"
          maxW="container.xl"
        >
          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={data.length < 200}
            loader={<h4>Loading...</h4>}
          >
            <Grid
              w="full"
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              paddingTop="5px"
            >
              {data &&
                data.map((item, index) => {
                  return (
                    <GridItem key={item.id} justify={"center"} align="center">
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
                    </GridItem>
                  );
                })}
            </Grid>
          </InfiniteScroll>
        </Container>
      </Box>
    </>
  );
}
