import { Container, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Contact Us</Text>
        <Text fontSize="xl">Email: contact@localnews.com</Text>
        <Text fontSize="xl">Phone: (123) 456-7890</Text>
      </VStack>
    </Container>
  );
};

export default Contact;