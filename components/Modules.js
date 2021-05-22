import {
  Box,
  Tag,
  Center,
  Text,
  SimpleGrid,
  Container,
  VStack,
  Grid,
  GridItem,
  Button,
  Flex,
} from "@chakra-ui/react";

import { HiOutlineChatAlt2 } from "react-icons/hi";
import { IoPeopleOutline, IoColorPaletteOutline } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";

import { Image as ChakraImage } from "@chakra-ui/react";

export default function AboutMauka() {
  return (
    <Container maxW="container.xl" pt={5}>
      <Center>
        <Tag borderRadius="full" bg="gray.200">
          <Text fontSize="xl" fontWeight="bold" p={4}>
            MODULES
          </Text>
        </Tag>
      </Center>
      <Center my={5}>
        <Tag borderRadius="full" bg="blue.100">
          <Text fontSize="lg" p={3} fontWeight="semibold" color="blue.800">
            MASTER THE 4C'S
          </Text>
        </Tag>
      </Center>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} width="100%">
        <GridItem colSpan={[12, 6, 6, 3]}>
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="2xl"
            p={8}
            height="400px"
            position="relative"
            _hover={{ bg: "#001021", color: "white" }}
            transition={"all .3s ease"}
          >
            <HiOutlineChatAlt2 size={70} />
            <Text fontWeight="bold" fontSize="xl">
              Communication
            </Text>
            <Text fontSize="xl">
              Empower your ideas with the communication they deserve.
            </Text>
            <Button position="absolute" bottom={10} bg="gray.800" color="white">
              Know more
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 3]}>
          <Box
            bg="white"
            height="400px"
            borderRadius="2xl"
            boxShadow="2xl"
            p={8}
            height="400px"
            position="relative"
            _hover={{ bg: "#001021", color: "white" }}
            transition={"all .3s ease"}
          >
            <IoPeopleOutline size={70} />
            <Text fontWeight="bold" fontSize="xl">
              Collaboration
            </Text>
            <Text fontSize="xl">
              Learn to make and work in high functioning, performance driven
              teams.
            </Text>
            <Button position="absolute" bottom={10} bg="gray.800" color="white">
              Know more
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 3]}>
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="2xl"
            p={8}
            height="400px"
            position="relative"
            _hover={{ bg: "#001021", color: "white" }}
            transition={"all .3s ease"}
          >
            <AiOutlineStock size={70} />
            <Text fontWeight="bold" fontSize="xl">
              Critical Thinking
            </Text>
            <Text fontSize="xl">
              Make problem solving your forté. Regardless of the complexity or
              domain.
            </Text>
            <Button position="absolute" bottom={10} bg="gray.800" color="white">
              Know more
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 3]}>
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="2xl"
            p={8}
            height="400px"
            position="relative"
            _hover={{ bg: "#001021", color: "white" }}
            transition={"all .3s ease"}
          >
            <IoColorPaletteOutline size={70} />
            <Text fontWeight="bold" fontSize="xl">
              Creativity
            </Text>
            <Text fontSize="xl">
              We don’t teach creativity. We just create the most conducive
              environment to foster yours
            </Text>
            <Button position="absolute" bottom={10} bg="gray.800" color="white">
              Know more
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
