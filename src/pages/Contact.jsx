import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h2" size="xl">Contact Us</Heading>
      <Text fontSize="md">
        If you have any questions or feedback, feel free to reach out to us at contact@localnews.com.
      </Text>
    </VStack>
  </Box>
);

export default Contact;