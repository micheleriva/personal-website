import type { GetStaticProps } from "next";
import { Center, VStack, Spacer } from "@chakra-ui/react";
import apollo from "../graphql";
import {
  GET_ALL_CLIENTS,
  GetAllClientsResponse,
} from "../graphql/queries/getAllClients";
import PageContainer from "../components/PageContainer";
import HomepageHero from "../components/HomepageHero";
import Clients from "../components/Clients";
import BookHomepageHero from "../components/BookHomepageHero";

type PageProps = GetAllClientsResponse;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apollo.query<GetAllClientsResponse>({
    query: GET_ALL_CLIENTS,
  });

  return {
    props: {
      clients: data.clients,
    },
  };
};

export default function Home(props: PageProps) {
  return (
    <>
      <Center>
        <PageContainer>
          <VStack>
            <HomepageHero />
            <Clients clients={props.clients} />
          </VStack>
        </PageContainer>
      </Center>
      <Spacer mt="16" />
      <BookHomepageHero />
    </>
  );
}
