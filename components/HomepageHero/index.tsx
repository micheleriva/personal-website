import Image from "next/image";
import { Box, Grid, Flex, Text, VStack } from "@chakra-ui/react";
import personalImage from "../../public/imgs/micheleriva.jpeg";

function HeadingText({ children }) {
  return (
    <Text
      as="h2"
      fontSize="4xl"
      fontFamily="heading"
      bgGradient="linear(to-l, purple.500, red.500)"
      bgClip="text"
      lineHeight="10"
    >
      {children}
    </Text>
  );
}

export default function HomepageHero() {
  return (
    <Grid
      m="auto"
      mt="8"
      mb="8"
      w="full"
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      columnGap="sm"
    >
      <Flex alignItems="center">
        <VStack alignItems="flex-start">
          <Text
            as="h1"
            fontSize="6xl"
            fontFamily="heading"
            fontWeight="bold"
            lineHeight="short"
          >
            Michele Riva
          </Text>
          <HeadingText>
            Software architect <br />
            book author <br />
            international speaker
          </HeadingText>
        </VStack>
      </Flex>

      <Flex justifyContent="flex-end">
        <Box w={["full", "full", "xl"]} h="96" pos="relative">
          <Image
            src={personalImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Michele Riva live at Codemotion 2019"
          />
        </Box>
      </Flex>
    </Grid>
  );
}
