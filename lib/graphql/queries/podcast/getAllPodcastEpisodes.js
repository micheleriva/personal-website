import { gql } from '@apollo/client';

const GET_ALL_PODCAST_EPISODES = gql`
  query GetAllPodcastEpisodes($name: String = "Inference") {
    podcast(where: { name: $name }) {
      episodes {
        id
      }
    }
  }
`;

export default GET_ALL_PODCAST_EPISODES;
