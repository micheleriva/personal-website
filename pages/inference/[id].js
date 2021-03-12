import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';
import { createApolloClient } from '../../lib/graphql';
import GET_ALL_PODCAST_EPISODES from '../../lib/graphql/queries/podcast/getAllPodcastEpisodes';
import GET_PODCAST_EPISODE from '../../lib/graphql/queries/podcast/getPodcastEpisode';

const apollo = createApolloClient();

export async function getStaticPaths() {
  const episodes = await apollo.query({ query: GET_ALL_PODCAST_EPISODES });

  return {
    paths: episodes.data.podcast.episodes.map((episode) => ({
      params: {
        id: episode.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const episode = await apollo.query({ query: GET_PODCAST_EPISODE, variables: { id: params.id } });

  return {
    props: {
      episode: episode.data.episode,
    },
  };
}

function EpisodePage({ episode }) {
  return (
    <div>
      <Head>
        <title key="title"> {episode.title} </title>
        <meta property="og:title" key="og:title" content={episode.title} />
        <meta property="og:image" key="og:image" content={episode.image.url} />
      </Head>

      <Box>
        <Heading mb={5}>{episode.title}</Heading>
        <Text> {episode.description} </Text>
        <Box mt={5}>
          <iframe
            width="80%"
            maxWidth="80vw"
            height="450"
            src={`https://www.youtube.com/embed/${episode.youTubeUrl}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </Box>
      </Box>
    </div>
  );
}

export default EpisodePage;
