import {
  Center,
  Box,
  Text,
  Tag,
  UnorderedList,
  ListItem,
  Button,
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
  const groupedByYear = talks.reduce((acc, talk) => {
    const year = dayjs(talk.date).year();

    if (year in acc) {
      return {
        ...acc,
        [year]: [...acc[year], talk],
      };
    }

    return {
      ...acc,
      [year]: [talk],
    };
  }, {});

  console.log(groupedByYear);

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
              Recent (and confirmed) talks
            </Text>
            <Box>
              {Object.keys(groupedByYear)
                .reverse()
                .map((year) => {
                  const yearlyTalks = groupedByYear[year].sort((x, y) =>
                    dayjs(x.date).isBefore(y.date) ? 1 : -1
                  );

                  return (
                    <UnorderedList mb="4">
                      <Text fontSize="xl" fontWeight="bold" mb="4">
                        {year}
                      </Text>

                      {yearlyTalks.map((t) => (
                        <ListItem>
                          <Text as="span" color="gray.500">
                            {" "}
                            {t.venue} {"- "}{" "}
                          </Text>
                          <Text as="span" fontWeight="semibold">
                            {t.url ? (
                              <Text
                                color="blue.500"
                                as="a"
                                href={t.url}
                                target="_new"
                                _hover={{ textDecor: "underline" }}
                              >
                                {" "}
                                {t.title}{" "}
                              </Text>
                            ) : (
                              t.title
                            )}
                          </Text>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  );
                })}
            </Box>
          </PageContainer>
        </Center>
      </Box>
    </Box>
  );
}
