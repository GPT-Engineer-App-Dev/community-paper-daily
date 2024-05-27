import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Local News</Heading>
        <Text fontSize="lg">Stay updated with the latest news from your community.</Text>
        <Box boxSize="sm">
          <Image src="/images/news.jpg" alt="Local News" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;