import type { GetStaticProps } from "next";
import { Center, Spacer, Box } from "@chakra-ui/react";
import apollo from "../graphql";
import {
  GET_ALL_CLIENTS,
  GetAllClientsResponse,
} from "../graphql/queries/getAllClients";
import {
  GET_ALL_OSS_PROJECTS,
  GetAllOSSProjectsResponse,
} from "../graphql/queries/getAllOSSProjects";
import PageContainer from "../components/PageContainer";
import HomepageHero from "../components/HomepageHero";
import Clients from "../components/Clients";
import About from "../components/About";
import BookHomepageHero from '../components/BookHomepageHero';

type PageProps = {
  clients: GetAllClientsResponse;
  projects: GetAllOSSProjectsResponse;
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { clients },
  } = await apollo.query<GetAllClientsResponse>({
    query: GET_ALL_CLIENTS,
  });

  const {
    data: { opensourceProjects },
  } = await apollo.query<GetAllOSSProjectsResponse>({
    query: GET_ALL_OSS_PROJECTS,
  });

  return {
    props: {
      clients,
      projects: opensourceProjects,
    },
  };
};

export default function Home({ clients, projects }: PageProps) {
  return (
    <Box textColor="white" pb="12">
        <HomepageHero />
        <Center>
          <PageContainer>
            <Clients clients={clients} />
            <Spacer mt="24" mb="48" />
            <About />
            <Spacer mt="24" mb="24" />
          </PageContainer>
        </Center>
        <BookHomepageHero />
        <Spacer mt="24" mb="48" />
    </Box>
  );
}
