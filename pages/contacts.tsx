import { Box, Center, HStack, Icon, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import PageContainer from "../components/PageContainer";

export default function Contacts() {
  return (
    <Center textColor="gray.100">
      <PageContainer>
        <Box pt={["24", "24", "48"]}>
          <Text fontSize="6xl" fontWeight="bold">
            {" "}
            Let's talk!{" "}
          </Text>
          <Text>Here's a list of things that I like to talk about:</Text>
          <Box mt="4" mb="4">
            <Text>
              <CheckCircleIcon as="span" color="whatsapp.500" mr="2" />
              Programming languages, frameworks and tech stacks
            </Text>
            <Text>
              <CheckCircleIcon as="span" color="whatsapp.500" mr="2" />
              Philosophy
            </Text>
            <Text>
              <CheckCircleIcon as="span" color="whatsapp.500" mr="2" />
              Music
            </Text>
            <Text>
              <CheckCircleIcon as="span" color="whatsapp.500" mr="2" />
              Photography
            </Text>
            <Text>
              <CheckCircleIcon as="span" color="whatsapp.500" mr="2" />
              Everything else
            </Text>
          </Box>
          <Text>
            so feel free to reach out on any of the following channels! <br />
            If you want to send a more formal message, you can always write to
            me at ciao[at]micheleriva.it
          </Text>
        </Box>
        <HStack mt="4" spacing="8">
          <a
            href="https://twitter.com/MicheleRivaCode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon w="8" h="8" as={FaTwitter} color="white" />
          </a>
          <a
            href="https://github.com/MicheleRiva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon w="8" h="8" as={FaGithub} color="white" />
          </a>
          <a
            href="https://linkedin.com/in/MicheleRiva95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon w="8" h="8" as={FaLinkedin} color="white" />
          </a>
          <a
            href="https://youtube.com/channel/micheleriva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon w="8" h="8" as={FaYoutube} color="white" />
          </a>
          <a
            href="https://micheleriva.medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon w="8" h="8" as={FaMedium} color="white" />
          </a>
        </HStack>
      </PageContainer>
    </Center>
  );
}
