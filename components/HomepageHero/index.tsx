import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import personalImage from "../../public/imgs/micheleriva.jpeg";
import mainShadeImage from "../../public/imgs/shades/main.jpg";

export default function HomepageHero() {
  return (
    <>
      <Box w="full">
        <Box h={["sm", "md", "2xl"]} pos="relative" w="full">
          <Image
            src={mainShadeImage}
            quality={25}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <Box
            pos="absolute"
            w="full"
            h={["sm", "xl", "full"]}
            top="0"
            left="0"
            backdropFilter={["blur(10px)", "blur(12px)", "blur(50px)"]}
            bg="linear-gradient(180deg, rgba(9, 5, 22, 0) 50%, rgba(9, 5, 22, 1) 100%), linear-gradient(116.82deg, rgba(9, 5, 22, 0.75) 0%, #090516 100%);"
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              w={["container.xs", "container.sm", "container.xl"]}
              flexDir={["column-reverse", "column-reverse", "row"]}
              pt={["36", "48", "0"]}
              h="full"
              m="auto"
            >
              <Text
                as="h1"
                fontFamily="heading"
                fontSize={["3xl", "5xl", "6xl"]}
                w={["xs", "auto", "auto"]}
                mt={["6", "12", "0"]}
                textColor="gray.50"
                fontWeight="bold"
                lineHeight="1"
              >
                Software architect
                <br />
                Book author
                <br />
                International speaker
              </Text>
              <Box pos="relative">
                <Box
                  pos="absolute"
                  w={["xs", "md", "lg"]}
                  h={["32", "80"]}
                  filter="blur(32px) saturate(6)"
                >
                  <Image
                    alt="Michele Riva @Codemotion 2019"
                    src={personalImage}
                    quality={25}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
                <Box w={["xs", "md", "lg"]} h={["32", "80"]}>
                  <Image
                    alt="Michele Riva @Codemotion 2019"
                    src={personalImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}