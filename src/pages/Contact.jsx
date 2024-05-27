import { Container, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Contact Us</Text>
        <Text fontSize="xl">Email: contact@localnews.com</Text>
        <Text fontSize="xl">Phone: (123) 456-7890</Text>
        <Text fontSize="xl">Address: 123 Main Street, Hometown, USA</Text>
      </VStack>
    </Container>
  );
};

export default Contact;