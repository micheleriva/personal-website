import { gql } from '@apollo/client';

const GET_PODCAST_INFO = gql`
  query GetPodcast($name: String = "Inference") {
    podcast(where: { name: $name }) {
      id
      name
      description
      image {
        url
      }
      episodes(last: 3) {
        id
        title
        episodeNumber
        guests {
          fullName
        }
      }
    }
  }
`;

export default GET_PODCAST_INFO;
