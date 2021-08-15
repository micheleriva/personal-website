import {
  Box,
  Center,
  Grid,
  Image,
  Text,
  Icon,
  VStack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import PageContainer from "../PageContainer";

type Social = {
  name: string;
  href: string;
  icon: typeof FaTwitter;
};

type OtherPage = {
  name: string;
  href: string;
};

const socialNetworks: Social[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/MicheleRivaCode",
    icon: FaTwitter,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/MicheleRiva95",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    href: "https://github.com/MicheleRiva",
    icon: FaGithub,
  },
  {
    name: "Medium",
    href: "https://micheleriva.medium.com",
    icon: FaMedium,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/channel/micheleriva",
    icon: FaYoutube,
  },
];

const otherPages = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Press",
    href: "/press",
  },
  {
    name: "My watch collection",
    href: "/watches",
  },
];

function Social(social: Social) {
  return (
    <Flex as="a" href={social.href} target="_blank" rel="noopener noreferrer">
      <Icon w="5" h="5" as={social.icon} color="white" mr="4" />
      <Text> {social.name} </Text>
    </Flex>
  );
}

function OtherPage(page: OtherPage) {
  return (
    <Flex as="a" href={page.href}>
      <Text> {page.name} </Text>
    </Flex>
  );
}

export default function Footer() {
  return (
    <Center bg="purple.700" textColor="gray.100" py="8">
      <PageContainer>
        <Grid
          gridTemplateColumns={["1fr", "1fr 1fr", "repeat(4, 1fr)"]}
          gap="6"
        >
          <Box>
            <Image src="/imgs/signs/light.png" w="24" mb="2" />
            <Text lineHeight="shorter" fontSize="xl" fontWeight="bold">
              Michele Riva
            </Text>
            <Text lineHeight="shorter"> Software Architect </Text>
          </Box>
          <Flex flexDir="column">
            <Divider mb="6" display={["block", "none", "none"]} />
            {socialNetworks.map((social, i) => (
              <Box key={social.name} mt={i ? "3" : "0"}>
                <Social {...social} />
              </Box>
            ))}
          </Flex>
          <Flex flexDir="column">
            <Divider mb="6" display={["block", "none", "none"]} />
            {otherPages.map((page, i) => (
              <Box key={page.name} mt={i ? "3" : "0"}>
                <OtherPage {...page} />
              </Box>
            ))}
          </Flex>
        </Grid>
      </PageContainer>
    </Center>
  );
}
