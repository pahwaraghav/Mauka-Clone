import {
  Box,
  Tag,
  Center,
  Text,
  SimpleGrid,
  Container,
  VStack,
  HStack,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";

import { CalendarIcon } from "@chakra-ui/icons";

import { Image as ChakraImage } from "@chakra-ui/react";

export default function AboutMauka() {
  return (
    <Container maxW="container.xl" pt={5}>
      <Center>
        <Tag borderRadius="full" bg="gray.200">
          <Text fontSize="xl" fontWeight="bold" p={4}>
            COHORT DETAILS
          </Text>
        </Tag>
      </Center>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} mt={10} mx={5}>
        <Box>
          <ChakraImage src="/cohort.png" alt="logo" />
        </Box>

        <VStack align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Join our #CohortZero
          </Text>
          <Text fontSize="2xl" mt={5}>
            Get exclusive access to our community of 20 highly motivated
            individuals like you.
          </Text>

          <Grid templateColumns="repeat(12, 1fr)" gap={4} width="100%">
            <GridItem colSpan={2}>
              <Flex
                justify="center"
                align="center"
                bg="white"
                height={70}
                width={70}
                boxShadow="xl"
                borderRadius="50%"
              >
                <CalendarIcon boxSize={6} w={10} h={10} />
              </Flex>
            </GridItem>
            <GridItem colSpan={10} ml="5">
              <Text fontSize="xl">Cohort Timeline</Text>
              <Text>
                This cohort will start on 10th April and run for 60 days and
                will focus on high-demand, transferable skills that will give
                you an edge in your professional career.
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex
                justify="center"
                align="center"
                bg="white"
                height={70}
                width={70}
                boxShadow="xl"
                borderRadius="50%"
              >
                <CalendarIcon boxSize={6} w={10} h={10} />
              </Flex>
            </GridItem>
            <GridItem colSpan={10} ml="5">
              <Text fontSize="xl">Focus on community and networking</Text>
              <Text>
                At Mauka, we focus on creating communities and conversations —
                with yourself, your peers and experts through a series of Q&As
                with moderators and industry veterans.
              </Text>
            </GridItem>
          </Grid>
          <HStack></HStack>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
