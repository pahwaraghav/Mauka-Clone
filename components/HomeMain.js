import { Grid, GridItem } from "@chakra-ui/layout";
import { Box, Text, Button, Tag } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
export default function HomeMain() {
  return (
    <div>
      <Grid templateColumns="repeat(2, 1fr)" spacing={10} bg="#0a1e32">
        <GridItem colSpan={[2, 1]}>
          <Box
            w="100%"
            p={4}
            mt={[5, 20]}
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
          >
            <Text fontSize={["4xl", "6xl"]} color="white" fontWeight="bold">
              Mauka is building a playground for you.
            </Text>
            <Text fontSize={["3xl", "2xl"]} color="white">
              A professional playground for you to learn, discover, fail and
              grow with like minded people.
            </Text>
            <Button mt={10} colorScheme="gray" fontSize="2xl" p={10}>
              JOIN NOW
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={[2, 1]}>
          <Box mt={[0, 20]}>
            <Image src="main2.png" alt="Main" />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}
