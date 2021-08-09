import { useState } from "react";
import { Box, Flex, Text, Link, Switch } from "@chakra-ui/react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../lib/responsive";

export default function About() {
  const [longBio, setLongBio] = useState(false);
  const isTabletOrDesktop = useMediaQuery({ minWidth: breakpoints.mobile });
  const showLongBio = isTabletOrDesktop ? true : longBio;

  return (
    <Flex flexDir={["column", "column", "row"]}>
      <Text
        as="h2"
        fontSize={["5xl", "6xl"]}
        lineHeight="shorter"
        fontWeight="bold"
        w={["80vw", "container.lg"]}
        mb={["8", "0"]}
      >
        Passionate <br />
        Experienced <br />
        Polyglot <br />
        Fast learner <br />
      </Text>

      <MediaQuery maxWidth={breakpoints.tablet}>
        <Switch
          mb="8"
          size="md"
          colorScheme="purple"
          onChange={() => {
            setLongBio(!longBio);
          }}
        >
          {" "}
          Long Bio{" "}
        </Switch>
      </MediaQuery>

      <Box textColor="whiteAlpha.800" fontSize="md" lineHeight="tall">
        <Text as="p" mb="4">
          I’m a passionate and experienced software engineer from Milan, Italy.
          <br />
          I’ve been working as a software engineer for ~10 years in both product
          and consultancy companies, taking the best from both worlds.
        </Text>
        {showLongBio && (
          <>
            <Text as="p" mb="4">
              During the last years, I have contributed to many open source
              projects from companies and foundations such as <b>Facebook</b>,{" "}
              <b>Uber</b>, <b>Maserati</b>,<b>Apache Foundation</b>,{" "}
              <b>Linux Foundation</b>, etc.
              <br />
              I’ve also written dozens of public domain articles about computer
              science, performance enhancements, scalability, clean code, and
              many other topics. You can find them here:{" "}
              <Link
                href="https://micheleriva.medium.com"
                textColor="blue.300"
                target="_blank"
              >
                https://micheleriva.medium.com
              </Link>
              . <br />
              I’m a fast learner. I love to learn new programming languages and
              paradigms to build high-quality software with them.
              <br />
            </Text>
            <Text as="p" mb="4">
              I’m currently coding in Node.js, TypeScript, Go, and Elixir, but
              I’d love to learn other programming languages to write programs
              in. In the past years, I’ve also had the opportunity to code in
              PHP, Ruby, Python, and other languages.
              <br />I also like to write frontend applications using React, Vue,
              Svelte, or just vanilla JS and CSS.
            </Text>
          </>
        )}
        <Text as="p">
          I’m currently working as a <b>Senior Software Engineer</b> at
          ViacomCBS, where I’m building a multi-tenant Node.js SSR/React
          application at the heart of our streaming websites and networks.
          <br />
          I'm also writing a book for <b>Packt</b> about advanced and real-world
          Next.js, published in late 2021.
        </Text>
      </Box>
    </Flex>
  );
}
