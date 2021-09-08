import { useEffect, useState } from "react";
import { Center, Box, Text, Grid, Link, Icon, Tag } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import PageContainer from "../components/PageContainer";
import client from "../graphql";
import {
  GET_ALL_OSS_PROJECTS,
  OSSProject,
  GetAllOSSProjectsResponse,
} from "../graphql/queries/getAllOSSProjects";

export async function getStaticProps() {
  const { data } = await client.query<GetAllOSSProjectsResponse>({
    query: GET_ALL_OSS_PROJECTS,
  });

  return {
    props: {
      projects: data.opensourceProjects,
    },
  };
}

function getColorScheme(language: string) {
  switch (language.toLowerCase()) {
    case "typescript":
      return "teal";
    case "node.js":
      return "yellow";
    case "go":
      return "cyan";
    case "haskell":
      return "purple";
    case "vue":
      return "green";
    case "java":
      return "pink";
    default:
      return "gray";
  }
}

export default function OpenSource({ projects }: { projects: OSSProject[] }) {
  const [OSSProjects, setOSSProjects] = useState(projects);

  useEffect(() => {
    Promise.all(
      projects.map(async (project) => {
        const apiReq = await fetch(
          `https://api.github.com/repos/${project.owner.toLowerCase()}/${project.name.toLowerCase()}`,
          {
            headers: {
              Authorization: `Basic bWljaGVsZXJpdmE6Z2hwX2hkbXNZVUxsRUJIWXhSTFVVODB3V3FJQlE2QUhNZzRCc0dQTw==`,
            },
          }
        );
        const apiResp = await apiReq.json();
        return apiResp;
      })
    ).then((apiResponses) => {
      const newProjects = projects.map((project, index) => {
        const apiResponse = apiResponses[index];
        return {
          ...project,
          stars: apiResponse.stargazers_count,
          forks: apiResponse.forks_count,
        };
      });
      setOSSProjects(newProjects);
    });
  }, []);

  return (
    <Box textColor="gray.50" pt={["24", "24", "48"]}>
      <Center>
        <PageContainer>
          <Text
            as="h1"
            fontSize={["4xl", "6xl"]}
            fontWeight="bold"
            lineHeight="shorter"
          >
            My open-source projects and contributions.
          </Text>
          <Text as="p" mt="4" mb="10">
            With over <b>6000</b> contributions on GitHub, I try to give back to
            the community and help developers create their software by
            open-sourcing most of my free-time work.
          </Text>

          <Grid
            mt="12"
            mb="24"
            gridTemplateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]}
            gap="8"
          >
            {OSSProjects.map((project) => (
              <Box key={project.id} bgColor="gray.700" rounded="md" p="4">
                <Link href={project.url} target="_blank">
                  <Text as="span" textColor="whiteAlpha.800">
                    {" "}
                    {project.owner}/
                  </Text>
                  <Text fontWeight="bold" as="span">
                    {project.name}{" "}
                  </Text>
                </Link>
                <Text mt="2" textColor="whiteAlpha.800" fontSize="sm">
                  {" "}
                  {project.description}{" "}
                </Text>
                <Tag mt="2" colorScheme={getColorScheme(project.language)}>
                  {" "}
                  {project.language}{" "}
                </Tag>
                {project.stars && (
                  <Tag
                    mt="2"
                    ml="2"
                    colorScheme="gray"
                    as="a"
                    href={project.url}
                    target="_blank"
                  >
                    {" "}
                    <Icon as={StarIcon} /> {project.stars.toLocaleString()}{" "}
                  </Tag>
                )}
              </Box>
            ))}
          </Grid>
        </PageContainer>
      </Center>
    </Box>
  );
}
