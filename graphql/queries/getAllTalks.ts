import { gql } from "@apollo/client";

export type Talk = {
  id: string;
  title: string;
  date: string;
  venue: string;
  url: string;
  tags: string;
};

export type Talks = {
  talks: Talk[];
};

export const GET_ALL_TALKS = gql`
  query GetAllTalks {
    talks(orderBy: date_DESC) {
      id
      date
      venue
      url
      title
      tags
    }
  }
`;
