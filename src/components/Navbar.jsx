import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.700' }}>
          Home
        </Link>
        <Link as={NavLink} to="/about" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.700' }}>
          About
        </Link>
        <Link as={NavLink} to="/contact" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.700' }}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;