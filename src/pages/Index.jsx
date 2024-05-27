import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to Local News</Text>
        <Text fontSize="xl">Stay updated with the latest news from your community.</Text>
        <Image src="/images/news.jpg" alt="Local News" boxSize="300px" objectFit="cover" />
      </VStack>
    </Container>
  );
};

export default Index;