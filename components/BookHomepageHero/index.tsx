import Image from "next/image";
import {
  Box,
  Text,
  Center,
  Grid,
  VStack,
  Badge,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";
import PageContainer from "../PageContainer";
import BookBgImage from "../../public/imgs/gardens-by-the-bay.jpg";
import BookCover from "../../public/imgs/B16985_Real-World-Nextjs.png";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../lib/responsive";

export default function BookHomepageHero() {
  const isTabletOrDesktop = useMediaQuery({ minWidth: breakpoints.mobile });

  return (
    <Flex width="full" minH="100vh" pos="relative">
      <Image
        src={BookBgImage}
        alt="Gardens by the bay by Isaac Matthew on Unsplash"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Box
        pos="absolute"
        w="full"
        h="full"
        bgColor="blackAlpha.800"
        pt={["4", "24"]}
        pb={["4", "24"]}
      >
        <Center h="full">
          <PageContainer>
            <Grid gridTemplateColumns={["1fr", "1fr 1fr"]}>
              <VStack alignItems="flex-start">
                <Badge colorScheme="whatsapp"> My latest book </Badge>
                <Text fontFamily="heading" fontSize="5xl" fontWeight="bold">
                  Real-World Next.js
                </Text>
                <Text as="p" textColor="whiteAlpha.800">
                  Next.js is a scalable and high-performance React.js framework
                  for modern web development. It provides a large set of
                  features out of the box, such as hybrid rendering, route
                  prefetching, automatic image optimization, and
                  internationalization. With this book, you’ll learn how to
                  effectively use this exciting technology for a wide range of
                  purposes, from creating an e-commerce website or a simple
                  website to a blog without compromising on performance or user
                  experience.
                  <br />
                  {isTabletOrDesktop && (
                    <>
                      <br />
                      Starting from the basics of Next.js, you will understand
                      how the framework can help you reach your development
                      goals. You’ll also explore Next.js’s versatility by
                      building real-world applications with the help of
                      step-by-step explanations, understanding how to write unit
                      tests and integration tests for an app, integrating
                      different backends with the app, and more. Later, the book
                      shows you how to choose the right rendering methodology
                      for your website, how to secure it, and how to deploy it
                      to different providers. <br />
                    </>
                  )}
                  <br />
                  By the end of this Next.js book, you’ll have the skills you
                  need to be able to design, build, and deploy modern
                  architectures using Next.js with any headless CMS or data
                  source.
                </Text>
                <Spacer mt="4" mb="4" />
                <Grid
                  gridTemplateColumns={["1fr", "1fr 1fr"]}
                  gap={["3", "5"]}
                  w={["full", "", ""]}
                >
                  <Button
                    colorScheme="whatsapp"
                    as="a"
                    target="_blank"
                    href="https://rwnjs.com/order/packt"
                  >
                    Preorder on Packt
                  </Button>
                  <Button
                    colorScheme="orange"
                    as="a"
                    target="_blank"
                    href="https://rwnjs.com/order/amazon"
                  >
                    Preorder on Amazon
                  </Button>
                </Grid>
              </VStack>
              {isTabletOrDesktop && (
                <Flex alignItems="center" justifyContent="flex-end">
                  <Box pos="relative" w={["64", "96"]}>
                    <Image
                      src={BookCover}
                      alt="Real-World Next.js by Michele Riva"
                      layout="responsive"
                      width={80}
                      height={100}
                    />
                  </Box>
                </Flex>
              )}
            </Grid>
          </PageContainer>
        </Center>
      </Box>
    </Flex>
  );
}
