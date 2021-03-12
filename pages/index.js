import { Heading, Divider, Grid, GridItem, Flex, Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { createApolloClient } from '../lib/graphql';
import GET_PODCAST_INFO from '../lib/graphql/queries/podcast/getPodcastInfo';
import Bio from '../components/Bio';
import Featured from '../components/Featured';
import NowPlaying from '../components/NowPlaying';
import Podcast from '../components/Podcast';

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_PODCAST_INFO });

  return {
    props: {
      podcast: data?.podcast,
    },
    revalidate: 3600,
  };
}

function Home({ podcast }) {
  return (
    <>
      <Grid templateColumns={['1fr', '1fr 1fr']}>
        <GridItem>
          <Heading size="xl" mb="1rem">
            <span role="img">👋</span> Hey there! I'm Michele.
          </Heading>
          <Bio />
        </GridItem>
        <GridItem mt={[8, 0]}>
          <Flex justifyContent="center" alignItems="center" flexDir="column">
            <Image src="/book/B16985_Next.png" layout="fixed" width={280} height={339} />
            <Box mt={5} maxWidth={280}>
              <Box>
                <a href="https://rwnjs.com/order/packt" target="_blank" rel="noreferrer">
                  <Button colorScheme="orange" width="100%">
                    Preorder my book!
                  </Button>
                </a>
              </Box>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt="2rem" mb="2rem" />
      <Podcast data={podcast} />
      <Divider mt="2rem" mb="2rem" />
      <Featured />
      <Divider mt="2rem" mb="2rem" />
      <Heading size="xl" mb="1rem">
        I'm currently listening
      </Heading>
      <NowPlaying />
    </>
  );
}

export default Home;
