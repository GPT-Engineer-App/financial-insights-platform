import { Box, Container, Flex, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" p={4}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">World</Link>
            <Link href="#">Business</Link>
            <Link href="#">Tech</Link>
            <Link href="#">Markets</Link>
            <Link href="#">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Main Headline Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Main Headline</Heading>
          <Text fontSize="lg">This is the main headline section where the top news story will be displayed.</Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4}>
            <Link href="#">Additional Link 1</Link>
            <Link href="#">Additional Link 2</Link>
            <Link href="#">Additional Link 3</Link>
            <Link href="#">Advertisement</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Featured Articles */}
      <Box mt={8} p={4}>
        <Heading as="h3" size="lg" mb={4}>Featured Articles</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <Box flex="1" bg="gray.200" p={4}>
            <Heading as="h4" size="md" mb={2}>Article 1</Heading>
            <Text>Summary of the first featured article.</Text>
          </Box>
          <Box flex="1" bg="gray.200" p={4}>
            <Heading as="h4" size="md" mb={2}>Article 2</Heading>
            <Text>Summary of the second featured article.</Text>
          </Box>
          <Box flex="1" bg="gray.200" p={4}>
            <Heading as="h4" size="md" mb={2}>Article 3</Heading>
            <Text>Summary of the third featured article.</Text>
          </Box>
        </Stack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;