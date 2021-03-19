import { gql } from '@apollo/client';

const GET_ALL_WATCHES = gql`
  query GetAllWatches {
    watches(orderBy: rating_DESC) {
      id
      model
      owned
      price
      rating
      referenceNumber
      brand
      externalURL
      images {
        id
        url
      }
    }
  }
`;

export default GET_ALL_WATCHES;
