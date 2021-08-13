import { Box, Grid, Text, Tag, Link, VStack } from "@chakra-ui/react";
import {
  OSSProject,
  GetAllOSSProjectsResponse,
} from "../../graphql/queries/getAllOSSProjects";

type OSSProjectsProps = {
  projects: GetAllOSSProjectsResponse;
};

type ProjectCardProps = {
  project: OSSProject;
};

export function Language({ language }: { language: string }) {
  const getColorScheme = (language) => {
    switch (language) {
      case "TypeScript":
        return "linkedin.500";
      case "Java":
        return "orange.500";
      case "Haskell":
        return "purple.500";
      case "Go":
        return "twitter.500";
      case "Node.js":
        return "whatsapp.500";
      default:
        return "gray.500";
    }
  };

  return (
    <Tag
      size="sm"
      as="span"
      pos="absolute"
      mt="1"
      right="0"
      bgColor={getColorScheme(language)}
      variant="solid"
    >
      {language}
    </Tag>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      padding="6"
      rounded="lg"
      bgColor="gray.100"
      color="gray.900"
      minH="36"
      boxShadow="dark-lg"
    >
      <Text fontSize="xl" fontWeight="bold" pos="relative">
        {project.name} <Language language={project.language} />
      </Text>
      <Link href={project.url} target="_blank" color="purple.500">
        {project.url}
      </Link>
      <Text>{project.description}</Text>
    </Box>
  );
}

export default function OSSProjects(props: OSSProjectsProps) {
  return (
    <Box>
      <Text
        fontFamily="heading"
        fontSize="5xl"
        fontWeight="black"
        lineHeight="shorter"
        bgGradient="linear(to-l, gray.50, gray.200)"
        bgClip="text"
      >
        Notable open-source <br /> projects and contributions
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" mt="16" gap="6">
        {/* @ts-ignore */}
        {props.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Box>
  );
}
