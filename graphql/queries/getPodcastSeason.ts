import { gql } from "@apollo/client";

export type Episode = {
  id: string;
  title: string;
  episodeDescription: string;
  season: number;
  episodeNumber: number;
  tags: string;
  anchorfmLink: string;
  anchorfmEmbed: string;
  spotifyLink: string;
  youtubeUrl: string;
  guestName: string;
  guestImage: {
    url: string;
  };
};

export type PodcastSeason = {
  podcastEpisodes: Episode[];
};

export const GET_PODCAST_SEASON = gql`
  query GetPodcastSeason($season: Int = 1) {
    podcastEpisodes(where: { season: $season }) {
      id
      season
      episodeNumber
      title
      episodeDescription
      anchorfmLink
      anchorfmEmbed
      spotifyLink
      youtubeUrl
      guestName
      tags
      guestImage {
        url
      }
    }
  }
`;
