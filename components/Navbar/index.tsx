import Link from "next/link";
import { Button, Center, Flex, HStack, Image } from "@chakra-ui/react";
import PageContainer from "../PageContainer";

const NavbarElements = [
  {
    label: "Resume",
    href: "https://standardresume.co/r/micheleriva",
    external: true,
  },
  {
    label: "Podcast",
    href: "/podcast",
  },
  {
    label: "Blog",
    href: "https://micheleriva.medium.com",
    external: true,
  },
  {
    label: "Contacts",
    href: "/contacts",
  },
];

export default function Navbar() {
  return (
    <Center pos="absolute" top="0" left="0" w="full" pt="4" pb="4" zIndex="1">
      <PageContainer>
        <Flex justifyContent="space-between">
          <Link href="/" passHref>
            <a>
              <Image
                src="/imgs/signs/dark.jpg"
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
                  {label.toUpperCase()}
                </Button>
              </Link>
            ))}
          </HStack>
        </Flex>
      </PageContainer>
    </Center>
  );
}
