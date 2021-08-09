import { gql } from "@apollo/client";

export type Watch = {
  id: string;
  model: string;
  price: number;
  rating: number;
  owned: boolean;
  image: {
    url: string;
  };
  watchManufacturer: {
    id: string;
    name: string;
    url: string;
  };
};

export type GetAllWatchesResponse = {
  watches: Watch[];
};

export const GET_ALL_WATCHES = gql`
  query GetAllWatches {
    watches(orderBy: rating_DESC) {
      id
      model
      price
      rating
      owned
      movement
      image {
        url
      }
      watchManufacturer {
        id
        name
        url
      }
    }
  }
`;
