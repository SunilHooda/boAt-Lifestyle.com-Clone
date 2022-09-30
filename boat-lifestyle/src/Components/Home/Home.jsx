import { Box } from "@chakra-ui/react";
import { SailWthBoat } from "./SailWithBoat";
import { ResponsiveCarousal } from "./ResponsiveCarousel";
import { BestofboAt } from "./BestofboAts";
import { CatchthemAll } from "./CatchthemAll";

export function Home() {
  return (
    <>
      <Box color="black" h={"auto"} bg="white">
        <ResponsiveCarousal />
        <SailWthBoat />
        <BestofboAt />
        <CatchthemAll />
      </Box>
    </>
  );
}
