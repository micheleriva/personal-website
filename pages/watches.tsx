import type { GetStaticProps } from "next";
import { Box, Center, Text } from "@chakra-ui/layout";
import client from "../graphql";
import {
  GET_ALL_WATCHES,
  GetAllWatchesResponse,
} from "../graphql/queries/getAllWatches";
import PageContainer from "../components/PageContainer";
import WatchSchede from "../components/WatchSchede";
import { Grid } from "@chakra-ui/react";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<GetAllWatchesResponse>({
    query: GET_ALL_WATCHES,
  });

  return {
    props: {
      watches: data,
    },
  };
};

export default function Watches({
  watches,
}: {
  watches: GetAllWatchesResponse;
}) {
  return (
    <Center textColor="whiteAlpha.800" pt="48" pb="24">
      <PageContainer>
        <Text as="h1" fontSize="4xl" fontWeight="bold">
          My (mostly imaginary) watch collection
        </Text>
        <Text mt="4">
          I've always been fascinated by watches. It's incredible how a
          mechanical movement, without any electronic component, can tell the
          time, day of the week or month, detect leap years, and lunar phases.
          It's an absolute miracle of engineering and beauty. Looking at the
          following watches, to me, it's like looking at a Michelangelo
          sculpture.
          <br />
          <b>
            I don't own the following watches, except for a couple of them
            (cheap ones).
          </b>
        </Text>

        <Grid gridTemplateColumns={"repeat(4, 1fr)"} mt="24" gap="12">
          {watches.watches.map((watch) => (
            <WatchSchede key={watch.id} watch={watch} />
          ))}
        </Grid>
      </PageContainer>
    </Center>
  );
}
