import { Container, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">About Us</Text>
        <Text fontSize="xl">We are a local newspaper dedicated to bringing you the latest news from our community. Our team of dedicated journalists works around the clock to ensure you stay informed.</Text>
      </VStack>
    </Container>
  );
};

export default About;