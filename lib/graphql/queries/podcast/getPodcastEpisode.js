import { gql } from '@apollo/client';

const GET_PODCAST_EPISODE = gql`
  query GetPodcastEpisode($id: ID!) {
    episode(where: { id: $id }) {
      description
      audioDuration
      image {
        url
      }
      guests {
        fullName
        photo {
          url
        }
      }
      title
      youTubeUrl
    }
  }
`;

export default GET_PODCAST_EPISODE;
