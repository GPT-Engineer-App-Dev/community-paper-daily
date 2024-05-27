import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="2xl" fontWeight="bold" color="white">Local News</Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }} color="white">Home</Link>
          <Link as={RouterLink} to="/about" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }} color="white">About</Link>
          <Link as={RouterLink} to="/contact" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "blue.700" }} color="white">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;