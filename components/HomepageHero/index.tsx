import Image from "next/image";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import personalImage from "../../public/imgs/micheleriva.jpeg";
import mainShadeImage from "../../public/imgs/shades/main.jpg";
import { GDE } from "../../components/Icon";

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
            className="backdrop-blur"
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
              <Box pos="relative">
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
                <Spacer my="4" />
                <Box display={["none", "block"]}>
                  <a
                    href="https://developers.google.com/community/experts/directory/profile/profile-michele-riva"
                    target="_blank"
                  >
                    <Flex
                      pos="absolute"
                      bgColor="white"
                      px="2.5"
                      py="1.5"
                      rounded="md"
                      textColor="gray.800"
                    >
                      <Box w="3" h="4" mr="2" pos="relative">
                        <GDE width={25} height={20} />
                      </Box>
                      <Text fontSize="xs" ml="2.5">
                        Google Developer Expert
                      </Text>
                    </Flex>
                  </a>
                </Box>
              </Box>
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
