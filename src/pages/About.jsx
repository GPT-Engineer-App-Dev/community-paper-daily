import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h2" size="xl">About Us</Heading>
      <Text fontSize="md">
        We are a local newspaper dedicated to bringing you the latest news from our community. Our team of dedicated journalists works around the clock to ensure you are always informed.
      </Text>
    </VStack>
  </Box>
);

export default About;