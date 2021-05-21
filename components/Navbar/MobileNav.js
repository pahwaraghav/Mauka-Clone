import { Stack, useColorModeValue } from "@chakra-ui/react";

import MobileNavItem from "./MobileNavItem";

const MobileNav = ({ NAV_ITEMS }) => {
  return (
    <Stack
      bg={useColorModeValue("#001021", "gray.800")}
      color="white"
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
