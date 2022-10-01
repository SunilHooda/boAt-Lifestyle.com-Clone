import { useEffect, useState } from "react";
import { AllProducts } from "./AllProductsData";
import { Box, Grid } from "@chakra-ui/react";
import { SingleProductBox } from "../SingleItemBox/SingleProduct3";
export function AllProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(AllProducts);
  }, []);
  return (
    <>
      <Box width={"100%"} height={"auto"} mb="50px">
        <Grid
          templateColumns={"repeat(4,1fr)"}
          ml={"3rem"}
          templateRows={"auto"}
          rowGap="50px"
        >
          {data.map((item) => {
            return (
              <SingleProductBox
                key={item.title}
                name={item.title}
                price={item.price}
                rating={item.rating}
                image={item.images[0]}
                id={item.title}
                strp={item.strike_price}
                dec={item.youSaved}
                item={item}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
