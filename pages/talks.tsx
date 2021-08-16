import {
  Center,
  Box,
  Text,
  Tag,
  Grid,
  Divider,
  Button,
  Link,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import client from "../graphql";
import {
  GET_ALL_TALKS,
  Talks as TTalks,
  Talk,
} from "../graphql/queries/getAllTalks";
import PageContainer from "../components/PageContainer";

type TalksProps = {
  talks: Talk[];
};

const readyTopics = [
  "GraphQL",
  "Haskell",
  "Functional Programming",
  "Next.js",
  "Node.js",
  "Careers in tech",
  "Software Architectures",
];

export async function getStaticProps() {
  const { data } = await client.query<TTalks>({
    query: GET_ALL_TALKS,
  });

  return {
    props: {
      talks: data.talks,
    },
  };
}

export default function Talks({ talks }: TalksProps) {
  return (
    <Box pt={["24", "48"]} textColor="gray.100">
      <Center>
        <PageContainer>
          <Text
            as="h1"
            fontSize={["4xl", "6xl"]}
            fontWeight="bold"
            lineHeight="shorter"
          >
            I'm always up for talking <br />
            at conferences and meetups!
          </Text>
          <Text as="p" fontSize="xl" mt="4">
            I'm always ready for joining conferences as a speaker! <br />I
            already have some talks ready with the following topics:
          </Text>
          <Box mt="4">
            {readyTopics.map((topic) => (
              <Tag
                colorScheme="whatsapp"
                mr="2"
                mb={["2", "2", "0"]}
                key={topic}
              >
                {topic}
              </Tag>
            ))}
          </Box>
          <Box mt="12">
            <Button
              colorScheme="messenger"
              as="a"
              href="mailto:ciao@micheleriva.it"
            >
              {" "}
              Let's get in touch
            </Button>
          </Box>
        </PageContainer>
      </Center>
      <Box mt="24" bgColor="gray.200" textColor="gray.800" py="12">
        <Center>
          <PageContainer>
            <Text
              as="h1"
              fontSize={["4xl", "6xl"]}
              fontWeight="bold"
              lineHeight="shorter"
              mb="6"
            >
              Recent talks
            </Text>
            <Grid gridTemplateColumns="1fr" gap="4">
              {talks.map((talk) => (
                <Box
                  key={talk.id}
                  boxShadow="lg"
                  p="4"
                  rounded="md"
                  bgColor="gray.100"
                >
                  <Text fontSize="xl" fontWeight="bold">
                    {talk.title}
                  </Text>
                  <Box>
                    {talk.url && (
                      <Link
                        textColor="messenger.500"
                        href={talk.url}
                        target="_blank"
                        fontSize="md"
                      >
                        Watch recording
                      </Link>
                    )}
                  </Box>
                  <Text fontSize="md">
                    {dayjs(talk.date, "YYYY-MM-DD").format("DD MMM YYYY")} ·{" "}
                    {talk.venue}
                  </Text>
                  <Divider borderColor="gray.300" my="4" />
                  <Box mt="2">
                    {talk.tags.split(",").map((tag) => (
                      <Tag
                        key={tag}
                        mb={["2", "2", "0"]}
                        colorScheme="blackAlpha"
                        mr="2"
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Box>
                </Box>
              ))}
            </Grid>
          </PageContainer>
        </Center>
      </Box>
    </Box>
  );
}
