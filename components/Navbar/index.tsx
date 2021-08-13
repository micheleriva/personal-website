import Link from "next/link";
import MediaQuery from "react-responsive";
import {
  Button,
  Center,
  Flex,
  Box,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Divider,
  VStack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { breakpoints } from "../../lib/responsive";
import PageContainer from "../PageContainer";

const NavbarElements = [
  {
    label: "Podcast",
    href: "/podcast",
  },
  {
    label: "Contacts",
    href: "/contacts",
  },
  {
    label: "Blog",
    href: "https://micheleriva.medium.com",
    external: true,
  },
  {
    label: "Resume",
    href: "https://standardresume.co/r/micheleriva",
    external: true,
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center
      pos="absolute"
      top="0"
      left="0"
      w="full"
      pt={["0", "4", "4"]}
      pb="4"
      zIndex="1"
    >
      <PageContainer>
        <MediaQuery minWidth={breakpoints.tablet}>
          <Flex justifyContent="space-between">
            <Link href="/" passHref>
              <a>
                <Image
                  src="/imgs/signs/light.png"
                  alt="Michele Riva sign"
                  blendMode="lighten"
                  width="32"
                />
              </a>
            </Link>
            <HStack spacing="8">
              {NavbarElements.map(({ label, href, external }) => (
                <Link href={href} passHref key={label}>
                  <Button
                    as="a"
                    variant="link"
                    target={external ? "_blank" : "_self"}
                    textColor="white"
                  >
                    <Text>
                      {label.toUpperCase()}
                      {external && <ExternalLinkIcon ml="2" as="span" />}
                    </Text>
                  </Button>
                </Link>
              ))}
            </HStack>
          </Flex>
        </MediaQuery>

        <MediaQuery maxWidth={breakpoints.tablet}>
          <Flex justifyContent="space-between">
            <Link href="/" passHref>
              <a>
                <Image
                  src="/imgs/signs/light.png"
                  alt="Michele Riva sign"
                  blendMode="lighten"
                  width="20"
                />
              </a>
            </Link>
            <Box>
              <IconButton
                onClick={onOpen}
                aria-label="Open navigation menu"
                colorScheme="whiteAlpha"
                variant="outline"
                icon={<HamburgerIcon />}
              />
              <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bgColor="dark" textColor="white" p="2">
                  <DrawerHeader>micheleriva.it</DrawerHeader>
                  <Divider mt="4" mb="4" borderColor="whiteAlpha.400" />
                  <DrawerBody>
                    <VStack spacing="4">
                      {NavbarElements.map(({ label, href, external }) => (
                        <Link href={href} passHref key={label}>
                          <Button
                            as="a"
                            variant="outline"
                            target={external ? "_blank" : "_self"}
                            colorScheme="white"
                            isFullWidth
                          >
                            <Text>
                              {label.toUpperCase()}
                              {external && (
                                <ExternalLinkIcon ml="2" as="span" />
                              )}
                            </Text>
                          </Button>
                        </Link>
                      ))}
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </Flex>
        </MediaQuery>
      </PageContainer>
    </Center>
  );
}
