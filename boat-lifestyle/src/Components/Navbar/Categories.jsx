import { Grid, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Categories() {
  return (
    <>
      <UnorderedList
        h="180px"
        borderBottomRadius={"1rem"}
        zIndex={"10"}
        left={"80px"}
        width="100%"
        margin={"auto"}
        boxSize="border-box"
        border={"1px solid lightgrey"}
        position="absolute"
        top="70px"
        p="40px"
        // alignItems={"center"}
        listStyleType={"none"}
        bg="white"
      >
        <Grid
          alignItems={"center"}
          templateColumns="repeat(4, 1fr)"
          rowGap={90}
          columnGap={140}
        >
          <ListItem>
            <Link to={"#"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1663752600"
                alt="hello"
              />
              <p>AirDops True Wireless</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"#"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_100x.png?v=1663752867"
                alt="hello"
              />
              <p>Rockerzz Wireless</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"#"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_100x.jpg?v=1663753638"
                alt="hello"
              />
              <p>Smart Watches</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"#"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1663753167"
                alt="hello"
              />
              <p>Basshead Wired</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"#"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1663753243"
                alt="hello"
              />
              <p>Stone Speakers</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"#"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1663753280"
                alt="hello"
              />
              <p>Avante Home Audio</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"#"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_100x.jpg?v=1663753774"
                alt="hello"
              />
              <p>Mobile Accessories</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"#"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1663755824"
                alt="hello"
              />
              <p>Trebal for Women</p>
            </Link>
          </ListItem>
        </Grid>
      </UnorderedList>
    </>
  );
}
