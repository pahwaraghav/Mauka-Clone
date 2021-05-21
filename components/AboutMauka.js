import {
  Box,
  Tag,
  Center,
  Text,
  SimpleGrid,
  Container,
  VStack,
} from "@chakra-ui/react";

import { Image as ChakraImage } from "@chakra-ui/react";

export default function AboutMauka() {
  return (
    <Container maxW="container.xl" pt={5}>
      <Center>
        <Tag borderRadius="full" bg="gray.200">
          <Text fontSize="xl" fontWeight="bold" p={4}>
            ABOUT MAUKA
          </Text>
        </Tag>
      </Center>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} mt={10} mx={5}>
        <VStack justify="center">
          <Text fontSize="2xl">
            At Mauka, we believe there is always room to grow — for you and for
            us.
          </Text>
          <Text fontSize="2xl" mt={5}>
            CohortZero will be the first of many communities for students to
            fail, learn, and improve.
          </Text>
        </VStack>
        <Box>
          <ChakraImage src="/source.gif" alt="logo" />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
